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

            {/* Oval Overlay behind text */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] bg-black/60"
                style={{
                    width: 'min(90vw, 800px)',
                    height: 'min(60vh, 500px)',
                    borderRadius: '50%'
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 sm:px-4 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif drop-shadow-lg">
                    Authentic
                </h1>


                <div className="pt-6 sm:pt-8">
                    <Link
                        href="/menu"
                        className="inline-block bg-gray-200 hover:bg-primary hover:text-white text-gray-900 font-semibold py-3 sm:py-4 px-8 sm:px-12 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
                        aria-label="View our menu"
                    >
                        OUR MENU
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" aria-label="Scroll down for more content">
                <ArrowDown className="text-white w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg" aria-hidden="true" />
            </div>
        </section>
    );
}
