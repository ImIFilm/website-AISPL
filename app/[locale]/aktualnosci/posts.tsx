import type React from "react"
import type { Locale } from "@/lib/i18n/config"

export type BlogPost = {
  /** Stable identifier, also used as the anchor id on the news page. */
  slug: string
  /** ISO date (YYYY-MM-DD) used for sorting. */
  date: string
  image: string
  imageAlt: string
  imageAltEN?: string
  displayDate: string
  displayDateEN?: string
  title: string
  titleEN?: string
  /** Up to 3 paragraphs. Inline markdown links `[label](url)` are supported. */
  paragraphs: string[]
  paragraphsEN?: string[]
}

/**
 * Source of truth for the simple news blog ("Aktualności").
 * Posts are ordered newest-first.
 */
export const posts: BlogPost[] = [
  {
    slug: "pierwszy-sezon-webinarow",
    date: "2026-06-25",
    image: "/images/blog/image-meet.jpg",
    imageAlt: "Ekran laptopa z siatką uczestników spotkania wideo",
    imageAltEN: "A laptop screen showing a grid of video-call participants",
    displayDate: "25 czerwca 2026",
    displayDateEN: "June 25, 2026",
    title: "Zakończyliśmy pierwszy sezon webinarów",
    titleEN: "We've wrapped up our first season of webinars",
    paragraphs: [
      "Z sukcesem podsumowujemy serię 17 codwutygodniowych webinarów z cyklu AI Safety Poland Talks. W ciągu ostatnich miesięcy stworzyliśmy przestrzeń do eksperckich dyskusji na temat bezpieczeństwa, etyki i ryzyka związanego z rozwojem sztucznej inteligencji. Dziękujemy wszystkim prelegentom oraz uczestnikom za zaangażowanie i wspólną budowę społeczności.",
      "Podczas naszego ostatniego spotkania gościliśmy Krzysztofa Bara, CEO London Initiative for Safe AI (LISA), który opowiedział o swojej ścieżce kariery od obliczeń kwantowych po zaangażowanie w AI Safety. W trakcie sesji Q&A omówiliśmy działalność tego kluczowego europejskiego hubu oraz przeanalizowaliśmy największe wyzwania AI Safety.",
    ],
    paragraphsEN: [
      "We are proud to wrap up a series of 17 biweekly webinars from the AI Safety Poland Talks cycle. Over the past months we have created a space for expert discussions on the safety, ethics and risks associated with the development of artificial intelligence. We thank all the speakers and participants for their engagement and for building the community together.",
      "During our last meeting we hosted Krzysztof Bar, CEO of the London Initiative for Safe AI (LISA), who shared his career path from quantum computing to his involvement in AI Safety. During the Q&A session we discussed the work of this key European hub and analysed the biggest challenges in AI Safety.",
    ],
  },
  {
    slug: "aispl-fundacja",
    date: "2026-06-21",
    image: "/images/blog/aispl-fun.jpg",
    imageAlt: "Logo AI Safety Polska oraz symbol paragrafu na zielonym tle",
    imageAltEN: "The AI Safety Poland logo and a paragraph symbol on a green background",
    displayDate: "21 czerwca 2026",
    displayDateEN: "June 21, 2026",
    title: "AI Safety Polska oficjalnie fundacją!",
    titleEN: "AI Safety Poland is officially a foundation!",
    paragraphs: [
      "Z ogromną satysfakcją informujemy, że 11 czerwca 2026 roku społeczność AI Safety Polska została formalnie zarejestrowana w Krajowym Rejestrze Sądowym (KRS: 0001247485) jako fundacja, z siedzibą przy ul. Św. Marcin 29/8 w Poznaniu.",
      "Strategicznym nadzorem nad naszymi działaniami zajmie się nowo powołana Rada Nadzorcza, w której skład weszli: Chris Szulc, Jakub Kryś, Marcel Windys, Patryk Wielopolski oraz Piotr Kędziora.",
      "Ten historyczny dla naszej społeczności krok otwiera przed Zarządem, na czele którego stanął Jakub Nowak, zupełnie nowe możliwości w zakresie profesjonalizacji działań na rzecz bezpieczeństwa sztucznej inteligencji w Polsce.",
    ],
    paragraphsEN: [
      "We are delighted to announce that on 11 June 2026 the AI Safety Poland community was formally registered in the National Court Register (KRS: 0001247485) as a foundation, with its registered office at ul. Św. Marcin 29/8 in Poznań.",
      "Strategic oversight of our activities will be handled by the newly appointed Supervisory Board, composed of: Chris Szulc, Jakub Kryś, Marcel Windys, Patryk Wielopolski and Piotr Kędziora.",
      "This historic step for our community opens entirely new opportunities for the Management Board, led by Jakub Nowak, to professionalise our work on the safety of artificial intelligence in Poland.",
    ],
  },
  {
    slug: "piotr-kedziora-hackathon",
    date: "2026-06-07",
    image: "/images/blog/ai-risk-hackaton.jpg",
    imageAlt: "Troje uśmiechniętych ludzi na ceglanym dziedzińcu z lampkami",
    imageAltEN: "Three smiling people in a brick courtyard with string lights",
    displayDate: "7 czerwca 2026",
    displayDateEN: "June 7, 2026",
    title: "Piotr Kędziora wygrał AI Risk Content Hackathon",
    titleEN: "Piotr Kędziora won the AI Risk Content Hackathon",
    paragraphs: [
      "Piotr Kędziora, wraz z dwoma członkami swojego zespołu - Miłoszem Bruskim oraz Rwiti Bhattacharya, odniósł wczoraj zwycięstwo w hackathonie BlueDot AI Risk Content, na który przyleciał do Londynu specjalnie z Krakowa.",
      "Jury konkursu w swoim werdykcie w sposób szczególny doceniło jego niezwykle kreatywne podejście do realizowanych zagadnień. Zachęcamy do obejrzenia [wszystkich nagrodzonych prac](https://ai-risk-content-hackathon.vercel.app/?referrer=luma&utm_source=luma).",
    ],
    paragraphsEN: [
      "Piotr Kędziora, together with two members of his team — Miłosz Bruski and Rwiti Bhattacharya — won the BlueDot AI Risk Content hackathon yesterday, having flown to London from Kraków especially for the occasion.",
      "In its verdict, the competition jury particularly recognised his exceptionally creative approach to the topics tackled. We encourage you to watch [all the awarded works](https://ai-risk-content-hackathon.vercel.app/?referrer=luma&utm_source=luma).",
    ],
  },
]

/** Localized accessors so components don't repeat the `lang === "en"` checks. */
export function getPostTitle(post: BlogPost, lang: Locale): string {
  return lang === "en" && post.titleEN ? post.titleEN : post.title
}

export function getPostDate(post: BlogPost, lang: Locale): string {
  return lang === "en" && post.displayDateEN ? post.displayDateEN : post.displayDate
}

export function getPostAlt(post: BlogPost, lang: Locale): string {
  return lang === "en" && post.imageAltEN ? post.imageAltEN : post.imageAlt
}

export function getPostParagraphs(post: BlogPost, lang: Locale): string[] {
  return lang === "en" && post.paragraphsEN ? post.paragraphsEN : post.paragraphs
}

/**
 * Render a plain-text string with inline markdown-style links `[label](url)`.
 * Links open in a new tab with safe rel attributes.
 */
export function renderInline(text: string): React.ReactNode {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let keyIdx = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <a
        key={`link-${keyIdx++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-2 decoration-foreground/30 transition-[text-decoration-color] hover:decoration-foreground/70"
      >
        {match[1]}
      </a>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

/** Strip markdown link syntax to plain text, e.g. for card excerpts. */
export function toPlainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
}
