"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    post_status: 'publish' | 'draft';
    author: string;
}

export default function AdminBlogPageClient({ posts }: { posts: Post[] }) {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDelete = async (postId: string, postTitle: string) => {
        if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) {
            return;
        }

        setDeletingId(postId);
        try {
            const response = await fetch(`/api/blog?id=${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to delete post');
            }

            toast.success('Post deleted successfully');
            router.refresh();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to delete post');
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
                    <p className="text-sm text-gray-600">Manage internal and Search Atlas posts</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                >
                    <Plus size={18} />
                    New Post
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
                <ul className="divide-y divide-gray-200">
                    {posts.length === 0 ? (
                        <li className="px-6 py-12 text-center">
                            <p className="text-gray-500 italic">No blog posts found. Create your first post or wait for Search Atlas to push content.</p>
                        </li>
                    ) : (
                        posts.map((post) => (
                            <li key={post.id} className="hover:bg-gray-50 transition-colors">
                                <div className="px-6 py-4 flex items-center justify-between">
                                    <div className="flex-1 min-w-0 pr-4">
                                        <p className="text-sm font-medium text-primary truncate">
                                            {post.title}
                                        </p>
                                        <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${post.post_status === 'publish' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {post.post_status}
                                            </span>
                                            <span className="truncate italic">By {post.author}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {post.post_status === 'publish' && (
                                            <Link
                                                href={`/story/blog/${post.slug}`}
                                                target="_blank"
                                                className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                                                title="View Live"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                        {post.post_status === 'draft' && (
                                            <Link
                                                href={`/story/blog/${post.slug}?preview=true`}
                                                target="_blank"
                                                className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                                                title="Preview Draft"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                        <Link
                                            href={`/admin/blog/edit/${post.id}`}
                                            className="p-2 text-gray-400 hover:text-primary transition-colors"
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id, post.title)}
                                            disabled={deletingId === post.id}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} className={deletingId === post.id ? 'animate-pulse' : ''} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
