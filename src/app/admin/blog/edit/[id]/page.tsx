import { createClient } from "@/lib/supabase-server";
import { requireAuthor } from "@/lib/auth-helpers";
import BlogEditor from "@/components/admin/BlogEditor";
import { notFound } from "next/navigation";
import type { Database } from "@/lib/database.types";

interface EditPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    await requireAuthor();
    const supabase = await createClient();
    const { id } = await params;

    let post: any = null;
    try {
        type PostRow = Database["public"]["Tables"]["posts"]["Row"];
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single<PostRow>();

        if (error || !data) {
            notFound();
        }

        // Transform snake_case to camelCase for BlogEditor
        post = {
            _id: data.id,
            title: data.title,
            slug: data.slug,
            content: data.content,
            excerpt: data.excerpt || '',
            featuredImage: data.featured_image || '',
            postStatus: data.post_status,
            postType: data.post_type,
            categories: data.categories || [],
            tags: data.tags || [],
            author: data.author,
            date: data.date,
            modified: data.modified,
        };
    } catch (error) {
        console.error("Failed to fetch post:", error);
        notFound();
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Edit Post</h2>
                <p className="text-sm text-gray-600">Update your blog post</p>
            </div>

            <div className="bg-white shadow sm:rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                    <BlogEditor initialData={post} />
                </div>
            </div>
        </div>
    );
}
