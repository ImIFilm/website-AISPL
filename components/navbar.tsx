"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowUpRight, CalendarDays, MapPin, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import {
  LOCALE_COOKIE,
  buildLocalePath,
  type Locale,
} from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

const navLinksPL = [
  { label: "Kim jesteśmy", href: "#kim-jestesmy" },
  { label: "Co robimy", href: "#co-robimy" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "Zaangażuj się", href: "#zaangazuj-sie" },
  { label: "Wesprzyj", href: "/wesprzyj" },
  { label: "Kontakt", href: "#kontakt" },
]

const navLinksEN = [
  { label: "About us", href: "#kim-jestesmy" },
  { label: "What we do", href: "#co-robimy" },
  { label: "News", href: "/aktualnosci" },
  { label: "Get involved", href: "#zaangazuj-sie" },
  { label: "Support us", href: "/wesprzyj" },
  { label: "Contact", href: "#kontakt" },
]

/** Persist the selected locale before the navigation kicks in. */
function rememberLocale(locale: Locale) {
  if (typeof document === "undefined") return
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang } = useLanguage()
  const pathname = usePathname() || `/${lang}`

  const navLinks = lang === "pl" ? navLinksPL : navLinksEN
  const switcher = dictionaries[lang].switcher
  const announcement =
    lang === "pl"
      ? {
          status: "Rejestracja otwarta",
          date: "24 października",
          place: "Warszawa",
          action: "Zarejestruj się",
        }
      : {
          status: "Registration open",
          date: "October 24",
          place: "Warsaw",
          action: "Register now",
        }

  /** Build the equivalent URL in the other locale for the language switcher. */
  const isPrivacyPolicy = pathname.endsWith("/polityka-prywatnosci") || pathname.endsWith("/privacy-policy")
  const plHref = isPrivacyPolicy ? "/pl/polityka-prywatnosci" : buildLocalePath(pathname, "pl")
  const enHref = isPrivacyPolicy ? "/en/privacy-policy" : buildLocalePath(pathname, "en")

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <a
        href="https://warsawaisafety.day"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-8 items-center justify-center bg-navy px-4 py-1.5 text-primary-foreground transition-colors hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald"
        aria-label={`${announcement.status}: Warsaw AI Safety Day, ${announcement.date}, ${announcement.place}, 10:00–18:00`}
      >
        <span className="flex items-center gap-1 text-center text-[10px] leading-4 sm:hidden">
          <span className="font-semibold">Warsaw AI Safety Day</span>
          <span className="text-primary-foreground/40" aria-hidden="true">·</span>
          <span className="font-semibold text-emerald">24.10</span>
          <span className="text-primary-foreground/70">{announcement.place}</span>
          <span className="text-primary-foreground/70">10–18</span>
          <ArrowUpRight className="size-3" aria-hidden="true" />
        </span>
        <span className="hidden items-center justify-center gap-2 text-center text-xs sm:flex">
          <span className="font-semibold text-emerald">{announcement.status}</span>
          <span className="text-primary-foreground/40" aria-hidden="true">·</span>
          <span className="font-medium">Warsaw AI Safety Day</span>
          <span className="inline-flex items-center gap-1 text-primary-foreground/70">
            <CalendarDays className="size-3" aria-hidden="true" />
            {announcement.date}
          </span>
          <span className="hidden items-center gap-1 text-primary-foreground/70 md:inline-flex">
            <MapPin className="size-3" aria-hidden="true" />
            {announcement.place}, 10:00–18:00
          </span>
          <span className="inline-flex items-center gap-0.5 font-semibold underline decoration-primary-foreground/30 underline-offset-2 group-hover:decoration-primary-foreground">
            {announcement.action}
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </span>
        </span>
      </a>

      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-6 py-2">
        <Link href={`/${lang}`} className="flex-shrink-0" aria-label="AI Safety Polska - Strona główna">
          <Image
            src="/images/logo-aispl.svg"
            alt="AI Safety Polska logo"
            width={52}
            height={57}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links + switcher */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${lang}${link.href}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher (URL-driven, uses Next.js Link) */}
          <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
            <Link
              href={plHref}
              prefetch={false}
              hrefLang="pl"
              onClick={() => rememberLocale("pl")}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                lang === "pl"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={lang === "pl" ? "true" : undefined}
            >
              {switcher.pl}
            </Link>
            <Link
              href={enHref}
              prefetch={false}
              hrefLang="en"
              onClick={() => rememberLocale("en")}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={lang === "en" ? "true" : undefined}
            >
              {switcher.en}
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 cursor-pointer md:hidden"
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
                    href={`/${lang}${link.href}`}
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
              <span className="text-xs text-muted-foreground">{switcher.label}</span>
              <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
                <Link
                  href={plHref}
                  prefetch={false}
                  hrefLang="pl"
                  onClick={() => {
                    rememberLocale("pl")
                    setMobileOpen(false)
                  }}
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                    lang === "pl"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={lang === "pl" ? "true" : undefined}
                >
                  {switcher.pl}
                </Link>
                <Link
                  href={enHref}
                  prefetch={false}
                  hrefLang="en"
                  onClick={() => {
                    rememberLocale("en")
                    setMobileOpen(false)
                  }}
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                    lang === "en"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={lang === "en" ? "true" : undefined}
                >
                  {switcher.en}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
