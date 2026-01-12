-- Supabase Migration: Create Posts Table
-- Run this SQL in your Supabase SQL Editor

create table if not exists posts (
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

-- Create indexes for performance
create index if not exists idx_posts_slug on posts(slug);
create index if not exists idx_posts_post_status on posts(post_status);
create index if not exists idx_posts_date on posts(date desc);
