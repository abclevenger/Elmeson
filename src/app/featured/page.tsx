import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Featured on Food Paradise — Meals Over Miami",
  description:
    "El Mesón de Pepe was featured in Food Paradise (Travel Channel) — 'Meals Over Miami' S14 E2, aired September 2, 2020 — as a living expression of Cuban American heritage in Key West.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Featured on Food Paradise | El Mesón de Pepe",
    description: "Food Paradise (Travel Channel) — Meals Over Miami S14 E2, September 2, 2020. Cuban American heritage in Key West.",
    url: "https://www.elmesondepepe.com/featured",
  },
  alternates: { canonical: "/featured" },
};

const IMDB_EPISODE_URL = "https://www.imdb.com/title/tt13410186/";

const WHERE_TO_WATCH = {
  subscription: [
    { name: "Max (HBO Max)", url: "https://www.max.com/" },
    { name: "Philo", url: "https://www.philo.com/" },
    { name: "YouTube TV", url: "https://tv.youtube.com/" },
  ],
  buyRent: [
    { name: "Apple TV", url: "https://tv.apple.com/", note: "From $22.99/season" },
    { name: "Amazon Prime Video", url: "https://www.primevideo.com/", note: "From $24.99/season" },
    { name: "Google Play", url: "https://play.google.com/store/movies", note: "Buy/rent" },
  ],
  free: [
    { name: "Spectrum On Demand", url: "https://www.spectrum.net/", note: "Free with Spectrum" },
    { name: "The Roku Channel", url: "https://therokuchannel.roku.com/", note: "Free" },
  ],
};

export default function FeaturedPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Featured", url: "/featured" }]} />
      <div className="min-h-screen bg-[var(--background)]">
        <section className="py-20 md:py-28 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Documented in American Culinary History
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-4">
              Featured on Food Paradise — &ldquo;Meals Over Miami&rdquo;
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mb-8" />
            <p className="text-[var(--warm-700)] text-lg leading-relaxed mb-6 font-light">
              El Mesón de Pepe was featured in Food Paradise not simply as a restaurant, but as a
              living expression of Cuban American heritage in Key West—where food, family, and
              history converge.
            </p>
            <p className="text-[var(--warm-700)] text-sm mb-10">
              <cite className="not-italic text-[var(--warm-500)]">
                Food Paradise (Travel Channel) — &ldquo;Meals Over Miami&rdquo; S14 E2, aired September 2, 2020
              </cite>
            </p>

            {/* Where to Watch */}
            <div id="where-to-watch" className="mb-12 p-6 md:p-8 bg-[var(--warm-100)] border border-[var(--border)] rounded-sm scroll-mt-24">
              <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-1">
                Where to Watch
              </h2>
              <p className="text-sm text-[var(--warm-700)] mb-6">
                Food Paradise: Meals Over Miami — Season 14, Episode 2
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-3">
                    Subscription
                  </h3>
                  <ul className="space-y-2" role="list">
                    {WHERE_TO_WATCH.subscription.map(({ name, url }) => (
                      <li key={name}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--charcoal)] hover:text-[var(--gold)] font-medium transition-colors"
                        >
                          {name}
                        </a>
                        <span className="text-[var(--warm-500)] text-sm ml-2">— Subscription</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-3">
                    Buy / Rent
                  </h3>
                  <ul className="space-y-2" role="list">
                    {WHERE_TO_WATCH.buyRent.map(({ name, url, note }) => (
                      <li key={name}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--charcoal)] hover:text-[var(--gold)] font-medium transition-colors"
                        >
                          {name}
                        </a>
                        {note && (
                          <span className="text-[var(--warm-500)] text-sm ml-2">— {note}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-3">
                    Free
                  </h3>
                  <ul className="space-y-2" role="list">
                    {WHERE_TO_WATCH.free.map(({ name, url, note }) => (
                      <li key={name}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--charcoal)] hover:text-[var(--gold)] font-medium transition-colors"
                        >
                          {name}
                        </a>
                        {note && (
                          <span className="text-[var(--warm-500)] text-sm ml-2">— {note}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 pt-6 border-t border-[var(--border)]">
                <a
                  href={IMDB_EPISODE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
                >
                  View on IMDb — Seasons &amp; episodes
                </a>
              </p>
            </div>

            <Link
              href="/"
              className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
            >
              Return home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
