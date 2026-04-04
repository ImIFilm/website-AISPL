"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    cardHeading: "Masz pytanie?",
    cardCta: "Napisz do nas",
    imgAlt: "Robotyczna reka trzymajaca koperte",
    footerNav: [
      { label: "Kim jesteśmy", href: "/#kim-jestesmy" },
      { label: "Co robimy", href: "/#co-robimy" },
      { label: "Zaangażuj się", href: "/#zaangazuj-sie" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
    copyright: "© 2025 AI Safety Polska. Wszelkie prawa zastrzeżone.",
    footerAriaLabel: "Stopka",
  },
  en: {
    cardHeading: "Have a question?",
    cardCta: "Write to us",
    imgAlt: "Robotic hand holding an envelope",
    footerNav: [
      { label: "About us", href: "/#kim-jestesmy" },
      { label: "What we do", href: "/#co-robimy" },
      { label: "Get involved", href: "/#zaangazuj-sie" },
      { label: "Contact", href: "/#kontakt" },
    ],
    copyright: "© 2025 AI Safety Polska. All rights reserved.",
    footerAriaLabel: "Footer",
  },
}

export function ContactFooter() {
  const { lang } = useLanguage()
  const text = t[lang]

  return (
    <section id="kontakt" className="relative">
      {/* Contact Card - Overlapping design */}
      <div className="relative z-10 -mb-24 bg-secondary pb-0">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-emerald/20 bg-gradient-to-br from-navy to-navy-light shadow-2xl"
          >
            {/* Decorative gradient orb */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-emerald/5 blur-2xl" />
            
            <div className="relative flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  {text.cardHeading}
                </h3>
                <p className="mt-2 text-primary-foreground/60">
                  kontakt@aisafety.pl
                </p>
                <a
                  href="mailto:kontakt@aisafety.pl"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/25"
                >
                  <Mail className="h-4 w-4" />
                  {text.cardCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex-shrink-0">
                <div className="relative h-36 w-44 md:h-40 md:w-48">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-Jlff4fq5DlgNpBB6tmQQ9yGe833CpO.png"
                    alt={text.imgAlt}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="192px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy pt-36 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/images/logo-aispl.svg"
                  alt="AI Safety Polska logo"
                  width={36}
                  height={39}
                  className="h-9 w-auto brightness-0 invert transition-transform group-hover:scale-105"
                />
                <span className="text-lg font-bold text-primary-foreground">
                  AI Safety Polska
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/50">
                {lang === "pl" 
                  ? "Budujemy świadomość i kompetencje w zakresie bezpieczeństwa AI w Polsce."
                  : "Building awareness and competencies in AI safety in Poland."
                }
              </p>
              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/ai-safety-polska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/5 text-primary-foreground/60 transition-all hover:bg-emerald hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:kontakt@aisafety.pl"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/5 text-primary-foreground/60 transition-all hover:bg-emerald hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label={text.footerAriaLabel} className="flex flex-col items-center md:items-end">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald">
                {lang === "pl" ? "Nawigacja" : "Navigation"}
              </p>
              <ul className="flex flex-col items-center gap-3 md:items-end">
                {text.footerNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
            <p className="text-xs text-primary-foreground/40">
              {text.copyright}
            </p>
            <div className="flex items-center gap-1 text-xs text-primary-foreground/40">
              <span>{lang === "pl" ? "Zbudowane z" : "Built with"}</span>
              <span className="text-emerald">{"<3"}</span>
              <span>{lang === "pl" ? "dla bezpiecznej AI" : "for safe AI"}</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
