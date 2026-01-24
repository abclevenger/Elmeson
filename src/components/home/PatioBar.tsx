import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function PatioBar() {
    return (
        <section className="section-supporting bg-white text-gray-800 overflow-hidden" aria-label="Our Patio Bar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                    {/* Image Content */}
                    <ScrollReveal className="flex-1 relative h-[280px] sm:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl order-1 md:order-1 image-zoom">
                        <Image
                            src="/images/2017/10/el-meson-de-pepe-outdoor-seating-768x452.jpg"
                            alt="Patio Bar at El Meson de Pepe showing live salsa music and cocktails"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" aria-hidden="true" />
                    </ScrollReveal>

                    {/* Text Content */}
                    <ScrollReveal delay={150} className="flex-1 space-y-4 md:space-y-5 order-2 md:order-2">
                        <span className="script-accent block">Experience the Moment</span>
                        
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-secondary font-serif leading-tight">
                                The Patio Bar
                            </h2>
                            <div className="accent-bar" aria-hidden="true" />
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Enjoy refreshing cocktails, live salsa music, and the vibrant atmosphere of Mallory Square. Our patio bar offers the perfect setting to unwind with a mojito while taking in the Key West sunset.
                        </p>
                        <div className="pt-2 md:pt-4">
                            <Link
                                href="/patio"
                                className="link-underline text-secondary hover:text-primary font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                                aria-label="Learn more about our patio bar"
                            >
                                Discover the Patio
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

