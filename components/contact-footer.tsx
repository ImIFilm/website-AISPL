"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Send } from "lucide-react"

export function ContactFooter() {
  return (
    <section id="kontakt" className="relative">
      {/* Overlapping card area — sits between light bg and dark footer */}
      <div className="relative z-10 -mb-20 bg-secondary pb-0">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-xl md:flex md:items-center md:justify-between md:p-10"
          >
            <div>
              <h3 className="text-xl font-bold text-card-foreground md:text-2xl">
                Masz pytanie?
              </h3>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-light"
              >
                Napisz do nas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* 3D envelope placeholder */}
            <div className="mt-6 flex items-center justify-center md:mt-0">
              <div className="relative flex h-24 w-32 items-center justify-center md:h-28 md:w-36">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Mail className="h-16 w-16 text-emerald/30" strokeWidth={1} />
                    <Send className="absolute -top-2 -right-3 h-8 w-8 text-emerald/60 rotate-[-10deg]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-aispl.svg"
                alt="AI Safety Polska logo"
                width={32}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-sm font-semibold text-primary-foreground">AI Safety Polska</span>
            </div>
            <nav aria-label="Stopka">
              <ul className="flex flex-wrap items-center justify-center gap-6">
                <li>
                  <a href="#kim-jestesmy" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Kim jesteśmy
                  </a>
                </li>
                <li>
                  <a href="#co-robimy" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Co robimy
                  </a>
                </li>
                <li>
                  <a href="#zaangazuj-sie" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    {"Zaangażuj się"}
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-xs text-primary-foreground/30">
              {"© 2026 AI Safety Polska. Wszelkie prawa zastrzeżone."}
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
