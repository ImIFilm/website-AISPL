import { NextResponse, type NextRequest } from "next/server"
import { LOCALE_COOKIE, defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config"

/**
 * i18n middleware.
 *
 * Responsibilities:
 *  1. If the request URL already begins with a supported locale prefix, do nothing.
 *  2. Otherwise pick a locale based on (a) the persisted `NEXT_LOCALE` cookie or
 *     (b) the browser's `Accept-Language` header. Fall back to {@link defaultLocale}.
 *  3. Redirect to the equivalent URL under the chosen locale and persist the choice
 *     in a long-lived cookie so subsequent visits skip the detection logic.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // 1. Already prefixed with a supported locale? Pass through, but keep the
  //    cookie in sync so that future bare-path visits land in the same locale.
  const firstSegment = pathname.split("/")[1]
  if (isLocale(firstSegment)) {
    const response = NextResponse.next()
    if (request.cookies.get(LOCALE_COOKIE)?.value !== firstSegment) {
      response.cookies.set(LOCALE_COOKIE, firstSegment, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      })
    }
    return response
  }

  // 2. Determine the preferred locale.
  const locale = pickLocale(request)

  // 3. Redirect to /{locale}{pathname}, preserving query string.
  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  redirectUrl.search = search

  const response = NextResponse.redirect(redirectUrl)
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  })
  return response
}

function pickLocale(request: NextRequest): Locale {
  // (a) Cookie wins over header so a manual switch sticks across sessions.
  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value
  if (isLocale(cookieValue)) return cookieValue

  // (b) Parse Accept-Language and pick the first supported locale.
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const ranked = acceptLanguage
      .split(",")
      .map((entry) => {
        const [tag, qPart] = entry.trim().split(";")
        const q = qPart && qPart.startsWith("q=") ? Number.parseFloat(qPart.slice(2)) : 1
        return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 }
      })
      .sort((a, b) => b.q - a.q)

    for (const { tag } of ranked) {
      const base = tag.split("-")[0] as Locale
      if ((locales as readonly string[]).includes(base)) {
        return base
      }
    }
  }

  return defaultLocale
}

export const config = {
  // Skip Next.js internals, API routes and any path that looks like a static asset
  // (anything containing a dot, e.g. `/favicon.ico`, `/images/logo.svg`).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
}
