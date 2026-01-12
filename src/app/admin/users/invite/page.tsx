"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const inviteSchema = z.object({
    email: z.string().email("Invalid email address"),
    role: z.enum(["admin", "author"] as const, {
        message: "Please select a role",
    }),
});

type InviteValues = z.infer<typeof inviteSchema>;

export default function InviteUserPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InviteValues>({
        resolver: zodResolver(inviteSchema),
        defaultValues: {
            role: "author",
        },
    });

    const onSubmit = async (data: InviteValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/admin/invite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(`Invitation sent to ${data.email}`);
                router.push("/admin/users");
            } else {
                toast.error(result.error || "Failed to send invitation");
            }
        } catch (error) {
            toast.error("An error occurred while sending the invitation");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/users"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Invite User</h2>
                    <p className="text-sm text-gray-600">Send an invitation to a new admin or author</p>
                </div>
            </div>

            <div className="bg-white shadow sm:rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                autoComplete="email"
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="user@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <select
                                {...register("role")}
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                            >
                                <option value="author">Author (can create/edit posts)</option>
                                <option value="admin">Admin (can manage users and posts)</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-end gap-3">
                            <Link
                                href="/admin/users"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Invitation"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
