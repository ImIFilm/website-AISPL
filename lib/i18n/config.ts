/**
 * i18n configuration for AI Safety Polska.
 *
 * Routing model:
 *  - Every page lives under the `/[locale]/...` segment (e.g. `/pl/inicjatywy`, `/en/zespol`).
 *  - `defaultLocale` is the locale we fall back to when we cannot detect the user's preference.
 *  - Cookie name follows the Next.js convention so other tooling recognises it as well.
 */

export const locales = ["pl", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pl"

export const LOCALE_COOKIE = "NEXT_LOCALE"

/** Maps a locale to a BCP-47 tag used for the `<html lang>` attribute and hreflang tags. */
export const htmlLang: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
}

/** Type guard that narrows an unknown string to a supported locale. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value)
}

/**
 * Given an arbitrary pathname, replace (or insert) the locale segment so that
 * the path points to the same logical page in the target locale.
 *
 * Examples:
 *   buildLocalePath('/pl/inicjatywy', 'en')       -> '/en/inicjatywy'
 *   buildLocalePath('/inicjatywy#slack', 'pl')    -> '/pl/inicjatywy#slack'
 *   buildLocalePath('/', 'en')                    -> '/en'
 */
export function buildLocalePath(pathname: string, target: Locale): string {
  // Split off hash and query so we can reattach them after rewriting the path.
  const hashIdx = pathname.indexOf("#")
  const queryIdx = pathname.indexOf("?")
  const splitIdx =
    hashIdx === -1 ? queryIdx : queryIdx === -1 ? hashIdx : Math.min(hashIdx, queryIdx)

  const path = splitIdx === -1 ? pathname : pathname.slice(0, splitIdx)
  const tail = splitIdx === -1 ? "" : pathname.slice(splitIdx)

  const segments = path.split("/").filter(Boolean)
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = target
  } else {
    segments.unshift(target)
  }

  return `/${segments.join("/")}${tail}`
}

/**
 * Prepend the locale segment to an internal href that does NOT yet contain one.
 * Useful for component-level links such as `/inicjatywy#slack` -> `/pl/inicjatywy#slack`.
 *
 * External URLs (anything starting with `http`, `mailto:`, `tel:`) are returned unchanged.
 * A bare hash (e.g. `#section`) is also returned unchanged.
 */
export function withLocale(href: string, locale: Locale): string {
  if (!href) return href
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href
  }
  if (!href.startsWith("/")) return href

  // Already has a locale segment? Replace it (defensive).
  const segments = href.split("/")
  // segments[0] is "" because of the leading slash.
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = locale
    return segments.join("/")
  }

  // Root path (`/` or `/#hash`) -> `/{locale}` or `/{locale}#hash`.
  if (href === "/") return `/${locale}`
  return `/${locale}${href}`
}
