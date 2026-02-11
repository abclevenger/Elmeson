# Environment Variables — Supabase Setup

## Required Variables

| Variable | Public? | Required For | Where to Set |
|----------|---------|--------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (safe) | Auth, blog, admin, sitemap | `.env.local` (local), Vercel/hosting env (prod) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes (safe) | Auth, blog listing, admin login | Same |
| `SUPABASE_SERVICE_ROLE_KEY` | **No** (secret) | API routes, admin invite, sitemap blog fetch | Same |

## Public vs Secret

- **Public** (`NEXT_PUBLIC_*`): Bundled into client code. The anon key is designed to be public; it is restricted by Supabase RLS.
- **Secret** (`SUPABASE_SERVICE_ROLE_KEY`): Server-only. Never add `NEXT_PUBLIC_` to it. Bypasses RLS—use only in API routes and server code.

## Where to Set Them

### Local development
1. Copy `.env.example` to `.env.local`
2. For local Supabase: run `supabase start` and use the output values
3. For cloud: [Supabase Dashboard](https://supabase.com/dashboard) → your project → Settings → API

### Production (Vercel, etc.)
1. Project Settings → Environment Variables
2. Add all three variables
3. Ensure they're set for Production (and Preview if you use it)

### CI (GitHub Actions, etc.)
- For builds that don't need Supabase (e.g. lint, typecheck): no vars needed
- For builds that run full `next build`: set vars as secrets in CI

## Env Check Script

```bash
npm run check-env
```

Verifies required vars exist (without printing secrets). Use after copying `.env.example` or in CI.

## Build Without Supabase

The app can build successfully without Supabase configured:
- Blog and sitemap fall back to JSON/static data
- Admin and API routes require Supabase at runtime
