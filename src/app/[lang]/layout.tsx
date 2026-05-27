import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { getDictionary, hasLocale, locales } from "@/lib/i18n/getDictionary";
import "@/app/globals.css";
import Grain from "@/components/ui/Grain";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/ui/Analytics";
import PageTransition from "@/components/ui/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
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
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
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
        <SmoothScroll />
        <Grain />
        <Analytics />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
