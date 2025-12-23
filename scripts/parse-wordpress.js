const fs = require('fs');
const path = require('path');

// Read SQL files - use the separate wp_posts.sql file which is easier to parse
const postsFile = path.join(__dirname, '../wp_files/wp_posts.sql');
const metaFile = path.join(__dirname, '../wp_files/wp_postmeta.sql');
const postsContent = fs.readFileSync(postsFile, 'utf8');
const metaContent = fs.readFileSync(metaFile, 'utf8');

// Helper to unescape SQL strings
function unescapeSQL(str) {
  if (!str) return '';
  return str
    .replace(/''/g, "'")
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, '\\');
}

// Parse SQL INSERT statements - handle multi-line values
function parseSQLInsert(content, tableName) {
  const results = [];
  const insertRegex = new RegExp(
    `INSERT INTO \\\`${tableName}\\\` \\([^\\)]+\\) VALUES\\s*([\\s\\S]*?)(?=INSERT INTO|$)`,
    'gi'
  );
  
  let match;
  while ((match = insertRegex.exec(content)) !== null) {
    const valuesBlock = match[1].trim();
    
    // Split by ),( but be careful with nested parentheses in content
    // Use a more sophisticated approach - find complete rows
    const rows = [];
    let currentRow = '';
    let parenDepth = 0;
    let inString = false;
    let stringChar = null;
    
    for (let i = 0; i < valuesBlock.length; i++) {
      const char = valuesBlock[i];
      const nextChar = valuesBlock[i + 1];
      
      if (!inString && char === '(') {
        parenDepth++;
        if (parenDepth === 1) {
          currentRow = '';
          continue;
        }
      } else if (!inString && char === ')') {
        parenDepth--;
        if (parenDepth === 0) {
          rows.push(currentRow);
          currentRow = '';
          // Skip comma and whitespace after closing paren
          while (i + 1 < valuesBlock.length && (valuesBlock[i + 1] === ',' || valuesBlock[i + 1].match(/\s/))) {
            i++;
          }
          continue;
        }
      } else if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar) {
        // Check if escaped
        if (valuesBlock[i - 1] !== '\\') {
          inString = false;
          stringChar = null;
        }
      }
      
      if (parenDepth > 0) {
        currentRow += char;
      }
    }
    
    // Parse each row
    for (const row of rows) {
      // Split by comma, but respect quoted strings
      const fields = [];
      let currentField = '';
      let inQuotes = false;
      let quoteChar = null;
      
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        const prevChar = i > 0 ? row[i - 1] : null;
        
        if (!inQuotes && (char === '"' || char === "'")) {
          inQuotes = true;
          quoteChar = char;
          continue;
        } else if (inQuotes && char === quoteChar) {
          if (prevChar !== '\\') {
            inQuotes = false;
            quoteChar = null;
          }
        } else if (!inQuotes && char === ',' && (i === 0 || row[i - 1] !== '\\')) {
          fields.push(currentField.trim());
          currentField = '';
          continue;
        }
        
        currentField += char;
      }
      if (currentField.trim()) {
        fields.push(currentField.trim());
      }
      
      // Remove quotes from fields
      const cleanFields = fields.map(f => {
        f = f.trim();
        if ((f.startsWith("'") && f.endsWith("'")) || (f.startsWith('"') && f.endsWith('"'))) {
          f = f.slice(1, -1);
        }
        return unescapeSQL(f);
      });
      
      if (cleanFields.length >= 23) {
        const [
          id, author, postDate, postDateGmt, content, title, excerpt,
          postStatus, commentStatus, pingStatus, password, slug,
          toPing, pinged, modified, modifiedGmt, contentFiltered,
          parent, guid, menuOrder, postType, mimeType, commentCount
        ] = cleanFields;
        
        if (postType === 'post' && postStatus === 'publish') {
          results.push({
            id: parseInt(id),
            author: parseInt(author),
            date: postDate,
            title: title,
            slug: slug,
            excerpt: excerpt,
            content: content,
            modified: modified,
          });
        } else if (postType === 'page' && postStatus === 'publish') {
          results.push({
            id: parseInt(id),
            author: parseInt(author),
            date: postDate,
            title: title,
            slug: slug,
            excerpt: excerpt,
            content: content,
            modified: modified,
            parent: parseInt(parent),
          });
        }
      }
    }
  }
  
  return results;
}

// Extract posts and pages
const allPosts = parseSQLInsert(postsContent, 'wp_posts');
const blogPosts = allPosts.filter(p => !p.parent && p.slug && p.slug !== 'key-west-blog');
const pages = allPosts.filter(p => p.parent !== undefined);

// Extract featured images from postmeta
const featuredImages = {};
const thumbnailRegex = /\((\d+),\s*(\d+),\s*'_thumbnail_id',\s*'(\d+)'\)/g;
let match;
while ((match = thumbnailRegex.exec(metaContent)) !== null) {
  const [, metaId, postId, thumbnailId] = match;
  featuredImages[parseInt(postId)] = parseInt(thumbnailId);
}

// Get attachment info from posts
const attachments = {};
const attachmentRows = parseSQLInsert(postsContent, 'wp_posts');
attachmentRows.forEach(att => {
  if (att.parent) {
    const guidMatch = att.content.match(/wp-content\/uploads\/(.+)/);
    if (guidMatch) {
      attachments[att.id] = {
        slug: att.slug,
        path: guidMatch[1],
        title: att.title,
      };
    }
  }
});

// Match featured images
blogPosts.forEach(post => {
  if (featuredImages[post.id] && attachments[featuredImages[post.id]]) {
    post.featuredImage = attachments[featuredImages[post.id]].path;
  }
});

pages.forEach(page => {
  if (featuredImages[page.id] && attachments[featuredImages[page.id]]) {
    page.featuredImage = attachments[featuredImages[page.id]].path;
  }
});

// Sort blog posts by date (newest first)
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Save extracted data
const outputDir = path.join(__dirname, '../data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'blog-posts.json'),
  JSON.stringify(blogPosts, null, 2)
);

fs.writeFileSync(
  path.join(outputDir, 'pages.json'),
  JSON.stringify(pages, null, 2)
);

console.log(`✅ Extracted ${blogPosts.length} blog posts`);
console.log(`✅ Extracted ${pages.length} pages`);
console.log(`✅ Data saved to ${outputDir}/`);
