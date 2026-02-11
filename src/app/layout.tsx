import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1c1b19",
  viewportFit: "cover",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false, // Decorative font - don't preload
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Best Cuban Restaurant Key West | Mallory Square | El Mesón de Pepe",
    template: "%s | El Mesón de Pepe",
  },
  description: "Best Cuban food Key West—Mallory Square waterfront. Ropa Vieja, mojitos, live salsa, sunset patio. Cuban restaurant at Mallory Square since 1997.",
  keywords: ["Cuban restaurant Key West", "Mallory Square restaurant", "best Cuban food Key West", "Cuban American heritage", "Key West Cuban", "El Mesón de Pepe"],
  authors: [{ name: "El Mesón de Pepe" }],
  creator: "El Mesón de Pepe",
  publisher: "El Mesón de Pepe",
  metadataBase: new URL("https://www.elmesondepepe.com"),
  alternates: { canonical: "https://www.elmesondepepe.com/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elmesondepepe.com",
    siteName: "El Mesón de Pepe",
    title: "El Mesón de Pepe — Living Museum of Cuban American Heritage | Key West",
    description: "Where Cuban culture became Cuban American history. Guardian of Cuban American Conch heritage at Mallory Square.",
    images: [{ url: "/images/el-meson-de-pepe-key-west-logo.webp", width: 1200, height: 630, alt: "El Mesón de Pepe — Living Museum of Cuban American Heritage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Mesón de Pepe — Living Museum of Cuban American Heritage | Key West",
    description: "Where Cuban culture became Cuban American history.",
    images: ["/images/el-meson-de-pepe-key-west-logo.webp"],
    creator: "@elmesondepepe",
  },
  robots: { index: true, follow: true },
  verification: { google: "sWm7_rP2H_9XHu0NBY9NzH6ji3WhHhU-hR-TVZRp9MY" },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBar from "@/components/layout/ContactBar";
import CookieBanner from "@/components/common/CookieBanner";
import AnniversaryBanner from "@/components/common/AnniversaryBanner";
import DeferredThirdPartyScripts from "@/components/common/DeferredThirdPartyScripts";
import Providers from "@/components/providers/Providers";
import { OrganizationSchema } from "@/lib/schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect hints for faster third-party resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Aggressively remove known extension injections that break hydration
                var cleanup = function() {
                  var el = document.getElementById('contentOverview');
                  if (el) el.remove();
                };
                cleanup();
                if (typeof MutationObserver !== 'undefined') {
                  new MutationObserver(cleanup).observe(document, { childList: true, subtree: true });
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${greatVibes.variable} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <OrganizationSchema />
          {/* suppressHydrationWarning: Cursor's embedded browser injects data-cursor-ref into the DOM, causing attribute mismatch. Not an issue in production or normal browsers. */}
          <Providers>
            <header role="banner">
              <Navbar />
              <AnniversaryBanner />
            </header>
            <main id="main-content" aria-label="Main content" suppressHydrationWarning>{children}</main>
            <Footer />
            <ContactBar />
            <CookieBanner />
          </Providers>
        </div>
        {/* Third-party scripts deferred until after LCP or user interaction */}
        <DeferredThirdPartyScripts />
      </body>
    </html>
  );
}
