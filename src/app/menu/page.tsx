import type { Metadata } from "next";
import { MenuSchema, BreadcrumbSchema } from "@/lib/schema";
import menuData from '@/data/menu.json';
import { Utensils, ChefHat, Soup, Coffee, IceCream, Baby, Star } from "lucide-react";

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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
                            Our Menu
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            Authentic flavors of Cuba
                        </p>
                    </div>
                </section>

                {/* Tapas Section */}
                <section className="py-24 bg-[#f5f5f0] text-black">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <Utensils className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 uppercase tracking-tight">Tapas</h2>
                            <div className="h-1 w-24 bg-secondary mx-auto" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <MenuCard title="Featured" items={menuData.Tapas.Featured} highlight />
                            <MenuCard title="Frituras de Cobo" items={menuData.Tapas["Frituras de Cobo"]} />
                        </div>
                    </div>
                </section>

                {/* Salads/Soups/Sides Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <Soup className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 uppercase tracking-tight text-primary">Soups, Salads & Sides</h2>
                            <p className="text-gray-600 italic mb-4">{menuData["Salads/Soups/Sides"].note}</p>
                            <div className="h-1 w-24 bg-secondary mx-auto" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <MenuCard title="Soups" items={menuData["Salads/Soups/Sides"].Soups} compact />
                            <MenuCard title="Salads" items={menuData["Salads/Soups/Sides"].Featured} compact highlight />
                            <MenuCard title="Sides" items={menuData["Salads/Soups/Sides"].Sides} compact />
                        </div>
                    </div>
                </section>

                {/* Entrees Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <ChefHat className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 uppercase tracking-tight">Cuban Entrees</h2>
                            <div className="h-1 w-24 bg-secondary mx-auto" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-serif text-primary uppercase tracking-widest font-bold mb-6">Traditional Favorites</h3>
                                {menuData["Cuban Entrees"].map((item, idx) => (
                                    <MenuItemCard key={idx} name={item.name} desc={item.description} />
                                ))}
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-2xl font-serif text-secondary uppercase tracking-widest font-bold mb-6">Seafood Specialities</h3>
                                {menuData["Featured Entrees"].map((item, idx) => (
                                    <MenuItemCard key={idx} name={item.name} desc={item.description} highlight />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sandwiches Section */}
                <section className="py-24 bg-[#f5f5f0]">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6 text-secondary">
                                <Utensils className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4 uppercase tracking-tight">Sandwiches</h2>
                            <p className="text-gray-500 mb-4 font-light italic">{menuData.Sandwiches.note}</p>
                            <div className="h-1 w-24 bg-secondary mx-auto" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {menuData.Sandwiches.Featured.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-secondary hover:shadow-xl transition-all duration-300">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Kids & Desserts */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <div className="text-center mb-12">
                                    <Baby className="w-10 h-10 text-primary mx-auto mb-4" />
                                    <h2 className="text-3xl font-bold text-primary font-serif mb-2 uppercase">Kids Menu</h2>
                                    <p className="text-gray-500 text-sm italic">{menuData["Kids Menu"].note}</p>
                                    <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                                    {menuData["Kids Menu"].items.map((item, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                                            {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-center mb-12">
                                    <IceCream className="w-10 h-10 text-primary mx-auto mb-4" />
                                    <h2 className="text-3xl font-bold text-primary font-serif mb-2 uppercase">Desserts</h2>
                                    <p className="text-gray-500 text-sm italic">{menuData["Dessert Menu"].note}</p>
                                    <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                                    {menuData["Dessert Menu"].items.map((item, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function MenuCard({ title, items, highlight = false, compact = false }: { title: string; items: any[]; highlight?: boolean; compact?: boolean }) {
    return (
        <div className={`backdrop-blur-sm p-10 rounded-[2.5rem] border ${highlight ? 'bg-secondary/5 border-secondary/20 shadow-xl' : 'bg-white border-gray-100 shadow-lg'}`}>
            <h3 className={`text-2xl font-serif mb-8 uppercase tracking-widest font-bold ${highlight ? 'text-secondary' : 'text-primary'}`}>{title}</h3>
            <div className={compact ? 'space-y-4' : 'space-y-8'}>
                {items.map((item, idx) => (
                    <div key={idx}>
                        <h4 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold font-serif mb-2 text-gray-900`}>{item.name}</h4>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MenuItemCard({ name, desc, highlight = false }: { name: string; desc: string; highlight?: boolean }) {
    return (
        <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${highlight ? 'bg-secondary/5 border-secondary/10 hover:border-secondary' : 'bg-gray-50 border-gray-100 hover:border-primary'}`}>
            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{name}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

