import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuSchema, BreadcrumbSchema } from "@/lib/schema";
import menuData from "@/data/menu.json";

export const metadata: Metadata = {
  title: "Cuban Restaurant Menu Key West | Authentic Dishes | Mallory Square",
  description:
    "Cuban restaurant menu Key West: Ropa Vieja, Lechón Asado, Cayo Hueso Cuban Mix, mojitos. Authentic Cuban dishes at Mallory Square waterfront. View our full menu.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cuban Restaurant Menu Key West | El Mesón de Pepe | Mallory Square",
    description: "Authentic Cuban dishes at Mallory Square—Ropa Vieja, Cuban sandwiches, tapas. Waterfront Cuban restaurant menu Key West.",
    url: "https://www.elmesondepepe.com/menu",
    images: [{ url: "/images/food_intro.png", width: 1200, height: 630, alt: "El Mesón de Pepe — Cuban American cuisine" }],
  },
  alternates: { canonical: "https://www.elmesondepepe.com/menu" },
};

const MENU_SECTIONS = [
  { id: "featured", label: "Featured" },
  { id: "tapas", label: "Tapas" },
  { id: "soups-salads-sides", label: "Soups & Salads" },
  { id: "cuban-entrees", label: "Entrees" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "kids-desserts", label: "Kids & Desserts" },
  { id: "drinks", label: "Drinks" },
  { id: "glossary", label: "Spanish Guide" },
] as const;

const SPANISH_GLOSSARY: { term: string; pronunciation: string; meaning: string }[] = [
  { term: "Ropa Vieja", pronunciation: "ROH-pah VYAY-hah", meaning: "Shredded beef — literally \"old clothes\"" },
  { term: "Lechón", pronunciation: "leh-CHOHN", meaning: "Roast pork" },
  { term: "Picadillo", pronunciation: "pee-kah-DEE-yoh", meaning: "Seasoned ground beef" },
  { term: "Bistec", pronunciation: "bee-STEK", meaning: "Steak" },
  { term: "Tostones", pronunciation: "toh-STOH-nehs", meaning: "Fried green plantains" },
  { term: "Plátanos Maduros", pronunciation: "PLAH-tah-nohs mah-DOO-rohs", meaning: "Sweet ripe plantains" },
  { term: "Yuca", pronunciation: "YOO-kah", meaning: "Cassava root" },
  { term: "Cayo Hueso", pronunciation: "KY-oh WAY-soh", meaning: "Key West — the island's original Spanish name" },
  { term: "Empanada", pronunciation: "em-pah-NAH-dah", meaning: "Savory turnover" },
  { term: "Mojo", pronunciation: "MOH-hoh", meaning: "Garlic-citrus sauce" },
  { term: "A la plancha", pronunciation: "ah lah PLAHN-chah", meaning: "Grilled" },
];

const FEATURED_WITH_IMAGES = [
  {
    name: "Completa de Caballo Grande",
    description: "Sample our 3 most popular Cuban dishes: Lechon Asado, Ropa Vieja, and Picadillo.",
    story: "A must-order if you're new to Cuban food.",
    image: "/images/lechon-asado.png",
    imageAlt: "Completa de Caballo Grande — Lechon Asado, Ropa Vieja, and Picadillo at El Mesón de Pepe",
  },
  {
    name: "Cayo Hueso Cuban Mix",
    description:
      "Sugar-glazed ham, roast pork, Swiss, pickles, mustard, mayonnaise on pressed Cuban bread. Plantain chips or fries.",
    story: "Cayo Hueso is Key West. The sandwich evolved on the island; our version is Conch continuity.",
    image: "/images/2017/05/ultimate-guide-to-the-cuban-sandwich-768x244.jpg",
    imageAlt: "Cayo Hueso Cuban Mix — Cuban American heritage, Key West",
  },
  {
    name: "Pepe's Cuban Nachos",
    description:
      "Plantain chips with Ropa Vieja, Picadillo, guacamole, cheese, tomatoes, onions. Shareable, distinctly ours.",
    story: "Cuban flavors reimagined for the table—tradition extended, not diluted.",
    image: "/images/cuban-nachos.png",
    imageAlt: "Pepe's Cuban Nachos — El Mesón de Pepe",
  },
];

