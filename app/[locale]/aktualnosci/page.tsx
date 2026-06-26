import type { Metadata } from "next"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { NewsPage } from "./news-page"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.news.title,
    description: dict.meta.news.description,
    alternates: {
      canonical: `/${locale}/aktualnosci`,
      languages: {
        "pl-PL": "/pl/aktualnosci",
        "en-US": "/en/aktualnosci",
        "x-default": "/pl/aktualnosci",
      },
    },
  }
}

export default function Page() {
  return <NewsPage />
}
