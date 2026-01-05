import type { Metadata } from "next";
import { MenuSchema, BreadcrumbSchema } from "@/lib/schema";
import menuData from '@/data/menu.json';

export const metadata: Metadata = {
    title: "Menu - Authentic Cuban Cuisine",
    description: "Explore our authentic Cuban menu featuring traditional dishes like Ropa Vieja, Lechón Asado, and Picadillo. Appetizers, entrees, and Cuban cocktails at El Meson de Pepe.",
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
        title: "Menu - Authentic Cuban Cuisine | El Meson de Pepe",
        description: "Explore our authentic Cuban menu featuring traditional dishes from Cuba. Key West's premier Cuban restaurant.",
        url: "https://www.elmesondepepe.com/menu",
        images: [
            {
                url: "/images/food_intro.webp",
                width: 1200,
                height: 630,
                alt: "El Meson de Pepe Cuban Menu",
            },
        ],
    },
    alternates: {
        canonical: "/menu",
    },
};

export default function MenuPage() {
    return (
        <>
            <MenuSchema />
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Menu", url: "/menu" },
            ]} />
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/images/food_intro.webp')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl md:text-8xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
                            Our Menu
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            Authentic flavors of Cuba
                        </p>
                    </div>
                </section>

                <div className="pb-20 px-4 pt-16">

                    {/* Categories */}
                    <div className="space-y-16">
                        {Object.entries(menuData).map(([sectionName, sectionData]) => (
                            <section key={sectionName}>
                                <h2 className="text-3xl font-bold text-secondary mb-8 border-b border-gray-300 pb-2">{sectionName}</h2>
                                {typeof sectionData === 'object' && !Array.isArray(sectionData) ? (
                                    // Object with subsections
                                    <>
                                        {Object.entries(sectionData).map(([subName, subData]) => (
                                            <div key={subName} className="mb-8">
                                                {subName === 'note' && typeof subData === 'string' ? (
                                                    <p className="text-gray-600 mb-4 italic">{subData}</p>
                                                ) : (
                                                    <>
                                                        <h3 className="text-2xl font-semibold text-primary mb-4">{subName}</h3>
                                                        <div className="grid gap-4 md:grid-cols-2">
                                                            {Array.isArray(subData) && subData.map((item, idx) => (
                                                                <MenuItem key={idx} name={item.name} desc={item.description} />
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </>
                                ) : Array.isArray(sectionData) ? (
                                    // Direct array
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {sectionData.map((item, idx) => (
                                            <MenuItem key={idx} name={item.name} desc={item.description} />
                                        ))}
                                    </div>
                                ) : null}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function MenuItem({ name, desc }: { name: string; desc: string }) {
    return (
        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-gray-600 mt-1">{desc}</p>
        </div>
    );
}
