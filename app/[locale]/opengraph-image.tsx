import { ImageResponse } from "next/og"
import { isLocale, locales } from "@/lib/i18n/config"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** One OG image variant per supported locale. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const copy = {
  pl: {
    title: "AI Safety Polska",
    tagline: "Budujemy bezpieczną przyszłość sztucznej inteligencji",
  },
  en: {
    title: "AI Safety Poland",
    tagline: "Building a safe future for artificial intelligence",
  },
} as const

export default async function OpengraphImage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "pl"
  const { title, tagline } = copy[locale]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B132B",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(16,185,129,0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#10B981",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          aisafety.org.pl
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 88,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            fontWeight: 400,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    { ...size },
  )
}
