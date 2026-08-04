import type { Metadata } from "next"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { SupportPage } from "./support-page"

/** Stripe Buy Button configured in the Stripe Dashboard. */
const BUY_BUTTON_ID = "buy_btn_1U0jouGvdEdDJrWbZnAJOXqm"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.support.title,
    description: dict.meta.support.description,
    alternates: {
      canonical: `/${locale}/wesprzyj`,
      languages: {
        "pl-PL": "/pl/wesprzyj",
        "en-US": "/en/wesprzyj",
        "x-default": "/pl/wesprzyj",
      },
    },
  }
}

export default function Page() {
  // The publishable key is safe in the browser, but it is stored without the NEXT_PUBLIC_
  // prefix, so we read it on the server and hand it to the client component as a prop.
  return <SupportPage publishableKey={process.env.API_KEY ?? ""} buyButtonId={BUY_BUTTON_ID} />
}
