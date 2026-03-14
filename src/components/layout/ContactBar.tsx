"use client";

import Link from "next/link";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/site";
import { GA_EVENTS } from "@/lib/analytics";

export default function ContactBar() {
  return (
    <div
      suppressHydrationWarning
      className="no-print lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--charcoal)]/95 backdrop-blur-sm border-t border-white/10 px-3 py-3 flex items-center justify-between gap-2 safe-area-pb"
      role="complementary"
      aria-label="Quick contact and menu"
    >
      <a
        href="tel:+13052952620"
        onClick={() => GA_EVENTS.callClick()}
        className="flex items-center gap-1.5 text-[var(--warm-100)] text-sm font-medium hover:text-[var(--gold)] transition-colors min-h-[44px] flex-1 justify-center"
      >
        <Phone size={18} aria-hidden="true" />
        <span>Call</span>
      </a>
      <Link
        href="/menu"
        onClick={() => GA_EVENTS.menuClick()}
        className="flex items-center gap-1.5 text-[var(--warm-100)] text-sm font-medium hover:text-[var(--gold)] transition-colors min-h-[44px] flex-1 justify-center"
      >
        <UtensilsCrossed size={18} aria-hidden="true" />
        <span>Menu</span>
      </Link>
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => GA_EVENTS.directionsClick()}
        className="flex items-center gap-1.5 text-[var(--warm-100)] text-sm font-medium hover:text-[var(--gold)] transition-colors min-h-[44px] flex-1 justify-center"
      >
        <MapPin size={18} aria-hidden="true" />
        <span>Directions</span>
      </a>
    </div>
  );
}
