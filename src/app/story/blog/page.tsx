import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import { getFeaturedImage, calculateReadingTime } from "@/lib/blog-utils";
import BlogListingClient from "@/components/blog/BlogListingClient";
import blogPostsData from "@/data/blog-posts.json";

export const metadata: Metadata = {
  title: "Pepe's Key West Blog - Stories & Guides",
  description: "Read stories, guides, and insights from El Meson de Pepe. Discover the best Cuban experiences, Key West dining, and local culture.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Pepe's Key West Blog - Stories & Guides | El Meson de Pepe",
    description: "Read stories, guides, and insights from El Meson de Pepe. Discover the best Cuban experiences in Key West.",
    url: "https://www.elmesondepepe.com/story/blog",
  },
  alternates: {
    canonical: "/story/blog",
  },
};

// Helper function to extract excerpt from content
function getExcerpt(content: string, maxLength: number = 160): string {
  if (!content) return "";
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, "").replace(/\[[^\]]*\]/g, "");
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format all blog posts for display
const BLOG_POSTS = blogPostsData
  .filter(post => post.slug && post.postStatus === 'publish') // Only include published posts with slugs
  .map(post => {
    const featuredImage = getFeaturedImage(post);
    const readingTime = calculateReadingTime(post.content);

    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || getExcerpt(post.content),
      date: formatDate(post.date),
      slug: `/story/blog/${post.slug}`,
      image: featuredImage || "/images/hero.jpg",
      rawDate: post.date,
      readingTime,
      rawSlug: post.slug,
    };
  })
  .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Our Story", url: "/story" },
        { name: "Pepe's Key West Blog", url: "/story/blog" },
      ]} />
      <div className="bg-white min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">
              Pepe's Key West Blog
            </h1>
            <p className="text-gray-600 text-lg">Stories, guides, and insights from the heart of Key West</p>
            <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
          </div>

          {/* Search */}
          <BlogListingClient posts={BLOG_POSTS} />
        </div>
      </div>
    </>
  );
}
