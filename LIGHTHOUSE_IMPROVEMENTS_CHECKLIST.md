# Lighthouse Improvements — Checklist & Verification

## Summary of Changes

### A) Performance — Hero / LCP Image

| File | Change |
|------|--------|
| `src/components/home/Hero.tsx` | • Reduced `quality` from 90 → 78<br>• Added `fetchPriority="high"`<br>• Updated `sizes` to `(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2048px` for responsive loading<br>• Kept `priority` (prevents lazy loading, ensures preload) |

### B) Performance — Deferred Third-Party Scripts

| File | Change |
|------|--------|
| `src/components/common/DeferredThirdPartyScripts.tsx` | **New component** — Loads GTM, ymbs.pro, LeadConnector, and external-tracking **only after** 8 seconds OR first user interaction (scroll/click/keydown) to reduce main-thread blocking and improve LCP |
| `src/app/layout.tsx` | Replaced inline `<Script>` tags with `<DeferredThirdPartyScripts />`; removed `next/script` import |

### C) Accessibility

| File | Change |
|------|--------|
| `src/components/layout/Footer.tsx` | Added `aria-label` to each social icon link (Facebook, Instagram, LinkedIn, TikTok) — e.g. `"El Mesón de Pepe on Facebook"` |
| `src/components/home/HomeFAQ.tsx` | Fixed list semantics: moved `<ScrollReveal>` **inside** `<li>` so `<ul>` only contains `<li>` children (no invalid `<div>` wrappers) |
| `src/components/home/TestimonialsSection.tsx` | Same list fix: `<li>` wraps `<ScrollReveal>` |
| `src/components/common/DeferredThirdPartyScripts.tsx` | Post-load script attempts to add `aria-label="Close chat"` to LeadConnector chat widget close button (3rd-party workaround) |

### D) SEO

| File | Change |
|------|--------|
| `src/lib/translations.ts` | Added `learnMoreAboutName` for EN: `"Learn more about {name}"`, ES: `"Conocer más sobre {name}"` |
| `src/components/home/PeopleAsLegacy.tsx` | Replaced generic "More info" / "Más información" link text with descriptive text: `"Learn more about Jose Pepe Diaz"` (dynamic per figure) |

### E) Security Headers

| File | Change |
|------|--------|
| `next.config.ts` | • `Content-Security-Policy-Report-Only` (report-only first; switch to enforce after validating)<br>• `Cross-Origin-Opener-Policy: same-origin`<br>• `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`<br>• `frame-ancestors 'self'` in CSP (with existing `X-Frame-Options: SAMEORIGIN`) |

---

## How to Verify

### 1. Lighthouse (Mobile & Desktop)

```bash
# Install Lighthouse CLI if needed
npm install -g lighthouse

# Mobile (throttled)
lighthouse https://elmesondepepe.com --preset=desktop --output=html --output-path=./lighthouse-desktop.html

lighthouse https://elmesondepepe.com --preset=mobile --output=html --output-path=./lighthouse-mobile.html
```

Or use Chrome DevTools → Lighthouse tab → select Mobile/Desktop → Run.

**Metrics to watch:**
- Mobile LCP: should improve from ~4.5s toward &lt; 2.5s
- TBT (Total Blocking Time): should decrease with deferred scripts
- Unused JavaScript: should improve after deferring GTM, LeadConnector, ymbs
- Performance score: target 80+ on mobile

### 2. Accessibility Verification

```bash
# axe-core (if installed)
npx @axe-core/cli https://elmesondepepe.com
```

Or run Lighthouse Accessibility audit — previously failing items:
- Social icon links: should now pass (aria-label present)
- FAQ / Testimonials lists: should pass (valid ul/li structure)
- LeadConnector close button: may still flag until widget loads (workaround runs after load)

### 3. Security Headers

```bash
curl -I https://elmesondepepe.com
```

Check for:
- `Content-Security-Policy-Report-Only`
- `Cross-Origin-Opener-Policy: same-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Frame-Options: SAMEORIGIN`

### 4. CSP Enforcement (Staged Rollout)

1. Deploy with `Content-Security-Policy-Report-Only` and monitor reports (e.g. report-uri or Sentry).
2. Once no critical violations, change `Content-Security-Policy-Report-Only` → `Content-Security-Policy` in `next.config.ts`.
3. Domains in script-src: `googletagmanager.com`, `google-analytics.com`, `recaptcha`, `gstatic.com`, `ymbs.pro`, `leadconnectorhq.com`.

### 5. Functional Smokes

- Navigation, menu, forms, chat widget (after delay/scroll) and tracking (after delay) should still work.
- Home page hero image should load and display correctly.
- Social links in footer should be reachable and labeled.
- People As Legacy "Learn more about …" links should show descriptive text and work.

---

## Notes

- **reCAPTCHA**: Not found in this codebase; likely from LeadConnector or other 3rd party. Deferred loading reduces its impact.
- **HSTS includeSubDomains**: Ensure all subdomains support HTTPS before enabling; otherwise remove `includeSubDomains` and `preload`.
- **Supabase env vars**: Required for build; provide `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for full build to complete.
