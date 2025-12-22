import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">Contact Us</h1>
                    <p className="text-gray-600 text-lg">Get in touch or visit us in Mallory Square</p>
                    <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Info */}
                    <div className="space-y-8 bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-primary mt-1 w-6 h-6" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600">410 Wall Street<br />Key West, FL 33040</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Phone className="text-primary w-6 h-6" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600">305-295-2620</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Mail className="text-primary w-6 h-6" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">info@elmesondepepe.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Clock className="text-primary mt-1 w-6 h-6" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                                <p className="text-gray-600">Open Daily 11:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?" />
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wide">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
