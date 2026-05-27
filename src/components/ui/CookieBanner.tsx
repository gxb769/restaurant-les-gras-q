"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookieStrings {
  text: string;
  privacy: string;
  accept: string;
  refuse: string;
}

interface Props {
  lang: string;
  strings: CookieStrings;
}

/**
 * RGPD-compliant cookie consent banner — fully multilingual (FR/EN/LU/DE).
 * - Appears on first visit (no stored consent)
 * - Stores "accepted" | "refused" in localStorage under "cookie_consent"
 * - Dispatches a "cookie-consent" CustomEvent so Analytics.tsx can react
 * - Mobile: slides up from bottom | Desktop: card in bottom-right corner
 */
export default function CookieBanner({ lang, strings }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) {
      // Small delay so the banner doesn't compete with page load animations
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (choice: "accepted" | "refused") => {
    localStorage.setItem("cookie_consent", choice);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: choice }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label={strings.text}
          aria-live="polite"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-[380px] z-[300] rounded-2xl border border-cream/[0.14] bg-[rgba(16,17,20,0.94)] backdrop-blur-[18px] shadow-[0_32px_80px_rgba(0,0,0,0.5)] p-5"
        >
          {/* Accent bar */}
          <span className="block w-8 h-[3px] rounded-full bg-gradient-to-r from-gold-soft to-gold mb-4" aria-hidden="true" />

          <p className="text-cream/[0.82] text-[13px] leading-relaxed mb-4">
            {strings.text}
          </p>

          <p className="mb-4">
            <a
              href={`/${lang}/politique-de-confidentialite`}
              className="text-gold-soft/70 text-[12px] underline underline-offset-[3px] hover:text-gold-soft transition-colors duration-150"
            >
              {strings.privacy}
            </a>
          </p>

          <div className="flex gap-[10px]">
            <button
              type="button"
              onClick={() => handle("accepted")}
              className="flex-1 min-h-[42px] rounded-full text-[12px] font-[800] tracking-[0.05em] uppercase text-[#211812] bg-gradient-to-br from-[#f3dfb2] to-gold transition-all duration-[180ms] hover:-translate-y-[1px] hover:shadow-[0_10px_28px_rgba(196,160,93,0.35)] active:translate-y-0"
            >
              {strings.accept}
            </button>
            <button
              type="button"
              onClick={() => handle("refused")}
              className="flex-1 min-h-[42px] rounded-full text-[12px] font-[800] tracking-[0.05em] uppercase text-cream/60 border border-cream/[0.18] bg-cream/[0.05] hover:bg-cream/[0.10] hover:text-cream/80 transition-all duration-[180ms]"
            >
              {strings.refuse}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
