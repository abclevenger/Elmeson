import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Utensils, Music, Wine, Phone, Mail } from "lucide-react";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Private Parties & Events - El Meson de Pepe Key West",
    description: "Host your private party or event at El Meson de Pepe in Key West. Custom catering, live music, and authentic Cuban cuisine for your special occasion.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Private Parties & Events - El Meson de Pepe Key West",
        description: "Host your private party or event at El Meson de Pepe in Key West. Custom catering and authentic Cuban cuisine.",
        url: "https://www.elmesondepepe.com/parties",
    },
    alternates: {
        canonical: "/parties",
    },
};

export default function PrivatePartiesPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Private Parties", url: "/parties" },
            ]} />
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/images/key-west-restaurant-private-parties.png')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
                            Private Parties
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            Authentic Cuban celebrations in the heart of Mallory Square
                        </p>
                    </div>
                </section>

                {/* Introduction & Coordinator */}
                <section className="py-20 px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:col-span-2 space-y-8">
                            <p className="text-xl text-gray-800 leading-relaxed font-light">
                                <span className="text-4xl font-serif text-primary block mb-2">Host Your Event with Us</span>
                                Finding a venue for your private party in Key West can be a challenge, especially if you need to entertain a large group. Many of the restaurants on the island are small with limited outdoor space. That is certainly not the case with El Meson de Pepe.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We can accommodate smaller parties as well as large events for up to <span className="font-bold text-primary">300 guests</span>. We specialize in &ldquo;Friday Night&rdquo; rehearsal dinners, full wedding receptions, private cocktail parties, and corporate outings. Treat your guests to the flavors of Cuba with unique buffet stations or smaller parties have the option of choosing a plated service.
                            </p>
                            <div className="bg-secondary/5 border-l-4 border-secondary p-6 italic text-gray-700">
                                &ldquo;Below are sample menus that should help you select the options most suited to your tastes. Please feel free to select options from any of the menus and we will provide a custom quote for your group.&rdquo;
                            </div>
                            <p className="pt-4">
                                <Link href="/parties/survey" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-all shadow-md uppercase tracking-wider text-sm font-bold">
                                    Fill out our Private Events Survey
                                </Link>
                            </p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-xl text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <h3 className="text-primary font-serif text-2xl mb-6 italic">Event Coordinator</h3>
                            <div className="space-y-4 text-gray-700 relative z-10">
                                <p className="font-bold text-2xl mb-1">Jose M. Diaz Jr.</p>
                                <p className="text-secondary uppercase tracking-widest text-xs font-bold">General Manager / Event Coordinator</p>
                                <div className="h-px w-16 bg-secondary/30 mx-auto my-6" />
                                <div className="space-y-4">
                                    <a href="tel:305-295-2620" className="flex items-center justify-center gap-3 text-primary hover:text-secondary transition-colors font-semibold text-lg">
                                        <Phone className="w-5 h-5" /> 305-295-2620
                                    </a>
                                    <a href="mailto:jose@elmesondepepe.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-all shadow-md uppercase tracking-wider text-sm font-bold">
                                        <Mail className="w-4 h-4" /> Email Jose
                                    </a>
                                </div>
                                <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                                    Contact us to discuss your vision and receive a custom quote for your special occasion.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12 lg:mt-16">
                        <div className="relative aspect-[4/5] w-full max-w-md rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                            <Image
                                src="/images/wedding-couple-el-meson.png"
                                alt="Wedding couple at El Mesón de Pepe — Cuban cuisine and celebrations in Mallory Square"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 448px"
                            />
                        </div>
                    </div>
                </section>

                {/* Fees & Charges */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 uppercase tracking-tight text-primary">General Fees & Charges</h2>
                            <div className="h-1 w-24 bg-secondary mx-auto" />
                            <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-light">Each dining room has a rental fee; this rental fee is given the day you decide to hold your party with us. The fees are as follows:</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                            {[
                                { title: "1/2 The Garden", price: "$450" },
                                { title: "Whole Garden", price: "$850" },
                                { title: "1/2 The Inside", price: "$500" },
                                { title: "Whole Inside", price: "$950" },
                                { title: "Satellite Bar", price: "$400" },
                            ].map((fee, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-secondary transition-colors shadow-sm hover:shadow-md">
                                    <h3 className="text-secondary font-serif text-lg mb-2">{fee.title}</h3>
                                    <p className="text-3xl font-bold font-serif text-primary">{fee.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto mb-20 px-4">
                            <div className="group">
                                <p className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-2">Set-up Fee</p>
                                <p className="text-2xl font-bold font-serif text-primary">$2.50 <span className="text-xs font-normal text-gray-400">per person</span></p>
                            </div>
                            <div className="group">
                                <p className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-2">Linen Rental*</p>
                                <p className="text-2xl font-bold font-serif text-primary">$2.50 <span className="text-xs font-normal text-gray-400">per person</span></p>
                            </div>
                            <div className="group">
                                <p className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-2">Standard Gratuity</p>
                                <p className="text-2xl font-bold font-serif text-primary">22% <span className="text-xs font-normal text-gray-400">of total bill</span></p>
                            </div>
                            <div className="group">
                                <p className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-2">Sales Tax</p>
                                <p className="text-2xl font-bold font-serif text-primary">7.5% <span className="text-xs font-normal text-gray-400">of total bill</span></p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 border border-gray-100 text-sm text-gray-600 space-y-6 max-w-4xl mx-auto shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary font-bold">*</div>
                                <p className="leading-relaxed">Linens are not required for your event but are suggested to enhance the overall effect of your event.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary font-bold">**</div>
                                <p className="leading-relaxed">Half of the total bill is due two weeks prior to your event along with a final head count. (Alcohol bill will not be included at this point.)</p>
                            </div>
                            <div className="pt-8 border-t border-gray-100 mt-8">
                                <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Peak Hours & spending Minimums</h4>
                                <p className="italic text-xs leading-relaxed opacity-80">
                                    *** DURING PEAK DINING HOURS (WEEKENDS & POST SUNSET), THERE ARE ALSO SPENDING MINIMUMS THAT MUST BE MET FOR DINING ROOM RENTALS (e.g. FULL GARDEN RENTAL – $4,000.00 AND FULL INSIDE RENTAL – $6,000.00) (PARTIAL ROOM GARDEN – $65.00PP, INSIDE – $50.00PP).
                                </p>
                                <p className="mt-4 italic text-xs leading-relaxed opacity-80">
                                    **** DUE TO THE LIMITED SIZE OF OUR KITCHEN, IF YOUR PARTY CONSISTS OF MORE THAN 25 GUESTS, YOU MAY ONLY CHOOSE OUR BUFFET OPTIONS. BUFFET OPTIONS ARE A MIX OF TABLE SERVICE AND BUFFET SERVICE.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bar Rates */}
                <section className="py-24 bg-gray-50 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <Wine className="w-12 h-12 text-secondary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6 uppercase tracking-tight">Bar Rates</h2>
                        <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Consumption Basis</p>
                        <p className="text-xl text-gray-700 leading-relaxed font-light italic">
                            You will be charged for each drink served to your guests according to your menu specifications. You may choose to have only beer and wine, a full-service bar, no frozen drinks, etc. You will be notified when your personalized estimate is reached.
                        </p>
                    </div>
                </section>

                {/* Buffet Options */}
                <section className="py-24 px-4 bg-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-6 uppercase tracking-tight">Buffet Packages</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">Authentic Cuban buffets for groups larger than 25 guests.</p>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {/* Buffet Option 1 */}
                            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 flex flex-col hover:shadow-primary/5 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 text-primary/5 font-serif text-7xl pointer-events-none">01</div>
                                <h3 className="text-2xl font-bold text-primary font-serif mb-4 group-hover:text-secondary transition-colors uppercase">Buffet Option 1</h3>
                                <div className="flex items-baseline mb-8 pb-6 border-b border-gray-50">
                                    <span className="text-4xl font-bold text-primary font-serif">$65.00</span>
                                    <span className="text-gray-500 ml-2 text-xs font-medium">per person + tax/gratuity</span>
                                </div>

                                <div className="space-y-6 grow">
                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Appetizers (Family Style)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Two</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Salad (Table Side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose One</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Entrees (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Two</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Sides (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Desserts</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose One</p>
                                    </section>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 italic text-[10px] text-primary/60 font-medium">
                                    Cuban bread, iced tea, fountain drinks, and American coffee included.
                                </div>
                            </div>

                            {/* Golden Buffet Option - Highlighted Center */}
                            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-2 border-secondary flex flex-col scale-105 z-10 hover:shadow-secondary/10 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 text-secondary/5 font-serif text-7xl pointer-events-none">02</div>
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">Most popular</div>
                                <h3 className="text-2xl font-bold text-primary font-serif mb-4 group-hover:text-secondary transition-colors uppercase">Golden Buffet Menu</h3>
                                <div className="flex items-baseline mb-8 pb-6 border-b border-gray-50">
                                    <span className="text-4xl font-bold text-primary font-serif">$85.00</span>
                                    <span className="text-gray-500 ml-2 text-xs font-medium">per person + tax/gratuity</span>
                                </div>

                                <div className="space-y-6 grow">
                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Appetizers (Family Style)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Salad (Table Side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose One</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Entrees (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Sides (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Desserts</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Two</p>
                                    </section>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 italic text-[11px] text-primary font-bold leading-relaxed">
                                    Cuban bread, iced tea, fountain drinks, and American coffee included.
                                </div>
                            </div>

                            {/* Platinum Buffet Menu */}
                            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-2 border-[#D4AF37] flex flex-col hover:shadow-primary/5 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 text-primary/5 font-serif text-7xl pointer-events-none">03</div>
                                <h3 className="text-2xl font-bold text-primary font-serif mb-4 group-hover:text-secondary transition-colors uppercase">EL MESON’S PLATINUM buffet MENU</h3>
                                <div className="flex items-baseline mb-8 pb-6 border-b border-gray-50">
                                    <span className="text-4xl font-bold text-primary font-serif">$100.00</span>
                                    <span className="text-gray-500 ml-2 text-xs font-medium">per person plus gratuity and tax</span>
                                </div>

                                <div className="space-y-6 grow">
                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Appetizers (served family style)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose four</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Soups (served table side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose one</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Salad (served table side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose one</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Entrees (on buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose four</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Sides (on buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Desserts</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose two</p>
                                    </section>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 italic text-[10px] text-primary/60 font-medium">
                                    Cuban bread, iced tea, fountain drinks, and American coffee included.
                                </div>
                            </div>

                            {/* Buffet Option 2 */}
                            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 flex flex-col hover:shadow-primary/5 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 text-primary/5 font-serif text-7xl pointer-events-none">04</div>
                                <h3 className="text-2xl font-bold text-primary font-serif mb-4 group-hover:text-secondary transition-colors uppercase">Buffet Option 2</h3>
                                <div className="flex items-baseline mb-8 pb-6 border-b border-gray-50">
                                    <span className="text-4xl font-bold text-primary font-serif">$75.00</span>
                                    <span className="text-gray-500 ml-2 text-xs font-medium">per person + tax/gratuity</span>
                                </div>

                                <div className="space-y-6 grow">
                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Appetizers (Family Style)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Salad (Table Side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose One</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Entrees (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Sides (On Buffet)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Three</p>
                                    </section>

                                    <section>
                                        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold mb-3">Desserts (Table Side)</h4>
                                        <p className="text-sm text-gray-700 font-bold italic">Choose Two</p>
                                    </section>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 italic text-[10px] text-primary/60 font-medium">
                                    Cuban bread, iced tea, fountain drinks, and American coffee included.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Final Closing */}
                <section className="py-24 px-4 text-center bg-white relative">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-primary font-serif mb-8 italic">Authentic Cuban Hospitality</h2>
                        <p className="text-gray-700 text-xl leading-relaxed mb-8 font-light italic">
                            &ldquo;Again, thank you for your interest in El Meson de Pepe. I hope you saw some interesting options you would like to inquire more about, and if so, I would be more than happy to answer any questions.&rdquo;
                        </p>
                        <p className="text-gray-500 mb-12">
                            To make your selection easier, our full menu is available below with detailed descriptions of all our offerings.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/menu"
                                className="inline-block bg-primary text-white hover:bg-secondary font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl uppercase tracking-widest group"
                            >
                                View Full Menu <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                            <Link
                                href="mailto:jose@elmesondepepe.com"
                                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-[1.2rem] px-12 rounded-full transition-all duration-300 uppercase tracking-widest"
                            >
                                Contact Coordinator
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
