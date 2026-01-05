import Image from "next/image";
import Link from "next/link";

export default function PatioBar() {
    return (
        <section className="py-16 md:py-24 bg-white text-gray-800 overflow-hidden" aria-label="Our Patio Bar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Content */}
                    <div className="flex-1 relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-1">
                        <Image
                            src="/images/2017/10/el-meson-de-pepe-outdoor-seating-768x452.jpg"
                            alt="Patio Bar at El Meson de Pepe showing live salsa music and cocktails"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" aria-hidden="true" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-2">
                        <div className="space-y-2">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-800 font-script">
                                Our Patio
                            </h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 uppercase tracking-wide">
                                BAR
                            </h3>
                        </div>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                            Enjoy refreshing cocktails, live salsa music, and the vibrant atmosphere of Mallory Square. Our patio bar offers the perfect setting to unwind with a mojito or caipirinha while taking in the Key West sunset.
                        </p>
                        <div className="pt-4 md:pt-6">
                            <Link
                                href="/sunset"
                                className="inline-block bg-gray-200 hover:bg-primary hover:text-white text-gray-900 font-semibold py-3 px-8 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-4"
                                aria-label="Learn more about our patio bar"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

