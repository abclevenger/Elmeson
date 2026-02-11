"use client";

import Link from "next/link";
import { GOOGLE_MAPS_URL } from "@/lib/site";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/common/LanguageToggle";
import { WAITLIST_ENABLED } from "@/lib/config";

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
    const { t } = useLanguage();

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer suppressHydrationWarning className="bg-[var(--charcoal)] text-[var(--warm-100)] py-20 pb-24 lg:pb-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <h3 className="text-3xl font-serif text-[var(--warm-100)] tracking-wider uppercase mb-2">El Mesón de Pepe</h3>
                            <p className="text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase">{t.footer.tagline}</p>
                            <p className="text-[var(--warm-500)] text-xs mt-1 italic">{t.footer.thirtyYears}</p>
                        </div>
                        <p className="text-[var(--warm-300)] text-sm leading-relaxed max-w-sm font-light">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/ElMesonKeyWest/", label: "El Mesón de Pepe on Facebook" },
                                { Icon: Instagram, href: "https://www.instagram.com/elmesondepepe/", label: "El Mesón de Pepe on Instagram" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/el-meson-de-pepe", label: "El Mesón de Pepe on LinkedIn" },
                                { Icon: TikTokIcon, href: "https://www.tiktok.com/@elmesondepepe", label: "El Mesón de Pepe on TikTok" }
                            ].map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-[var(--warm-100)] hover:bg-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300 group"
                                >
                                    <Icon size={18} className="text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-[var(--warm-100)] font-serif uppercase tracking-widest text-sm font-bold">{t.footer.explore}</h4>
                        <ul className="space-y-1 text-sm" role="list">
                            <li><Link href="/menu" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.menu}</Link></li>
                            <li><Link href="/story" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.story}</Link></li>
                            <li><Link href="/story/blog" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.blog}</Link></li>
                            <li><Link href="/parties" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.parties}</Link></li>
                            <li><Link href="/sunset" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.sunset}</Link></li>
                            <li><Link href="/patio" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.patio}</Link></li>
                            <li><Link href="/careers" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.careers}</Link></li>
                            <li><Link href="/contact" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.contact}</Link></li>
                            <li><Link href="/birthday" className="text-[var(--warm-300)] hover:text-[var(--warm-100)] transition-colors block py-2.5 min-h-[44px] flex items-center hover:translate-x-1 duration-200">{t.footer.birthday}</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Hours (3 cols) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-[var(--warm-100)] font-serif uppercase tracking-widest text-sm font-bold">{t.footer.visitUs}</h4>
                        <div className="space-y-4 text-sm text-[var(--warm-300)]">
                            <p className="text-[var(--gold)] font-semibold uppercase tracking-wider text-xs">Open daily 11 AM – 10 PM</p>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                                <address className="not-italic">
                                    <a
                                        href={GOOGLE_MAPS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[var(--warm-100)] transition-colors"
                                    >
                                        410 Wall Street<br />
                                        Mallory Square<br />
                                        Key West, FL 33040
                                    </a>
                                </address>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[var(--gold)] shrink-0" />
                                <a href="tel:+13052952620" className="hover:text-[var(--warm-100)] transition-colors font-semibold">305-295-2620</a>
                            </div>

                            {/* Google Map */}
                            <div className="mt-4 rounded-xl overflow-hidden border border-white/10 h-32 w-full group">
                                <iframe
                                    src="https://maps.google.com/maps?cid=12074568368866857534&output=embed"
                                    loading="lazy"
                                    width="100%"
                                    height="100%"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                    allowFullScreen
                                    className="border-0 grayscale invert-[0.85] contrast-[1.2] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>

                            <div className="pt-4 border-t border-white/10 mt-2">
                                <p className="mb-1 flex justify-between"><span className="text-[var(--warm-100)] font-semibold">Mon-Thu:</span> <span>11am - 9pm</span></p>
                                <p className="flex justify-between"><span className="text-[var(--warm-100)] font-semibold">Fri-Sun:</span> <span>11am - 10pm</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter (3 cols) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-[var(--warm-100)] font-serif uppercase tracking-widest text-sm font-bold">{t.footer.joinFamily}</h4>
                        <p className="text-xs text-[var(--warm-300)] leading-relaxed">{t.footer.joinFamilyDesc}</p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t.footer.emailPlaceholder}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all font-light"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--gold)] hover:bg-[var(--charcoal)] text-[var(--charcoal)] hover:text-[var(--warm-100)] text-xs font-bold uppercase tracking-widest min-h-[48px] py-4 px-4 rounded-lg transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-2"
                            >
                                <span>{t.footer.subscribe}</span>
                                <Mail size={14} />
                            </button>
                            {WAITLIST_ENABLED ? (
                                <Link
                                    href="/priority-seating"
                                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-[var(--gold)]/60 bg-transparent text-white hover:bg-black hover:text-[var(--gold)] hover:border-[var(--gold)] text-xs font-bold uppercase tracking-widest min-h-[48px] py-4 px-4 rounded-lg transition-all"
                                >
                                    {t.footer.waitlistCta}
                                </Link>
                            ) : (
                                <a
                                    href="tel:+13052952620"
                                    aria-label={t.footer.callForSeatingAria ?? "Call El Mesón de Pepe at 305-295-2620 for same-day seating"}
                                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-[var(--gold)]/60 bg-transparent text-white hover:bg-black hover:text-[var(--gold)] hover:border-[var(--gold)] text-xs font-bold uppercase tracking-widest min-h-[48px] py-4 px-4 rounded-lg transition-all whitespace-nowrap"
                                >
                                    <Phone size={14} className="shrink-0" aria-hidden="true" />
                                    <span>{t.footer.callForSeating}</span>
                                </a>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--warm-500)] font-medium">
                        © {new Date().getFullYear()} El Meson de Pepe. {t.footer.allRights}
                    </p>

                    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] uppercase tracking-[0.15em] text-[var(--warm-500)] font-medium">
                        <LanguageToggle dark compact />
                        <Link href="/privacy" className="hover:text-[var(--warm-100)] transition-colors">{t.footer.privacy}</Link>
                        <Link href="/terms" className="hover:text-[var(--warm-100)] transition-colors">{t.footer.terms}</Link>
                        <Link href="/sitemap.xml" className="hover:text-[var(--warm-100)] transition-colors">{t.footer.sitemap}</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
