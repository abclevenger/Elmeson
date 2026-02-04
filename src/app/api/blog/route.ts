import { NextRequest, NextResponse } from "next/server";
import { requireAuthor } from "@/lib/auth-helpers";
import { supabase } from "@/lib/supabase";
import type { PostInsert, PostUpdate } from "@/types/post";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuthor();
        const body = await req.json();
        const postData: PostInsert = {
            title: body.title,
            slug: body.slug,
            content: body.content,
            excerpt: body.excerpt || null,
            featured_image: body.featuredImage || null,
            author: user.email,
            post_status: body.postStatus || 'draft',
            post_type: body.postType || 'post',
            categories: body.categories || [],
            tags: body.tags || [],
        };

        const { data, error } = await supabase
            .from('posts')
            .insert(postData)
            .select()
            .single();

        if (error) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }

        return NextResponse.json(data, { status: 201 });
    } catch (error: unknown) {
        if (error instanceof Error && error.message?.includes("redirect")) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const user = await requireAuthor();
        const { id, ...updateData } = await req.json();
        
        const postData: PostUpdate = {
            title: updateData.title,
            slug: updateData.slug,
            content: updateData.content,
            excerpt: updateData.excerpt || null,
            featured_image: updateData.featuredImage || null,
            post_status: updateData.postStatus,
            post_type: updateData.postType,
            categories: updateData.categories,
            tags: updateData.tags,
        };

        // Remove undefined fields
        Object.keys(postData).forEach(key => {
            if (postData[key as keyof PostUpdate] === undefined) {
                delete postData[key as keyof PostUpdate];
            }
        });

        const { data, error } = await supabase
            .from('posts')
            .update({
                ...postData,
                modified: new Date().toISOString(),
            })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }

        if (!data) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error: unknown) {
        if (error instanceof Error && error.message?.includes("redirect")) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const user = await requireAuthor();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: "Post deleted" });
    } catch (error: unknown) {
        if (error instanceof Error && error.message?.includes("redirect")) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }
}
