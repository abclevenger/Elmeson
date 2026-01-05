import React from 'react';
import parse, { DOMNode, Element } from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { convertWordPressUrlToRoute, isBlogPostUrl } from './blog-utils';

/**
 * Helper function to parse CSS style string to React style object
 */
function parseStyleString(styleStr: string): React.CSSProperties {
  const style: React.CSSProperties = {};
  if (!styleStr) return style;

  // Split by semicolon and parse each property
  styleStr.split(';').forEach(prop => {
    const [key, value] = prop.split(':').map(s => s.trim());
    if (key && value) {
      // Convert kebab-case to camelCase
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      (style as any)[camelKey] = value;
    }
  });

  return style;
}

/**
 * Helper function to parse DOMNode children to React elements
 * Creates React elements directly instead of converting to HTML strings
 */
function parseChildren(children: DOMNode[] | undefined): React.ReactNode {
  if (!children || children.length === 0) return null;

  const result: React.ReactNode[] = [];

  children.forEach((child, index) => {
    const node = child as any;
    if (typeof child === 'string') {
      result.push(child);
    } else if (node.type === 'text') {
      result.push(node.data);
    } else if (node.type === 'comment') {
      // Ignore comments
    } else if (child instanceof Element) {
      const tag = child.name;
      const attrs = child.attribs || {};
      const childNodes = child.children || [];

      // Recursively parse children
      const parsedChildren = parseChildren(Array.from(childNodes) as DOMNode[]);

      // Create props object, filtering out dangerous attributes
      const props: any = { key: index };
      for (const [key, value] of Object.entries(attrs)) {
        // Convert className from class
        if (key === 'class') {
          props.className = value;
        } else if (key === 'style') {
          // Parse style string to object
          props.style = parseStyleString(String(value));
        } else {
          props[key] = value;
        }
      }

      // Create React element directly
      const childrenArray = parsedChildren !== null
        ? (Array.isArray(parsedChildren) ? parsedChildren : [parsedChildren])
        : [];

      result.push(React.createElement(tag, props, ...childrenArray));
    } else {
      result.push(String(child));
    }
  });

  return result.length === 1 ? result[0] : result.length > 0 ? result : null;
}

/**
 * Convert WordPress image URL to local Next.js path
 */
