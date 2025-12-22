export default function MenuPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">Our Menu</h1>
                    <p className="text-gray-600 text-lg">Authentic flavors of Cuba</p>
                    <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
                </div>

                {/* Categories */}
                <div className="space-y-16">

                    {/* Appetizers */}
                    <section>
                        <h2 className="text-3xl font-bold text-secondary mb-8 border-b border-gray-300 pb-2">Aperitivos / Appetizers</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <MenuItem name="Empanadas" price="$12" desc="Turnovers filled with your choice of beef, chicken, or cheese." />
                            <MenuItem name="Tostones Rellenos" price="$14" desc="Green plantains stuffed with ground beef or shrimp enchilada." />
                            <MenuItem name="Croquetas" price="$10" desc="Ham croquettes served with lime and crackers." />
                            <MenuItem name="Papa Rellena" price="$9" desc="Mashed potato stuffed with picadillo and breaded." />
                        </div>
                    </section>

                    {/* Main Courses */}
                    <section>
                        <h2 className="text-3xl font-bold text-secondary mb-8 border-b border-gray-300 pb-2">Platos Fuertes / Entrees</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <MenuItem name="Ropa Vieja" price="$24" desc="Shredded beef stewed in a tomato base sauce with onions, peppers, and authentic spices." />
                            <MenuItem name="Lechón Asado" price="$22" desc="Traditional roasted pork marinated in our signature mojo criollo sauce." />
                            <MenuItem name="Picadillo a la Habanera" price="$20" desc="Ground beef cooked with olives, raisins, and spices in a savory tomato sauce." />
                            <MenuItem name="Vaca Frita" price="$25" desc="Crispy shredded beef topped with sautéed onions." />
                            <MenuItem name="Pollo Asado" price="$21" desc="Half roasted chicken marinated in tropical juices." />
                            <MenuItem name="Enchilado de Camarones" price="$28" desc="Shrimp sautéed in a spicy tomato Creole sauce." />
                        </div>
                    </section>

                    {/* Drinks */}
                    <section>
                        <h2 className="text-3xl font-bold text-secondary mb-8 border-b border-gray-300 pb-2">Bebidas / Drinks</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <MenuItem name="Mojito Traditional" price="$12" desc="Rum, fresh mint, lime juice, sugar, and soda water." />
                            <MenuItem name="Cuban Coffee" price="$4" desc="Strong, sweet espresso." />
                            <MenuItem name="Sangria" price="$10" desc="House-made red or white sangria." />
                            <MenuItem name="Cervezas" price="$6" desc="Imported and domestic beers." />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

function MenuItem({ name, price, desc }: { name: string; price: string; desc: string }) {
    return (
        <div className="flex justify-between items-start group">
            <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-gray-600 mt-1">{desc}</p>
            </div>
            <span className="text-primary font-semibold ml-4">{price}</span>
        </div>
    );
}
