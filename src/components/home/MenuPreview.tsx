import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

const FEATURED_ITEMS = [
    {
        name: "Ropa Vieja",
        description: "Shredded beef stewed in a tomato base sauce with onions, peppers, and authentic spices.",
        price: "$28",
    },
    {
        name: "Lechón Asado",
        description: "Traditional roasted pork marinated in our signature mojo criollo sauce.",
        price: "$26",
    },
    {
        name: "Picadillo a la Habanera",
        description: "Ground beef cooked with olives, raisins, and spices in a savory tomato sauce.",
        price: "$24",
    },
];

export default function MenuPreview() {
    return (
        <section className="section-anchor bg-white text-gray-800 relative overflow-hidden" aria-label="Featured menu items">
            <div className="oval-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal className="text-center mb-12 md:mb-16">
                        {/* Script accent */}
                        <span className="script-accent block mb-3">Taste the Tradition</span>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-serif mb-4">
                            Our Menu
                        </h2>
                        
                        <div className="accent-bar-center" aria-hidden="true" />
                        
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-6">
                            Every dish tells a story, prepared fresh daily with recipes passed down through generations. Experience the authentic flavors of Old Havana.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {FEATURED_ITEMS.map((item, index) => (
                            <ScrollReveal
                                key={item.name}
                                delay={index * 100}
                                className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 card-hover border-glow group flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 font-serif pr-2">
                                        {item.name}
                                    </h3>
                                    <span className="text-primary font-bold text-lg whitespace-nowrap bg-primary/10 px-3 py-1 rounded-full">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                                {/* Subtle bottom accent */}
                                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                                    <span className="text-sm text-gray-500 group-hover:text-primary transition-colors duration-300">
                                        Traditional Recipe
                                    </span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={300} className="text-center mt-12 md:mt-16">
                        <Link
                            href="/menu"
                            className="group relative inline-flex items-center justify-center bg-primary text-white font-semibold py-3 sm:py-4 px-10 sm:px-14 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label="View our full menu"
                        >
                            <span className="relative z-10">
                                View Full Menu
                            </span>
                            <span 
                                className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" 
                                aria-hidden="true"
                            />
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
