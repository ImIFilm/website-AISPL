"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const translations = {
  pl: {
    label: "Zaangażuj się",
    heading: "Jeśli temat bezpieczeństwa AI jest Ci bliski, dołącz do naszej społeczności na Slack i dowiedz się jak możesz pomóc",
    cta: "Wypełnij formularz",
  },
  en: {
    label: "Get involved",
    heading: "If AI safety is a topic close to your heart, join our Slack community and find out how you can help",
    cta: "Fill in the form",
  },
} as const

export function CtaSection() {
  const { lang } = useLanguage()

  return (
    <section
      id="zaangazuj-sie"
      className="scroll-mt-20 relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #059669 0%, #0B132B 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgb(255, 218, 170)" }}
        >
          {translations[lang].label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-balance text-primary-foreground"
          style={{ fontWeight: 400, lineHeight: "1.25", fontSize: "1.5rem" }}
        >
          {translations[lang].heading}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://forms.gle/J2yTVJXYcaMyR5i56"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            {translations[lang].cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
