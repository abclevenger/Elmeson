import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { PostInsert } from '@/types/post';
import type { Database } from '@/lib/database.types';

export async function POST(req: NextRequest) {
    try {
        type PostRow = Database["public"]["Tables"]["posts"]["Row"];
        const body = await req.json();
        const apiKey = req.headers.get('x-api-key');

        // Security check - verify API key matches our stored secret
        if (apiKey !== process.env.SEARCH_ATLAS_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Map Search Atlas fields to our schema
        // Search Atlas usually sends title, content, excerpt, featured_image, slug, etc.
        const {
            title,
            content,
            excerpt,
            featured_image,
            slug,
            status = 'publish',
            author = 'Search Atlas'
        } = body;

        if (!title || !content || !slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if post already exists
        const { data: existingPost } = await supabase
            .from('posts')
            .select('id')
            .eq('slug', slug)
            .single<{ id: PostRow["id"] }>();

        const postData: PostInsert = {
            title,
            content,
            excerpt: excerpt || null,
            featured_image: featured_image || null,
            slug,
            post_status: status,
            author,
            post_type: 'post',
            categories: [],
            tags: [],
        };

        if (existingPost) {
            // Update existing post
            const { data, error } = await supabase
                .from('posts')
                .update({
                    ...postData,
                    modified: new Date().toISOString(),
                })
                .eq('id', existingPost.id)
                .select()
                .single<PostRow>();

            if (error) {
                return NextResponse.json({ error: error.message }, { status: 400 });
            }

            return NextResponse.json({
                message: 'Post updated successfully',
                id: data?.id
            });
        } else {
            // Create new post
            const { data, error } = await supabase
                .from('posts')
                .insert(postData)
                .select()
                .single<PostRow>();

            if (error) {
                return NextResponse.json({ error: error.message }, { status: 400 });
            }

            return NextResponse.json({
                message: 'Post created successfully',
                id: data?.id
            });
        }

    } catch (error: unknown) {
        console.error("Search Atlas Push Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// Optional: GET handler for Search Atlas verification
export async function GET() {
    return NextResponse.json({ status: 'active', service: 'El Meson Blog Integration' });
}
