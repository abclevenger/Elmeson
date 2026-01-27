"use client";

import Script from "next/script";
import { Gift } from "lucide-react";

export default function GiftCard() {
    return (
        <section className="py-24 bg-[#f5f5f0]">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6 text-secondary">
                        <Gift className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4 uppercase tracking-tight">
                        Gift Cards
                    </h2>
                    <p className="text-gray-600 mb-4 font-light italic max-w-2xl mx-auto">
                        Share the taste of Cuba with friends and family
                    </p>
                    <div className="h-1 w-24 bg-secondary mx-auto" />
                </div>

                {/* Gift Card Embed */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div data-gc-id="6977e9a5b10e0bfaa2c019ee"></div>
                </div>
            </div>

            <Script
                src="https://storage.googleapis.com/leadgen-payment-products-preview-nuxt-assets/js/iframe-resizer/gc-embed.parent.js"
                strategy="lazyOnload"
            />
        </section>
    );
}
