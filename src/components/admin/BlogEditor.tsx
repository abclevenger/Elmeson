"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
    Bold, Italic, List, ListOrdered, Link as LinkIcon,
    Image as ImageIcon, Undo, Redo, Save
} from "lucide-react";

const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Invalid slug format"),
    excerpt: z.string().optional(),
    featuredImage: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    postStatus: z.enum(["publish", "draft"]),
});

type PostValues = z.infer<typeof postSchema>;

export default function BlogEditor({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const postId: string | undefined = initialData?._id ?? initialData?.id;
    const isEditMode = Boolean(postId);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<PostValues>({
        resolver: zodResolver(postSchema),
        defaultValues: initialData || {
            postStatus: "draft",
        },
    });

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({ openOnClick: false }),
            Image,
        ],
        content: initialData?.content || "<p>Start writing your story...</p>",
        immediatelyRender: false,
    });

    const onSubmit = async (data: PostValues) => {
        if (!editor) return;

        setIsSubmitting(true);
        const postData = {
            ...data,
            content: editor.getHTML(),
        };

        try {
            const response = await fetch("/api/blog", {
                method: isEditMode ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(isEditMode ? { ...postData, id: postId } : postData),
            });

            if (response.ok) {
                toast.success(isEditMode ? "Post updated!" : "Post created!");
                router.push("/admin/blog");
            } else {
                const error = await response.json();
                toast.error(error.message || "Failed to save post");
            }
        } catch (error) {
            toast.error("An error occurred while saving");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper for slug generation from title
    const generateSlug = () => {
        const title = watch("title");
        if (title) {
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            setValue("slug", slug, { shouldValidate: true });
        }
    };

    if (!editor) return null;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Content Area */}
                <div className="md:col-span-2 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <div className="mt-1 flex gap-2">
                            <input
                                {...register("title")}
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="Post title"
                            />
                            <button
                                type="button"
                                onClick={generateSlug}
                                className="text-xs text-primary hover:underline whitespace-nowrap"
                            >
                                Gen Slug
                            </button>
                        </div>
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Content</label>
                        <div className="mt-1 border border-gray-300 rounded-md overflow-hidden">
                            {/* Toolbar */}
                            <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
                                <MenuButton
                                    onClick={() => editor.chain().focus().toggleBold().run()}
                                    isActive={editor.isActive('bold')}
                                >
                                    <Bold size={16} />
                                </MenuButton>
                                <MenuButton
                                    onClick={() => editor.chain().focus().toggleItalic().run()}
                                    isActive={editor.isActive('italic')}
                                >
                                    <Italic size={16} />
                                </MenuButton>
                                <div className="w-px h-6 bg-gray-300 mx-1" />
                                <MenuButton
                                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                                    isActive={editor.isActive('bulletList')}
                                >
                                    <List size={16} />
                                </MenuButton>
                                <MenuButton
                                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                                    isActive={editor.isActive('orderedList')}
                                >
                                    <ListOrdered size={16} />
                                </MenuButton>
                                <div className="w-px h-6 bg-gray-300 mx-1" />
                                <MenuButton
                                    onClick={() => {
                                        const url = window.prompt('URL');
                                        if (url) editor.chain().focus().setLink({ href: url }).run();
                                    }}
                                    isActive={editor.isActive('link')}
                                >
                                    <LinkIcon size={16} />
                                </MenuButton>
                                <MenuButton
                                    onClick={() => {
                                        const url = window.prompt('Image URL');
                                        if (url) editor.chain().focus().setImage({ src: url }).run();
                                    }}
                                >
                                    <ImageIcon size={16} />
                                </MenuButton>
                                <div className="flex-1" />
                                <MenuButton onClick={() => editor.chain().focus().undo().run()}>
                                    <Undo size={16} />
                                </MenuButton>
                                <MenuButton onClick={() => editor.chain().focus().redo().run()}>
                                    <Redo size={16} />
                                </MenuButton>
                            </div>
                            <EditorContent
                                editor={editor}
                                className="prose max-w-none p-4 min-h-[400px] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Slug</label>
                        <input
                            {...register("slug")}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm bg-gray-50"
                        />
                        {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            {...register("postStatus")}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            <option value="draft">Draft</option>
                            <option value="publish">Publish</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Featured Image URL</label>
                        <input
                            {...register("featuredImage")}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="https://..."
                        />
                        {errors.featuredImage && <p className="text-red-500 text-xs mt-1">{errors.featuredImage.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Excerpt (Short description)</label>
                        <textarea
                            {...register("excerpt")}
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors shadow-lg font-bold"
                    >
                        <Save size={18} />
                        {isSubmitting ? "Saving..." : "Save Post"}
                    </button>
                </div>
            </div>
        </form>
    );
}

function MenuButton({ onClick, isActive, children }: any) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`p-1.5 rounded hover:bg-gray-200 transition-colors ${isActive ? 'bg-gray-200 text-primary' : 'text-gray-600'
                }`}
        >
            {children}
        </button>
    );
}
