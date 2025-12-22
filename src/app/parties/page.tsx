import { Users, Utensils, Music, Wine, Phone, Mail } from "lucide-react";

export default function PrivatePartiesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-white">
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-primary font-serif mb-4 tracking-wider">
                        PRIVATE PARTIES
                    </h1>
                    <div className="h-1 w-32 bg-secondary mx-auto my-6" />
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                        Host your special event in the heart of Key West with authentic Cuban cuisine and live entertainment
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Whether you're planning a corporate event, wedding reception, birthday celebration, or any special occasion,
                    El Meson de Pepe offers the perfect setting with our authentic Cuban atmosphere, delicious cuisine, and
                    exceptional service.
                </p>
                <p className="text-gray-600">
                    Our experienced event coordinators will work with you to create a memorable experience tailored to your needs.
                </p>
            </section>

            {/* Party Packages */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-secondary text-center mb-12 font-serif">Party Packages</h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Package 1 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                            <h3 className="text-2xl font-bold text-primary mb-4">Cocktail Reception</h3>
                            <p className="text-3xl font-bold text-secondary mb-6">$35 <span className="text-lg text-gray-600">per person</span></p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Selection of Cuban appetizers (Empanadas, Croquetas, Tostones)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Two-hour open bar (beer, wine, sangria)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Minimum 25 guests</span>
                                </li>
                            </ul>
                        </div>

                        {/* Package 2 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                            <h3 className="text-2xl font-bold text-primary mb-4">Seated Dinner</h3>
                            <p className="text-3xl font-bold text-secondary mb-6">$55 <span className="text-lg text-gray-600">per person</span></p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Three-course Cuban dinner (appetizer, entrée, dessert)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Choice of Ropa Vieja, Lechón Asado, or Pollo Asado</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Three-hour open bar</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Minimum 30 guests</span>
                                </li>
                            </ul>
                        </div>

                        {/* Package 3 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                            <h3 className="text-2xl font-bold text-primary mb-4">Buffet Style</h3>
                            <p className="text-3xl font-bold text-secondary mb-6">$45 <span className="text-lg text-gray-600">per person</span></p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Cuban buffet with multiple entrée options</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Traditional sides (rice, beans, plantains)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Two-hour open bar</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Minimum 40 guests</span>
                                </li>
                            </ul>
                        </div>

                        {/* Package 4 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                            <h3 className="text-2xl font-bold text-primary mb-4">Premium Experience</h3>
                            <p className="text-3xl font-bold text-secondary mb-6">$75 <span className="text-lg text-gray-600">per person</span></p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Four-course gourmet Cuban dinner</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Premium entrée selections including seafood</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Four-hour premium open bar (top-shelf spirits)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Live Salsa band performance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Minimum 50 guests</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-secondary text-center mb-12 font-serif">What's Included</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Utensils className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Cuisine</h3>
                            <p className="text-gray-600">Traditional Cuban recipes prepared fresh</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Music className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Entertainment</h3>
                            <p className="text-gray-600">Salsa bands and Cuban music</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Wine className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Full Bar Service</h3>
                            <p className="text-gray-600">Mojitos, sangria, and premium spirits</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Event Coordinator</h3>
                            <p className="text-gray-600">Dedicated staff for your event</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-secondary text-center mb-8 font-serif">Additional Information</h2>

                    <div className="space-y-6 text-gray-700">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Venue Capacity</h3>
                            <p>Our restaurant can accommodate up to 150 guests for private events. We offer both indoor and outdoor seating options with views of Mallory Square.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customization</h3>
                            <p>All packages can be customized to meet your specific needs. Vegetarian, vegan, and gluten-free options are available upon request.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Booking & Deposits</h3>
                            <p>A 50% deposit is required to secure your date. Final guest count and menu selections are due 7 days prior to your event.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Ready to Plan Your Event?</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Contact our events team to discuss your vision and receive a custom quote
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                        <div className="flex items-center space-x-3">
                            <Phone className="text-primary w-6 h-6" />
                            <span className="text-gray-900 text-lg">305-295-2620</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-primary w-6 h-6" />
                            <span className="text-gray-900 text-lg">events@elmesondepepe.com</span>
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="inline-block bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-widest"
                    >
                        Request a Quote
                    </a>
                </div>
            </section>
        </div>
    );
}
