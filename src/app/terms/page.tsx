import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Terms & Conditions - El Meson de Pepe",
    description: "Terms & Conditions for El Meson de Pepe website. Learn about website use, reservations, SMS messaging terms, intellectual property, and more.",
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
        title: "Terms & Conditions - El Meson de Pepe",
        description: "Terms & Conditions for El Meson de Pepe website. Learn about website use, reservations, SMS messaging terms, and more.",
        url: "https://www.elmesondepepe.com/terms",
    },
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Terms & Conditions", url: "/terms" },
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
                            Terms & Conditions
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            Legal information and terms of use
                        </p>
                    </div>
                </section>

                <div className="pb-20 px-4 pt-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Effective Date:</strong> January 8, 2026
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Welcome to the website of El Meson de Pepe ("we," "us," or "our"). By accessing or using this website, submitting forms, making reservations, or opting into communications, you agree to the following Terms & Conditions. If you do not agree, please do not use our website or services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Website</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This website is provided for informational and promotional purposes only. You agree to use the site lawfully and not in a way that could damage, disable, or interfere with its operation or security.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We may modify or discontinue any part of the website at any time without notice.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reservations & Information Accuracy</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Reservation requests, menus, pricing, hours, and availability are subject to change without notice. Submission of a reservation request does not guarantee availability until confirmed by us.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We strive for accuracy but do not guarantee that all content on the website is complete, current, or error-free.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SMS Messaging Terms (A2P 10DLC Compliance)</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By providing your mobile phone number and opting in, you agree to receive SMS text messages from El Meson de Pepe, which may include reservation confirmations, updates, promotions, or customer service communications.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                <strong>Important disclosures:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                                <li>Message frequency may vary</li>
                                <li>Message and data rates may apply</li>
                                <li>Consent is not a condition of purchase</li>
                                <li>You may opt out at any time</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                To opt out, reply STOP to any message.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For assistance, reply HELP or contact us directly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We do not share or sell SMS opt-in data or phone numbers to third parties for marketing purposes.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All content on this website, including text, images, logos, graphics, and design elements, is the property of El Meson de Pepe or its licensors and is protected by applicable intellectual property laws.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You may not reproduce, distribute, or use any content without prior written permission.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This website may include links to third-party websites. We do not control or endorse those sites and are not responsible for their content, policies, or practices. Accessing third-party sites is at your own risk.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To the fullest extent permitted under Florida law, El Meson de Pepe shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website, communications, or services.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Use of this website is at your own risk.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You agree to indemnify and hold harmless El Meson de Pepe, its owners, employees, and affiliates from any claims, damages, or expenses arising from your use of the website or violation of these Terms & Conditions.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These Terms & Conditions are governed by and construed in accordance with the laws of the State of Florida, without regard to conflict-of-law principles.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to These Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We may update these Terms & Conditions at any time. Changes will be posted on this page with a revised effective date. Continued use of the website constitutes acceptance of the updated terms.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have questions about these Terms & Conditions, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                                <p className="text-gray-900 font-semibold mb-2">El Meson de Pepe</p>
                                <p className="text-gray-700 mb-2">
                                    410 Wall Street, Mallory Square<br />
                                    Key West, FL 33040
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Email: <a href="mailto:info@elmesondepepe.com" className="text-primary hover:underline">info@elmesondepepe.com</a>
                                </p>
                                <p className="text-gray-700">
                                    Phone: <a href="tel:+13052952620" className="text-primary hover:underline">305-295-2620</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
