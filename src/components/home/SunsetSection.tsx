import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function SunsetSection() {
    return (
        <section className="section-supporting bg-gradient-to-b from-white via-orange-50/30 to-white text-gray-800 relative overflow-hidden" aria-label="Sunset Celebration">
            {/* Subtle warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center">
                    {/* Script accent */}
                    <span className="script-accent block mb-3">A Key West Tradition</span>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-serif mb-4">
                        Sunset Celebration
                    </h2>
                    
                    <div className="accent-bar-center" aria-hidden="true" />
                    
                    <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-6 mb-8">
                        Experience the famous Mallory Square Sunset Celebration. Join us for authentic Cuban tapas, signature cocktails, and live music as the sun paints the sky in shades of gold.
                    </p>
                    
                    <Link
                        href="/sunset"
                        className="link-underline text-secondary hover:text-primary font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                        aria-label="Learn more about the sunset celebration"
                    >
                        Plan Your Evening
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}

