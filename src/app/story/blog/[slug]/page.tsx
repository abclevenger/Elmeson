import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { BreadcrumbSchema, ArticleSchema } from "@/lib/schema";
import { convertWordPressContent } from "@/lib/wordpress-content";
import { getFeaturedImage, calculateReadingTime } from "@/lib/blog-utils";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { supabase } from "@/lib/supabase";
import blogPostsData from "@/data/blog-posts.json";
import { requireAuthor } from "@/lib/auth-helpers";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    preview?: string;
  }>;
}

async function getBlogPost(slug: string, opts?: { preview?: boolean }) {
  try {
    const query = supabase
      .from("posts")
      .select("*")
      .eq("slug", slug);

    const { data: dbPost, error } = opts?.preview
      ? await query.single()
      : await query.eq("post_status", "publish").single();

    if (!error && dbPost) {
      return dbPost;
    }
  } catch (error) {
    console.error("DB fetch failed for post:", error);
  }

  // Fallback to JSON
  if (opts?.preview) return null;
  return blogPostsData.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  // We combine both for static generation if possible, but for dynamic we primarily care about slugs
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params, searchParams }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = (await searchParams) ?? {};
  const isPreview = preview === "true";

  // Preview should only be visible to authorized users, but metadata is still generated server-side.
  // We still mark preview pages as noindex.
  const post: any = await getBlogPost(slug, { preview: isPreview });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const excerpt = post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...";
  const featuredImage = post.featured_image || getFeaturedImage(post);
  const image = featuredImage
    ? `https://www.elmesondepepe.com${featuredImage}`
    : "https://www.elmesondepepe.com/images/hero.jpg";

  return {
    title: `${post.title} | Pepe's Key West Blog`,
    description: excerpt,
    robots: isPreview
      ? { index: false, follow: false, nocache: true }
      : undefined,
    openGraph: {
      title: post.title,
      description: excerpt,
      url: `https://www.elmesondepepe.com/story/blog/${post.slug}`,
      images: [image],
    },
    alternates: {
      canonical: `/story/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const { preview } = (await searchParams) ?? {};
  const isPreview = preview === "true";

  if (isPreview) {
    // Only allow preview for authenticated admin/author users
    await requireAuthor();
  }

  const post: any = await getBlogPost(slug, { preview: isPreview });

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const content = convertWordPressContent(post.content, post.title);
  const excerpt = post.excerpt || post.content.substring(0, 200).replace(/<[^>]*>/g, "") + "...";
  const featuredImage = post.featured_image || getFeaturedImage(post);
  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/story" },
          { name: "Pepe's Key West Blog", url: "/story/blog" },
          { name: post.title, url: `/story/blog/${post.slug}` },
        ]}
      />
      <ArticleSchema
        headline={post.title}
        description={excerpt}
        image={featuredImage || undefined}
        datePublished={post.date}
        dateModified={post.modified}
      />
      <div className="bg-white min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {isPreview && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
              <div className="text-sm font-semibold">Preview Mode</div>
              <div className="text-xs text-amber-800">
                This draft is visible only to logged-in admins/authors and is marked <span className="font-mono">noindex</span>.
              </div>
            </div>
          )}
          {/* Back Button */}
          <Link
            href="/story/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary mb-8 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Back to Blog</span>
          </Link>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} aria-hidden="true" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Clock size={16} aria-hidden="true" />
                <span>{readingTime} min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
              {post.title}
            </h1>
            <div className="h-1 w-24 bg-secondary" />
          </header>

          {/* Content */}
          <article className="prose prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-img:rounded-lg prose-img:shadow-lg">
            {content}
          </article>

          {/* Related Posts */}
          <RelatedPosts currentPostSlug={post.slug} />

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/story/blog"
              className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Back to All Posts</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
