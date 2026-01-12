# Local Development Setup Guide

Quick guide to run Supabase locally for development.

## Prerequisites

1. **Docker Desktop** - Must be running
2. **Supabase CLI** - Already installed ✅

## Setup Steps

### 1. Start Docker Desktop
Make sure Docker Desktop is running on your Mac.

### 2. Initialize Supabase (One-time setup)
```bash
supabase init
```

This creates a `supabase/` directory with configuration.

### 3. Start Local Supabase
```bash
supabase start
```

This will:
- Start PostgreSQL, Auth, Storage, and other services
- Display connection details (URLs and keys)
- Take 1-2 minutes on first run

**Save the output** - you'll need:
- `API URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

### 4. Create the Posts Table

Run the migration SQL from `supabase_migration.sql` in the Supabase Studio:

1. Open Studio: `http://localhost:54323` (from `supabase start` output)
2. Go to SQL Editor
3. Paste and run the SQL from `supabase_migration.sql`

OR use the CLI:
```bash
# Create migration file
supabase migration new create_posts_table

# Edit the generated file in supabase/migrations/ and paste the SQL

# Apply migration
supabase db reset
```

### 5. Update `.env.local`

Add these variables (use values from `supabase start` output):

```env
# Local Supabase (get these from 'supabase start' output)
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
SUPABASE_SERVICE_ROLE_KEY=<service_role_key from output>

# Keep your existing auth vars
AUTH_SECRET=your-secret-here
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=your-hash-here
SEARCH_ATLAS_SECRET=your-secret-here
```

### 6. Start Development Server
```bash
npm run dev
```

## Useful Commands

```bash
# Start Supabase
supabase start

# Stop Supabase
supabase stop

# View logs
supabase logs

# Reset database (drops all data, re-runs migrations)
supabase db reset

# Open Studio (web UI)
open http://localhost:54323
```

## Migration to Cloud Later

When ready to move to cloud Supabase:

1. Create project on [supabase.com](https://supabase.com)
2. Get project URL and service role key
3. Run the SQL migration in cloud SQL Editor
4. Update `.env.local` with cloud credentials
5. That's it! No code changes needed.

## Troubleshooting

**Docker not running?**
- Open Docker Desktop app
- Wait for it to fully start (whale icon in menu bar)

**Port already in use?**
- Stop existing Supabase: `supabase stop`
- Or change ports in `supabase/config.toml`

**Database reset?**
- `supabase db reset` - drops all data and re-runs migrations
