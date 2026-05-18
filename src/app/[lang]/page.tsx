import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Team from "@/components/sections/Team";
import MenuSection from "@/components/sections/MenuSection";
import Gallery from "@/components/sections/Gallery";
import Story from "@/components/sections/Story";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import PrivateEvents from "@/components/sections/PrivateEvents";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import { PHONE } from "@/lib/constants";

const jsonLd = {
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
    ratingCount: "80",
  },
  hasMenu: "https://restaurant-les-gras-q.fr/fr#menu",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar dict={dict.nav} lang={lang as Locale} />

      <main>
        <Hero dict={dict} />
        <Experience dict={dict} />
        <Team dict={dict} />
        <MenuSection dict={dict} />
        <Gallery dict={dict} />
        <Story dict={dict} />
        <Reviews dict={dict} />
        <Contact dict={dict} />
        <PrivateEvents dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>

      {/* Mobile sticky call button */}
      <a
        href={`tel:${PHONE}`}
        aria-label={dict.mobile.call}
        className="fixed left-[14px] right-[14px] bottom-[14px] z-[80] sm:hidden flex items-center justify-center min-h-[54px] rounded-full text-[#211812] bg-gradient-to-r from-[#fff0c7] to-gold shadow-[0_18px_50px_rgba(0,0,0,0.3)] text-[13px] font-[900] tracking-[0.08em] uppercase"
      >
        {dict.mobile.call}
      </a>

      <Footer dict={dict} />
    </>
  );
}
