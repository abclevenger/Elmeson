"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 min-w-[80px] justify-center"
        >
            {copied ? (
                <>
                    <Check size={16} />
                    <span>Copied!</span>
                </>
            ) : (
                <span>Copy</span>
            )}
        </button>
    );
}
