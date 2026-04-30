import type { Metadata } from "next"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { TeamPage } from "./team-page"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.team.title,
    description: dict.meta.team.description,
    alternates: {
      canonical: `/${locale}/zespol`,
      languages: {
        "pl-PL": "/pl/zespol",
        "en-US": "/en/zespol",
        "x-default": "/pl/zespol",
      },
    },
  }
}

export default function Page() {
  return <TeamPage />
}
