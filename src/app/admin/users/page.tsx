import { requireAdmin } from "@/lib/auth-helpers";
import { createClient } from "@/lib/supabase-server";
import Link from "next/link";
import { Plus, User, Shield, PenTool } from "lucide-react";
import type { Database } from "@/lib/database.types";

export default async function UsersPage() {
    await requireAdmin();
    const supabase = await createClient();

    // Fetch all users with their profiles
    let users: any[] = [];
    try {
        const { data: profiles, error } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Failed to fetch users:", error);
        } else {
            users = profiles || [];
        }
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                    <p className="text-sm text-gray-600">Manage admin and author access</p>
                </div>
                <Link
                    href="/admin/users/invite"
                    className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                >
                    <Plus size={18} />
                    Invite User
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
                <ul className="divide-y divide-gray-200">
                    {users.length === 0 ? (
                        <li className="px-6 py-12 text-center">
                            <p className="text-gray-500 italic">No users found. Invite your first user to get started.</p>
                        </li>
                    ) : (
                        users.map((user: any) => (
                            <li key={user.id} className="hover:bg-gray-50 transition-colors">
                                <div className="px-6 py-4 flex items-center justify-between">
                                    <div className="flex-1 min-w-0 pr-4">
                                        <div className="flex items-center gap-3">
                                            {user.role === 'admin' ? (
                                                <Shield size={20} className="text-primary" />
                                            ) : (
                                                <PenTool size={20} className="text-gray-400" />
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {user.email}
                                                </p>
                                                <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                                        user.role === 'admin' 
                                                            ? 'bg-purple-100 text-purple-800' 
                                                            : 'bg-blue-100 text-blue-800'
                                                    }`}>
                                                        {user.role}
                                                    </span>
                                                    <span>Joined {new Date(user.created_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <form action={async () => {
                                            'use server';
                                            const supabaseAdmin = (await import('@/lib/supabase')).supabase;
                                            const newRole: Database["public"]["Tables"]["profiles"]["Row"]["role"] =
                                                user.role === 'admin' ? 'author' : 'admin';
                                            await supabaseAdmin
                                                .from('profiles')
                                                .update({ role: newRole } as Database["public"]["Tables"]["profiles"]["Update"])
                                                .eq('id', user.id);
                                        }}>
                                            <button
                                                type="submit"
                                                className="text-xs text-primary hover:underline"
                                            >
                                                Switch to {user.role === 'admin' ? 'Author' : 'Admin'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
