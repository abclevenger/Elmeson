import Image from "next/image";

export default function StoryPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">Our Story</h1>
                    <p className="text-gray-600 text-lg">Family Tradition & Cuban Heritage</p>
                    <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
                </div>

                <div className="space-y-12">
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero.png"
                            alt="The Diaz Family"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>
                            El Meson de Pepe's Chef/Owner, Pepe Diaz, a native of Cuba, has lived in Key West, Florida for many years.
                            His passion for the culinary arts has been a driving force in establishing El Meson de Pepe as a landmark
                            for authentic Cuban cuisine in the Florida Keys.
                        </p>
                        <p>
                            In 1984, the Diaz family opened their first restaurant, bringing with them the cherished recipes of their homeland.
                            Today, located right next to the Mallory Square Sunset Celebration, El Meson de Pepe continues to offer a
                            unique dining experience that celebrates the spirit of Havana.
                        </p>
                        <p>
                            We are dedicated to quality, authenticity, and the preservation of our Cuban heritage. From our famous Salsa bands
                            to our signature Mojitos, every detail is crafted to transport you to the vibrant streets of Cuba.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
