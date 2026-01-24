import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function InfoSection() {
    return (
        <section className="section-anchor bg-gray-50 text-gray-800 overflow-hidden" aria-label="About our authentic Cuban food">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <ScrollReveal className="flex-1 space-y-5 md:space-y-6 order-2 md:order-1">
                        {/* Script accent for warmth */}
                        <span className="script-accent block">Since 1985</span>
                        
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-serif leading-tight">
                                Our Story
                            </h2>
                            <div className="accent-bar" aria-hidden="true" />
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            For over three decades, <span className="font-semibold text-secondary">El Meson de Pepe</span> has been dedicated to preserving the rich culinary heritage of Cuba. Located in the heart of Mallory Square, we bring you the flavors of Old Havana with authentic recipes passed down through generations of the Diaz family.
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Join us for a sunset dinner, sip on our famous mojitos, and enjoy the rhythm of our live Salsa band every evening.
                        </p>
                        <div className="pt-4 md:pt-6">
                            <Link
                                href="/story"
                                className="group relative inline-flex items-center justify-center bg-secondary text-white font-semibold py-3 px-8 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Read our restaurant story"
                            >
                                <span className="relative z-10 transition-colors duration-300">
                                    Discover Our Heritage
                                </span>
                                <span 
                                    className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" 
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Image Content */}
                    <ScrollReveal delay={150} className="flex-1 relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl md:skew-y-2 lg:skew-y-3 hover:skew-y-0 transition-all duration-500 ease-out order-1 md:order-2 image-zoom">
                        <Image
                            src="/images/2022/07/about-el-meson-de-pepe-1-768x403.jpg"
                            alt="Authentic Cuban cuisine served at El Meson de Pepe in Key West"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" aria-hidden="true" />
                        {/* Subtle orange accent border on bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" aria-hidden="true" />
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
