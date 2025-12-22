import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_ITEMS = [
    {
        name: "Ropa Vieja",
        description: "Shredded beef stewed in a tomato base sauce with onions, peppers, and authentic spices.",
        price: "$24",
    },
    {
        name: "Lechón Asado",
        description: "Traditional roasted pork marinated in our signature mojo criollo sauce.",
        price: "$22",
    },
    {
        name: "Picadillo a la Habanera",
        description: "Ground beef cooked with olives, raisins, and spices in a savory tomato sauce.",
        price: "$20",
    },
];

export default function MenuPreview() {
    return (
        <section className="py-20 bg-white text-gray-800 relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D95D1E_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-wide">
                        Our Favorites
                    </h2>
                    <div className="h-1 w-20 bg-secondary mx-auto mt-6" />
                    <p className="mt-4 text-xl text-gray-600 font-light">
                        Taste the tradition in every bite
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED_ITEMS.map((item) => (
                        <div
                            key={item.name}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors font-serif">
                                {item.name}
                            </h3>
                            <p className="text-primary font-bold mb-4 text-lg">{item.price}</p>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/menu"
                        className="inline-flex items-center space-x-2 text-white bg-secondary hover:bg-primary transition-colors px-8 py-3 rounded-full font-bold uppercase tracking-widest shadow-lg"
                    >
                        <span>View Full Menu</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
