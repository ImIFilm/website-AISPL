import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n/config"
import { articleSlugs } from "./[locale]/blog/[slug]/page"

const BASE_URL = "https://aisafety.org.pl"

/**
 * Path suffixes that exist (with identical folder names) in every locale.
 * The empty string represents the locale home page (`/pl`, `/en`).
 */
const STATIC_PATHS = [
  "",
  "/inicjatywy",
  "/zespol",
  "/mentoring-kariery",
  "/wesprzyj",
  "/aktualnosci",
] as const

/**
 * Build the `alternates.languages` map for a given path suffix so search engines
 * understand the PL/EN equivalence of every URL (mirrors the per-page hreflang tags).
 */
function languageAlternates(suffix: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale === "pl" ? "pl-PL" : "en-US"] = `${BASE_URL}/${locale}${suffix}`
  }
  languages["x-default"] = `${BASE_URL}/pl${suffix}`
  return languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((suffix) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${suffix}`,
      lastModified,
      changeFrequency: suffix === "" ? ("weekly" as const) : ("monthly" as const),
      priority: suffix === "" ? 1 : 0.7,
      alternates: { languages: languageAlternates(suffix) },
    })),
  )

  const policyAlternates = {
    "pl-PL": `${BASE_URL}/pl/polityka-prywatnosci`,
    "en-US": `${BASE_URL}/en/privacy-policy`,
    "x-default": `${BASE_URL}/pl/polityka-prywatnosci`,
  }

  const policyEntries: MetadataRoute.Sitemap = [
    `${BASE_URL}/pl/polityka-prywatnosci`,
    `${BASE_URL}/en/privacy-policy`,
  ].map((url) => ({
    url,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.5,
    alternates: { languages: policyAlternates },
  }))

  const blogEntries: MetadataRoute.Sitemap = articleSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: languageAlternates(`/blog/${slug}`) },
    })),
  )

  return [...staticEntries, ...policyEntries, ...blogEntries]
}
