import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/lib/schema";
import { Martini, Beer, Citrus } from "lucide-react";

export const metadata: Metadata = {
  title: "Patio Bar - Key West Cocktails & Live Music | El Meson de Pepe",
  description: "Start your night off right with refreshing cocktails and live salsa music on the Patio Bar. Enjoy the best mojitos and caipirinhas on the island.",
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
    title: "Patio Bar - Key West Cocktails & Live Music | El Meson de Pepe",
    description: "Start your night off right with refreshing cocktails and live salsa music on the Patio Bar. Enjoy the best mojitos and caipirinhas on the island.",
    url: "https://www.elmesondepepe.com/patio",
  },
  alternates: {
    canonical: "/patio",
  },
};

export default function PatioBarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Patio Bar", url: "/patio" },
        ]}
      />
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/key-west-bars-el-meson-patio-2048x751.jpg"
              alt="El Meson de Pepe Patio Bar"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
              Patio Bar
            </h1>
            <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
              Authentic Cuban Cocktails & Live Salsa Music
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-800 leading-relaxed font-light mb-8">
            <span className="text-4xl font-serif text-primary block mb-4">Relax & Unwind</span>
            When you spend time relaxing at our Patio Bar, you can experience all the best features of El Meson de Pepe: Authentic Cuban cuisine, tasty Caribbean cocktails, excellent service, and picturesque views of the Mallory Square Sunset Celebration and Gulf of Mexico. We have a great outdoor space that’s large enough for entertaining groups or small enough for couples to enjoy a nice evening.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Key West has a great reputation for its collection of unique bars and restaurants; but rarely can you find an establishment that combines all the features that we have to offer. Start your night off right at the Patio Bar and enjoy a mojito with your friends. Then meet some new friends and continue the party on Duval Street!
          </p>
        </section>

        {/* Featured Cocktails */}
        <section className="py-24 bg-[#f5f5f0] text-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <Martini className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 uppercase tracking-tight">Cocktail Specialities</h2>
              <div className="h-1 w-24 bg-secondary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif text-secondary mb-4 uppercase tracking-widest font-bold">Featured</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-3xl font-bold font-serif mb-2">Mojito</h4>
                    <p className="text-black/80 leading-relaxed font-light">
                      Cuban cocktail made with fresh mint and lime, a double shot of Bacardi Light Rum, bitters and sugar, topped with soda water. In 14 oz. souvenir mojito glass
                    </p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold font-serif mb-2">Caipirinha</h4>
                    <p className="text-black/80 leading-relaxed font-light">
                      Fresh lime and sugar mixed with Cachaca - a Brazilian favorite.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif text-secondary mb-4 uppercase tracking-widest font-bold">House Favorites</h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="text-2xl font-bold font-serif">Pepe&apos;s Homemade Sangria</h4>
                    <p className="text-white/70 italic">Glass, 1/2 Carafe, Carafe</p>
                  </li>
                  <li>
                    <h4 className="text-2xl font-bold font-serif">Agent Orange</h4>
                    <p className="text-black/70 italic">Equal parts of Cuervo Gold and Grand Marnier served chilled</p>
                  </li>
                  <li>
                    <h4 className="text-2xl font-bold font-serif">Tangerine Dream</h4>
                    <p className="text-black/70 italic">Premium Vodka, Triple Sec and Peach Schnapps mixed with juices</p>
                  </li>
                  <li>
                    <h4 className="text-2xl font-bold font-serif">Cuba Libre</h4>
                    <p className="text-black/70 italic">Bacardi Rum on the rocks with cola and a lime</p>
                  </li>
                  <li>
                    <h4 className="text-2xl font-bold font-serif">Pepe’s Lemonade</h4>
                    <p className="text-black/70 italic">A tropical refreshment made with Bacardi Limon</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tropical & Margaritas */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Tropical Delights */}
              <div>
                <div className="text-center mb-10">
                  <Citrus className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary font-serif mb-2 uppercase">Tropical Delights</h2>
                  <div className="h-1 w-16 bg-secondary mx-auto" />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Piña Colada</h4>
                    <p className="text-gray-600 text-sm">A frozen concoction with coconut and pineapple mixed with Premium Rum and topped with Bacardi Select.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Rum Runner</h4>
                    <p className="text-gray-600 text-sm">A blend of Bacardi rums and juices with banana and blackberry brandy, frozen or on the rocks.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Daiquiri</h4>
                    <p className="text-gray-600 text-sm">Premium Rum mixed with lime, or strawberry, or mango, served frozen.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Banana Bash</h4>
                    <p className="text-gray-600 text-sm">A frozen delight mixed with Cruzan Banana rum and Creme de Banana.</p>
                  </div>
                </div>
              </div>

              {/* Margaritas */}
              <div>
                <div className="text-center mb-10">
                  <Citrus className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary font-serif mb-2 uppercase">Margaritas</h2>
                  <div className="h-1 w-16 bg-secondary mx-auto" />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Margarita</h4>
                    <p className="text-gray-600 text-sm">With or without salt rocks or frozen</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Gold Margarita</h4>
                    <p className="text-gray-600 text-sm">Made with Premium Tequila</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Grand Gold Margarita</h4>
                    <p className="text-gray-600 text-sm">Made with Premium Tequila and Grand Marnier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beer Selection */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6 text-secondary">
              <Beer className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4 uppercase tracking-tight">Beer Selections</h2>
            <p className="text-gray-500 mb-12 font-light italic max-w-2xl mx-auto">Refresh yourself with our selection of domestic, premium, and draft beers</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Domestic", items: "Budweiser, Bud Light, Miller Light, O'Douls" },
                { title: "Premium", items: "Corona, Presidente, Negra Modelo, Heineken, Hatuey" },
                { title: "On Tap", items: "Bud Light, Bud, Coors Light, Michelob Amber Boch" }
              ].map((section, idx) => (
                <div key={idx} className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-secondary hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-bold text-lg text-primary mb-4 uppercase tracking-widest group-hover:text-secondary transition-colors">{section.title}</h3>
                  <div className="h-px w-12 bg-gray-300 mx-auto mb-4 group-hover:bg-secondary/50 transition-colors"></div>
                  <p className="text-gray-600 leading-relaxed font-light">{section.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
