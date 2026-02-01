"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Site-wide anniversary banner: 40 Years in Business · 30 Years at Mallory Square.
 * Appears below the navbar on all pages.
 */
export default function AnniversaryBanner() {
  const { t } = useLanguage();
  return (
    <div
      className="menu-print-hide no-print bg-[var(--charcoal)] text-[var(--warm-100)] text-center py-2 px-4 text-xs sm:text-sm font-medium uppercase tracking-wider"
      role="complementary"
      aria-label={t.common.milestones}
    >
      <Link
        href="/story#anniversary-video"
        className="hover:text-[var(--gold)] transition-colors inline-block"
      >
        {t.common.milestones}
      </Link>
    </div>
  );
}
