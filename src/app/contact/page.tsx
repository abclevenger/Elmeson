import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import GiftCard from "@/components/common/GiftCard";

export const metadata: Metadata = {
    title: "Contact Us - Visit El Meson de Pepe in Key West",
    description: "Contact El Meson de Pepe in Mallory Square, Key West. Call us at 305-295-2620 or visit us at 410 Wall Street. Open daily 11 AM - 10 PM.",
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
        title: "Contact Us - Visit El Meson de Pepe in Key West",
        description: "Contact El Meson de Pepe in Mallory Square, Key West. Call us at 305-295-2620 or visit us at 410 Wall Street.",
        url: "https://www.elmesondepepe.com/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Contact Us", url: "/contact" },
            ]} />
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/images/key-west-cuban-food.webp')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
                            Contact Us
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            Get in touch or visit us in Mallory Square
                        </p>
                    </div>
                </section>

                <div className="pb-20 px-4 pt-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Form */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                            <iframe
                                src="https://link.ymbs.pro/widget/form/wtSXA42g1zdkkMjuTT92"
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                                id="inline-wtSXA42g1zdkkMjuTT92"
                                data-layout='{"id":"INLINE"}'
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Priority Seating"
                                data-height="1149"
                                data-layout-iframe-id="inline-wtSXA42g1zdkkMjuTT92"
                                data-form-id="wtSXA42g1zdkkMjuTT92"
                                title="Priority Seating"
                                className="w-full min-h-[600px]"
                            />
                        </div>
                    </div>
                </div>

                <GiftCard />
            </div>
            <Script src="https://link.ymbs.pro/js/form_embed.js" strategy="lazyOnload" />
        </>
    );
}
