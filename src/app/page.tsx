import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import MenuPreview from "@/components/home/MenuPreview";
import InfoSection from "@/components/home/InfoSection";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import PeopleAsLegacy from "@/components/home/PeopleAsLegacy";
import ExperienceHighlights from "@/components/home/ExperienceHighlights";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PrivatePartiesSection from "@/components/home/PrivatePartiesSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import { RestaurantSchema, BreadcrumbSchema, FAQSchema } from "@/lib/schema";
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Best Cuban Restaurant Key West | Mallory Square | El Mesón de Pepe",
  description: "Best Cuban food Key West—Mallory Square waterfront. Ropa Vieja, mojitos, live salsa, sunset patio. Open daily 11 AM–10 PM. Cuban restaurant at Mallory Square.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Best Cuban Restaurant Key West | Mallory Square | El Mesón de Pepe",
    description: "Best Cuban food Key West—Mallory Square waterfront. Ropa Vieja, mojitos, live salsa. Open daily 11 AM–10 PM.",
    url: "https://www.elmesondepepe.com",
    images: [{ url: "/sunset-from-el-meson-2048x1087.png", width: 1200, height: 630, alt: "Mallory Square, Key West — El Mesón de Pepe" }],
  },
  alternates: { canonical: "https://www.elmesondepepe.com/" },
};

export default function Home() {
  return (
    <>
      <RestaurantSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <Hero />
      <MenuPreview />
      <InfoSection />
      <FeaturedEpisode
        imageSrc="/images/food-paradise-meals-over-miami.png"
        imageAlt="Food Paradise — Meals Over Miami: El Mesón de Pepe featured with Cuban meal and Travel Channel"
        ctaHref="https://www.imdb.com/title/tt13410186/"
      />
      <PeopleAsLegacy />
      <ExperienceHighlights />
      <TestimonialsSection />
      <PrivatePartiesSection />
      <HomeFAQ />
      <FAQSchema items={translations.en.homeFaq} />
    </>
  );
}
