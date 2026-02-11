import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';
import { getSupabaseServerEnv } from '@/lib/env';

let _client: ReturnType<typeof createClient<Database>> | null = null;

/**
 * Lazily create Supabase client with service role (server-only).
 * Throws only when first used and env vars are missing—not at import.
 * This allows builds to succeed without Supabase configured (e.g., CI).
 */
function getClient(): ReturnType<typeof createClient<Database>> {
  if (_client) return _client;
  const { url, serviceRoleKey } = getSupabaseServerEnv();
  _client = createClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  return _client;
}

/**
 * Server-side Supabase client (service role). Use in API routes, Server Components, server actions.
 * Do NOT import in client components—use supabase-browser instead.
 *
 * Lazy init: no throw at import. Throws only on first use if env vars missing.
 */
export const supabase = new Proxy({} as ReturnType<typeof createClient<Database>>, {
  get(_, prop) {
    return (getClient() as any)[prop];
  },
});
