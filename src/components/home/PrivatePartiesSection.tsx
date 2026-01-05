import Image from "next/image";
import Link from "next/link";

export default function PrivatePartiesSection() {
    return (
        <section className="py-16 md:py-24 bg-white text-gray-800 overflow-hidden" aria-label="Private Parties">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-serif">
                                Private
                            </h2>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-gray-800 uppercase tracking-wide">
                                PARTIES
                            </h3>
                        </div>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                            Our historic building provides the perfect setting for your private event. Whether you're planning a corporate gathering, wedding reception, or special celebration, we offer custom buffets or plated dinners with authentic Cuban cuisine.
                        </p>
                        <div className="pt-4 md:pt-6">
                            <Link
                                href="/parties"
                                className="inline-block bg-gray-200 hover:bg-primary hover:text-white text-gray-900 font-semibold py-3 px-8 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-4"
                                aria-label="Learn more about private parties"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                        <Image
                            src="/images/2017/10/el-meson-restaurant-1-768x259.jpg"
                            alt="Private party dining room setup at El Meson de Pepe"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMUMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADESEx/9oADAMBEQACEEPQf//Z"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}

