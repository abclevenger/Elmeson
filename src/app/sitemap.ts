import { MetadataRoute } from 'next';
import blogPostsData from '@/data/blog-posts.json';
import { supabase } from '@/lib/supabase';

// Keep sitemap fresh for SEO without requiring a redeploy.
export const revalidate = 3600; // 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.elmesondepepe.com';

  // Get current date for lastModified
  const currentDate = new Date();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/patio`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/story/history`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/story/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/parties`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sunset`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // Pull published posts from Supabase (source of truth in production).
  // Keep JSON as a safety net (and for local dev) while avoiding duplicates.
  let dbPosts: Array<{ slug: string; date: string; modified: string }> = [];
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('slug,date,modified,post_status')
      .eq('post_status', 'publish')
      .order('date', { ascending: false });

    if (!error && data) {
      dbPosts = (data as any[]).map((p) => ({
        slug: p.slug,
        date: p.date,
        modified: p.modified ?? p.date,
      }));
    }
  } catch {
    // ignore - we'll fall back to JSON below
  }

  const jsonPosts = blogPostsData
    .filter((p) => p.slug && p.postStatus === 'publish')
    .map((post) => ({
      slug: post.slug,
      date: String(post.date),
      modified: String(post.modified || post.date),
    }));

  const bySlug = new Map<string, { slug: string; date: string; modified: string }>();
  for (const p of jsonPosts) bySlug.set(p.slug, p);
  for (const p of dbPosts) bySlug.set(p.slug, p); // DB wins

  const blogUrls = Array.from(bySlug.values()).map((post) => ({
    url: `${baseUrl}/story/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogUrls];
}