export default function MenuPage() {
  return (
    <>
      <MenuSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "The Catalog", url: "/menu" }]} />

      <div className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/food_intro.png"
              alt="Cuban American cuisine at El Mesón de Pepe — Key West restaurant at Mallory Square"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--charcoal)]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-[var(--charcoal)]/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--warm-300)] mb-2">
              The catalog
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[var(--warm-100)] mb-3">
              Cuisine as Cultural Continuity
            </h1>
            <div className="h-px w-20 bg-[var(--gold)] mx-auto" />
            <p className="text-base md:text-lg text-[var(--warm-300)] max-w-xl mx-auto font-light mt-4">
              Living Cuban American tradition—each dish a note on how it evolved in Key West.
            </p>
          </div>
        </section>

        {/* Section jump nav — hidden when printing */}
        <nav
          aria-label="Menu sections"
          className="menu-print-hide sticky top-0 z-20 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)] shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto overflow-y-hidden py-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide overscroll-x-contain">
              {MENU_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[var(--warm-700)] hover:text-[var(--gold)] hover:bg-[var(--gold-light)] rounded-md transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Featured — cultural catalog */}
        <section id="featured" className="py-16 md:py-24 bg-[var(--warm-100)] border-b border-[var(--border)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs uppercase tracking-[0.25em] text-[var(--warm-700)] mb-10">
              From the catalog
            </p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {FEATURED_WITH_IMAGES.map((item) => (
                <article
                  key={item.name}
                  className="group bg-[var(--background)] border border-[var(--border)] overflow-hidden transition-all duration-300 hover:border-[var(--gold)]/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl font-serif font-light text-[var(--charcoal)] mb-2">
                      {item.name}
                    </h2>
                    <p className="text-[var(--warm-700)] text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {"story" in item && item.story && (
                      <p className="text-[var(--warm-700)] text-sm italic leading-relaxed border-l-2 border-[var(--gold)] pl-4">
                        {item.story}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/priority-seating"
                className="btn-primary btn-waitlist inline-flex menu-print-hide"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </section>

        {/* Restaurant interior — above Tapas */}
        <section className="py-8 md:py-12 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/restaurant-interior-dining.png"
                alt="El Mesón de Pepe dining room — Cuban-themed interior at Mallory Square"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>
        </section>

        {/* Tapas */}
        <section id="tapas" className="py-16 md:py-24 bg-[var(--background)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Tapas" />
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <MenuCard title="Featured" items={menuData.Tapas.Featured} highlight />
              <MenuCard title="Frituras de Cobo" items={menuData.Tapas["Frituras de Cobo"]} />
            </div>
            <div className="flex justify-center mt-12">
              <div className="relative w-full max-w-xs aspect-[4/3] rounded overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/tapas-three-dishes.png"
                  alt="Three Cuban tapas — plantain chips with Lechon Asado, Pepe's Cuban Nachos, and plantain cup sampler at El Mesón de Pepe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Salads, Soups & Sides */}
        <section id="soups-salads-sides" className="py-16 md:py-24 bg-[var(--warm-100)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Soups, Salads & Sides" />
            {menuData["Salads/Soups/Sides"].note && (
              <p className="text-center text-[var(--warm-700)] text-sm italic mb-10 max-w-2xl mx-auto">
                {menuData["Salads/Soups/Sides"].note}
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              <MenuCard title="Soups" items={menuData["Salads/Soups/Sides"].Soups} compact />
              <MenuCard title="Salads" items={menuData["Salads/Soups/Sides"].Featured} compact highlight />
              <MenuCard title="Sides" items={menuData["Salads/Soups/Sides"].Sides} compact />
            </div>
          </div>
        </section>

        {/* Cuban Entrees */}
        <section id="cuban-entrees" className="py-16 md:py-24 bg-[var(--background)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Cuban Entrees" />
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium uppercase tracking-widest text-[var(--gold)] mb-6">
                  Traditional favorites
                </h3>
                {(menuData["Cuban Entrees"] as { name: string; description?: string; price?: string }[]).map((item, idx) => (
                  <MenuItemBlock key={idx} name={item.name} desc={item.description} price={item.price} />
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-medium uppercase tracking-widest text-[var(--gold)] mb-6">
                  Seafood
                </h3>
                {(menuData["Featured Entrees"] as { name: string; description?: string }[]).map((item, idx) => (
                  <MenuItemBlock key={idx} name={item.name} desc={item.description} highlight />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sandwiches */}
        <section id="sandwiches" className="py-16 md:py-24 bg-[var(--warm-100)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Sandwiches" />
            {menuData.Sandwiches.note && (
              <p className="text-center text-[var(--warm-700)] text-sm italic mb-10">
                {menuData.Sandwiches.note}
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {menuData.Sandwiches.Featured.map((item: { name: string; description: string }, idx: number) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 bg-[var(--background)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--gold)]/30"
                >
                  <h4 className="text-lg font-serif font-medium text-[var(--charcoal)] mb-2">{item.name}</h4>
                  <p className="text-[var(--warm-700)] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids & Desserts */}
        <section id="kids-desserts" className="py-16 md:py-24 bg-[var(--background)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <MenuSectionHeading title="Kids Menu" small />
                {menuData["Kids Menu"].note && (
                  <p className="text-[var(--warm-700)] text-sm italic mb-6">{menuData["Kids Menu"].note}</p>
                )}
                <div className="p-6 md:p-8 bg-[var(--warm-100)] border border-[var(--border)] space-y-5">
                  {menuData["Kids Menu"].items.map((item: { name: string; description?: string }, idx: number) => (
                    <div key={idx}>
                      <h4 className="text-base font-serif font-medium text-[var(--charcoal)]">{item.name}</h4>
                      {item.description && <p className="text-[var(--warm-700)] text-sm mt-0.5">{item.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <MenuSectionHeading title="Desserts" small />
                {menuData["Dessert Menu"].note && (
                  <p className="text-[var(--warm-700)] text-sm italic mb-6">{menuData["Dessert Menu"].note}</p>
                )}
                <div className="p-6 md:p-8 bg-[var(--warm-100)] border border-[var(--border)] space-y-5">
                  {menuData["Dessert Menu"].items.map((item: { name: string; description: string }, idx: number) => (
                    <div key={idx}>
                      <h4 className="text-base font-serif font-medium text-[var(--charcoal)]">{item.name}</h4>
                      <p className="text-[var(--warm-700)] text-sm mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drinks teaser */}
        <section id="drinks" className="py-16 md:py-24 bg-[var(--warm-100)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Drinks" small />
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[var(--warm-700)] text-base md:text-lg font-light mb-6">
                Mojitos, caipirinhas, sangria, and Cuban cocktails—made to order at the Patio Bar. Perfect with tapas or sunset.
              </p>
              <Link
                href="/patio#cocktails"
                className="inline-flex items-center gap-2 text-[var(--gold)] font-medium uppercase tracking-wider text-sm hover:underline"
              >
                View full drink menu on the Patio
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Spanish glossary */}
        <section id="glossary" className="py-16 md:py-24 bg-[var(--background)] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuSectionHeading title="Cuban Spanish guide" small />
            <p className="text-center text-[var(--warm-700)] text-sm mb-10 max-w-xl mx-auto">
              Key terms from our menu—pronunciation and meaning.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {SPANISH_GLOSSARY.map((item) => (
                <div
                  key={item.term}
                  className="p-4 md:p-5 bg-[var(--warm-100)] border border-[var(--border)] rounded-sm"
                >
                  <div className="flex justify-between items-baseline gap-2 mb-1">
                    <span className="font-serif font-medium text-[var(--charcoal)]">{item.term}</span>
                    <span className="text-xs text-[var(--warm-500)] italic">{item.pronunciation}</span>
                  </div>
                  <p className="text-[var(--warm-700)] text-sm">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[var(--charcoal)] text-center">
          <p className="text-[var(--warm-300)] text-sm mb-4">
            First come, first served · Join us at Mallory Square
          </p>
          <Link href="/contact" className="btn-hero inline-flex">
            Plan Your Visit
          </Link>
        </section>
      </div>
    </>
  );
}

function MenuSectionHeading({ title, small }: { title: string; small?: boolean }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-serif font-light tracking-tight text-[var(--charcoal)] ${small ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>
        {title}
      </h2>
      <div className="h-0.5 w-14 bg-[var(--gold)] mx-auto mt-3" />
    </div>
  );
}

function MenuCard({
  title,
  items,
  highlight,
  compact,
}: {
  title: string;
  items: { name: string; description: string; favorite?: boolean; awardWinning?: boolean }[];
  highlight?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`p-8 md:p-10 rounded-sm border transition-all duration-300 ${
        highlight ? "bg-[var(--gold-light)] border-[var(--gold)]/30" : "bg-[var(--warm-100)] border-[var(--border)]"
      }`}
    >
      <h3 className={`font-serif font-medium uppercase tracking-wider mb-6 ${highlight ? "text-[var(--charcoal)]" : "text-[var(--warm-700)]"}`}>
        {title}
      </h3>
      <div className={compact ? "space-y-4" : "space-y-6"}>
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h4 className={`font-serif font-medium text-[var(--charcoal)] ${compact ? "text-base" : "text-lg"}`}>
                {item.name}
              </h4>
              {item.favorite && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40 shrink-0">
                  Favorite
                </span>
              )}
              {item.awardWinning && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40 shrink-0">
                  Award Winning
                </span>
              )}
            </div>
            <p className="text-[var(--warm-700)] text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuItemBlock({
  name,
  desc,
  price,
  highlight,
}: {
  name: string;
  desc?: string;
  price?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-5 md:p-6 border transition-all duration-300 hover:border-[var(--gold)]/30 ${
        highlight ? "bg-[var(--gold-light)] border-[var(--gold)]/20" : "bg-[var(--warm-100)] border-[var(--border)]"
      }`}
    >
      <div className="flex justify-between items-baseline gap-3">
        <h4 className="font-serif font-medium text-[var(--charcoal)]">{name}</h4>
        {price && (
          <span className="text-sm font-semibold shrink-0" style={{ color: "var(--gold)" }}>
            {price}
          </span>
        )}
      </div>
      {desc && <p className="text-[var(--warm-700)] text-sm leading-relaxed mt-1">{desc}</p>}
    </div>
  );
}
