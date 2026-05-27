import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { getDictionary, hasLocale, locales } from "@/lib/i18n/getDictionary";
import "@/app/globals.css";
import Grain from "@/components/ui/Grain";
import Analytics from "@/components/ui/Analytics";
import dynamic from "next/dynamic";

// CookieBanner uses Framer Motion — lazy-load so it never enters the initial JS
// bundle. It's a leaf component (no children) so dynamic() is safe: React renders
// null while the chunk loads, then mounts the banner. No content flash risk.
const CookieBanner = dynamic(() => import("@/components/ui/CookieBannerClient"));

// PageTransition is a CSS overlay (leaf, no children) — safe to lazy-load.
// Lazy-loading also removes it from the critical path; if JS is slow the
// overlay simply never blocks LCP.
const PageTransition = dynamic(() => import("@/components/ui/PageTransition"));

// 6 font files instead of 14 — removed weight 500 (→ 600) and trimmed Inter
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  // "optional" prevents late font-swap from updating LCP — font is preloaded and
  // applied only if it loads during the initial render window; cached on next visit.
  display: "optional",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-inter",
  // "optional" like Cormorant — prevents font-swap from triggering a LCP re-paint
  display: "optional",
});

export const viewport: Viewport = {
  themeColor: "#101114",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        'x-default': '/fr',
      },
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-les-gras-q.fr"),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang,
      type: "website",
      images: [{ url: "/assets/hero-restaurant.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/assets/hero-restaurant.jpg"],
    },
    icons: {
      icon: "/assets/favicon.png",
      apple: "/assets/favicon.png",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        {/* Skip to main content — keyboard & screen reader navigation (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:rounded-full focus:bg-gold focus:text-ink focus:text-[13px] focus:font-[800] focus:tracking-[0.04em] focus:shadow-[0_8px_24px_rgba(196,160,93,0.4)]"
        >
          Aller au contenu principal
        </a>

        {/* Ambient dark canvas — single warm-dark tone with drifting gold orbs */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          <div className="ambient-orb-1" />
          <div className="ambient-orb-2" />
        </div>
        <PageTransition />
        <Grain />
        <Analytics />
        <CookieBanner lang={lang} strings={dict.cookie} />
        {children}
      </body>
    </html>
  );
}
