const fs = require('fs');
const path = require('path');

// Read SQL files
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

// Simple parser: Find rows that match our pattern
// Format: (id, author, date, dateGmt, content, title, excerpt, status, ...)
function parseRows(content) {
  const rows = [];
  const lines = content.split('\n');
  
  let currentRow = '';
  let inRow = false;
  let parenDepth = 0;
  
  for (const line of lines) {
    // Skip INSERT statements and empty lines
    if (line.trim().startsWith('INSERT INTO') || line.trim() === '' || line.trim().startsWith('--')) {
      continue;
    }
    
    // Check if line starts a new row
    if (line.trim().startsWith('(')) {
      if (currentRow) {
        // Process previous row
        processRow(currentRow, rows);
      }
      currentRow = line.trim();
      parenDepth = (currentRow.match(/\(/g) || []).length - (currentRow.match(/\)/g) || []).length;
    } else if (currentRow) {
      // Continue current row
      currentRow += ' ' + line.trim();
      parenDepth += (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
      
      // If row is complete (parenDepth = 0 and ends with ),)
      if (parenDepth === 0 && currentRow.trim().endsWith('),')) {
        processRow(currentRow.replace(/\),$/, ')'), rows);
        currentRow = '';
      }
    }
  }
  
  // Process last row if exists
  if (currentRow) {
    processRow(currentRow.replace(/\),?$/, ''), rows);
  }
  
  return rows;
}

function processRow(rowStr, rows) {
  // Remove leading ( and trailing )
  rowStr = rowStr.trim();
  if (rowStr.startsWith('(')) rowStr = rowStr.slice(1);
  if (rowStr.endsWith(')')) rowStr = rowStr.slice(0, -1);
  if (rowStr.endsWith(',')) rowStr = rowStr.slice(0, -1);
  
  // Split by comma, but respect quoted strings
  const fields = [];
  let currentField = '';
  let inQuotes = false;
  let quoteChar = null;
  let i = 0;
  
  while (i < rowStr.length) {
    const char = rowStr[i];
    const nextChar = rowStr[i + 1];
    
    if (!inQuotes && (char === '"' || char === "'")) {
      inQuotes = true;
      quoteChar = char;
      i++;
      continue;
    }
    
    if (inQuotes && char === quoteChar) {
      // Check if escaped
      if (rowStr[i - 1] === '\\') {
        currentField += char;
      } else if (nextChar === quoteChar) {
        // Double quote (escaped)
        currentField += quoteChar;
        i += 2;
        continue;
      } else {
        // End of quoted string
        inQuotes = false;
        quoteChar = null;
        i++;
        continue;
      }
    }
    
    if (!inQuotes && char === ',' && (i === 0 || rowStr[i - 1] !== '\\')) {
      fields.push(currentField.trim());
      currentField = '';
      i++;
      continue;
    }
    
    currentField += char;
    i++;
  }
  
  if (currentField.trim()) {
    fields.push(currentField.trim());
  }
  
  // Clean fields (remove quotes)
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
    
    const post = {
      id: parseInt(id),
      author: parseInt(author),
      date: postDate,
      title: title,
      slug: slug,
      excerpt: excerpt,
      content: content,
      modified: modified,
      postType: postType,
      postStatus: postStatus,
      parent: parseInt(parent) || 0,
    };
    
    rows.push(post);
  }
}

// Parse posts
const allRows = parseRows(postsContent);
const blogPosts = allRows.filter(p => p.postType === 'post' && p.postStatus === 'publish' && p.slug);
const pages = allRows.filter(p => p.postType === 'page' && p.postStatus === 'publish' && p.slug);

// Extract featured images
const featuredImages = {};
const thumbnailRegex = /\((\d+),\s*(\d+),\s*'_thumbnail_id',\s*'(\d+)'\)/g;
let match;
while ((match = thumbnailRegex.exec(metaContent)) !== null) {
  const [, metaId, postId, thumbnailId] = match;
  featuredImages[parseInt(postId)] = parseInt(thumbnailId);
}

// Get attachment info
const attachments = {};
allRows.forEach(row => {
  if (row.postType === 'attachment' && row.parent) {
    // Extract path from guid or content
    const guidMatch = row.content.match(/wp-content\/uploads\/(.+)/);
    if (guidMatch) {
      attachments[row.id] = {
        slug: row.slug,
        path: guidMatch[1],
        title: row.title,
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
console.log(`✅ Sample blog post slugs:`, blogPosts.slice(0, 5).map(p => p.slug));
console.log(`✅ Data saved to ${outputDir}/`);

