"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { StripeBuyButton } from "@/components/stripe-buy-button"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    backLink: "Strona główna",
    badge: "Wsparcie Fundacji",
    heading: "Wesprzyj naszą działalność",
    subheading: "Twoja darowizna rozwija polską społeczność AI Safety",
    intro:
      "Fundacja AI Safety Poland działa dzięki grantom i darowiznom. Każda wpłata pozwala nam organizować kolejne wydarzenia, prowadzić bezpłatne doradztwo zawodowe i rozwijać społeczność osób pracujących nad bezpieczeństwem sztucznej inteligencji.",

    donateTitle: "Przekaż darowiznę",
    donateDesc:
      "Płatność obsługuje Stripe — możesz zapłacić kartą lub szybkim przelewem. Potwierdzenie wpłaty otrzymasz e-mailem od razu po transakcji.",
    donateSecure: "Płatności obsługuje Stripe. Nie przechowujemy danych Twojej karty.",

    impactTitle: "Dlaczego to ważne?",
    impactItems: [
      "Jesteśmy organizacją non-profit — środki idą wprost na działania statutowe.",
      "Działamy w Polsce, w języku polskim, dla polskiej społeczności badaczy i studentów.",
      "Nasze wydarzenia i konsultacje są bezpłatne dla uczestników.",
      "Każda wpłata, nawet niewielka, zwiększa zasięg naszych inicjatyw.",
    ],

    orgTitle: "Dane Fundacji",
    orgDesc: "Fundacja AI Safety Poland, ul. Święty Marcin 29/8, 61-806 Poznań",
    orgKrs: "KRS 0001247485",
    orgNip: "NIP 7831955886",
    orgRegon: "REGON 544992138",

    questionsTitle: "Masz pytania?",
    questionsDesc:
      "Chcesz przekazać darowiznę przelewem, wsparcie rzeczowe lub porozmawiać o współpracy? Napisz do nas.",
    questionsCta: "contact@aisafety.org.pl",

    privacyNote: "Dane darczyńców przetwarzamy zgodnie z naszą",
    privacyLink: "polityką prywatności",
  },
  en: {
    backLink: "Homepage",
    badge: "Support the Foundation",
    heading: "Support our work",
    subheading: "Your donation grows the Polish AI Safety community",
    intro:
      "The AI Safety Poland Foundation runs on grants and donations. Every contribution helps us organise more events, provide free career mentoring and grow the community of people working on the safety of artificial intelligence.",

    donateTitle: "Make a donation",
    donateDesc:
      "Payments are handled by Stripe — you can pay by card or instant bank transfer. You will receive a confirmation by e-mail right after the transaction.",
    donateSecure: "Payments are processed by Stripe. We never store your card details.",

    impactTitle: "Why it matters",
    impactItems: [
      "We are a non-profit — funds go directly to our statutory activities.",
      "We work in Poland, in Polish, for the local community of researchers and students.",
      "Our events and consultations are free for participants.",
      "Every contribution, however small, extends the reach of our initiatives.",
    ],

    orgTitle: "Foundation details",
    orgDesc: "AI Safety Poland Foundation, Święty Marcin 29/8, 61-806 Poznań, Poland",
    orgKrs: "KRS 0001247485",
    orgNip: "NIP 7831955886",
    orgRegon: "REGON 544992138",

    questionsTitle: "Have questions?",
    questionsDesc:
      "Would you like to donate by bank transfer, offer in-kind support or discuss a partnership? Get in touch.",
    questionsCta: "contact@aisafety.org.pl",

    privacyNote: "We process donor data in line with our",
    privacyLink: "privacy policy",
  },
}


type Props = {
  /** Stripe publishable key, injected by the server component. */
  publishableKey: string
  /** Stripe Buy Button ID. */
  buyButtonId: string
}

export function SupportPage({ publishableKey, buyButtonId }: Props) {
  const { lang } = useLanguage()
  const text = t[lang]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        {/* Hero */}
        <section className="pb-16 pt-8 md:pb-20 md:pt-12">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href={`/${lang}`}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {text.backLink}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-medium text-emerald">
                {text.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
            >
              {text.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-2 text-lg text-muted-foreground md:text-xl"
            >
              {text.subheading}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {text.intro}
            </motion.p>
          </div>
        </section>

        {/* Donation widget — the signature element of this page */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{text.donateTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text.donateDesc}</p>

              <div className="mt-8 flex justify-center">
                <StripeBuyButton buyButtonId={buyButtonId} publishableKey={publishableKey} />
              </div>

              <p className="mt-8 flex items-start gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald" />
                {text.donateSecure}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground md:text-3xl"
            >
              {text.impactTitle}
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex flex-col gap-4"
            >
              {text.impactItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Questions + foundation details */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-foreground md:text-2xl">{text.questionsTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text.questionsDesc}</p>
                <a
                  href="mailto:contact@aisafety.org.pl"
                  className="mt-4 inline-block text-sm font-medium text-emerald underline decoration-emerald/30 underline-offset-4 transition-colors hover:decoration-emerald"
                >
                  {text.questionsCta}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {text.orgTitle}
                </h2>
                <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
                  {text.orgDesc}
                </address>
                <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                  <li>{text.orgKrs}</li>
                  <li>{text.orgNip}</li>
                  <li>{text.orgRegon}</li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  {text.privacyNote}{" "}
                  <Link
                    href={lang === "pl" ? "/pl/polityka-prywatnosci" : "/en/privacy-policy"}
                    className="underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    {text.privacyLink}
                  </Link>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  )
}
