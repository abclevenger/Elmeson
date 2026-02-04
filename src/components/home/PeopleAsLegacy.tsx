"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ROTATE_INTERVAL_MS = 5000;

const LEGACY_IDS = [
  { id: "pepeDiaz" as const, image: "/images/jose-m-diaz-portrait.png", moreInfoHref: "/about/jose-m-diaz" },
  {
    id: "diazes" as const,
    images: ["/images/diaz-family.png", "/images/diaz-family-2.png"],
    objectPosition: "50% 50%" as const,
    widerImage: true,
  },
];

export default function PeopleAsLegacy() {
  const { t } = useLanguage();
  const [diazImageIndex, setDiazImageIndex] = useState(0);

  useEffect(() => {
    const diazItem = LEGACY_IDS.find((i) => "images" in i && i.images && i.images.length > 1);
    if (!diazItem || !("images" in diazItem) || !diazItem.images) return;
    const interval = setInterval(() => {
      setDiazImageIndex((prev) => (prev + 1) % diazItem.images!.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section-anchor bg-[var(--warm-100)] text-[var(--charcoal)] overflow-hidden border-t border-[var(--border)]"
      aria-label={t.legacy.ariaLabel}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
            {t.legacy.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-2">
            {t.legacy.title}
          </h2>
          <div className="h-px w-16 bg-[var(--gold)] mx-auto mt-4" />
          <p className="text-[var(--warm-700)] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            {t.legacy.subtitle}
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {LEGACY_IDS.map((item, index) => {
            const f = t.legacy[item.id];
            return (
              <ScrollReveal key={item.id} delay={index * 80}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div
                    className={`relative lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    {"images" in item && item.images && item.images.length > 0 ? (
                      <div
                        className={`relative mx-auto overflow-hidden border border-[var(--border)] ${
                          "widerImage" in item && item.widerImage
                            ? "aspect-[4/3] max-w-xl lg:max-w-none w-full"
                            : "aspect-[4/5] max-w-md lg:max-w-none"
                        }`}
                        aria-live="polite"
                        aria-label={f.imageAlt}
                      >
                        {item.images.map((src, i) => {
                          const isVisible = item.id === "diazes" && i === diazImageIndex;
                          return (
                          <div
                            key={src}
                            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                            style={{ opacity: isVisible ? 1 : 0 }}
                            aria-hidden={!isVisible}
                          >
                            <Image
                              src={src}
                              alt={isVisible ? f.imageAlt : ""}
                              fill
                              className="object-cover"
                              style={"objectPosition" in item ? { objectPosition: item.objectPosition } : undefined}
                              sizes={"widerImage" in item && item.widerImage ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 42vw"}
                              loading={i === 0 ? "lazy" : "lazy"}
                              quality={88}
                            />
                          </div>
                          );
                        })}
                        <div
                          className="absolute inset-0 ring-1 ring-inset ring-[var(--charcoal)]/5 pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>
                    ) : item.image ? (
                      <div
                        className={`relative mx-auto overflow-hidden border border-[var(--border)] ${
                          "widerImage" in item && item.widerImage
                            ? "aspect-[4/3] max-w-xl lg:max-w-none w-full"
                            : "aspect-[4/5] max-w-md lg:max-w-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={f.imageAlt}
                          fill
                          className="object-cover"
                          style={"objectPosition" in item ? { objectPosition: item.objectPosition } : undefined}
                          sizes={"widerImage" in item && item.widerImage ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 42vw"}
                          loading="lazy"
                          quality={88}
                        />
                        <div
                          className="absolute inset-0 ring-1 ring-inset ring-[var(--charcoal)]/5"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div
                        className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none bg-[var(--warm-200)] border border-[var(--border)] flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="font-serif text-[var(--warm-500)] text-4xl md:text-5xl italic">
                          {f.name.split(" ").slice(-1)[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`lg:col-span-7 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-1">
                      {f.role}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)] mb-1">
                      {f.name}
                    </h3>
                    <p className="text-sm text-[var(--warm-700)] mb-4">
                      {f.dates}
                    </p>
                    {"quote" in f && f.quote && (
                      <blockquote
                        className={`font-serif text-lg md:text-xl text-[var(--charcoal)] italic mb-6 py-1 ${
                          index % 2 === 1
                            ? "border-r-2 border-[var(--gold)] pr-5 lg:text-right"
                            : "border-l-2 border-[var(--gold)] pl-5"
                        }`}
                      >
                        &ldquo;{f.quote}&rdquo;
                      </blockquote>
                    )}
                    <p className="text-[var(--warm-700)] text-base md:text-lg leading-relaxed font-light">
                      {f.impact}
                    </p>
                    {"moreInfoHref" in item && item.moreInfoHref && (
                      <div className={`mt-6 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                        <Link
                          href={item.moreInfoHref}
                          className="inline-flex items-center gap-2 text-[var(--charcoal)] font-medium text-sm uppercase tracking-wider border-b-2 border-[var(--gold)] pb-0.5 hover:text-[var(--gold)] transition-colors"
                          aria-label={t.legacy.moreInfoAria}
                        >
                          {t.legacy.moreInfo}
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="text-center mt-16">
          <Link
            href="/story"
            className="btn-primary inline-flex"
            aria-label={t.legacy.ctaAria}
          >
            {t.legacy.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