function convertImagePath(src: string): string {
  if (!src) return src;

  // Handle full WordPress URLs
  if (src.includes('wp-content/uploads')) {
    return src.replace(/https?:\/\/www\.elmesondepepe\.com\/wp-content\/uploads\//, '/images/');
  }

  // Already a local path
  if (src.startsWith('/images/')) {
    return src;
  }

  // External URLs - return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  return src;
}

/**
 * Convert WordPress content to React components
 */
export function convertWordPressContent(content: string, defaultAlt: string = ''): React.ReactElement {
  if (!content) {
    return <></>;
  }

  // Pre-process content: remove WordPress block comments and convert shortcodes
  let processedContent = content
    // Remove WordPress block comments
    .replace(/<!-- wp:[^>]+ -->/g, '')
    .replace(/<!-- \/wp:[^>]+ -->/g, '')
    // Unescape JSON quotes
    .replace(/\\"/g, '"')
    // Convert shortcodes to HTML
    .replace(/\[row[^\]]*\]/g, '<div class="wp-row">')
    .replace(/\[\/row\]/g, '</div>')
    .replace(/\[col[^\]]*\]/g, '<div class="wp-col">')
    .replace(/\[\/col\]/g, '</div>')
    .replace(/\[button[^\]]*link="([^"]+)"[^\]]*\]/g, '<a href="$1" class="wp-button">')
    .replace(/\[\/button\]/g, '</a>')
    .replace(/\[heading[^\]]*subtitle="([^"]+)"[^\]]*title="([^"]+)"[^\]]*\]/g, '<h2><span class="subtitle">$1</span>$2</h2>')
    .replace(/\[hr[^\]]*\]/g, '<hr />')
    // Remove form shortcodes
    .replace(/\[gravityforms[^\]]*\]/g, '<p class="wp-form-placeholder">[Form removed]</p>')
    .replace(/\[instagram-feed[^\]]*\]/g, '<p class="wp-instagram-placeholder">[Instagram feed removed]</p>')
    // Convert restaurant menu shortcodes
    .replace(/\[restaurantmenu[^\]]*type="([^"]+)"[^\]]*\]/g, '<div class="menu menu-$1">')
    .replace(/\[restaurantmenu[^\]]*\]/g, '<div class="menu">')
    .replace(/\[\/restaurantmenu\]/g, '</div>')
    // Remove any remaining shortcodes
    .replace(/\[[^\]]+\]/g, '');

  // Convert image URLs to local paths
  processedContent = processedContent.replace(
    /https?:\/\/www\.elmesondepepe\.com\/wp-content\/uploads\/([^"'\s\)]+)/g,
    '/images/$1'
  );

  // Parse HTML and convert to React components
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        // Handle images - convert to Next.js Image component
        if (domNode.name === 'img') {
          // Sanitize src to remove any extra quotes
          let src = domNode.attribs.src || '';
          src = src.replace(/^["']|["']$/g, '');

          const alt = domNode.attribs.alt || defaultAlt;
          const width = domNode.attribs.width ? parseInt(domNode.attribs.width) : 800;
          const height = domNode.attribs.height ? parseInt(domNode.attribs.height) : 600;
          const className = domNode.attribs.class || '';

          const convertedSrc = convertImagePath(src);

          // If it's an external URL, use regular img tag
          if (convertedSrc.startsWith('http://') || convertedSrc.startsWith('https://')) {
            return (
              <img
                src={convertedSrc}
                alt={alt}
                width={width}
                height={height}
                className={className}
                loading="lazy"
              />
            );
          }

          // Use Next.js Image for local images
          // Use a reasonable aspect ratio if dimensions are invalid
          const aspectRatio = width > 0 && height > 0 ? width / height : 16 / 9;

          return (
            <div className="my-6 relative w-full rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: aspectRatio }}>
              <Image
                src={convertedSrc}
                alt={alt}
                fill
                className={`object-cover ${className}`}
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
                quality={85}
              />
            </div>
          );
        }

        // Handle links - convert internal blog links to Next.js routes
        if (domNode.name === 'a' && domNode.attribs.href) {
          const href = domNode.attribs.href;
          const target = domNode.attribs.target;
          const rel = domNode.attribs.rel;
          const className = domNode.attribs.class || '';

          // Check if it's an external link
          const isExternal = href.startsWith('http://') || href.startsWith('https://');
          const isBlogPost = isExternal ? isBlogPostUrl(href) : isBlogPostUrl(href);

          const children = parseChildren(domNode.children as DOMNode[]);

          if (isExternal && !isBlogPost) {
            // External link - use regular anchor tag
            return (
              <a
                href={href}
                target={target || '_blank'}
                rel={rel || 'noopener noreferrer'}
                className={className}
              >
                {children || href}
              </a>
            );
          } else {
            // Internal link - convert to Next.js route
            const nextRoute = convertWordPressUrlToRoute(href);
            return (
              <Link href={nextRoute} className={className}>
                {children || href}
              </Link>
            );
          }
        }

        // Handle headings - add proper styling
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(domNode.name)) {
          const className = domNode.attribs.class || '';
          const HeadingTag = domNode.name as keyof React.JSX.IntrinsicElements;
          return (
            <HeadingTag className={`${className} font-bold text-primary mt-8 mb-4`}>
              {parseChildren(domNode.children as DOMNode[])}
            </HeadingTag>
          );
        }

        // Handle paragraphs - add proper spacing
        if (domNode.name === 'p') {
          const className = domNode.attribs.class || '';
          return (
            <p className={`${className} mb-4 leading-relaxed`}>
              {parseChildren(domNode.children as DOMNode[])}
            </p>
          );
        }

        // Handle lists
        if (domNode.name === 'ul' || domNode.name === 'ol') {
          const className = domNode.attribs.class || '';
          const ListTag = domNode.name as keyof React.JSX.IntrinsicElements;
          return (
            <ListTag className={`${className} mb-4 ml-6 space-y-2`}>
              {parseChildren(domNode.children as DOMNode[])}
            </ListTag>
          );
        }

        if (domNode.name === 'li') {
          const className = domNode.attribs.class || '';
          return (
            <li className={`${className} leading-relaxed`}>
              {parseChildren(domNode.children as DOMNode[])}
            </li>
          );
        }

        // Handle strong/bold
        if (domNode.name === 'strong' || domNode.name === 'b') {
          const className = domNode.attribs.class || '';
          return (
            <strong className={`${className} font-semibold`}>
              {parseChildren(domNode.children as DOMNode[])}
            </strong>
          );
        }

        // Handle emphasis/italic
        if (domNode.name === 'em' || domNode.name === 'i') {
          const className = domNode.attribs.class || '';
          return (
            <em className={`${className} italic`}>
              {parseChildren(domNode.children as DOMNode[])}
            </em>
          );
        }
      }
    },
  };

  try {
    const parsed = parse(processedContent, options);
    return <div className="prose-content">{parsed}</div>;
  } catch (error) {
    console.error('Error parsing WordPress content:', error);
    return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
  }
}
