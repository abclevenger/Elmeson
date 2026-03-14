import Link from "next/link";
import { Home, Menu, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--background)] text-[var(--charcoal)]">
      <div className="text-center max-w-md">
        <p className="text-6xl font-serif text-[var(--gold)] mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-serif font-light mb-4">
          Page not found
        </h1>
        <p className="text-[var(--warm-700)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to the good stuff.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center gap-2 min-h-[48px] px-6"
          >
            <Home size={20} aria-hidden="true" />
            Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 border-2 border-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/10 transition-colors rounded-lg font-medium"
          >
            <Menu size={20} aria-hidden="true" />
            View Menu
          </Link>
          <a
            href="tel:+13052952620"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 border-2 border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--warm-100)] transition-colors rounded-lg font-medium"
          >
            <Phone size={20} aria-hidden="true" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
