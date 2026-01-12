import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export type UserRole = 'admin' | 'author';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

/**
 * Get the current authenticated user and their role
 * Returns null if not authenticated
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  const supabase = await createClient();
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role, email')
    .eq('id', user.id)
    .single();

  if (profileError || !profile) {
    return null;
  }

  return {
    id: user.id,
    email: profile.email,
    role: profile.role as UserRole,
  };
}

/**
 * Require authentication - redirects to login if not authenticated
 */
export async function requireAuth(): Promise<AuthUser> {
  const user = await getAuthUser();
  if (!user) {
    redirect('/admin/login');
  }
  return user;
}

/**
 * Require admin role - redirects to login if not admin
 */
export async function requireAdmin(): Promise<AuthUser> {
  const user = await requireAuth();
  if (user.role !== 'admin') {
    redirect('/admin/blog'); // Redirect non-admins to blog instead of login
  }
  return user;
}

/**
 * Require admin or author role - redirects to login if not authorized
 */
export async function requireAuthor(): Promise<AuthUser> {
  const user = await requireAuth();
  if (user.role !== 'admin' && user.role !== 'author') {
    redirect('/admin/blog');
  }
  return user;
}
