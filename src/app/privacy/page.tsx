import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Privacy Policy - El Meson de Pepe",
    description: "Privacy Policy for El Meson de Pepe. Learn how we collect, use, and protect your personal information, including SMS messaging and data security practices.",
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
        title: "Privacy Policy - El Meson de Pepe",
        description: "Privacy Policy for El Meson de Pepe. Learn how we collect, use, and protect your personal information.",
        url: "https://www.elmesondepepe.com/privacy",
    },
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Privacy Policy", url: "/privacy" },
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
                            Privacy Policy
                        </h1>
                        <div className="h-1.5 w-32 bg-secondary mx-auto my-6 shadow-lg" />
                        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light italic drop-shadow-md">
                            How we protect and use your information
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
                                This Privacy Policy explains how El Meson de Pepe ("we," "us," "our") collects, uses, and protects your personal information when you visit elmesondepepe.com, subscribe to updates, make reservations, or communicate with us via email or text messages.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                                <li><strong>Personal Information:</strong> Name, email, phone number, reservation details, or any data you provide when subscribing or contacting us.</li>
                                <li><strong>SMS Consent Data:</strong> Mobile number, opt-in status, and message interaction history for text messages.</li>
                                <li><strong>Technical/Usage Data:</strong> IP address, browser type, and site interaction data through cookies or analytics tools to improve website performance and user experience.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                This information is collected when you:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                                <li>Sign up for newsletters or offers</li>
                                <li>Submit forms on our site</li>
                                <li>Make reservations</li>
                                <li>Opt-in to SMS or marketing communications</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                We use collected information to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                                <li>Respond to reservations, inquiries, and support requests</li>
                                <li>Send transactional messages (confirmation, updates)</li>
                                <li>Send promotional and marketing messages only if you explicitly consent</li>
                                <li>Improve our website, services, and customer engagement</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We do not sell or rent your personal information to other companies.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SMS/Text Messaging & A2P Compliance</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By providing your mobile number and opting in, you consent to receive text messages from El Meson de Pepe. These messages may include reservation confirmations, updates, promotional messages, or special offers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                <strong>Key disclosures for SMS (A2P 10DLC compliance):</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                                <li>Message frequency varies</li>
                                <li>Message and data rates may apply</li>
                                <li>Consent is not a condition of purchase</li>
                                <li>You may opt out at any time</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                To stop receiving SMS, reply STOP. For help, reply HELP or contact us directly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will never share or sell your mobile number to third parties for marketing.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We may use cookies and similar technologies to analyze website usage and enhance functionality. You can disable cookies through your browser settings but some features may not work properly.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Share Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                We may share your information only with:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                                <li>Service providers who assist in our operations</li>
                                <li>Legal authorities when required by law</li>
                                <li>Parties to protect rights or safety</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                All third parties are required to use your information only to perform services on our behalf.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We use reasonable technical and administrative safeguards to protect your information. However, no system can guarantee absolute security.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Florida Privacy Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under Florida law, residents may request access to their personal information and ask for corrections or deletions where applicable. To exercise these rights, contact us.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our website may include links to external sites not operated by us. We are not responsible for their privacy practices.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We may update this Privacy Policy. The revised version will have an updated effective date.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have questions about this Privacy Policy or your data, contact:
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
