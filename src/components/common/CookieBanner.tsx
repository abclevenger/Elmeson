"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      let cancelled = false;
      const id = setTimeout(() => {
        if (!cancelled) setShowBanner(true);
      }, 500);
      return () => {
        cancelled = true;
        clearTimeout(id);
      };
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      suppressHydrationWarning
      className="no-print fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-4 sm:py-5 shadow-lg"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h2 id="cookie-banner-title" className="sr-only">Cookie notice</h2>
          <p id="cookie-banner-description" className="text-sm sm:text-base text-gray-200">
            We use cookies to give you the best experience. By using our site, you agree to our cookie policy.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={acceptCookies}
            className="bg-white text-gray-900 px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base min-h-[44px] min-w-[80px] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 uppercase tracking-wide"
            aria-label="Accept cookies"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

