import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrivacyPolicyPage } from "@/components/privacy-policy-page"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Safety Poland",
  description: "Privacy Policy of the AI Safety Poland Foundation.",
  alternates: {
    canonical: "/en/privacy-policy",
    languages: {
      "pl-PL": "/pl/polityka-prywatnosci",
      "en-US": "/en/privacy-policy",
      "x-default": "/pl/polityka-prywatnosci",
    },
  },
}

export default async function EnglishPrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <PrivacyPolicyPage locale="en" />
}
