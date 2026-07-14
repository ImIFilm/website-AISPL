import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrivacyPolicyPage } from "@/components/privacy-policy-page"

export const metadata: Metadata = {
  title: "Polityka prywatności | AI Safety Poland",
  description: "Polityka prywatności Fundacji AI Safety Poland.",
  alternates: {
    canonical: "/pl/polityka-prywatnosci",
    languages: {
      "pl-PL": "/pl/polityka-prywatnosci",
      "en-US": "/en/privacy-policy",
      "x-default": "/pl/polityka-prywatnosci",
    },
  },
}

export default async function PolishPrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== "pl") notFound()
  return <PrivacyPolicyPage locale="pl" />
}
