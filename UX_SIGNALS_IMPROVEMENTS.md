# UX Signals Improvements (25/100 → Target 80+)

Google's [Page Experience](https://developers.google.com/search/docs/appearance/page-experience) considers six UX signals. This doc tracks fixes applied and remaining recommendations.

---

## 1. Core Web Vitals

### LCP (Largest Contentful Paint) — Target ≤2.5s
**Applied:**
- Hero image: `priority`, `fetchPriority="high"`, quality 78, responsive `sizes`
- Preload LCP image in `<head>`: `/sunset-from-el-meson-2048x1087.png`
- Deferred third-party scripts (GTM, ymbs, LeadConnector) until 8s or first interaction
- Cache-Control for hero image

**Consider:**
- Host on CDN (Vercel Edge) if TTFB is high
- Convert hero to WebP/AVIF if not already

### INP (Interaction to Next Paint) — Target ≤200ms
**Applied:**
- Deferred scripts reduce main-thread blocking
- `optimizePackageImports` for lucide-react

**Consider:**
- Split large components with `dynamic(..., { ssr: false })` for below-fold
- Reduce JavaScript execution: audit bundle size

### CLS (Cumulative Layout Shift) — Target ≤0.1
**Applied:**
- SunsetTime placeholder: `min-w-[4ch]` to prevent shift when time loads
- Next.js Image with `fill` + aspect-ratio containers
- Cookie banner no longer appears at 500ms (see below)

---

## 2. Intrusive Interstitials

**Applied:**
- Cookie banner: now shows only after **scroll > 100px** OR **5 seconds**
- Avoids "pop-up that covers content immediately after navigate" penalty

---

## 3. Site Architecture

**Already good:**
- Skip to main content link
- Clear `<main>`, `<header>`, semantic sections
- Breadcrumbs on key pages
- Organized nav

---

## 4. Mobile-Friendly

**Already good:**
- Responsive design, viewport meta
- Touch targets ≥44px (`min-h-[44px]` on buttons)
- Fluid typography and spacing

---

## 5. HTTPS

**Already good:**
- Served over HTTPS (Vercel)
- HSTS header

---

## 6. Excessive Ads

**N/A** — No ads on the site.

---

## Quick Wins Summary

| Change | File | Impact |
|--------|------|--------|
| Preload LCP image | layout.tsx | Faster LCP |
| SunsetTime min-width | SunsetTime.tsx | Less CLS |
| Cookie banner delay | CookieBanner.tsx | Less intrusive interstitial penalty |
| Sunrise API in CSP | next.config.ts | SunsetTime fetch works |
| Hero image cache | next.config.ts | Faster repeat visits |

---

## How to Verify

1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **Chrome DevTools → Lighthouse** (Mobile + Desktop)
3. **Google Search Console → Page Experience** report

Run Lighthouse before/after and compare:
- Performance
- Core Web Vitals (LCP, INP, CLS)
- Best Practices
