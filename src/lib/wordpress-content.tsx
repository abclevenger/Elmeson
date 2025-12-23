// Utility functions to convert WordPress content to React components

export function convertWordPressContent(content: string): string {
  if (!content) return "";
  
  // Remove WordPress blocks and shortcodes, convert to HTML
  let html = content
    // Remove WordPress block comments
    .replace(/<!-- wp:[^>]+ -->/g, "")
    .replace(/<!-- \/wp:[^>]+ -->/g, "")
    // Convert shortcodes to divs
    .replace(/\[row[^\]]*\]/g, "<div class='row'>")
    .replace(/\[\/row\]/g, "</div>")
    .replace(/\[col[^\]]*\]/g, "<div class='col'>")
    .replace(/\[\/col\]/g, "</div>")
    .replace(/\[button[^\]]*link="([^"]+)"[^\]]*\]/g, "<a href='$1' class='button'>")
    .replace(/\[\/button\]/g, "</a>")
    .replace(/\[heading[^\]]*subtitle="([^"]+)"[^\]]*title="([^"]+)"[^\]]*\]/g, "<h2><span class='subtitle'>$1</span>$2</h2>")
    .replace(/\[hr[^\]]*\]/g, "<hr />")
    // Remove form shortcodes
    .replace(/\[gravityforms[^\]]*\]/g, "")
    .replace(/\[instagram-feed\]/g, "")
    // Convert restaurant menu shortcodes
    .replace(/\[restaurantmenu[^\]]*type="([^"]+)"[^\]]*\]/g, "<div class='menu menu-$1'>")
    .replace(/\[restaurantmenu[^\]]*\]/g, "<div class='menu'>")
    .replace(/\[\/restaurantmenu\]/g, "</div>")
    // Convert menu items
    .replace(/##([^#\n]+)\n\*\*([^\n]+)/g, "<h3>$1</h3><p>$2</p>")
    .replace(/\+\+Featured\n##([^#\n]+)\n\*\*([^\n]+)/g, "<h3 class='featured'>$1</h3><p>$2</p>");
  
  // Update image URLs to use local paths
  html = html.replace(
    /https?:\/\/www\.elmesondepepe\.com\/wp-content\/uploads\/([^"'\s\)]+)/g,
    "/images/$1"
  );
  
  // Update internal links
  html = html.replace(
    /https?:\/\/www\.elmesondepepe\.com\/([^"'\s\)]+)/g,
    "/$1"
  );
  
  // Convert line breaks
  html = html.replace(/\n\n/g, "</p><p>");
  html = html.replace(/\n/g, "<br />");
  
  return html;
}

