import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

function readEnvLocal(envPath) {
  const env = {};
  const raw = fs.readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function toIsoMaybe(s) {
  if (!s || typeof s !== "string") return undefined;
  // Formats like "2023-01-27 00:00:33" -> "2023-01-27T00:00:33Z"
  if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/.test(s)) {
    return s.replace(" ", "T") + "Z";
  }
  // already ISO-ish
  if (/^\d{4}-\d{2}-\d{2}T/.test(s)) return s;
  // date-only
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s + "T00:00:00Z";
  return undefined;
}

function excerptFromHtml(html, maxLen = 200) {
  if (!html) return null;
  const text = String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return null;
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trim() + "...";
}

function normalizeSlug(slug) {
  return String(slug || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const repoRoot = process.cwd();
  const envPath = path.join(repoRoot, ".env.local");
  const env = readEnvLocal(envPath);

  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local"
    );
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const jsonPath = path.join(repoRoot, "src/data/blog-posts.json");
  const posts = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  if (!Array.isArray(posts)) throw new Error("blog-posts.json is not an array");

  const publishable = posts.filter(
    (p) => p && p.slug && (p.postStatus === "publish" || p.postStatus === "draft")
  );

  const rows = publishable.map((p) => {
    const slug = normalizeSlug(p.slug);
    const date = toIsoMaybe(p.date);
    const modified = toIsoMaybe(p.modified);
    const excerpt =
      (p.excerpt && String(p.excerpt).trim()) || excerptFromHtml(p.content, 200);

    return {
      title: String(p.title || "").trim() || slug,
      slug,
      content: String(p.content || ""),
      excerpt: excerpt || null,
      author: "Legacy",
      post_status: p.postStatus === "draft" ? "draft" : "publish",
      post_type: p.postType ? String(p.postType) : "post",
      categories: Array.isArray(p.categories) ? p.categories : [],
      tags: Array.isArray(p.tags) ? p.tags : [],
      ...(date ? { date } : {}),
      ...(modified ? { modified } : {}),
    };
  });

  console.log(
    `Importing ${rows.length} posts into Supabase (upsert by slug, JSON overwrites DB on conflicts)...`
  );

  const chunkSize = 50;
  let ok = 0;
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const { error } = await supabase
      .from("posts")
      .upsert(chunk, { onConflict: "slug" });
    if (error) {
      console.error("Upsert failed:", error);
      process.exitCode = 1;
      return;
    }
    ok += chunk.length;
    console.log(`... ${ok}/${rows.length}`);
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

