# Admin Setup & Integration Guide

This document explains how to use and configure the Internal Blog Admin and Search Atlas Integration.

## Environment Variables

You must add the following variables to your `.env.local` or hosting provider (Vercel, Netlify, etc.):

### Supabase Database
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for server-side operations)

### Authentication
- `AUTH_SECRET`: A secure random string for NextAuth (generate with `openssl rand -base64 32`)
- `ADMIN_USERNAME`: The username for the admin dashboard (default: admin)
- `ADMIN_PASSWORD_HASH`: A bcrypt-hashed password for the admin user

### Search Atlas Integration
- `SEARCH_ATLAS_SECRET`: A secret key you create. You will provide this to Search Atlas.

### How to generate a password hash

You can use a tool or run a simple script with `bcryptjs` to generate the hash for your desired password.

## Supabase Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully provisioned

### 2. Create Posts Table

Run this SQL in your Supabase SQL Editor:

```sql
create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  content text not null,
  excerpt text,
  author text not null,
  date timestamptz default now(),
  modified timestamptz default now(),
  featured_image text,
  post_status text default 'publish' check (post_status in ('publish', 'draft')),
  post_type text default 'post',
  categories text[] default '{}',
  tags text[] default '{}'
);

-- Create an index on slug for faster lookups
create index idx_posts_slug on posts(slug);

-- Create an index on post_status for filtering
create index idx_posts_post_status on posts(post_status);

-- Create an index on date for sorting
create index idx_posts_date on posts(date desc);
```

### 3. Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the **Project URL** - this is your `NEXT_PUBLIC_SUPABASE_URL`
3. Copy the **service_role** key (under Service Role keys) - this is your `SUPABASE_SERVICE_ROLE_KEY`
   - ⚠️ **Important**: Never expose the service role key in client-side code. It bypasses Row Level Security policies.

## Search Atlas Configuration

To connect Search Atlas to this site:
1. Go to your Search Atlas dashboard.
2. Find the **OTTO CMS Push Integration** settings.
3. Set the **Webhook URL** to: `https://your-domain.com/api/blog/push`
4. Add a custom header:
   - Key: `x-api-key`
   - Value: (The value of your `SEARCH_ATLAS_SECRET`)
5. Map the fields (Title, Content, Slug, etc.) if prompted.

## Accessing the Admin Area
- URL: `/admin/blog`
- You will be redirected to `/admin/login` if not authenticated.

## Migration Note
The blog pages currently fetch from the Supabase database. If the database is empty, they fall back to the `src/data/blog-posts.json` file. Once you start adding posts to the database, they will appear at the top of the blog listing.
