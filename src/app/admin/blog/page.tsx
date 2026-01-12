import { createClient } from "@/lib/supabase-server";
import { requireAuthor } from "@/lib/auth-helpers";
import AdminBlogPageClient from "./page-client";

export default async function AdminBlogPage() {
    await requireAuthor();
    const supabase = await createClient();
    
    // Fetch all posts sorted by date
    let posts: any[] = [];
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error("Failed to fetch posts:", error);
        } else {
            posts = data || [];
        }
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }

    return <AdminBlogPageClient posts={posts} />;
}
