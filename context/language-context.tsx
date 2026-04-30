"use client"

import { useCallback } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
import {
  LOCALE_COOKIE,
  buildLocalePath,
  defaultLocale,
  isLocale,
  type Locale,
} from "@/lib/i18n/config"

/** Backwards-compatible alias for the existing `Language` type used across components. */
export type Language = Locale

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
}

/**
 * `LanguageProvider` used to hold local React state. With URL-based i18n there is no
 * client-side state to manage – the source of truth is the `[locale]` route segment.
 * We keep the component as a transparent wrapper so existing imports/usages keep working.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

/**
 * Read the active locale from the URL and expose a setter that:
 *   1. persists the user's preference in a long-lived `NEXT_LOCALE` cookie, and
 *   2. navigates to the equivalent page under the new locale.
 *
 * Together with the middleware this guarantees that:
 *   - refreshing keeps the language (cookie + URL),
 *   - returning visitors land on their previously chosen language,
 *   - sharing a URL preserves the language for the recipient.
 */
export function useLanguage(): LanguageContextValue {
  const params = useParams<{ locale?: string | string[] }>()
  const router = useRouter()
  const pathname = usePathname()

  const raw = Array.isArray(params?.locale) ? params?.locale[0] : params?.locale
  const lang: Locale = isLocale(raw) ? raw : defaultLocale

  const setLang = useCallback(
    (next: Language) => {
      if (next === lang) return
      if (typeof document !== "undefined") {
        // 1 year, root path, lax so it survives top-level navigations.
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
      }
      router.push(buildLocalePath(pathname || `/${lang}`, next))
    },
    [lang, pathname, router],
  )

  return { lang, setLang }
}
