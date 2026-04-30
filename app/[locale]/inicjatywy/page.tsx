import type { Metadata } from "next"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { InitiativesPage } from "./initiatives-page"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.initiatives.title,
    description: dict.meta.initiatives.description,
    alternates: {
      canonical: `/${locale}/inicjatywy`,
      languages: {
        "pl-PL": "/pl/inicjatywy",
        "en-US": "/en/inicjatywy",
        "x-default": "/pl/inicjatywy",
      },
    },
  }
}

export default function Page() {
  return <InitiativesPage />
}
