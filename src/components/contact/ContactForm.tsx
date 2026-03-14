"use client";

import { useState, FormEvent } from "react";
import { GA_EVENTS } from "@/lib/analytics";

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!message.trim()) {
            newErrors.message = "Message is required";
        } else if (message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        try {
            // In a real implementation, this would be an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            GA_EVENTS.contactSubmit();
            setSubmitStatus("success");
            setName("");
            setEmail("");
            setMessage("");
            setErrors({});
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* ARIA Live Region for Form Status */}
            <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                {submitStatus === "success" && "Form submitted successfully"}
                {submitStatus === "error" && "Error submitting form. Please try again."}
                {Object.keys(errors).length > 0 && "Please fix the errors in the form"}
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
                <div
                    role="alert"
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                >
                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
                <div
                    role="alert"
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
                >
                    <p className="font-medium">There was an error sending your message. Please try again.</p>
                </div>
            )}

            {/* Name Field */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                            setErrors({ ...errors, name: undefined });
                        }
                    }}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Name"
                />
                {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                            setErrors({ ...errors, email: undefined });
                        }
                    }}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                />
                {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-600" aria-label="required">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                            setErrors({ ...errors, message: undefined });
                        }
                    }}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                />
                {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="w-full bg-primary hover:bg-secondary disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wide min-h-[48px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-4"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}

