"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import HeritageTimeline from "@/components/about/HeritageTimeline";

export default function StoryPageContent() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt={t.story.imgAlt}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-[var(--charcoal)]/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-300)] mb-2">
            {t.story.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-3">
            {t.story.title}
          </h1>
          <div className="h-px w-20 bg-[var(--gold)] mx-auto" />
        </div>
      </section>

      <div className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[var(--warm-700)] text-lg leading-relaxed mb-6 font-light">
            {t.story.p1}
          </p>
          <p className="text-[var(--warm-700)] text-lg leading-relaxed mb-6 font-light">
            {t.story.p2}
          </p>
          <p className="text-[var(--warm-700)] text-lg leading-relaxed font-light">
            <em>{t.story.p3}</em>
          </p>

          {/* 20 Year Anniversary Video */}
          <section id="anniversary-video" className="mt-14 mb-14 scroll-mt-24" aria-labelledby="anniversary-video-heading">
            <h2 id="anniversary-video-heading" className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)] text-center mb-6">
              {t.story.anniversaryVideo}
            </h2>
            <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden border border-[var(--border)] shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/f9p7vGM9sa0?si=pgUNkY0CgeO56Chj"
                title={t.story.anniversaryVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </section>

          {/* El Mesón de Pepe Restaurant Timeline */}
          <section className="mt-14 mb-14" aria-labelledby="restaurant-timeline-heading">
            <h2 id="restaurant-timeline-heading" className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)] text-center mb-10">
              {t.story.restaurantTimelineTitle}
            </h2>
            <HeritageTimeline entries={t.story.restaurantTimeline} />
          </section>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="/story/history" className="btn-primary inline-flex justify-center">
              {t.story.ctaHistory}
            </Link>
            <Link href="/heritage" className="btn-primary inline-flex justify-center bg-transparent border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--warm-100)]">
              {t.story.ctaHeritage}
            </Link>
            <Link href="/contact" className="btn-primary inline-flex justify-center bg-transparent border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--warm-100)]">
              {t.story.ctaVisit}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
