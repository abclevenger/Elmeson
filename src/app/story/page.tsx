import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import StoryPageContent from "./StoryPageContent";

export const metadata: Metadata = {
  title: "History of El Mesón de Pepe Key West | Cuban American Heritage",
  description:
    "Discover the history of El Mesón de Pepe in Key West—40 years of Cuban American heritage. From Duval Street to Mallory Square. The Díaz family story, the table that became history.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "History of El Mesón de Pepe Key West | Cuban American Heritage",
    description: "40 years of Cuban American history in Key West. The Díaz family, Mallory Square, and the table that became a living museum.",
    url: "https://www.elmesondepepe.com/story",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "El Mesón de Pepe — Mallory Square, Key West" }],
  },
  alternates: { canonical: "https://www.elmesondepepe.com/story" },
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "The Archive", url: "/story" }]} />
      <StoryPageContent />
    </>
  );
}
