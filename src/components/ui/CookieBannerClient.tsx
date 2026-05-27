"use client";

/**
 * Thin client-only wrapper for CookieBanner.
 * Using ssr:false here prevents the banner from appearing in the server HTML,
 * which avoids it becoming the LCP element (Framer Motion opacity:0 on mount).
 */
import dynamic from "next/dynamic";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const CookieBannerLazy = dynamic(() => import("./CookieBanner"), { ssr: false });

type Props = {
  lang: string;
  strings: Dictionary["cookie"];
};

export default function CookieBannerClient({ lang, strings }: Props) {
  return <CookieBannerLazy lang={lang} strings={strings} />;
}
