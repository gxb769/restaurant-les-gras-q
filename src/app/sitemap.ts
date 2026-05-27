import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://restaurant-les-gras-q.fr";
const LOCALES = ["fr", "en", "lu", "de"] as const;

const PAGES = [
  { path: "",                             priority: 1.0 },
  { path: "/mentions-legales",            priority: 0.3 },
  { path: "/politique-de-confidentialite", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    PAGES.map(({ path, priority }) => ({
      url: `${BASE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: lang === "fr" ? priority : priority * 0.8,
    }))
  );
}
