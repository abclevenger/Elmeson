import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Priority Seating — El Mesón de Pepe Key West",
  description:
    "Request priority seating or join the waitlist at El Mesón de Pepe in Mallory Square, Key West. We'll get you seated as soon as possible.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Priority Seating | El Mesón de Pepe — Key West",
    description: "Request priority seating or join our waitlist.",
    url: "https://www.elmesondepepe.com/priority-seating",
  },
  alternates: { canonical: "/priority-seating" },
};

const PRIORITY_SEATING_FORM_URL = "https://link.ymbs.pro/widget/form/wtSXA42g1zdkkMjuTT92";

import { redirect } from "next/navigation";
import { WAITLIST_ENABLED } from "@/lib/config";

export default function PrioritySeatingPage() {
  if (!WAITLIST_ENABLED) {
    redirect("/contact?waitlist=coming-soon");
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
          { name: "Priority Seating", url: "/priority-seating" },
        ]}
      />
      <div className="min-h-screen bg-[var(--background)]">
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/key-west-cuban-food.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 tracking-wider uppercase drop-shadow-lg">
              Priority Seating
            </h1>
            <div className="h-1.5 w-32 bg-secondary mx-auto my-4 shadow-lg" />
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-light drop-shadow-md">
              Join our waitlist or request priority seating for your visit.
            </p>
          </div>
        </section>

        <div className="pb-20 px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--warm-100)] p-8 rounded-xl border border-[var(--border)]">
              <iframe
                src={PRIORITY_SEATING_FORM_URL}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                id="inline-wtSXA42g1zdkkMjuTT92"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Priority Seating"
                data-height="1149"
                data-layout-iframe-id="inline-wtSXA42g1zdkkMjuTT92"
                data-form-id="wtSXA42g1zdkkMjuTT92"
                title="Priority Seating — El Mesón de Pepe"
                className="w-full min-h-[800px]"
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="link-underline text-[var(--warm-700)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
              >
                Back to Contact Us
              </Link>
              <Link
                href="/menu"
                className="link-underline text-[var(--warm-700)] hover:text-[var(--gold)] font-medium text-sm uppercase tracking-wider"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://link.ymbs.pro/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
