"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const passwordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type PasswordValues = z.infer<typeof passwordSchema>;

export default function InviteCompletePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PasswordValues>({
        resolver: zodResolver(passwordSchema),
    });

    useEffect(() => {
        // Check if we have the token in the URL
        const token = searchParams.get("token");
        const type = searchParams.get("type");
        const tokenHash = searchParams.get("token_hash");
        
        if ((token || tokenHash) && (type === "invite" || type === "recovery")) {
            // Exchange the token for a session
            supabase.auth.verifyOtp({
                token_hash: tokenHash || token || '',
                type: (type as any) || "invite",
            }).then(({ error }) => {
                if (error) {
                    toast.error("Invalid or expired invitation link");
                    router.push("/admin/login");
                }
            });
        }
    }, [searchParams, supabase.auth, router]);

    const onSubmit = async (data: PasswordValues) => {
        setIsLoading(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: data.password,
            });

            if (error) {
                toast.error(error.message || "Failed to set password");
            } else {
                toast.success("Password set successfully! Redirecting...");
                setTimeout(() => {
                    router.push("/admin/blog");
                }, 1500);
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Set Your Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Create a password to complete your account setup
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Enter password (min 8 characters)"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    {...register("confirmPassword")}
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Confirm password"
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm text-gray-700 select-none">
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={(e) => setShowPassword(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            Show password
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 select-none">
                            <input
                                type="checkbox"
                                checked={showConfirmPassword}
                                onChange={(e) => setShowConfirmPassword(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            Show confirm password
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                        >
                            {isLoading ? "Setting password..." : "Set Password"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
