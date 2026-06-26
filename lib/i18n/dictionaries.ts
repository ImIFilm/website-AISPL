import type { Locale } from "./config"

/**
 * Centralised dictionary for global UI text and SEO metadata.
 *
 * Per-component microcopy (page-specific copy, FAQ entries, blog content, ...) continues to
 * live next to the component that uses it. This file is the single source of truth for:
 *   - Site-wide metadata (title / description) used by `generateMetadata`.
 *   - Page-level metadata for the static routes (`/inicjatywy`, `/zespol`).
 *   - Strings shared across multiple components (language switcher labels).
 */

export type Dictionary = {
  meta: {
    home: { title: string; description: string }
    initiatives: { title: string; description: string }
    team: { title: string; description: string }
    careerMentoring: { title: string; description: string }
    news: { title: string; description: string }
    blog: { suffix: string; notFoundTitle: string }
  }
  switcher: {
    label: string
    pl: string
    en: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  pl: {
    meta: {
      home: {
        title: "AI Safety Polska - Budujemy bezpieczną przyszłość AI",
        description:
          "AI Safety Polska to społeczność naukowców, działaczy i pasjonatów skupiona na bezpieczeństwie sztucznej inteligencji.",
      },
      initiatives: {
        title: "Nasze inicjatywy - AI Safety Polska",
        description:
          "Poznaj inicjatywy AI Safety Polska: webinary, lokalne spotkania, współpraca z uczelniami, doradztwo zawodowe i społeczność online.",
      },
      team: {
        title: "Zespół - AI Safety Polska",
        description:
          "Poznaj zespół AI Safety Polska — koordynatorów i członków naszej społeczności.",
      },
      careerMentoring: {
        title: "Doradztwo zawodowe - AI Safety Polska",
        description:
          "Bezpłatne, spersonalizowane konsultacje kariery w AI Safety. Pomożemy Ci wyznaczyć plan działania i połączymy z ekspertami.",
      },
      news: {
        title: "Aktualności - AI Safety Polska",
        description:
          "Najświeższe wiadomości ze świata AI Safety Polska — wydarzenia, sukcesy i kamienie milowe naszej społeczności.",
      },
      blog: {
        suffix: "AI Safety Polska",
        notFoundTitle: "Artykuł nie znaleziony",
      },
    },
    switcher: {
      label: "Język:",
      pl: "PL",
      en: "EN",
    },
  },
  en: {
    meta: {
      home: {
        title: "AI Safety Poland - Building a safe future for AI",
        description:
          "AI Safety Poland is a community of researchers, activists and enthusiasts focused on the safety of artificial intelligence.",
      },
      initiatives: {
        title: "Our initiatives - AI Safety Poland",
        description:
          "Discover AI Safety Poland initiatives: webinars, local meetups, university collaboration, career counselling and our online community.",
      },
      team: {
        title: "Team - AI Safety Poland",
        description:
          "Meet the AI Safety Poland team — our coordinators and the members of our community.",
      },
      careerMentoring: {
        title: "Career Mentoring - AI Safety Poland",
        description:
          "Free, personalised career consultations in AI Safety. We will help you set an action plan and connect you with experts.",
      },
      news: {
        title: "News - AI Safety Poland",
        description:
          "The latest news from the world of AI Safety Poland — events, successes and milestones of our community.",
      },
      blog: {
        suffix: "AI Safety Poland",
        notFoundTitle: "Article not found",
      },
    },
    switcher: {
      label: "Language:",
      pl: "PL",
      en: "EN",
    },
  },
}

/** Returns the dictionary for the given locale. Server-component friendly (synchronous). */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
