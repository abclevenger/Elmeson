"use client";

import ScrollReveal from "@/components/common/ScrollReveal";

export interface TimelineEntry {
  id: string;
  /** Optional year or span (e.g. "1941", "Mid-1980s"). */
  year?: string;
  label: string;
  detail?: string;
}

interface HeritageTimelineProps {
  entries: readonly TimelineEntry[];
  className?: string;
}

/**
 * Minimal archival timeline. Vertical layout with subtle divider lines.
 * Respects prefers-reduced-motion via ScrollReveal.
 */
export default function HeritageTimeline({ entries, className = "" }: HeritageTimelineProps) {
  return (
    <ScrollReveal className={className}>
      <div className="relative">
        {/* Vertical rule — aligned with bullet center */}
        <div
          className="absolute left-2 sm:left-[0.6rem] top-0 bottom-0 w-px bg-[var(--border)]"
          aria-hidden="true"
        />
        <ul className="space-y-8" role="list">
          {entries.map((entry) => (
            <li key={entry.id} className="relative pl-8 sm:pl-12" role="listitem">
              <div
                className="absolute left-0 top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--gold)] border border-[var(--charcoal)]/10"
                aria-hidden="true"
              />
              {entry.year && (
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--warm-500)] mb-0.5">
                  {entry.year}
                </p>
              )}
              <p className="font-serif text-[var(--charcoal)] font-medium tracking-tight">
                {entry.label}
              </p>
              {entry.detail && (
                <p className="text-sm text-[var(--warm-700)] font-light mt-1">
                  {entry.detail}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
