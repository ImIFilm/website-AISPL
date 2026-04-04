"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const navLinksPL = [
  { label: "Kim jesteśmy", href: "/#kim-jestesmy" },
  { label: "Co robimy", href: "/#co-robimy" },
  { label: "Zaangażuj się", href: "/#zaangazuj-sie" },
  { label: "Kontakt", href: "/#kontakt" },
]

const navLinksEN = [
  { label: "About us", href: "/#kim-jestesmy" },
  { label: "What we do", href: "/#co-robimy" },
  { label: "Get involved", href: "/#zaangazuj-sie" },
  { label: "Contact", href: "/#kontakt" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const navLinks = lang === "pl" ? navLinksPL : navLinksEN

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex-shrink-0" aria-label="AI Safety Polska - Strona glowna">
          <Image
            src="/images/logo-aispl.svg"
            alt="AI Safety Polska logo"
            width={40}
            height={44}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links + switcher */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("pl")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "pl"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "pl"}
            >
              PL
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otworz menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 border-t border-border px-9 py-4">
              <span className="text-xs text-muted-foreground">
                {lang === "pl" ? "Język:" : "Language:"}
              </span>
              <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
                <button
                  onClick={() => setLang("pl")}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === "pl"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  PL
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === "en"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
