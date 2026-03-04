"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="zaangazuj-sie"
      className="relative overflow-hidden py-20 md:py-28"
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
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald/80"
        >
          {"Zaangażuj się \u{1F91D}"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-xl font-bold text-primary-foreground md:text-2xl lg:text-3xl text-balance leading-relaxed"
        >
          {"Jeśli temat bezpieczeństwa AI jest Ci bliski, dołącz do naszej społeczności na Slack i dowiedz się jak możesz pomóc"}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            {"Wypełnij formularz"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
