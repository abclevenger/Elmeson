import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen h-[100svh] w-full flex items-center justify-center overflow-hidden" role="banner" aria-label="Welcome to El Meson de Pepe">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/key-west-cuban-food.webp"
                    alt="Authentic Cuban Food at El Meson de Pepe"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/20 to-black/80" aria-hidden="true" />
            </div>

            {/* Ambient glow behind oval */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[4]"
                style={{
                    width: 'min(100vw, 900px)',
                    height: 'min(70vh, 600px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(217, 93, 30, 0.15) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            {/* Oval Overlay behind text */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] bg-black/60 backdrop-blur-[2px]"
                style={{
                    width: 'min(90vw, 800px)',
                    height: 'min(60vh, 500px)',
                    borderRadius: '50%',
                    boxShadow: '0 0 80px 20px rgba(0, 0, 0, 0.3)',
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 sm:px-4 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                {/* Script tagline for brand warmth */}
                <span className="font-script text-primary text-2xl sm:text-3xl md:text-4xl drop-shadow-lg block">
                    Authentic Cuban Heritage
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif drop-shadow-lg leading-tight">
                    Where Key West<br className="hidden sm:block" /> Meets Old Havana
                </h1>

                <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light">
                    Family owned since 1985 in the heart of Mallory Square
                </p>

                <div className="pt-6 sm:pt-8">
                    <Link
                        href="/menu"
                        className="group relative inline-flex items-center justify-center bg-white/95 text-secondary font-semibold py-3 sm:py-4 px-8 sm:px-12 min-h-[48px] transition-all duration-500 uppercase tracking-wider text-sm sm:text-base overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
                        aria-label="Explore our menu"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                            Explore Our Menu
                        </span>
                        <span 
                            className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" 
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" aria-label="Scroll down for more content">
                <ArrowDown className="text-white/70 w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" aria-hidden="true" />
            </div>
        </section>
    );
}
