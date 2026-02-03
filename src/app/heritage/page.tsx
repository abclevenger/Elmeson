import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Explore the Heritage — Cuban American Conch History | Key West",
  description:
    "A living museum of Cuban American heritage in Key West. Notable figures, stories, and the enduring legacy of Cuban American Conchs.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Explore the Heritage | El Mesón de Pepe — Living Museum",
    description: "Cuban American Conch history and heritage in Key West.",
    url: "https://www.elmesondepepe.com/heritage",
  },
  alternates: { canonical: "/heritage" },
};

type Partner = {
  name: string;
  role: string;
  context: string;
  bio: string;
  href: string;
  hrefExternal?: boolean;
  image?: string;
  imageAlt?: string;
  objectFit?: string;
  objectPosition?: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Jose \"Pepe\" M. Diaz",
    role: "Original Founder",
    context: "El Mesón de Pepe on Duval Street",
    bio: "Chef and founder who brought Cuban cuisine and family recipes to Key West. Trained in the mesones of Spain; opened El Mesón de Pepe on Duval Street in the mid-1980s, creating the culinary foundation that continues at Mallory Square.",
    href: "/about/jose-m-diaz",
    hrefExternal: false,
    image: "/images/jose-pepe-diaz-portrait.png",
    imageAlt: "Jose \"Pepe\" M. Diaz — Chef, Founder of El Mesón de Pepe, Key West",
    objectFit: "contain",
  },
  {
    name: "Fred Salinero",
    role: "Co-Owner, Mallory Square",
    context: "Business partner and cultural heritage advocate",
    bio: "Manager of Casa Cayo Hueso, LLC and co-owner of the Mallory Square location. Founded the Cuban American Heritage Festival and the Cuban American Heritage Foundation to preserve Key West Cuban history. Restored the original Cuban Club into suites in 1983. Historian of Key West Cuban heritage and the cigar industry.",
    href: "https://cubanfest.com",
    hrefExternal: true,
    image: "/images/fred-salinero-portrait.png",
    imageAlt: "Fred Salinero — Co-owner, Mallory Square; Cuban American Heritage Festival founder",
  },
  {
    name: "Ed Swift",
    role: "Co-Owner, Mallory Square",
    context: "President, Historic Tours of America",
    bio: "Primary investor and visionary behind Casa Cayo Hueso y Habana at Mallory Square—the historic 1879 brick warehouse that houses El Mesón de Pepe. President and co-founder of Historic Tours of America. Partnered with the Díaz family to bring authentic Cuban cuisine and live salsa to Mallory Square. Civic leader: Monroe County Commissioner, Chamber of Commerce President, and steward of the Key West Historic Memorial Sculpture Garden.",
    href: "https://www.historictours.com",
    hrefExternal: true,
    image: "/images/edwin-swift-iii.png",
    imageAlt: "Ed Swift — Co-owner, Mallory Square; President, Historic Tours of America",
  },
];

export default function HeritagePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "The Archive", url: "/story" },
          { name: "Explore the Heritage", url: "/heritage" },
        ]}
      />
      <div className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section className="py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
              Living Museum
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-[var(--charcoal)] mb-4">
              Explore the Heritage
            </h1>
            <div className="h-px w-14 bg-[var(--gold)] mx-auto mb-8" />
            <p className="text-[var(--warm-700)] text-lg leading-relaxed font-light mb-10">
              A living museum of Cuban American Conch history in Key West—curated
              exhibits, notable figures, and the enduring legacy of Cuban American
              heritage at Mallory Square.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/jose-m-diaz"
                className="btn-primary inline-flex justify-center min-h-[var(--touch-target-min)] px-6"
              >
                Jose &quot;Pepe&quot; M. Diaz
              </Link>
              <Link
                href="/story"
                className="link-underline text-[var(--charcoal)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider inline-flex justify-center py-2"
              >
                The Archive
              </Link>
            </div>
          </div>
        </section>

        {/* Partners & Leadership */}
        <section className="py-16 md:py-24 bg-[var(--warm-100)] border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-3">
                Partnership & continuity
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--charcoal)]">
                Partners & Leadership
              </h2>
              <div className="h-px w-14 bg-[var(--gold)] mx-auto mt-3" />
              <p className="text-[var(--warm-700)] text-base font-light mt-6 max-w-2xl mx-auto">
                Jose &quot;Pepe&quot; M. Diaz founded El Mesón de Pepe on Duval Street. Fred Salinero
                and Ed Swift are business partners and co-owners of the Mallory Square
                location, stewarding the venue and its Cuban-Conch cultural mission.
              </p>
            </div>

            <div className="space-y-12">
              {PARTNERS.map((p, index) => (
                <article
                  key={p.name}
                  className="bg-[var(--background)] border border-[var(--border)] overflow-hidden transition-all duration-300 hover:border-[var(--gold)]/30"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`relative aspect-[4/5] md:aspect-[4/3] md:col-span-5 overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.imageAlt ?? p.name}
                          fill
                          className={p.objectFit === "contain" ? "object-contain object-center" : "object-cover"}
                          style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                          sizes="(max-width: 768px) 100vw, 42vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[var(--warm-200)]" aria-hidden="true" />
                      )}
                    </div>
                    <div className={`p-8 md:p-10 md:col-span-7 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <p className="text-xs uppercase tracking-wider text-[var(--gold)] mb-1">
                        {p.role}
                      </p>
                      <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--charcoal)] mb-1">
                        {p.name}
                      </h3>
                      <p className="text-sm text-[var(--warm-500)] mb-4">{p.context}</p>
                      <p className="text-[var(--warm-700)] text-base leading-relaxed font-light mb-6">
                        {p.bio}
                      </p>
                      {p.href && (
                        p.hrefExternal ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 btn-primary inline-flex text-sm px-6 py-2.5 w-fit"
                          >
                            Read more
                          </a>
                        ) : (
                          <Link
                            href={p.href}
                            className="shrink-0 btn-primary inline-flex text-sm px-6 py-2.5 w-fit"
                          >
                            Read more
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
