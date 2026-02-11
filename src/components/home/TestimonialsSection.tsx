"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const quotes: readonly string[] = (t.testimonials as { quotes?: readonly string[] })?.quotes ?? [
    "Came for one mojito, stayed for the sunset and the band.",
    "Best spot in Mallory Square for drinks before dinner.",
    "The patio at sunset with live music—exactly what we wanted in Key West.",
    "Authentic Cuban flavors. The Ropa Vieja is incredible.",
    "A Key West institution. Don't miss the Mallory Square sunset from here.",
  ];

  return (
    <section
      className="section-supporting bg-[var(--warm-100)] border-t border-[var(--border)]"
      aria-label={t.testimonials?.ariaLabel ?? "What guests say about El Mesón de Pepe"}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
            {t.testimonials?.eyebrow ?? "What guests say"}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)]">
            {t.testimonials?.title ?? "In Their Words"}
          </h2>
          <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mt-3" />
        </ScrollReveal>
        <ul className="space-y-8">
          {quotes.map((quote, idx) => (
            <li key={idx} className="text-center">
              <ScrollReveal delay={idx * 60}>
                <blockquote className="text-[var(--warm-700)] text-lg md:text-xl font-light italic leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
