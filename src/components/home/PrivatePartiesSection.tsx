import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function PrivatePartiesSection() {
    return (
        <section className="section-anchor bg-secondary/5 text-gray-800 overflow-hidden relative" aria-label="Private Parties">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <ScrollReveal className="flex-1 space-y-5 md:space-y-6 order-2 md:order-1">
                        {/* Script accent for warmth */}
                        <span className="script-accent block">Make It Yours</span>
                        
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-serif leading-tight">
                                Private Events
                            </h2>
                            <div className="accent-bar" aria-hidden="true" />
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Our historic building provides the perfect setting for your special occasion. From intimate gatherings to grand celebrations, we craft custom experiences with authentic Cuban cuisine that your guests will never forget.
                        </p>
                        
                        <div className="pt-4 md:pt-6">
                            <Link
                                href="/parties"
                                className="group relative inline-flex items-center justify-center bg-secondary text-white font-semibold py-3 px-8 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Plan your private event"
                            >
                                <span className="relative z-10 transition-colors duration-300">
                                    Start Planning
                                </span>
                                <span 
                                    className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" 
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Image Content */}
                    <ScrollReveal delay={150} className="flex-1 relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 image-zoom">
                        <Image
                            src="/images/2017/10/el-meson-restaurant-1-768x259.jpg"
                            alt="Private party dining room setup at El Meson de Pepe"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMUMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADESEx/9oADAMBEQACEEPQf//Z"
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

