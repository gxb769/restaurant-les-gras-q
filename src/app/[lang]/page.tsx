import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/getDictionary";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { PHONE } from "@/lib/constants";

/**
 * Below-fold sections are lazy-loaded via next/dynamic.
 * SSR is preserved (ssr: true by default) so content is still in the HTML for SEO.
 * The JS for each section is code-split into its own chunk → lower TBT on the
 * main thread during initial parse.
 */
const Experience    = dynamic(() => import("@/components/sections/Experience"));
const MenuSection   = dynamic(() => import("@/components/sections/MenuSection"));
const Gallery       = dynamic(() => import("@/components/sections/Gallery"));
const QuoteBreak    = dynamic(() => import("@/components/sections/QuoteBreak"));
const Reviews       = dynamic(() => import("@/components/sections/Reviews"));
const PrivateEvents = dynamic(() => import("@/components/sections/PrivateEvents"));
const FinalCta      = dynamic(() => import("@/components/sections/FinalCta"));
const Contact       = dynamic(() => import("@/components/sections/Contact"));

// JSON-LD is static data sourced entirely from our own constants — no user input
const SITE_URL = "https://restaurant-les-gras-q.fr";

// ── Schema 1: Restaurant (LocalBusiness) ──────────────────────────────────────
const jsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "Restaurant Les Gras Q",
  image: [
    `${SITE_URL}/assets/hero-restaurant.jpg`,
    `${SITE_URL}/assets/salle.jpg`,
    `${SITE_URL}/assets/dish-entree.jpg`,
  ],
  telephone: PHONE,
  email: "lesgrasq@orange.fr",
  servesCuisine: ["Cuisine française", "Cuisine traditionnelle"],
  priceRange: "€€",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Rue de Longwy",
    postalCode: "54870",
    addressLocality: "Cons-la-Grandville",
    addressRegion: "Meurthe-et-Moselle",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4859435,
    longitude: 5.705279,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday"], opens: "12:00", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday"], opens: "19:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday"], opens: "12:00", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "12:00", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "19:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "15:30" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "480",
  },
  hasMenu: `${SITE_URL}/fr#carte`,
  sameAs: [
    "https://www.google.com/maps/place/Restaurant+Les+Gras+Q",
  ],
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
});

// ── Schema 2: Menu ────────────────────────────────────────────────────────────
const jsonLdMenuString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE_URL}/#menu`,
  name: "Carte — Restaurant Les Gras Q",
  inLanguage: "fr",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Formules",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Formule midi",   description: "Entrée + Plat ou Plat + Dessert",          offers: { "@type": "Offer", price: "15", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Menu complet",   description: "Entrée + Plat + Dessert — café offert",    offers: { "@type": "Offer", price: "22", priceCurrency: "EUR" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Entrées",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Foie gras maison",            description: "Confiture de figues et toast brioche",                        offers: { "@type": "Offer", price: "14", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Velouté de légumes de saison", description: "Légumes du marché, crème fraîche, huile de truffe",           offers: { "@type": "Offer", price: "8",  priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Salade de chèvre chaud",       description: "Toast de chèvre, noix, roquette et vinaigrette maison",       offers: { "@type": "Offer", price: "10", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Assiette de charcuterie",      description: "Sélection artisanale de la région",                          offers: { "@type": "Offer", price: "12", priceCurrency: "EUR" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Plats",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Filet de bar frais rôti",   description: "Légumes de saison, beurre blanc au citron",            offers: { "@type": "Offer", price: "22", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Joue de bœuf braisée 7h",   description: "Purée maison, jus de cuisson réduit au vin rouge",     offers: { "@type": "Offer", price: "20", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Côte de porc fermière",      description: "Porc élevé en plein air, gratin dauphinois",           offers: { "@type": "Offer", price: "18", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Blanquette de veau",         description: "Recette traditionnelle, riz pilaf, champignons",       offers: { "@type": "Offer", price: "19", priceCurrency: "EUR" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Desserts",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Dessert maison du jour",       description: "À découvrir selon la carte du moment",               offers: { "@type": "Offer", price: "7", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Tarte aux fruits de saison",   description: "Sur pâte sucrée beurre, crème légère fouettée",      offers: { "@type": "Offer", price: "7", priceCurrency: "EUR" } },
        { "@type": "MenuItem", name: "Crème brûlée à la vanille",    description: "Recette classique, caramélisée à la minute",         offers: { "@type": "Offer", price: "7", priceCurrency: "EUR" } },
      ],
    },
  ],
});

// ── Schema 3: Reviews (@graph bundles 5 Review nodes) ─────────────────────────
const jsonLdReviewsString = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#restaurant` },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Léa" },
      reviewBody: "Très belle découverte, on a très bien mangé, le cadre est joli, la serveuse agréable.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#restaurant` },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Maxence Battaglia" },
      reviewBody: "Avec ma chérie, nous avons choisi ce restaurant pour son anniversaire… Très bien mangé, très bien reçu.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#restaurant` },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Evelyne W.P" },
      reviewBody: "L'accueil est chaleureux, le cadre est sympathique, la cuisine est excellente.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#restaurant` },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Michel T." },
      reviewBody: "La joue de bœuf braisée est un régal, et les desserts maison sont parfaits. On reviendra avec plaisir !",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": `${SITE_URL}/#restaurant` },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sophie M." },
      reviewBody: "Un repas parfait de bout en bout. Produits frais, service attentionné, terrasse agréable. L'adresse idéale près de Longwy.",
    },
  ],
});

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* LCP image preloads: React 18 hoists these <link> tags to <head> from RSC.
          Browser fetches hero image before HTML parse completes → faster LCP.
          Responsive media queries ensure mobile (32KB) vs desktop (70KB). */}
      <link rel="preload" as="image" href="/assets/dish-boeuf-mobile.webp" media="(max-width: 640px)" />
      <link rel="preload" as="image" href="/assets/dish-boeuf.webp" media="(min-width: 641px)" />

      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdMenuString }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdReviewsString }} />

      <Navbar dict={dict.nav} lang={lang as Locale} />

      <main id="main-content">
        <Hero dict={dict} />
        <Experience dict={dict} />
        <MenuSection dict={dict} />
        <Gallery dict={dict} />
        <QuoteBreak dict={dict} />
        <Reviews dict={dict} />
        <PrivateEvents dict={dict} />
        <FinalCta dict={dict} />
        <Contact dict={dict} />
      </main>

      <MobileBottomBar callLabel={dict.mobile.call} forkLabel={dict.mobile.fork} />

      <Footer dict={dict} lang={lang} />
    </>
  );
}
