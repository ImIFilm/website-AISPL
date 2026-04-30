import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/context/language-context"
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import "../globals.css"

const outfit = Outfit({ subsets: ["latin", "latin-ext"], variable: "--font-outfit" })

type LayoutParams = { params: Promise<{ locale: string }> }

/**
 * Pre-generate one route per supported locale at build time. This is what makes
 * `/pl/...` and `/en/...` static-friendly without paying a runtime cost.
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: "#0B132B",
}

/**
 * Per-locale metadata (title / description / icons / hreflang).
 *
 * The `alternates.languages` map is what tells search engines that this page
 * exists in multiple languages – this is the canonical way to emit `<link rel="alternate" hreflang="..." />`
 * tags via the App Router metadata API.
 */
export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const dict = getDictionary(locale)
  return {
    metadataBase: new URL("https://aisafety.org.pl"),
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    generator: "v0.app",
    icons: { icon: "/images/logo-aispl.svg" },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pl-PL": "/pl",
        "en-US": "/en",
        "x-default": "/pl",
      },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      locale: htmlLang[locale],
      type: "website",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode } & LayoutParams>) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <html lang={htmlLang[locale as Locale]} className="bg-background">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
