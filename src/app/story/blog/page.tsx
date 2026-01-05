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
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
              Pepe&apos;s Key West Blog
            </h1>
            <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
              Stories, guides, and insights from the heart of Key West
            </p>
          </div>
        </section>

        <div className="pb-20 px-4 pt-16">
          <div className="max-w-5xl mx-auto">

            {/* Search */}
            <BlogListingClient posts={BLOG_POSTS} />
          </div>
        </div>
      </div>
    </>
  );
}
