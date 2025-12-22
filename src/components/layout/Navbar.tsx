"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    {
        name: "Our Story",
        href: "/story",
        dropdown: [
            { name: "Restaurant", href: "/story" },
            { name: "History of Key West and Cuba", href: "/story/history" },
            { name: "Pepe's Key West Blog", href: "/story/blog" },
        ]
    },
    { name: "Private Parties", href: "/parties" },
    { name: "Sunset Celebration", href: "/sunset" },
    { name: "Patio Bar", href: "/patio" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-wider font-serif">
                            EL MESON DE PEPE
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {NAV_ITEMS.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
                                    onMouseLeave={() => setDropdownOpen(null)}
                                >
                                    {item.dropdown ? (
                                        <>
                                            <button className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide flex items-center space-x-1">
                                                <span>{item.name}</span>
                                                <ChevronDown size={16} />
                                            </button>
                                            {dropdownOpen === item.name && (
                                                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-primary">
                            <Facebook size={20} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-primary">
                            <Instagram size={20} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                                            className="text-gray-700 hover:text-primary w-full text-center px-3 py-2 rounded-md text-base font-medium flex items-center justify-center space-x-1"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown size={16} className={`transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {dropdownOpen === item.name && (
                                            <div className="pl-4 space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm text-center"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium text-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center space-x-6 pt-4 pb-2">
                            <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-primary">
                                <Facebook size={24} />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-primary">
                                <Instagram size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
