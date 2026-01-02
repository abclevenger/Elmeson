import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "History of Key West and Cuba - El Meson de Pepe",
    description: "Discover the fascinating history connecting Key West and Cuba. Learn about the cultural and culinary ties that have shaped both islands for over 175 years.",
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
        title: "History of Key West and Cuba - El Meson de Pepe",
        description: "Discover the fascinating history connecting Key West and Cuba. Learn about the cultural and culinary ties that have shaped both islands.",
        url: "https://www.elmesondepepe.com/story/history",
    },
    alternates: {
        canonical: "/story/history",
    },
};

export default function HistoryPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Our Story", url: "/story" },
                { name: "History of Key West and Cuba", url: "/story/history" },
            ]} />
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero.jpg"
                            alt="History of Key West and Cuba"
                            fill
                            className="object-cover brightness-75"
                            loading="lazy"
                            quality={85}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-serif tracking-widest">
                            HISTORY OF KEY WEST AND CUBA
                        </h1>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            <p className="text-lg leading-relaxed">
                                The history of the association of Key West and Cuba is one of the most unusual and fascinating in all of American history. The two islands have been closely linked – culturally, economically and in other ways for over 175 years. The marriage of the islands has encountered some turbulence, but all in all it has been a most happy one. It began in the 19th and 18th centuries, when Christopher Columbus discovered America and Cuba. Their Indios de Leon discovered the Florida Keys. By Tortugas, and in Florida, that they likely Villa and the Florida Keys were inhabited by warring Calusa and other Indians who fished and raised small crops. They preyed on small ships coming to the area from Cuba wrecked along the dangerous Florida reef.
                            </p>

                            <p className="text-lg leading-relaxed">
                                As marinas and fishermen, Spanish settlers from Cuba came to the Keys and the city Tortugas in small boats, in search of fish, manatees, and the tasty meat and eggs of sea turtles and birds. The proximity of the Keys to Cuba and the Northwest shore of Key West made fishing easy and profitable.
                            </p>

                            <p className="text-lg leading-relaxed">
                                In 1815, shortly before Spain ceded the Territory of Florida to the United States, Don Juan Salas, the Spanish Governor of Florida, granted the island of Cayo Hueso to Juan Pablo Salas. In later years, the island was sold to John Simonton of Mobile, Alabama for $2,000.00 in 1821. Of subsequent owners to this day, will anyone coming from near and far from the east coast of the United States, the former Spanish colony of St. Augustine, the Bahamas, Europe, Cuba and other places throughout the Caribbean.
                            </p>

                            <p className="text-lg leading-relaxed">
                                The building, now Casa Marina (a feature on Mallory Square where the Sunset Celebration is held), was the site where thousands of Cubans from Cuba disembarked on American shores during the first century. The entire building has been converted into a setting such as please all who visit it. Islanders and locals alike, inspired or just by the immigration and homeland ancestry (which is as varied as the immigration of Cayo Hueso) a fabulous metropolis current of old Key West and modern-day Cuba.
                            </p>

                            <p className="text-lg leading-relaxed">
                                The volume of Cuba quickly became part of Key West, food culture when Cuban fishers began to settle on the island in the 1830s. The food served in Key West homes and restaurants was heavily influenced by Cuban cuisine. The highly seasoned but not spicy Cuban food was a welcomed change.
                            </p>

                            <p className="text-lg leading-relaxed">
                                With the birth of pungent garlic onions, Spanish settlers also used other mouth-watering spices from the kitchen of El Meson de Pepe, a small family owned and operated restaurant, sitting on Key West's bustle and relative since 1984.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
