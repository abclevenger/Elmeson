"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock, Search } from "lucide-react";

interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  rawDate: string;
  readingTime: number;
  rawSlug: string;
}

interface BlogListingClientProps {
  posts: BlogPost[];
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  return (
    <>
      {/* Search */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          aria-label="Search blog posts"
        />
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-6 text-sm text-gray-600">
          Found {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
          {searchQuery && ` for "${searchQuery}"`}
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="md:w-2/5 relative h-64 md:h-80 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} aria-hidden="true" />
                    <time dateTime={post.rawDate}>{post.date}</time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} aria-hidden="true" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={post.slug}
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors group"
                  aria-label={`Read more about ${post.title}`}
                >
                  <span>Read More</span>
                  <ArrowRight 
                    size={18} 
                    aria-hidden="true" 
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg mb-4">No posts found matching your search.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Clear search
          </button>
        </div>
      )}
    </>
  );
}

