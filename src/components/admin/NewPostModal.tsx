"use client";

import { useState, useCallback } from "react";
import { X, FileText, Upload } from "lucide-react";
import { parseSearchAtlasHTML, validateHTMLFile } from "@/lib/html-parser";

interface NewPostModalProps {
    onClose: () => void;
    onSelectScratch: () => void;
    onSelectImport: (data: {
        title: string;
        slug: string;
        content: string;
        excerpt: string | null;
        featuredImage: string | null;
    }) => void;
}

export function NewPostModal({ onClose, onSelectScratch, onSelectImport }: NewPostModalProps) {
    const [showUpload, setShowUpload] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const processFile = async (file: File) => {
        setError(null);
        setIsProcessing(true);

        try {
            // Validate file
            validateHTMLFile(file);

            // Read file content
            const content = await file.text();

            // Parse HTML and extract data using the parser utility
            const parsedData = parseSearchAtlasHTML(content);

            // Pass extracted data to parent
            onSelectImport({
                title: parsedData.title,
                slug: parsedData.slug,
                content: parsedData.content,
                excerpt: parsedData.excerpt,
                featuredImage: parsedData.featuredImage,
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to process HTML file');
            setIsProcessing(false);
        }
    };

    const handleDrop = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            await processFile(files[0]);
        }
    }, []);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            await processFile(files[0]);
        }
    };

    if (showUpload) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Upload HTML File</h2>
                        <button
                            onClick={() => setShowUpload(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            disabled={isProcessing}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div
                        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                            isDragging
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-300 hover:border-gray-400'
                        } ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => !isProcessing && document.getElementById('file-input')?.click()}
                    >
                        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                            {isProcessing ? 'Processing...' : 'Drop HTML file here or click to browse'}
                        </p>
                        <p className="text-sm text-gray-500">
                            Search Atlas HTML export • Max 5MB
                        </p>
                        <input
                            id="file-input"
                            type="file"
                            accept=".html,text/html"
                            onChange={handleFileSelect}
                            className="hidden"
                            disabled={isProcessing}
                        />
                    </div>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-sm text-red-800">{error}</p>
                        </div>
                    )}

                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={() => setShowUpload(false)}
                            className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                            disabled={isProcessing}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 p-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Create New Post</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Write from Scratch */}
                    <button
                        onClick={onSelectScratch}
                        className="group p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 text-left"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <FileText className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Write from Scratch
                            </h3>
                            <p className="text-sm text-gray-600">
                                Start with a blank editor and create your blog post from the ground up
                            </p>
                        </div>
                    </button>

                    {/* Import HTML File */}
                    <button
                        onClick={() => setShowUpload(true)}
                        className="group p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 text-left"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <Upload className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Import HTML File
                            </h3>
                            <p className="text-sm text-gray-600">
                                Upload a Search Atlas HTML export to automatically populate the editor
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
