# Quick Start: Local Development Setup

## Prerequisites

1. **Docker Desktop** - Must be installed and running
2. **Supabase CLI** - Already installed ✅

## Step-by-Step Setup

### 1. Start Docker Desktop
Make sure Docker Desktop is running on your Mac (check the menu bar for the whale icon).

### 2. Initialize Supabase (One-time)
```bash
supabase init
```

### 3. Start Local Supabase
```bash
npm run supabase:start
# OR
supabase start
```

**⚠️ IMPORTANT:** Copy the output - you'll need:
- `API URL` → Use this for `NEXT_PUBLIC_SUPABASE_URL`
- `service_role key` → Use this for `SUPABASE_SERVICE_ROLE_KEY`

### 4. Create Posts Table

**Option A: Using Supabase Studio (Recommended)**
1. Open Studio: `http://localhost:54323`
2. Go to **SQL Editor**
3. Paste and run the SQL from `supabase_migration.sql`

**Option B: Using CLI Migration**
```bash
# Create migration file
supabase migration new create_posts_table

# Edit supabase/migrations/YYYYMMDDHHMMSS_create_posts_table.sql
# Paste the SQL from supabase_migration.sql

# Apply migration
npm run supabase:reset
# OR
supabase db reset
```

### 5. Update `.env.local`

Add these variables (use values from step 3):

```env
# Local Supabase (from 'supabase start' output)
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
SUPABASE_SERVICE_ROLE_KEY=<paste_service_role_key_here>

# Keep your existing vars
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
npm run supabase:start

# Stop Supabase
npm run supabase:stop

# Check status
npm run supabase:status

# Reset database (drops all data, re-runs migrations)
npm run supabase:reset

# Open Studio (web UI)
npm run supabase:studio
```

## Sync to Cloud Later

When ready to deploy:

1. Create project on [supabase.com](https://supabase.com)
2. Get project URL and service role key
3. Run `supabase_migration.sql` in cloud SQL Editor
4. Update `.env.local` with cloud credentials
5. Deploy! No code changes needed.

## Troubleshooting

**Docker not running?**
- Open Docker Desktop app
- Wait for it to start (whale icon in menu bar)

**Port conflicts?**
- Stop existing Supabase: `npm run supabase:stop`
- Or check what's using the ports

**Need to reset database?**
- `npm run supabase:reset` - Drops all data and re-runs migrations
