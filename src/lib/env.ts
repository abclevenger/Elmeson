/**
 * Centralized env validation for Supabase and other server-only config.
 * Validation runs lazily—only when env is actually needed—so builds can
 * succeed without Supabase configured (e.g., CI, static export).
 *
 * PUBLIC (exposed to browser via NEXT_PUBLIC_*):
 *   - NEXT_PUBLIC_SUPABASE_URL
 *   - NEXT_PUBLIC_SUPABASE_ANON_KEY
 *
 * SERVER-ONLY (never expose):
 *   - SUPABASE_SERVICE_ROLE_KEY
 */

const MISSING_VARS_MSG =
  "Missing Supabase env vars. Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY. For server/admin: SUPABASE_SERVICE_ROLE_KEY. See .env.example.";

export type SupabasePublicEnv = {
  url: string;
  anonKey: string;
};

export type SupabaseServerEnv = SupabasePublicEnv & {
  serviceRoleKey: string;
};

/** Validate public Supabase env (safe for client). Throws if missing. */
export function getSupabasePublicEnv(): SupabasePublicEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      `Supabase public env missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY. ${MISSING_VARS_MSG}`
    );
  }
  return { url, anonKey };
}

/** Validate server Supabase env (service role). Throws if missing. Server-only. */
export function getSupabaseServerEnv(): SupabaseServerEnv {
  const { url, anonKey } = getSupabasePublicEnv();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error(
      `Supabase service role key missing. Set SUPABASE_SERVICE_ROLE_KEY for server-side operations. ${MISSING_VARS_MSG}`
    );
  }
  return { url, anonKey, serviceRoleKey };
}

/** Check if Supabase is configured (no throw). Use for conditional features. */
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** Check if Supabase server (service role) is configured. */
export function isSupabaseServerConfigured(): boolean {
  return isSupabaseConfigured() && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}
