import type { Metadata } from "next";
import { Geist, Great_Vibes, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
    default: "El Meson de Pepe - Authentic Cuban Food | Key West Restaurant",
    template: "%s | El Meson de Pepe",
  },
  description: "Experience the authentic taste of Cuba at El Meson de Pepe in Mallory Square, Key West. Family owned and operated since 1984. Authentic Cuban cuisine, live Salsa music, and sunset celebrations.",
  keywords: ["Cuban food", "Key West restaurant", "Mallory Square", "authentic Cuban cuisine", "Key West dining", "Cuban restaurant", "El Meson de Pepe", "Key West Cuban food"],
  authors: [{ name: "El Meson de Pepe" }],
  creator: "El Meson de Pepe",
  publisher: "El Meson de Pepe",
  metadataBase: new URL("https://www.elmesondepepe.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elmesondepepe.com",
    siteName: "El Meson de Pepe",
    title: "El Meson de Pepe - Authentic Cuban Food | Key West Restaurant",
    description: "Experience the authentic taste of Cuba at El Meson de Pepe in Mallory Square, Key West. Family owned and operated since 1984.",
    images: [
      {
        url: "/images/el-meson-de-pepe-key-west-logo.webp",
        width: 1200,
        height: 630,
        alt: "El Meson de Pepe - Authentic Cuban Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Meson de Pepe - Authentic Cuban Food | Key West Restaurant",
    description: "Experience the authentic taste of Cuba at El Meson de Pepe in Mallory Square, Key West. Family owned and operated since 1984.",
    images: ["/images/el-meson-de-pepe-key-west-logo.webp"],
    creator: "@elmesondepepe",
  },
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
  verification: {
    google: "sWm7_rP2H_9XHu0NBY9NzH6ji3WhHhU-hR-TVZRp9MY",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/common/CookieBanner";
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
        className={`${geistSans.variable} ${greatVibes.variable} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" aria-label="Main content">{children}</main>
        <Footer />
        <CookieBanner />
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
      </body>
    </html>
  );
}
