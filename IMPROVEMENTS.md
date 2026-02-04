# Site Improvement Ideas — El Mesón de Pepe

Prioritized suggestions to improve the site. Build on the [AUDIT.md](./AUDIT.md) recommendations.

---

## High impact (do first)

### 1. **Contact form → real backend**
The contact form currently simulates submission (no API). Add an API route that sends email (e.g. Resend, SendGrid, or a form service like Formspree) or saves to Supabase and notifies the team.

### 2. **Newsletter signup**
Footer has a newsletter field that only logs to console. Connect it to a list (Mailchimp, Resend, Supabase, etc.) or at least an API that stores emails and sends a confirmation.

### 3. **Hero / LCP**
- Confirm the hero image path: `/sunset-from-el-meson-2048x1087.png` exists in `public/` (or move to `public/images/` and update references).
- Hero already uses `priority`; ensure the file is optimized (e.g. WebP/AVIF) so LCP stays fast.

### 4. **Featured page**
`/featured` is still a placeholder. Add a short episode recap, link to IMDb (already used on homepage CTA), and optionally an embed or clip link when available.

### 5. **Blog SEO**
- Give each post a unique meta description (from excerpt or first 155 chars).
- Use `featured_image` as the Open Graph image when present so shares look good.

---

## UX & content

### 6. **Hours / location**
- Show hours in one canonical place (e.g. `site.ts` or translations) and reuse in footer, contact, and schema so they stay in sync.
- Consider LocalBusiness schema with `openingHours` for rich results.

### 7. **Waitlist / priority seating**
If priority-seating has a form, wire it to the same backend as contact or a dedicated waitlist API so requests are captured.

### 8. **Spanish (ES)**
You have EN/ES toggles and translations. Ensure all key pages have Spanish metadata (title/description) and that `/es/` or locale-based routes are in the sitemap if you add them.

### 9. **Mobile nav**
- Ensure dropdowns (e.g. Our Story) trap focus when open and restore it on close (a11y).
- Confirm tap targets are at least 44px and spacing is comfortable on small screens.

---

## Technical & maintenance

### 10. **React Strict Mode**
Re-enable `reactStrictMode: true` in `next.config.ts` when you’re ready; the earlier hydration warning was from Cursor’s browser. Test in Chrome/Firefox after turning it back on.

### 11. **Env at build**
Validate required env vars (e.g. `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) at build or startup so misconfig fails fast. Optional: use something like `zod` + `process.env` in a small `env.ts`.

### 12. **API validation**
Validate request bodies in `/api/blog` and `/api/admin/invite` (e.g. Zod) so invalid payloads return clear 400 errors and you avoid bad data.

### 13. **Rate limiting**
Add rate limiting to public or sensitive API routes (e.g. invite, blog POST) to reduce abuse (e.g. Vercel KV or Upstash).

---

## Nice to have

- **Reduced motion:** Extend `prefers-reduced-motion` to the Díaz Family image rotation and any other auto-playing UI.
- **Bundle analysis:** Run `@next/bundle-analyzer` once to see if any dependency is bloating the client bundle.
- **Structured data:** Add `LocalBusiness` or more specific schema (e.g. `openingHours`, `servesCuisine`) if not already present.
- **.env.example:** Commit a safe `.env.example` (no secrets) so new devs know what to set; document in README or SETUP_LOCAL.

---

## Quick reference

| Area           | Action |
|----------------|--------|
| Contact form   | API + email or form service |
| Newsletter     | API + list provider or DB |
| Featured page  | Real content + IMDb link |
| Blog SEO       | Per-post meta + OG image |
| Hours/location | Single source of truth + schema |
| Strict Mode    | Re-enable when Cursor hydration not an issue |
| API            | Validation (Zod) + rate limiting |

Use this list to pick the next sprint items; the audit in [AUDIT.md](./AUDIT.md) covers security, performance, and a11y in more detail.
