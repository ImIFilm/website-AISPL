"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, CheckCircle2, Users, MessageCircle, Compass, GraduationCap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    backLink: "Strona główna",
    badge: "Inicjatywa AI Safety Polska",
    heading: "Doradztwo zawodowe",
    subheading: "Indywidualne konsultacje kariery w AI Safety",
    intro: "Oferujemy bezpłatne, spersonalizowane konsultacje kariery skoncentrowane na ścieżkach zawodowych w AI Safety. Pomożemy Ci wyznaczyć plan działania, znaleźć odpowiednie materiały edukacyjne, a także połączymy Cię z innymi osobami o podobnych zainteresowaniach.",

    forWhomTitle: "Dla kogo?",
    forWhomItems: [
      {
        title: "Osoby rozważające karierę w AI Safety",
        desc: "Pomagamy zarówno osobom na poważnie myślącym o karierze w AI Safety, jak i tym, które dopiero zaczynają się nad tym zastanawiać.",
      },
      {
        title: "Specjaliści z różnych dziedzin",
        desc: "AI Safety potrzebuje nie tylko programistów! Chętnie pomożemy osobom zajmującym się szeroko pojętą informatyką, fizyką, matematyką, prawem, ekonomią, cyberbezpieczeństwem, etyką, psychologią, naukami społecznymi, stosunkami międzynarodowymi czy komunikacją.",
      },
    ],

    howTitle: "Jak to działa?",
    howSteps: [
      {
        num: "1",
        title: "Wypełnij formularz",
        desc: "Krótki formularz pomoże nam poznać Twoje doświadczenie i cele.",
      },
      {
        num: "2",
        title: "Rozmowa z naszym konsultantem",
        desc: "Odpowiemy na Twoje pytania i pomożemy naszkicować ścieżkę rozwoju.",
      },
      {
        num: "3",
        title: "Plan działania",
        desc: "Otrzymasz konkretne kroki, rekomendacje materiałów i kontakty.",
      },
      {
        num: "4",
        title: "Dalsze wsparcie",
        desc: "Możliwość kolejnych spotkań w zależności od Twoich potrzeb.",
      },
    ],

    whatYouGetTitle: "Co zyskujesz?",
    whatYouGetItems: [
      "Indywidualną rozmowę z osobą aktywną w środowisku AI Safety",
      "Spersonalizowany plan rozwoju kariery",
      "Rekomendacje materiałów edukacyjnych dopasowanych do Twojego poziomu",
      "Połączenie z polską społecznością AI Safety",
      "Informacje o możliwościach stażowych i zawodowych",
    ],

    ctaTitle: "Zainteresowany/a?",
    ctaDesc: "Wypełnij krótki formularz zgłoszeniowy. Skontaktujemy się z Tobą w ciągu kilku dni.",
    ctaButton: "Aplikuj na konsultacje",

    faqTitle: "Najczęściej zadawane pytania",
    faq: [
      {
        q: "Czy konsultacje są bezpłatne?",
        a: "Tak, wszystkie nasze konsultacje kariery są całkowicie bezpłatne.",
      },
      {
        q: "Ile trwa konsultacja?",
        a: "Typowa konsultacja trwa około 45-60 minut. W zależności od potrzeb możemy umówić się na kolejne spotkania.",
      },
      {
        q: "Czy muszę mieć doświadczenie w AI?",
        a: "Nie, konsultacje są przeznaczone zarówno dla osób z doświadczeniem technicznym, jak i dla tych, którzy dopiero zaczynają interesować się tematem.",
      },
      {
        q: "W jakim języku odbywają się konsultacje?",
        a: "Konsultacje prowadzimy po polsku, ale możemy również porozmawiać po angielsku jeśli wolisz.",
      },
    ],

    initiativesLink: "Zobacz wszystkie nasze inicjatywy",
  },
  en: {
    backLink: "Homepage",
    badge: "AI Safety Poland Initiative",
    heading: "Career Mentoring",
    subheading: "Individual career consultations in AI Safety",
    intro: "We offer free, personalised career consultations focused on career paths in AI Safety. We will help you set an action plan, find the right educational materials, and connect you with others who share similar interests.",

    forWhomTitle: "Who is it for?",
    forWhomItems: [
      {
        title: "People considering a career in AI Safety",
        desc: "We help both those who are seriously considering a career in AI safety and those who are just starting to think about it.",
      },
      {
        title: "Specialists from various fields",
        desc: "AI Safety needs more than just programmers! We’re happy to welcome people working in a wide range of fields, including computer science, physics, mathematics, law, economics, cybersecurity, ethics, psychology, social sciences, international relations, and communication.",
      },
    ],

    howTitle: "How does it work?",
    howSteps: [
      {
        num: "1",
        title: "Fill out the form",
        desc: "A short form will help us understand your experience and goals.",
      },
      {
        num: "2",
        title: "Talk to our consultant",
        desc: "We’ll answer your questions and help you map out a path for your growth.",
      },
      {
        num: "3",
        title: "Action plan",
        desc: "You will receive concrete steps, material recommendations, and contacts.",
      },
      {
        num: "4",
        title: "Ongoing support",
        desc: "Possibility of follow-up meetings depending on your needs.",
      },
    ],

    whatYouGetTitle: "What do you get?",
    whatYouGetItems: [
      "Individual conversation with someone active in the AI Safety community",
      "Personalised career development plan",
      "Educational material recommendations tailored to your level",
      "Connection with the Polish AI Safety community",
      "Information about internship and career opportunities",
    ],

    ctaTitle: "Interested?",
    ctaDesc: "Fill out a short application form. We will contact you within a few days.",
    ctaButton: "Apply for a consultation",

    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Are the consultations free?",
        a: "Yes, all our career consultations are completely free.",
      },
      {
        q: "How long does a consultation last?",
        a: "A typical consultation lasts about 45-60 minutes. Depending on your needs, we can schedule follow-up meetings.",
      },
      {
        q: "Do I need AI experience?",
        a: "No, consultations are designed for both people with technical experience and those who are just starting to get interested in the topic.",
      },
      {
        q: "In what language are the consultations held?",
        a: "We conduct consultations in Polish, but we can also talk in English if you prefer.",
      },
    ],

    initiativesLink: "See all our initiatives",
  },
}

