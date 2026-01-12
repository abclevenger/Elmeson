export interface ParsedBlogPost {
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featuredImage: string | null;
}

export function parseSearchAtlasHTML(htmlContent: string): ParsedBlogPost {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // Extract title from first <h1>
    const titleElement = doc.querySelector('h1');
    if (!titleElement?.textContent) {
        throw new Error('No title found in HTML file. Make sure it contains an <h1> tag.');
    }
    const title = titleElement.textContent.trim();

    // Extract featured image from first <figure><img>
    const featuredImageElement = doc.querySelector('figure img');
    const featuredImage = featuredImageElement?.getAttribute('src') || null;

    // Extract excerpt from first few paragraphs
    const paragraphs = Array.from(doc.querySelectorAll('p'));
    const excerptText = paragraphs
        .slice(0, 3)
        .map(p => p.textContent?.trim())
        .filter(Boolean)
        .join(' ');
    const excerpt = excerptText.length > 0 
        ? excerptText.substring(0, 200) + (excerptText.length > 200 ? '...' : '')
        : null;

    // Get full HTML content
    const content = doc.body.innerHTML;

    // Generate slug from title
    const slug = generateSlug(title);

    return {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
    };
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '')      // Remove leading/trailing hyphens
        .substring(0, 100);            // Limit length
}

export function validateHTMLFile(file: File): void {
    // Check file type
    if (!file.name.endsWith('.html') && !file.type.includes('text/html')) {
        throw new Error('Please upload an HTML file (.html)');
    }

    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB');
    }
}
