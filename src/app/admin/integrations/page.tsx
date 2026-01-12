import { requireAdmin } from "@/lib/auth-helpers";
import Link from "next/link";
import { ArrowLeft, Link as LinkIcon, ExternalLink } from "lucide-react";
import { CopyButton } from "./copy-button";

export default async function IntegrationsPage() {
    await requireAdmin();

    const siteUrl = process.env.SITE_URL || 'http://127.0.0.1:3000';
    const webhookUrl = `${siteUrl}/api/blog/push`;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/blog"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>
                    <p className="text-sm text-gray-600">Manage external service connections</p>
                </div>
            </div>

            {/* Search Atlas Integration */}
            <div className="bg-white shadow sm:rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <LinkIcon className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Search Atlas</h3>
                                <p className="text-sm text-gray-600">Automatic blog post publishing from OTTO CMS</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Webhook URL
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={webhookUrl}
                                    className="flex-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 text-sm font-mono"
                                />
                                <CopyButton text={webhookUrl} />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Use this URL in your Search Atlas OTTO CMS Push Integration settings
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                API Key Header
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-mono text-gray-600 bg-gray-50 px-3 py-2 border border-gray-300 rounded-md">
                                    x-api-key
                                </span>
                                <span className="text-gray-400">→</span>
                                <span className="text-sm text-gray-600">
                                    Your <code className="bg-gray-100 px-1 rounded">SEARCH_ATLAS_SECRET</code> value
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Add this header in Search Atlas webhook configuration
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                            <h4 className="text-sm font-semibold text-blue-900 mb-2">Setup Instructions</h4>
                            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                                <li>Go to your Search Atlas dashboard</li>
                                <li>Navigate to OTTO CMS Push Integration settings</li>
                                <li>Set the Webhook URL to the value above</li>
                                <li>Add a custom header: <code className="bg-blue-100 px-1 rounded">x-api-key</code> with your <code className="bg-blue-100 px-1 rounded">SEARCH_ATLAS_SECRET</code> value</li>
                                <li>Map the fields (Title, Content, Slug, etc.) if prompted</li>
                            </ol>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <Link
                                href="https://searchatlas.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                            >
                                <ExternalLink size={16} />
                                Visit Search Atlas Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
