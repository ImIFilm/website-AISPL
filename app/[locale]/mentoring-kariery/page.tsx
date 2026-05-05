import type { Metadata } from "next"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { CareerMentoringPage } from "./career-mentoring-page"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.careerMentoring.title,
    description: dict.meta.careerMentoring.description,
    alternates: {
      canonical: `/${locale}/mentoring-kariery`,
      languages: {
        "pl-PL": "/pl/mentoring-kariery",
        "en-US": "/en/mentoring-kariery",
        "x-default": "/pl/mentoring-kariery",
      },
    },
  }
}

export default function Page() {
  return <CareerMentoringPage />
}
