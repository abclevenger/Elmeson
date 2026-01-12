"use client";

import { useState } from "react";
import BlogEditor from "@/components/admin/BlogEditor";
import { NewPostModal } from "@/components/admin/NewPostModal";

interface ImportedData {
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featuredImage: string | null;
}

export default function NewPostPage() {
    const [showModal, setShowModal] = useState(true);
    const [importedData, setImportedData] = useState<ImportedData | null>(null);

    const handleSelectScratch = () => {
        setShowModal(false);
        setImportedData(null);
    };

    const handleSelectImport = (data: ImportedData) => {
        setImportedData(data);
        setShowModal(false);
    };

    const handleCloseModal = () => {
        // If user closes modal without selecting, default to scratch
        setShowModal(false);
        setImportedData(null);
    };

    if (showModal) {
        return (
            <NewPostModal
                onClose={handleCloseModal}
                onSelectScratch={handleSelectScratch}
                onSelectImport={handleSelectImport}
            />
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    {importedData ? 'Review Imported Post' : 'Create New Post'}
                </h2>
                <p className="text-sm text-gray-600">
                    {importedData 
                        ? 'Review and edit the imported content before publishing'
                        : 'Write and publish a new blog post'
                    }
                </p>
            </div>

            <div className="bg-white shadow sm:rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                    <BlogEditor 
                        initialData={importedData ? {
                            title: importedData.title,
                            slug: importedData.slug,
                            content: importedData.content,
                            excerpt: importedData.excerpt || undefined,
                            featuredImage: importedData.featuredImage || undefined,
                            postStatus: 'draft' as const,
                        } : undefined}
                    />
                </div>
            </div>
        </div>
    );
}
