"use client"

import Script from "next/script"

/**
 * Stripe's buy button is a Web Component registered by `buy-button.js`.
 * React does not know this tag, so we declare it for TypeScript.
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": {
        "buy-button-id": string
        "publishable-key": string
      }
    }
  }
}

type Props = {
  /** Stripe Buy Button ID from the Stripe Dashboard. */
  buyButtonId: string
  /** Stripe publishable key (`pk_live_…` / `pk_test_…`). Safe to expose to the browser. */
  publishableKey: string
}

/**
 * Renders the hosted Stripe Buy Button. Stripe handles the payment form, receipts and
 * currencies, so no card data ever touches our own infrastructure.
 */
export function StripeBuyButton({ buyButtonId, publishableKey }: Props) {
  if (!publishableKey) return null

  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
      <stripe-buy-button buy-button-id={buyButtonId} publishable-key={publishableKey} />
    </>
  )
}
