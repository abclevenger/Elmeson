import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/lib/schema";
import { convertWordPressContent } from "@/lib/wordpress-content";
import pagesData from "@/data/pages.json";

export const metadata: Metadata = {
  title: "Patio Bar - Key West Cocktails & Live Music | El Meson de Pepe",
  description: "Start your night off right with refreshing cocktails and live salsa music on the Patio Bar. Enjoy the best mojitos and caipirinhas on the island.",
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
    title: "Patio Bar - Key West Cocktails & Live Music | El Meson de Pepe",
    description: "Start your night off right with refreshing cocktails and live salsa music on the Patio Bar. Enjoy the best mojitos and caipirinhas on the island.",
    url: "https://www.elmesondepepe.com/patio",
  },
  alternates: {
    canonical: "/patio",
  },
};

const patioPage = pagesData.find((p) => p.slug === "key-west-bar");

export default function PatioBarPage() {
  const content = patioPage ? convertWordPressContent(patioPage.content) : "";

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Patio Bar", url: "/patio" },
        ]}
      />
      <div className="bg-white min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">
              Patio Bar
            </h1>
            <p className="text-gray-600 text-lg">
              Authentic Cuban Cocktails & Live Salsa Music
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
          </div>

          {/* Hero Image */}
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/images/2014/05/key-west-restaurant-patio-bar.jpg"
              alt="Patio Bar at El Meson de Pepe"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
}

