"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Github } from "lucide-react"
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
    copyright: "© 2026 AI Safety Polska. Wszelkie prawa zastrzeżone.",
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
      {/* Contact Section - Full width subtle gray background */}
      <div className="relative z-10 -mb-24 w-full" style={{ backgroundColor: "#f7fffa" }}>
        <div className="mx-auto max-w-6xl px-6" style={{ paddingTop: "0px", paddingLeft: "44px", paddingRight: "44px", paddingBottom: "0px", boxShadow: "0px -2px 37px 0px rgba(2, 3, 2, 0.06)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-16"
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-foreground md:text-4xl lg:text-5xl text-balance" style={{ fontSize: "28px", fontWeight: "500" }}>
                {text.cardHeading}
              </h3>
              <p className="mt-4 text-muted-foreground" style={{ fontSize: "16px", fontWeight: "300" }}>
                contact@aisafety.org.pl
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-48 w-56 md:h-56 md:w-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-Jlff4fq5DlgNpBB6tmQQ9yGe833CpO.png"
                  alt={text.imgAlt}
                  fill
                  className="object-contain"
                  style={{ paddingTop: "13px", paddingBottom: "-7px" }}
                  sizes="256px"
                />
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
                  ? "Budujemy świadomość i kompetencje w zakresie bezpieczeństwa AI."
                  : "Building awareness and competencies in AI safety."
                }
              </p>
              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/ai-safety-poland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin-square-icon.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </a>
                <a
                  href="mailto:contact@aisafety.org.pl"
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
          </div>
        </div>
      </footer>
    </section>
  )
}
