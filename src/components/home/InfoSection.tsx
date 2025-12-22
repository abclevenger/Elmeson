import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="py-20 bg-gray-50 text-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-wide">
                            Authentic Cuban Food
                        </h2>
                        <div className="h-1 w-20 bg-secondary" />
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            For over 30 years, <span className="text-secondary font-semibold">El Meson de Pepe</span> has been dedicated to preserving the rich culinary heritage of Cuba. Located in the heart of Mallory Square, we bring you the flavors of Old Havana with our authentic recipes, passed down through generations of the Diaz family.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Join us for a sunset dinner, sip on our famous mojitos, and enjoy the rhythm of our live Salsa band every evening.
                        </p>
                        <div className="pt-6">
                            <Link href="/story" className="text-primary hover:text-secondary font-semibold uppercase tracking-widest border-b-2 border-primary hover:border-secondary transition-colors pb-1">
                                Read Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl skew-y-2 md:skew-y-0 hover:skew-y-0 transition-transform duration-500 ease-out">
                        <Image
                            src="/images/food_intro.png"
                            alt="Authentic Cuban Cuisine"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
                    </div>

                </div>
            </div>
        </section>
    );
}
