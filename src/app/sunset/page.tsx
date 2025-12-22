import Image from "next/image";
import Link from "next/link";
import { Music, Users, Calendar } from "lucide-react";

export default function SunsetCelebrationPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with Split Images */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                    {/* Left side - Band playing */}
                    <div className="relative">
                        <Image
                            src="/images/hero.png"
                            alt="Live music at sunset"
                            fill
                            className="object-cover brightness-75"
                        />
                    </div>
                    {/* Right side - Sunset crowd */}
                    <div className="relative">
                        <Image
                            src="/images/hero.png"
                            alt="Sunset celebration crowd"
                            fill
                            className="object-cover brightness-90"
                        />
                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Title */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-serif tracking-widest">
                        SUNSET CELEBRATION
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="text-lg leading-relaxed">
                            Welcome to the <span className="font-semibold text-primary">Mallory Square Sunset Celebration</span>, one of the finest sunset celebrations in all of Key West! We're located right at the heart of the action on the island and perform a variety of Caribbean Heartbeat!
                        </p>

                        <p className="text-lg leading-relaxed">
                            Nightly, throngs of Key West visitors and locals alike flock to Mallory Square to witness the spectacle of the sun setting over the Gulf of Mexico. What used to be El Meson de Pepe classic Latin of those shows off the live jazz. We're located right at Mallory Square, and in our opinion, nothing goes better with a sunset than a refreshing mojito and a selection of Cuban tapas. In addition to great libations, every evening just before sunset, we have a live Salsa band for everyone to enjoy. Cafes of Key West is the only local island band on the island and performs a variety of Caribbean Heartbeat!
                        </p>

                        <p className="text-lg leading-relaxed">
                            For those who are unfamiliar with the Mallory Square Sunset Celebration, it's a nightly festival that begins 2 hours before sunset. The celebration includes street performers, magicians, jugglers, food artists and vendors that all come together for an evening that is uniquely Key West. Visitors and locals alike gather to watch one of the best sunset views in the entire world. There are very few places that can experience such a wonderful occasion every evening. At Meson de Pepe, we're there before, during and after the celebration offering authentic Cuban dishes and tasty cocktails for everyone to enjoy!
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <Link
                            href="https://www.sunsetcelebration.org/"
                            target="_blank"
                            className="inline-block text-primary hover:text-secondary font-semibold text-lg border-b-2 border-primary hover:border-secondary transition-colors pb-1"
                        >
                            Watch one of the best sunset views in the entire world
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Music className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Salsa Band</h3>
                            <p className="text-gray-600">
                                Enjoy live music every evening as the sun sets over the Gulf of Mexico
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Street Performers</h3>
                            <p className="text-gray-600">
                                Magicians, jugglers, and artists create a festive atmosphere
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Nightly Event</h3>
                            <p className="text-gray-600">
                                Celebration begins 2 hours before sunset, every single evening
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hours & Location */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Join Us at Mallory Square</h2>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 inline-block">
                        <p className="text-xl text-gray-800 mb-4">
                            <span className="font-bold text-secondary">Monday through Thursday</span>
                            <br />
                            11am-9pm
                        </p>
                        <p className="text-xl text-gray-800 mb-4">
                            <span className="font-bold text-secondary">Friday through Sunday</span>
                            <br />
                            11am-10pm
                        </p>
                        <p className="text-gray-600 mt-6">
                            We do not take reservations and operate solely on a first come, first serve basis.
                            <br />
                            And we are open lunch.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
