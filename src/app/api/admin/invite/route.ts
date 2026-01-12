import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth-helpers";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAdmin();
        const body = await req.json();
        const { email, role } = body;

        if (!email || !role) {
            return NextResponse.json(
                { error: "Email and role are required" },
                { status: 400 }
            );
        }

        if (role !== 'admin' && role !== 'author') {
            return NextResponse.json(
                { error: "Invalid role" },
                { status: 400 }
            );
        }

        const siteUrl = process.env.SITE_URL || 'http://127.0.0.1:3000';

        // Invite user via Supabase Auth
        const { data: inviteData, error: inviteError } = await supabase.auth.admin.inviteUserByEmail(
            email,
            {
                redirectTo: `${siteUrl}/admin/invite/complete`,
            }
        );

        if (inviteError) {
            return NextResponse.json(
                { error: inviteError.message },
                { status: 400 }
            );
        }

        if (!inviteData?.user?.id) {
            return NextResponse.json(
                { error: "Invite succeeded but no user was returned by Supabase" },
                { status: 500 }
            );
        }

        // Create or update profile with the specified role
        const { error: profileError } = await supabase
            .from('profiles')
            .upsert(
                {
                    id: inviteData.user.id,
                    email: inviteData.user.email ?? email,
                    role: role as 'admin' | 'author',
                },
                { onConflict: 'id' }
            );

        if (profileError) {
            return NextResponse.json(
                { error: profileError.message },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            message: `Invitation sent to ${email}`,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
