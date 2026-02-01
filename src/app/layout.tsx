import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
    default: "El Mesón de Pepe — A Living Museum of Cuban American Heritage | Key West",
    template: "%s | El Mesón de Pepe",
  },
  description: "Where Cuban culture became Cuban American history. A living archive of Cuban American Conch heritage in Mallory Square. Cuisine as cultural expression.",
  keywords: ["Cuban American heritage", "Key West", "Mallory Square", "living museum", "Cuban Conch", "El Mesón de Pepe", "Cuban American history", "Key West Cuban"],
  authors: [{ name: "El Mesón de Pepe" }],
  creator: "El Mesón de Pepe",
  publisher: "El Mesón de Pepe",
  metadataBase: new URL("https://www.elmesondepepe.com"),
  alternates: { canonical: "/" },
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
      </head>
      <body
        className={`${dmSans.variable} ${greatVibes.variable} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <OrganizationSchema />
        <div suppressHydrationWarning>
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
        {/* Deferred third-party scripts for better mobile performance */}
        <Script
          id="sa-dynamic-optimization"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `var script = document.createElement("script");script.setAttribute("nowprocket", "");script.setAttribute("nitro-exclude", "");script.src = "https://seo.ymbs.pro/scripts/dynamic_optimization.js";script.dataset.uuid = "f1f7b153-6650-4384-b863-b4f3c9330d09";script.id = "sa-dynamic-optimization-loader";document.head.appendChild(script);`,
          }}
        />
        {/* Google Analytics 4 - deferred for mobile performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0YWZC8X9PH"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0YWZC8X9PH');
            `,
          }}
        />
        <Script
          src="https://link.ymbs.pro/js/external-tracking.js"
          data-tracking-id="tk_3de1f1b5d7ef4de1a4230dc8d4b3919e"
          strategy="lazyOnload"
        />
        {/* LeadConnector chat widget */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="695dd899df0d1eee130bf73b"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
