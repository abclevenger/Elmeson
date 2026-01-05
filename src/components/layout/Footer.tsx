"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

// Custom TikTok icon component since lucide-react doesn't include it
const TikTokIcon = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#0B1120] text-white py-20 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <h3 className="text-3xl font-serif text-white tracking-wider uppercase mb-2">El Meson de Pepe</h3>
                            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Authentic Cuban Heritage</p>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed max-w-sm font-light">
                            Family owned and operated since 1985. Dedicated to preserving the Cuban-Conch heritage in the heart of Mallory Square.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/ElMesonKeyWest/" },
                                { Icon: Instagram, href: "https://www.instagram.com/elmesondepepe/" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/el-meson-de-pepe" },
                                { Icon: TikTokIcon, href: "https://www.tiktok.com/@elmesondepepe" }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-white font-serif uppercase tracking-widest text-sm font-bold">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/menu" className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200">Our Menu</Link></li>
                            <li><Link href="/parties" className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200">Private Parties</Link></li>
                            <li><Link href="/story" className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200">Our Story</Link></li>
                            <li><Link href="/shop" className="text-white/80 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200">Mercado</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Hours (3 cols) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-serif uppercase tracking-widest text-sm font-bold">Visit Us</h4>
                        <div className="space-y-4 text-sm text-white/90">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <address className="not-italic">
                                    410 Wall Street<br />
                                    Mallory Square<br />
                                    Key West, FL 33040
                                </address>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+13052952620" className="hover:text-white transition-colors font-semibold">305-295-2620</a>
                            </div>
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <p className="mb-1 flex justify-between"><span className="text-white font-semibold">Mon-Thu:</span> <span>11am - 9pm</span></p>
                                <p className="flex justify-between"><span className="text-white font-semibold">Fri-Sun:</span> <span>11am - 10pm</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter (3 cols) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-serif uppercase tracking-widest text-sm font-bold">Join the Family</h4>
                        <p className="text-xs text-white/80 leading-relaxed">Sign up for exclusive offers, event updates, and a taste of Cuba delivered to your inbox.</p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all font-light"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-secondary text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-lg shadow-black/20 hover:shadow-black/40 flex items-center justify-center gap-2"
                            >
                                <span>Subscribe</span>
                                <Mail size={14} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-medium">
                        © {new Date().getFullYear()} El Meson de Pepe. All rights reserved.
                    </p>

                    <nav className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-white/60 font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
