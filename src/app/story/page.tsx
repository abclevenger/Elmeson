import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Story - Family Tradition & Cuban Heritage",
  description: "Learn about El Meson de Pepe's history, founded by Pepe Diaz in 1984. Discover our family's journey from Cuba to Key West and our commitment to authentic Cuban cuisine.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Our Story - Family Tradition & Cuban Heritage | El Meson de Pepe",
    description: "Learn about El Meson de Pepe's history, founded by Pepe Diaz in 1984. Discover our family's journey from Cuba to Key West.",
    url: "https://www.elmesondepepe.com/story",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "El Meson de Pepe - Our Story",
      },
    ],
  },
  alternates: {
    canonical: "/story",
  },
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Our Story", url: "/story" },
      ]} />
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
              Our Story
            </h1>
            <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
              Family Tradition & Cuban Heritage
            </p>
          </div>
        </section>

        <div className="pb-20 px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El Meson de Pepe's Chef/Owner, Pepe Diaz, a native of Cuba, has lived in Key West, Florida for many years.
                  His passion for the culinary arts has been a driving force in establishing El Meson de Pepe as a landmark
                  for authentic Cuban cuisine in the Florida Keys.
                </p>
                <p>
                  In 1984, the Diaz family opened their first restaurant, bringing with them the cherished recipes of their homeland.
                  Today, located right next to the Mallory Square Sunset Celebration, El Meson de Pepe continues to offer a
                  unique dining experience that celebrates the spirit of Havana.
                </p>
                <p>
                  We are dedicated to quality, authenticity, and the preservation of our Cuban heritage. From our famous Salsa bands
                  to our signature Mojitos, every detail is crafted to transport you to the vibrant streets of Cuba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
