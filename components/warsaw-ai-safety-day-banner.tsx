"use client"

import Image from "next/image"
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"

const WARSAW_SKYLINE_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/warsaw-skyline-04r3bkS88l28exEp7TEABUegs3VLAO.png"

const translations = {
  pl: {
    eyebrow: "Organizujemy",
    heading: "Warsaw AI Safety Day",
    description:
      "Jednodniowa konferencja o najważniejszych wyzwaniach związanych z bezpieczeństwem sztucznej inteligencji.",
    date: "24 października",
    place: "Warszawa",
    time: "10:00–18:00",
    action: "Zarejestruj się",
    imageAlt: "Ilustracja panoramy Warszawy",
  },
  en: {
    eyebrow: "Organised by AI Safety Poland",
    heading: "Warsaw AI Safety Day",
    description:
      "A one-day conference focused on the most important challenges in artificial intelligence safety.",
    date: "October 24",
    place: "Warsaw",
    time: "10:00–18:00",
    action: "Register now",
    imageAlt: "Illustration of the Warsaw skyline",
  },
} as const

export function WarsawAiSafetyDayBanner() {
  const { lang } = useLanguage()
  const text = translations[lang]

  return (
    <section className="bg-background px-6 py-8 md:py-10" aria-labelledby="warsaw-ai-safety-day-title">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl bg-navy px-6 py-7 shadow-sm sm:px-8 md:min-h-64 md:flex-row md:items-center md:px-10 md:py-8"
      >
        <div className="relative z-10 flex max-w-xl flex-1 flex-col items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            {text.eyebrow}
          </p>
          <h2
            id="warsaw-ai-safety-day-title"
            className="mt-2 text-2xl font-semibold text-primary-foreground sm:text-3xl"
          >
            {text.heading}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/65">
            {text.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-emerald" aria-hidden="true" />
              {text.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-emerald" aria-hidden="true" />
              {text.place}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5 text-emerald" aria-hidden="true" />
              {text.time}
            </span>
          </div>
          <Button asChild size="sm" className="mt-5 bg-emerald text-white hover:bg-emerald/90">
            <a href="https://warsawaisafety.day" target="_blank" rel="noopener noreferrer">
              {text.action}
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="pointer-events-none relative -mb-12 mt-2 h-36 w-full md:absolute md:-bottom-8 md:-right-8 md:mb-0 md:mt-0 md:h-64 md:w-[44%]">
          <Image
            src={WARSAW_SKYLINE_IMAGE}
            alt={text.imageAlt}
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-contain object-bottom opacity-90"
          />
        </div>
      </motion.div>
    </section>
  )
}
