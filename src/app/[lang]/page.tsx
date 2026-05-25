import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import MenuSection from "@/components/sections/MenuSection";
import Gallery from "@/components/sections/Gallery";
import Story from "@/components/sections/Story";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import { PHONE } from "@/lib/constants";
import MobileBottomBar from "@/components/ui/MobileBottomBar";

// JSON-LD is static data sourced entirely from our own constants — no user input
const jsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurant Les Gras Q",
  image: "/assets/hero-restaurant.jpg",
  telephone: PHONE,
  email: "lesgrasq@orange.fr",
  servesCuisine: "Cuisine française traditionnelle",
  priceRange: "€€",
  url: "https://restaurant-les-gras-q.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32 Rue de Longwy",
    postalCode: "54870",
    addressLocality: "Cons-la-Grandville",
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
    ratingCount: "480",
  },
  hasMenu: "https://restaurant-les-gras-q.fr/fr#carte",
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
      {/* eslint-disable-next-line react/no-danger -- static schema.org data, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      <Navbar dict={dict.nav} lang={lang as Locale} />

      <main>
        <Hero dict={dict} />
        <Experience dict={dict} />
        <MenuSection dict={dict} />
        <Gallery dict={dict} />
        <Story dict={dict} />
        <Reviews dict={dict} />
        <Contact dict={dict} />
      </main>

      <MobileBottomBar callLabel={dict.mobile.call} forkLabel={dict.mobile.fork} />

      <Footer dict={dict} />
    </>
  );
}