export function CareerMentoringPage() {
  const { lang } = useLanguage()
  const text = t[lang]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        {/* Hero Section */}
        <section className="pb-16 pt-8 md:pb-24 md:pt-12">
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
              className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance"
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

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-emerald hover:bg-emerald-dark text-white">
                <a
                  href="https://forms.gle/r3pHarn2cN2dzYrm8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {text.ctaButton}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* For whom section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground md:text-3xl"
            >
              {text.forWhomTitle}
            </motion.h2>

            <div className="mt-8 grid gap-6">
              {text.forWhomItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 rounded-xl bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald/10">
                    {i === 0 && <Compass className="h-5 w-5 text-emerald" />}
                    {i === 1 && <Users className="h-5 w-5 text-emerald" />}
                    {i === 2 && <GraduationCap className="h-5 w-5 text-emerald" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground md:text-3xl"
            >
              {text.howTitle}
            </motion.h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {text.howSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-xl border border-border bg-card p-6"
                >
                  <span className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white">
                    {step.num}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground md:text-3xl"
            >
              {text.whatYouGetTitle}
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 space-y-4"
            >
              {text.whatYouGetItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary-foreground md:text-3xl"
            >
              {text.ctaTitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-4 max-w-xl text-primary-foreground/80"
            >
              {text.ctaDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-emerald hover:bg-emerald-dark text-white">
                <a
                  href="https://forms.gle/r3pHarn2cN2dzYrm8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {text.ctaButton}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground md:text-3xl"
            >
              {text.faqTitle}
            </motion.h2>

            <div className="mt-8 space-y-4">
              {text.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link
                href={`/${lang}/inicjatywy`}
                className="text-sm text-muted-foreground underline underline-offset-2 decoration-muted-foreground/30 transition-[text-decoration-color] hover:text-foreground hover:decoration-foreground/50"
              >
                {text.initiativesLink}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  )
}
