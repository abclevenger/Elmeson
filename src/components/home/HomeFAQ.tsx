"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/common/ScrollReveal";
import { WAITLIST_ENABLED } from "@/lib/config";

export default function HomeFAQ() {
  const { t } = useLanguage();
  const faq = t.homeFaq ?? [];
  const faqList = Array.isArray(faq) ? faq : [];
  if (faqList.length === 0) return null;

  return (
    <section
      className="section-anchor bg-[var(--warm-100)] border-t border-[var(--border)]"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2
            id="home-faq-heading"
            className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)]"
          >
            {typeof t.homeFaqTitle === "string" ? t.homeFaqTitle : "Frequently asked questions"}
          </h2>
          <div className="h-px w-14 bg-[var(--gold)] mx-auto mt-3" />
        </ScrollReveal>
        <ul className="space-y-8">
          {faqList.map((item: { q: string; a: string }, idx: number) => {
            let answer = item.a;
            if (!WAITLIST_ENABLED && (item.q === "Do you take reservations?" || item.q === "¿Aceptan reservaciones?")) {
              // @ts-ignore - Dynamic property access on t might trigger TS error if types aren't fully perfectly inferred yet
              answer = t.faqReservationsAnswer_noWaitlist || answer;
            }

            return (
              <ScrollReveal key={idx} delay={idx * 50}>
                <li>
                  <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-[var(--warm-700)] text-base leading-relaxed font-light">
                    {answer}
                  </p>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </div>
    </section>
  );
}
