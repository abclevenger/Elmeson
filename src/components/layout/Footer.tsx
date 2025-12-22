import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Socials */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-xl font-bold text-primary tracking-wider font-serif">EL MESON DE PEPE</h3>
                        <p className="text-sm text-gray-600 max-w-xs text-center md:text-left">
                            Authentic Cuban food in the heart of Mallory Square. Preserving the legacy of Pepe Diaz and family since 1984.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" className="text-gray-500 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://instagram.com" className="text-gray-500 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-lg font-semibold text-secondary">Navigate</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600 items-center md:items-start">
                            <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
                            <Link href="/story" className="hover:text-primary transition-colors">Our Story</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Make a Reservation</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-lg font-semibold text-secondary">Visit Us</h4>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-1 text-primary" />
                                <span>410 Wall Street, Mallory Square<br />Key West, FL 33040</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary" />
                                <span>305-295-2620</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary" />
                                <span>info@elmesondepepe.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} El Meson de Pepe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
