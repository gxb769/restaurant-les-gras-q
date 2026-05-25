import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://restaurant-les-gras-q.fr";
const LOCALES = ["fr", "en", "lu", "de"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((lang) => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: lang === "fr" ? 1 : 0.8,
  }));
}
