import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Authentic Cuban Food at El Meson de Pepe"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider font-serif drop-shadow-lg">
                    <span className="block text-primary text-2xl md:text-3xl lg:text-4xl mb-2 font-sans tracking-widest uppercase">
                        Est. 1984
                    </span>
                    EL MESON DE PEPE
                </h1>

                <div className="h-1 w-24 bg-primary mx-auto my-6" />

                <p className="text-xl md:text-3xl text-gray-100 font-light tracking-wide drop-shadow-md">
                    Authentic <span className="text-accent font-semibold">CUBAN FOOD</span>
                    <br />
                    In Mallory Square, Key West
                </p>

                <div className="pt-8">
                    <Link
                        href="/menu"
                        className="inline-block bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-primary hover:border-secondary uppercase tracking-widest"
                    >
                        View Menu
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <ArrowDown className="text-white/80 w-10 h-10" />
            </div>
        </section>
    );
}
