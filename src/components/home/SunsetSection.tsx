import Link from "next/link";

export default function SunsetSection() {
    return (
        <section className="py-16 md:py-24 bg-white text-gray-800 relative overflow-hidden" aria-label="Sunset Celebration">
            <div className="oval-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-800 font-serif mb-2">
                            Sunset
                        </h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 uppercase tracking-wide mb-6">
                            CELEBRATION
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 font-serif max-w-2xl mx-auto">
                            Experience the famous Mallory Square Sunset Celebration. Join us before, during, and after the celebration for authentic Cuban tapas, entrees, and cocktails. Perfect for pre- and post-party atmosphere with live music and stunning sunset views.
                        </p>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/sunset"
                            className="inline-block bg-gray-200 hover:bg-primary hover:text-white text-gray-900 font-semibold py-3 px-8 min-h-[48px] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-4"
                            aria-label="Learn more about the sunset celebration"
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

