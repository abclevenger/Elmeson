import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { BreadcrumbSchema, ArticleSchema } from "@/lib/schema";
import { convertWordPressContent } from "@/lib/wordpress-content";
import blogPostsData from "@/data/blog-posts.json";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const excerpt = post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...";
  const image = post.featuredImage 
    ? `https://www.elmesondepepe.com/images/${post.featuredImage}`
    : "https://www.elmesondepepe.com/images/el-meson-de-pepe-key-west-logo.webp";

  return {
    title: `${post.title} | Pepe's Key West Blog`,
    description: excerpt,
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const content = convertWordPressContent(post.content);
  const excerpt = post.excerpt || post.content.substring(0, 200).replace(/<[^>]*>/g, "") + "...";

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
        image={post.featuredImage ? `/images/${post.featuredImage}` : undefined}
        datePublished={post.date}
        dateModified={post.modified}
      />
      <div className="bg-white min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/story/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary mb-8 transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Back to Blog</span>
          </Link>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={`/images/${post.featuredImage}`}
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
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <Calendar size={16} aria-hidden="true" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
              {post.title}
            </h1>
            <div className="h-1 w-24 bg-secondary" />
          </header>

          {/* Content */}
          <article
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />

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

