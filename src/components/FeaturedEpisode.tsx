"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * FeaturedEpisode — Museum-grade "Featured on Food Paradise" recognition module.
 *
 * SWAP ASSETS:
 * - Replace the placeholder artifact (gradient + label) with next/image using
 *   the real episode still when available. Pass `imageSrc` + `imageAlt` props.
 * - Update `ctaHref` to IMDb or the canonical episode page when ready.
 */
type Props = {
  /** Optional episode still. If omitted, shows gradient placeholder. */
  imageSrc?: string;
  imageAlt?: string;
  /** CTA link. Default: /featured placeholder. TODO: swap for IMDb or episode page. */
  ctaHref?: string;
};

export default function FeaturedEpisode({
  imageSrc,
  imageAlt,
  ctaHref = "/featured",
}: Props) {
  const { t } = useLanguage();
  return (
    <section
      className="section-anchor bg-[var(--warm-100)] text-[var(--charcoal)] overflow-hidden border-b border-[var(--border)]"
      aria-labelledby="featured-episode-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left: placard text */}
          <ScrollReveal className="flex-1 space-y-6 order-2 md:order-1">
            <p
              id="featured-episode-eyebrow"
              className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)]"
            >
              {t.featured.eyebrow}
            </p>
            <h2
              id="featured-episode-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-tight text-[var(--charcoal)] leading-tight"
            >
              {t.featured.heading}
            </h2>
            <div className="h-px w-14 bg-[var(--gold)]" aria-hidden="true" />
            <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed max-w-xl font-light">
              {t.featured.body}
            </p>
            <p className="text-[var(--warm-700)] text-sm">
              <cite className="not-italic text-[var(--warm-500)]">
                {t.featured.citation}
              </cite>
            </p>
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-1">
              <Link
                href="/featured#where-to-watch"
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--warm-100)] rounded-sm"
                aria-label="Where to watch — Food Paradise Meals Over Miami"
              >
                Where to watch
              </Link>
              <Link
                href={ctaHref}
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--warm-100)] rounded-sm"
                aria-label={t.featured.ctaAria}
              >
                {t.featured.cta}
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: artifact card (image or placeholder) */}
          <ScrollReveal delay={150} className="flex-1 w-full order-1 md:order-2">
            <div className="featured-artifact relative aspect-[4/5] max-w-md mx-auto md:max-w-none overflow-hidden border border-[var(--border)] bg-[var(--background)] shadow-[0_8px_30px_rgba(28,27,25,0.08)] rounded-sm">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? `${t.featured.placeholderLabel} — ${t.featured.placeholderSub} — El Mesón de Pepe`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={88}
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--charcoal-muted)] via-[var(--charcoal)]/90 to-[var(--charcoal-muted)]"
                  aria-hidden="true"
                >
                  <span className="font-serif text-[var(--warm-200)]/90 text-sm uppercase tracking-[0.3em]">
                    {t.featured.placeholderLabel}
                  </span>
                  <span className="mt-2 text-[var(--warm-300)]/70 text-xs uppercase tracking-[0.2em]">
                    {t.featured.placeholderSub}
                  </span>
                </div>
              )}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
