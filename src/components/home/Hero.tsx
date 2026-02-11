"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sunset } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SunsetTime from "@/components/SunsetTime";
import { WAITLIST_ENABLED } from "@/lib/config";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative min-h-screen h-[100svh] w-full flex items-center justify-center overflow-hidden"
      aria-label={t.hero.bannerAria}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/sunset-from-el-meson-2048x1087.png"
          alt={t.hero.imgAlt}
          fill
          className="object-cover brightness-[1.08] saturate-[1.05]"
          priority
          fetchPriority="high"
          quality={78}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2048px"
        />
        {/* Lighter overlay so the sunset shows through; warm-tinted dark */}
        <div
          className="absolute inset-0 bg-[#1c1b19]/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#151310]/85 via-[#1a1814]/20 to-[#151310]/40"
          aria-hidden="true"
        />
        {/* Subtle warm glow along bottom for depth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="hero-reveal hero-reveal-delay-1 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-[var(--warm-100)] font-serif font-light tracking-[0.02em] leading-snug max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {t.hero.title}
        </h1>

        <p className="hero-reveal hero-reveal-delay-2 font-serif text-[var(--gold)] text-xl sm:text-2xl md:text-3xl lg:text-4xl italic tracking-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
          {t.hero.tagline}
        </p>

        <div className="hero-reveal hero-reveal-delay-3 flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-[var(--gold)]" aria-hidden="true" />
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-[var(--gold)] text-[var(--gold)] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-[var(--charcoal)]/30 backdrop-blur-sm">
            {t.hero.thirtyYears}
          </span>
          <p className="text-[var(--warm-200)]/95 text-sm sm:text-base uppercase tracking-[0.2em]">
            {t.hero.subtitle}
          </p>
          <p className="text-[var(--warm-300)]/90 text-sm sm:text-base font-light">
            {t.hero.hours}
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--charcoal)]/40 border border-[var(--gold)]/40 backdrop-blur-sm">
            <Sunset className="w-5 h-5 text-[var(--gold)] shrink-0" aria-hidden="true" />
            <span className="text-[var(--warm-200)] text-sm sm:text-base font-medium">
              {t.hero.sunsetTonight}{" "}
              <span className="text-[var(--gold)] font-semibold">
                <SunsetTime />
              </span>
            </span>
          </div>
          <p className="text-[var(--gold)] text-base sm:text-lg font-medium italic">
            {t.hero.joinTheFun}
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-4 pt-4 sm:pt-6 flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="btn-primary inline-flex min-h-[44px] items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={t.hero.ctaMenuAria}
            >
              {t.hero.ctaMenu}
            </Link>
            <a
              href="tel:+13052952620"
              className="btn-hero min-h-[44px] inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={t.hero.ctaCallAria}
            >
              {t.hero.ctaCall}
            </a>
            {WAITLIST_ENABLED && (
              <Link
                href="/priority-seating"
                className="btn-primary btn-waitlist inline-flex min-h-[44px] items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={t.hero.waitlistCtaAria}
              >
                {t.hero.waitlistCta}
              </Link>
            )}
          </div>
          <div className="hero-cta-links flex flex-wrap gap-x-6 gap-y-1 justify-center">
            <Link
              href="/story"
              className="hero-cta-link text-sm transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-transparent rounded"
              aria-label={t.hero.ctaAria}
            >
              {t.hero.cta}
            </Link>
            <Link
              href="/story#anniversary-video"
              className="hero-cta-link text-sm transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-transparent rounded"
              aria-label={t.hero.watchVideoAria}
            >
              {t.hero.watchVideo}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <ArrowDown
          className="text-[var(--gold)]/70 w-7 h-7 sm:w-8 sm:h-8 animate-bounce"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}
