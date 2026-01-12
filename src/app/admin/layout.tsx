import { getAuthUser } from "@/lib/auth-helpers";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { signOut } from "@/app/actions/auth";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getAuthUser();

    // If not logged in and not on login/invite pages, middleware will handle redirect
    // But we still check here to conditionally render header

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Toaster position="top-right" />
            {user && (
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <h1 className="text-xl font-bold text-primary font-serif">
                                El Meson Admin
                            </h1>
                            <nav className="hidden md:flex items-center gap-6">
                                <Link href="/admin/blog" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                                    Blog Posts
                                </Link>
                                <Link href="/admin/blog/new" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                                    New Post
                                </Link>
                                {user.role === 'admin' && (
                                    <Link href="/admin/users" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                                        Users
                                    </Link>
                                )}
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">Logged in as {user.email}</span>
                            <form action={signOut}>
                                <button type="submit" className="text-sm font-medium text-red-600 hover:text-red-700">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </header>
            )}
            <main className={`flex-1 ${user ? 'py-8' : ''}`}>
                <div className={user ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}>
                    {children}
                </div>
            </main>
        </div>
    );
}
