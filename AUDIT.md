# Project Audit — El Mesón de Pepe (Elmeson)

**Date:** February 2025  
**Scope:** Security, performance, accessibility, SEO, code quality, maintainability.

---

## Summary of Changes Applied

| Area | Change |
|------|--------|
| **Security** | Upgraded Next.js to 16.1.6 (npm audit); added X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| **Security** | API routes no longer leak internal error messages on 500 responses |
| **Security** | Middleware skips Supabase auth when env vars are missing (no crash) |
| **Accessibility** | Cookie banner has a proper `aria-labelledby` target (sr-only title) |

---

## Hydration warning in Cursor’s browser

When you run the app and open it in **Cursor’s embedded browser**, you may see a hydration error about attributes not matching (e.g. `data-cursor-ref`). Cursor injects `data-cursor-ref` into the DOM for its own UI; the server-rendered HTML does not include these attributes, so React reports a mismatch. This does **not** happen in production or in a normal browser (Chrome, Firefox, etc.). To avoid the warning during development, open the app in an external browser (e.g. `http://localhost:3002` in Chrome).

---

## 1. Security

### Done
- **Dependencies:** Next.js upgraded to 16.1.6; `npm audit` reports 0 vulnerabilities.
- **Headers:** Root responses now send `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **API error handling:** Invite, blog, and blog/push routes return generic messages on 500; no stack traces or internal details.
- **Middleware:** If `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` are missing, middleware continues without Supabase (no throw).

### Recommendations
- **Rate limiting:** Add rate limiting to `/api/admin/invite` and `/api/blog` (e.g. Vercel KV or Upstash) to reduce abuse.
- **Request size:** Consider a body size limit for blog POST/PUT (e.g. 1MB) to avoid large payloads.
- **SITE_URL:** Set `SITE_URL` in production (e.g. `https://www.elmesondepepe.com`) so invite links point to the live site.
- **Blog content:** If blog content is user-edited HTML, ensure it’s sanitized (e.g. DOMPurify) before `dangerouslySetInnerHTML` in `wordpress-content.tsx`; admin-only content is lower risk but worth a review.

---

## 2. Performance

### Current strengths
- Next.js Image with AVIF/WebP, responsive sizes, long cache for `/images/`.
- Fonts use `display: swap` and preload where appropriate.
- Third-party scripts use `strategy="lazyOnload"`.
- Sitemap and key data use `revalidate` (e.g. 3600s) for ISR.

### Recommendations
- **Core Web Vitals:** Measure LCP/INP/CLS on production (e.g. Vercel Analytics or PageSpeed Insights); hero image and largest content block are good candidates to optimize.
- **Bundle:** Run `npm run build` and review `.next/analyze` or `@next/bundle-analyzer` if you add more dependencies.
- **Images:** Ensure key above-the-fold images use `priority` where needed (e.g. hero).

---

## 3. Accessibility

### Done
- **Cookie banner:** Added an `h2` with `id="cookie-banner-title"` and `sr-only` so `aria-labelledby` is valid.

### Current strengths
- Skip link to `#main-content` with visible focus style.
- Semantic layout: `header`, `main`, `footer`, `role="banner"`, `aria-label` on main.
- Many images use descriptive `alt` text; icons use `aria-hidden="true"` where decorative.

### Recommendations
- **Forms:** Ensure all inputs (e.g. contact, newsletter) have associated `<label>` or `aria-label` and that errors are announced (e.g. `aria-describedby` / `aria-invalid`).
- **Focus:** After opening modals or dropdowns (e.g. Navbar), trap focus and return it on close.
- **Reduced motion:** You already have `.featured-artifact` and reduced-motion media queries; consider applying to any other motion that could cause discomfort.

---

## 4. SEO

### Current strengths
- Root and page-level metadata (title, description, Open Graph, Twitter, canonical).
- `metadataBase` set; sitemap with static + dynamic (blog) URLs; `revalidate` for freshness.
- Structured data: `OrganizationSchema`, `RestaurantSchema`, `BreadcrumbSchema` where used.

### Recommendations
- **Blog:** Ensure each post has unique meta description (from excerpt or first paragraph) and OG image (e.g. `featured_image`).
- **Alternates:** If you add locale-specific routes (e.g. `/es/...`), use `alternates.languages` in metadata.

---

## 5. Code Quality

### Current strengths
- TypeScript and shared types (`Database`, `PostInsert`, etc.).
- ESLint with `eslint-config-next` (core-web-vitals, TypeScript).
- Auth centralized in `auth-helpers`; admin routes protected in middleware and API.

### Recommendations
- **Strict mode:** `reactStrictMode` is currently `false` due to a Next/React hydration quirk; re-enable when upgrading past the fix and re-test.
- **Env validation:** Consider validating required env at build or startup (e.g. `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) so misconfig fails fast.
- **API validation:** Validate request bodies (e.g. with Zod) in `/api/blog` and `/api/admin/invite` for shape and length to avoid bad data and clearer errors.

---

## 6. Maintainability

### Recommendations
- **Env template:** Add `.env.example` (no secrets) listing `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SITE_URL`, `SEARCH_ATLAS_SECRET` so new devs know what to set.
- **Docs:** `SETUP_LOCAL.md` and `QUICK_START.md` are in place; keep them in sync with Supabase and env steps.
- **Dependencies:** Run `npm audit` and `npm outdated` periodically; upgrade Next/React in small steps and re-test.

---

## Quick reference: env vars

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (for auth/DB) | Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes (for auth/DB) | Public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (for API/admin) | Server-only, never expose |
| `SITE_URL` | Recommended (prod) | For invite redirects |
| `SEARCH_ATLAS_SECRET` | If using push API | For blog push webhook |

---

*Audit completed as part of project health check. Re-run security and a11y checks after major changes.*
