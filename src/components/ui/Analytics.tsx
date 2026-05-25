"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Loads Google Analytics 4 only after the user has accepted cookies.
 * Listens to the "cookie-consent" CustomEvent dispatched by CookieBanner.
 * Also checks localStorage on mount in case the user already consented.
 */
export default function Analytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Restore previously stored consent
    if (localStorage.getItem("cookie_consent") === "accepted") {
      setConsent(true);
    }
    // React to live banner interaction
    const handler = (e: Event) => {
      setConsent((e as CustomEvent<string>).detail === "accepted");
    };
    window.addEventListener("cookie-consent", handler);
    return () => window.removeEventListener("cookie-consent", handler);
  }, []);

  if (!GA_ID || !consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
