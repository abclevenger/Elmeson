# Repository Audit — Extra Code Cleanup

**Date:** 2026-03-14

## Summary

Audit identified unused dependencies, orphaned components, duplicate files, and WordPress migration leftovers. All have been removed.

---

## 1. Unused npm Dependencies (REMOVED)

| Package | Reason |
|---------|--------|
| `mongoose` | Project uses Supabase, not MongoDB. No mongoose imports in codebase. |
| `next-auth` | Project uses Supabase Auth. No next-auth imports. |
| `bcryptjs` | Not used. Supabase handles password hashing. |
| `@types/bcryptjs` | Type definitions for removed bcryptjs. |

**Kept:** `react-hook-form`, `@hookform/resolvers`, `zod` — used in BlogEditor, login, invite, invite/complete.

---

## 2. Orphaned Components (REMOVED)

| Component | Path | Reason |
|-----------|------|--------|
| GiftCard | `src/components/common/GiftCard.tsx` | Never imported. Replaced by LeadConnector/ymbs forms. |
| SunsetSection | `src/components/home/SunsetSection.tsx` | Never imported. Replaced by ExperienceHighlights. |
| PatioBar | `src/components/home/PatioBar.tsx` | Never imported. Replaced by ExperienceHighlights + patio page. |
| Location | `src/components/home/Location.tsx` | Never imported. Info in Footer/Contact. |

---

## 3. Duplicate / Redundant Files (REMOVED)

| File | Reason |
|------|--------|
| `public/f1f7b153-6650-4384-b863-b4f3c9330d09.txt` | Duplicate of IndexNow key. Kept `index-now-f1f7b153-6650-4384-b863-b4f3c9330d09.txt` (Bing format). |

---

## 4. WordPress Migration Leftovers (REMOVED)

These were copied from the old WordPress site and are not used by the Next.js app:

- `public/images/wp-migrate-db/`
- `public/images/sass/`
- `public/images/redux/`
- `public/images/pum/`
- `public/images/ppress_uploads/`
- `public/images/ithemes-security/`
- `public/images/gravity_forms/`
- `public/images/pum-debug.log`

---

## 5. Unused Default Assets (REMOVED)

| File | Reason |
|------|--------|
| `public/vercel.svg` | Next.js default, not referenced. |
| `public/next.svg` | Next.js default, not referenced. |
| `public/file.svg` | Next.js default, not referenced. |
| `public/globe.svg` | Next.js default, not referenced. |
| `public/window.svg` | Next.js default, not referenced. |

---

## 6. Kept (In Use)

- `public/google39b0222227fabca2.html` — Google Search Console verification
- `public/index-now-f1f7b153-6650-4384-b863-b4f3c9330d09.txt` — Bing IndexNow
- All Tiptap, html-react-parser, react-hot-toast — used in admin/blog
- wordpress-content, blog-utils, html-parser — used for blog rendering
