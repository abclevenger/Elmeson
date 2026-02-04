import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";
import { GOOGLE_MAPS_URL } from "@/lib/site";
import SunsetTime from "@/components/SunsetTime";

export const metadata: Metadata = {
  title: "Patio Bar — Sunset Drinks & Live Music | Mallory Square | El Mesón de Pepe",
  description:
    "Cuban cocktails, live Caribbean music, and Mallory Square sunset views. No reservations—walk in or join the waitlist for a specific time. Best sunset bar in Key West.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Patio Bar — Sunset Drinks & Live Music | Mallory Square | El Mesón de Pepe",
    description: "Cuban cocktails, live Caribbean music, and Mallory Square sunset views. Walk-ins welcome.",
    url: "https://www.elmesondepepe.com/patio",
  },
  alternates: { canonical: "/patio" },
};

export default function PatioBarPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Patio Bar", url: "/patio" }]} />

      <div className="min-h-screen bg-[var(--background)]">
        <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/key-west-bars-el-meson-patio-2048x751.png"
              alt="El Meson de Pepe Patio Bar — Mallory Square"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--charcoal)]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/85 via-transparent to-[var(--charcoal)]/40" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-3">
              Drinks, Live Music, and the Key West Sunset
            </h1>
            <div className="h-0.5 w-20 bg-[var(--gold)] mx-auto mb-4" />
            <p className="text-lg md:text-xl text-[var(--warm-300)] max-w-2xl mx-auto font-light mb-6">
              The Patio Bar at Mallory Square. Cuban cocktails and Caribbean music by the water—your first stop before Duval.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/priority-seating" className="btn-primary btn-waitlist inline-flex">
                Join the Waitlist
              </Link>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex border border-[var(--warm-100)] text-[var(--warm-100)] hover:bg-[var(--warm-100)] hover:text-[var(--charcoal)]">
                Get Directions
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--warm-100)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Tonight&apos;s Flow</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ol className="space-y-4 text-[var(--warm-700)] text-base md:text-lg font-light">
              <li><strong className="text-[var(--charcoal)] font-medium">1. Arrive</strong> — Walk in (first come, first served) or put your name on the waitlist for a specific time. Grab a seat on the patio.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">2. Order</strong> — A mojito, a caipirinha, or something tropical. We&apos;ll get it to you.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">3. Sunset &amp; music</strong> — <Link href="/sunset" className="text-[var(--gold)] hover:underline">Key West sunset</Link> over the Gulf. Live Caribbean music nightly.</li>
              <li><strong className="text-[var(--charcoal)] font-medium">4. Stay or go</strong> — Tapas and dinner here, or head to Duval when you&apos;re ready.</li>
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Why the Patio</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ul className="space-y-3 text-[var(--warm-700)] text-base md:text-lg font-light">
              <li><strong className="text-[var(--charcoal)]">Live Caribbean music nightly</strong> — Caribe of Key West, the island&apos;s only local Salsa band</li>
              <li><strong className="text-[var(--charcoal)]">Front-row Mallory Square sunset views</strong> over the Gulf</li>
              <li><strong className="text-[var(--charcoal)]">No reservations</strong> — walk in (first come, first served) or join the waitlist for a specific time</li>
              <li><strong className="text-[var(--charcoal)]">Award-winning mojitos</strong> and hand-crafted Cuban cocktails</li>
              <li><strong className="text-[var(--charcoal)]">Groups and couples</strong> — patio seating for two or a crowd</li>
              <li><strong className="text-[var(--charcoal)]">Right at the water</strong> — best sunset bar in Mallory Square</li>
            </ul>
            <p className="mt-8 text-[var(--warm-700)] text-lg leading-relaxed text-center">
              Key West is full of great bars—but few offer Cuban flavors, live Salsa, and sunset views in one spot. Start here, then wander down Duval when you&apos;re ready. <Link href="/sunset" className="text-[var(--gold)] hover:underline">Sunset Celebration at Mallory Square</Link> is right outside.
            </p>
          </div>
        </section>

        <section id="cocktails" className="py-16 md:py-24 px-4 bg-[var(--warm-100)]" aria-labelledby="cocktails-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="cocktails-heading" className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)] mb-2">
                Cocktail specialties
              </h2>
              <p className="text-[var(--gold)] font-serif font-light text-lg mt-1">Classics with a Cuban twist</p>
              <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mt-3" />
              <p className="mt-4 text-[var(--warm-700)] text-lg max-w-2xl mx-auto font-light">
                Something cold, something Cuban. Our drinks are made to order with fresh ingredients. Start with a classic, then explore.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-[var(--gold)]/30 shadow-lg">
                <Image
                  src="/images/key-west-mojito.png"
                  alt="Award-winning Meson Mojito — fresh mint, lime, and rum"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-[var(--gold)]/30 shadow-lg">
                <Image
                  src="/images/el-meson-de-pepe-sangria.png"
                  alt="Pepe's Homemade Sangria — patio bar at El Mesón de Pepe"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-[var(--gold)]/30 shadow-lg">
                <Image
                  src="/images/patio-cocktail-specialty.png"
                  alt="Signature cocktail — hand-crafted Cuban drinks at the Patio Bar, Mallory Square"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <div className="p-8 md:p-10 bg-[var(--background)] border border-[var(--border)] border-l-4 border-l-[var(--gold)]">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)] mb-6">Signature</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xl font-serif font-medium text-[var(--charcoal)]">Meson Mojito</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40">Award winning</span>
                    </div>
                    <p className="text-[var(--warm-700)] text-sm leading-relaxed">
                      Fresh mint, lime, and rum. The one we&apos;re known for. Order it in a 14&nbsp;oz. souvenir glass and take the night home.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-medium text-[var(--charcoal)] mb-1">Caipirinha</h4>
                    <p className="text-[var(--warm-700)] text-sm leading-relaxed">
                      Crushed lime, sugar, and cachaça. Refreshing, strong, and made for the patio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 bg-[var(--background)] border border-[var(--border)]">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)] mb-6">Fan favorite</h3>
                <ul className="space-y-5">
                  {[
                    { name: "Pepe's Homemade Sangria", desc: "Glass, ½ carafe, or carafe" },
                    { name: "Agent Orange", desc: "Jose Cuervo Gold and Grand Marnier, chilled" },
                    { name: "Tangerine Dream", desc: "Vodka, Cointreau, peach schnapps, orange and cranberry" },
                    { name: "Cuba Libre", desc: "Bacardi and Mexican Coca-Cola on the rocks with lime" },
                    { name: "Pepe's Lemonade", desc: "Bacardi Limón and tropical refreshment" },
                  ].map((item) => (
                    <li key={item.name}>
                      <h4 className="text-lg font-serif font-medium text-[var(--charcoal)]">{item.name}</h4>
                      <p className="text-[var(--warm-700)] text-sm italic">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-[var(--warm-600)] text-sm mt-10 font-light">
              Ask your server for our full drink menu.
            </p>
            <p className="text-center mt-6">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-[var(--gold)] font-medium uppercase tracking-wider text-sm hover:underline"
              >
                View our full food menu
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Live music</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <div className="relative aspect-video w-full max-w-2xl mx-auto mb-8 rounded overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/live-band-90-miles.png"
                alt="Caribe of Key West — live Salsa band at El Mesón de Pepe, 90 Miles to Cuba"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="p-8 md:p-10 bg-[var(--warm-100)] border border-[var(--border)] border-l-4 border-l-[var(--gold)]">
              <h3 className="text-lg font-serif font-medium text-[var(--charcoal)] mb-2">Caribe of Key West</h3>
              <p className="text-[var(--warm-700)] text-base leading-relaxed mb-4">
                The island&apos;s only local Salsa band plays every evening before and during sunset. Live Caribbean music—part of the Mallory Square ritual.
              </p>
              <p className="text-[var(--warm-700)] text-sm italic">
                Arrive 1–2 hours before sunset for the best seats. Sunset tonight: <SunsetTime />
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">What guests say about the Patio</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <ul className="space-y-6 text-[var(--warm-700)] text-base md:text-lg font-light italic">
              <li>&ldquo;Came for one mojito, stayed for the sunset and the band.&rdquo;</li>
              <li>&ldquo;Best spot in Mallory Square for drinks before dinner.&rdquo;</li>
              <li>&ldquo;The patio at sunset with live music—exactly what we wanted in Key West.&rdquo;</li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-[var(--warm-100)]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-[var(--charcoal)] mb-6 text-center">Patio Bar FAQ</h2>
            <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mb-8" />
            <dl className="space-y-6 text-[var(--warm-700)]">
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Do we take reservations?</dt>
                <dd>We don&apos;t take reservations. You can walk in (first come, first served) or put your name on the waitlist for a specific time. Come early for sunset seats.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">When&apos;s the best time to get a table for the Key West sunset?</dt>
                <dd>Arrive 1–2 hours before sunset to secure a patio spot and enjoy the build-up.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">When does the live music start?</dt>
                <dd>Live Caribbean music plays every evening before and during sunset.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Can we bring a group?</dt>
                <dd>Yes. The patio fits couples and groups. Walk in or join the waitlist for a specific time; we&apos;ll seat you as space allows.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">Is it family-friendly?</dt>
                <dd>Yes. All ages welcome. Kids can enjoy the music and the view.</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--charcoal)] mb-1">What&apos;s the vibe—what should we wear?</dt>
                <dd>Key West casual. Sandals and shorts are fine. Relaxed, waterfront, Caribbean.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <div>
                <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-6">Strong &amp; tropical</h2>
                <div className="h-0.5 w-12 bg-[var(--gold)] mb-6" />
                <div className="space-y-5 p-6 md:p-8 bg-[var(--warm-100)] border border-[var(--border)]">
                  {[
                    { name: "Piña Colada", desc: "Coconut and pineapple with Flor de Caña Rum, dark rum float." },
                    { name: "Rum Runner", desc: "Dark and light rums, crème de banana, blackberry brandy, juices." },
                    { name: "Daiquiri", desc: "Flor de Caña with lime, strawberry, or mango — frozen." },
                    { name: "Banana Bash", desc: "Cruzan Banana rum and crème de banana, frozen." },
                    { name: "Margarita", desc: "Tequila, triple sec, sour, lime — rocks or frozen, with or without salt." },
                    { name: "Gold / Grand Gold Margarita", desc: "Premium tequila; Grand Gold adds Grand Marnier." },
                  ].map((item) => (
                    <div key={item.name}>
                      <h4 className="font-serif font-medium text-[var(--charcoal)]">{item.name}</h4>
                      <p className="text-[var(--warm-700)] text-sm mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-6">Beer</h2>
                <div className="h-0.5 w-12 bg-[var(--gold)] mb-6" />
                <div className="grid gap-4">
                  {[
                    { title: "Domestic", items: "Budweiser, Bud Light, Miller Light, O'Douls" },
                    { title: "Premium", items: "Corona, Presidente, Negra Modelo, Heineken, Hatuey" },
                    { title: "On tap", items: "Bud Light, Coors Light, Michelob AmberBoch, Shipyard IPA" },
                  ].map((s) => (
                    <div key={s.title} className="p-5 md:p-6 bg-[var(--warm-100)] border border-[var(--border)]">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)] mb-2">{s.title}</h4>
                      <p className="text-[var(--warm-700)] text-sm">{s.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--charcoal)] text-center px-4">
          <p className="text-[var(--warm-200)] text-lg font-light max-w-xl mx-auto mb-8">
            Mallory Square, the Gulf, and a drink in your hand. No reservations—walk in or join the waitlist for a specific time. <Link href="/sunset" className="text-[var(--gold)] hover:underline">See our Sunset Celebration page</Link> for the full show.
          </p>
<div className="flex flex-wrap gap-4 justify-center">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex">
                Get Directions
              </a>
              <Link href="/priority-seating" className="btn-primary btn-waitlist inline-flex">
                Join Waitlist
              </Link>
            </div>
        </section>
      </div>
    </>
  );
}
