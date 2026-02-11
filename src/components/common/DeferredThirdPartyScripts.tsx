"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const LCP_DELAY_MS = 8000; // Load after 8s or on interaction

/**
 * Loads heavy third-party scripts (LeadConnector, GTM, ymbs) only after LCP or
 * user interaction to improve mobile performance and LCP.
 */
export default function DeferredThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const load = () => {
      if (cancelled) return;
      setShouldLoad(true);
    };

    const onInteraction = () => {
      load();
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
    };

    timeoutId = setTimeout(load, LCP_DELAY_MS);

    window.addEventListener("scroll", onInteraction, { passive: true } as AddEventListenerOptions);
    window.addEventListener("click", onInteraction);
    window.addEventListener("keydown", onInteraction);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* ymbs.pro SEO - defer until after LCP */}
      <Script
        id="sa-dynamic-optimization"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `var script = document.createElement("script");script.setAttribute("nowprocket", "");script.setAttribute("nitro-exclude", "");script.src = "https://seo.ymbs.pro/scripts/dynamic_optimization.js";script.dataset.uuid = "f1f7b153-6650-4384-b863-b4f3c9330d09";script.id = "sa-dynamic-optimization-loader";document.head.appendChild(script);`,
        }}
      />
      {/* Google Analytics 4 */}
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
      {/* LeadConnector chat widget - deferred for LCP */}
      <Script
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="695dd899df0d1eee130bf73b"
        strategy="lazyOnload"
      />
      {/* Fix LeadConnector close button aria-label after widget loads */}
      <Script
        id="leadconnector-a11y-fix"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function fixLeadConnectorA11y() {
              function run() {
                try {
                  var btns = document.querySelectorAll('[data-widget-id="695dd899df0d1eee130bf73b"] button[aria-label=""], [class*="leadconnector"] button[aria-label=""], [id*="chat-widget"] button[aria-label=""]');
                  btns.forEach(function(b) {
                    if (!b.getAttribute('aria-label') && (b.textContent.trim() === '' || b.querySelector('svg, [class*="close"], [class*="icon"]'))) {
                      b.setAttribute('aria-label', 'Close chat');
                    }
                  });
                } catch(e) {}
              }
              if (document.readyState === 'complete') {
                run();
                setTimeout(run, 2000);
              } else {
                window.addEventListener('load', function() { run(); setTimeout(run, 2000); });
              }
              var ob = new MutationObserver(function() { run(); });
              ob.observe(document.body, { childList: true, subtree: true });
              setTimeout(function() { ob.disconnect(); }, 15000);
            })();
          `,
        }}
      />
    </>
  );
}
