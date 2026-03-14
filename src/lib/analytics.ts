/**
 * GA4 event tracking. Safe to call before gtag loads (events queue).
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export const GA_EVENTS = {
  callClick: () => trackEvent("call_click", { event_category: "engagement" }),
  menuClick: () => trackEvent("menu_click", { event_category: "engagement" }),
  waitlistClick: () => trackEvent("waitlist_click", { event_category: "conversion" }),
  directionsClick: () => trackEvent("directions_click", { event_category: "engagement" }),
  contactSubmit: () => trackEvent("contact_submit", { event_category: "conversion" }),
} as const;
