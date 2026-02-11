import Script from "next/script";

interface SchemaProps {
  schema: Record<string, any>;
}

export function JsonLd({ schema }: SchemaProps) {
  return (
    <Script
      id={`schema-${JSON.stringify(schema).slice(0, 20)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

// Restaurant/LocalBusiness Schema — homepage + rich results
export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.elmesondepepe.com/#restaurant",
    name: "El Mesón de Pepe",
    image: "https://www.elmesondepepe.com/images/el-meson-de-pepe-key-west-logo.webp",
    description: "A living museum of Cuban American heritage in Key West. El Mesón de Pepe guards Cuban American Conch history at Mallory Square—cuisine as cultural expression, since 1997.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "410 Wall Street",
      addressLocality: "Key West",
      addressRegion: "FL",
      postalCode: "33040",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.555239984199105",
      longitude: "-81.80786948498226",
    },
    url: "https://www.elmesondepepe.com",
    telephone: "+1-305-295-2620",
    email: "info@elmesondepepe.com",
    priceRange: "$$",
    servesCuisine: "Cuban",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "150",
    },
    sameAs: [
      "https://www.facebook.com/ElMesonKeyWest/",
      "https://www.instagram.com/elmesondepepe/",
      "https://www.linkedin.com/company/el-meson-de-pepe",
      "https://www.tiktok.com/@elmesondepepe",
    ],
    foundingDate: "1986",
    founder: {
      "@type": "Person",
      name: "Jose \"Pepe\" M. Diaz",
    },
  };

  return <JsonLd schema={schema} />;
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.elmesondepepe.com/#organization",
    name: "El Meson de Pepe",
    url: "https://www.elmesondepepe.com",
    logo: "https://www.elmesondepepe.com/images/el-meson-de-pepe-key-west-logo.webp",
    description: "Living museum of Cuban American heritage in Key West. Guardian of Cuban American Conch history at Mallory Square; traditional Cuban cuisine as cultural continuity.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "410 Wall Street",
      addressLocality: "Key West",
      addressRegion: "FL",
      postalCode: "33040",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-305-295-2620",
      contactType: "Customer Service",
      email: "info@elmesondepepe.com",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      "https://www.facebook.com/ElMesonKeyWest/",
      "https://www.instagram.com/elmesondepepe/",
      "https://www.linkedin.com/company/el-meson-de-pepe",
      "https://www.tiktok.com/@elmesondepepe",
    ],
    foundingDate: "1984",
  };

  return <JsonLd schema={schema} />;
}

// BreadcrumbList Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.elmesondepepe.com${item.url}`,
    })),
  };

  return <JsonLd schema={schema} />;
}

// Menu Schema — for menu page and rich results
export function MenuSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://www.elmesondepepe.com/menu#menuschema",
    name: "Cuban Restaurant Menu | El Mesón de Pepe Key West",
    description: "Authentic Cuban cuisine menu at Mallory Square, Key West. Ropa Vieja, Lechón Asado, Cayo Hueso Cuban Mix, tapas, mojitos.",
    url: "https://www.elmesondepepe.com/menu",
    inLanguage: "en",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Tapas / Appetizers",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Pepe's Cuban Nachos", description: "Plantain chips with Ropa Vieja, Picadillo, guacamole" },
          { "@type": "MenuItem", name: "Empanadas de Carne o Pollo", description: "Cuban turnovers filled with seasoned beef or chicken" },
          { "@type": "MenuItem", name: "Tostones Rellenos", description: "Stuffed green plantains with pork, Picadillo, Ropa Vieja" },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Cuban Entrees",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Ropa Vieja", description: "Shredded beef in tomato sauce with onions, peppers, rice, black beans, plantains" },
          { "@type": "MenuItem", name: "Lechón Asado", description: "Roast pork with mojo criollo, rice, black beans, plantains" },
          { "@type": "MenuItem", name: "Completa de Caballo Grande", description: "Lechon Asado, Ropa Vieja, and Picadillo sampler" },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sandwiches",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Cayo Hueso Cuban Mix", description: "Ham, roast pork, Swiss, pickles, mustard on pressed Cuban bread" },
        ],
      },
    ],
  };

  return <JsonLd schema={schema} />;
}

// Article Schema (for blog posts)
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || "https://www.elmesondepepe.com/images/el-meson-de-pepe-key-west-logo.webp",
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || "El Meson de Pepe",
    },
    publisher: {
      "@type": "Organization",
      name: "El Meson de Pepe",
      logo: {
        "@type": "ImageObject",
        url: "https://www.elmesondepepe.com/images/el-meson-de-pepe-key-west-logo.webp",
      },
    },
  };

  return <JsonLd schema={schema} />;
}

// FAQPage Schema for LLM/snippet visibility
export function FAQSchema({ items }: { items: readonly { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <JsonLd schema={schema} />;
}
