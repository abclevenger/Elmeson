#!/usr/bin/env node
/**
 * Env check script. Verifies required Supabase vars (no secrets printed).
 * Run: node scripts/check-env.mjs
 * Use in CI or after copying .env.example to .env.local
 */
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env.local');
const required = [
  { key: 'NEXT_PUBLIC_SUPABASE_URL', public: true },
  { key: 'NEXT_PUBLIC_SUPABASE_ANON_KEY', public: true },
  { key: 'SUPABASE_SERVICE_ROLE_KEY', public: false },
];

function loadEnv(path) {
  if (!existsSync(path)) return {};
  const content = readFileSync(path, 'utf8');
  const env = {};
  for (const line of content.split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim();
  }
  return env;
}

const env = { ...process.env, ...loadEnv(envPath) };
const missing = required.filter((r) => !env[r.key] || env[r.key] === '');
const present = required.filter((r) => env[r.key]);

if (missing.length === 0) {
  console.log('✓ Supabase env vars present:', present.map((r) => r.key).join(', '));
  process.exit(0);
}

console.error('✗ Missing Supabase env vars:', missing.map((r) => r.key).join(', '));
console.error('  Add them to .env.local (copy from .env.example)');
console.error('  Local Supabase: run `supabase start` and use output values');
console.error('  Cloud: Supabase Dashboard → Settings → API');
process.exit(1);
