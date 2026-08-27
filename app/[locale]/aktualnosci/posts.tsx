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
    slug: "ccai-aispl-meetup-warszawa",
    date: "2026-08-27",
    image: "/images/blog/ccai-aispl-meetup-warszawa.jpg",
    imageAlt: "Julia Bazińska i Jan Piotrowski z mikrofonami podczas prezentacji na meetupie",
    imageAltEN: "Julia Bazińska and Jan Piotrowski holding microphones during a talk at the meetup",
    displayDate: "27 sierpnia 2026",
    displayDateEN: "August 27, 2026",
    title: "CCAI x AI Safety Poland Meetup w Warszawie",
    titleEN: "CCAI x AI Safety Poland Meetup in Warsaw",
    paragraphs: [
      "Za nami udany meetup zorganizowany z Centre for Credible AI na Wydziale MiNI PW. Podczas spotkania Julia Bazińska opowiedziała o różnicach między „AI Safety” a „AI Security” oraz podatnościach modeli LLM, a Jan Piotrowski pokazał ewaluację systemów wieloagentowych przy użyciu języka LEAN.",
      "W drugiej części odbył się panel dyskusyjny z udziałem Julii, Tomasza Steifera i Kacpra Dudzica. Eksperci omówili głośny atak na linii OpenAI x HuggingFace, sprawę „samodzielnych” celów agentów AI oraz rosnący wpływ modeli open weight na cyberbezpieczeństwo.",
      "Dziękujemy prelegentom, panelistom i uczestnikom za świetny czas i ciekawe dyskusje!",
    ],
    paragraphsEN: [
      "We have just wrapped up a successful meetup organised together with the Centre for Credible AI at the Faculty of Mathematics and Information Science, Warsaw University of Technology. Julia Bazińska spoke about the differences between “AI Safety” and “AI Security” and about vulnerabilities in LLMs, while Jan Piotrowski presented the evaluation of multi-agent systems using the LEAN language.",
      "The second part featured a panel discussion with Julia, Tomasz Steifer and Kacper Dudzic. The experts discussed the widely covered OpenAI x HuggingFace attack, the question of “independent” goals of AI agents, and the growing impact of open weight models on cybersecurity.",
      "Thank you to our speakers, panellists and participants for a great time and fascinating discussions!",
    ],
  },
  {
    slug: "talos-fellowship-2026",
    date: "2026-08-13",
    image: "/images/blog/talos-fellowship-2026.jpg",
    imageAlt: "Logo Talos Network oraz zdjęcia trzech osób przyjętych do programu",
    imageAltEN: "The Talos Network logo alongside photos of the three people accepted into the program",
    displayDate: "13 sierpnia 2026",
    displayDateEN: "August 13, 2026",
    title: "Trzy osoby z naszej społeczności w jesiennej kohorcie Talos Fellowship",
    titleEN: "Three people from our community join the autumn Talos Fellowship cohort",
    paragraphs: [
      "Do jesiennej kohorty Talos Fellowship 2026 dostały się trzy osoby z naszej społeczności: Zuza Topolska, Michał Tarnowski i Paweł Kamiński.",
      "Talos Fellowship to jeden z najważniejszych europejskich programów przygotowujących do kariery w polityce AI — obejmuje ośmiotygodniowy kurs podstaw europejskiego zarządzania AI, tygodniowy szczyt w Brukseli oraz staże i granty na własne inicjatywy.",
      "Spośród 21 uczestników z całej Europy aż trzech reprezentuje polski ekosystem, co dobrze świadczy o rosnącej sile środowiska AI safety i AI governance w Polsce. Gratulujemy i trzymamy kciuki za kolejne miesiące!",
    ],
    paragraphsEN: [
      "Three people from our community have been accepted into the autumn 2026 cohort of the Talos Fellowship: Zuza Topolska, Michał Tarnowski and Paweł Kamiński.",
      "The Talos Fellowship is one of the most important European programs preparing participants for a career in AI policy — it includes an eight-week course on the fundamentals of European AI governance, a week-long summit in Brussels, and internships and grants for participants' own initiatives.",
      "Out of 21 participants from across Europe, as many as three represent the Polish ecosystem, which speaks well of the growing strength of the AI safety and AI governance community in Poland. Congratulations, and we're keeping our fingers crossed for the months ahead!",
    ],
  },
  {
    slug: "patryk-perduta-bluedot",
    date: "2026-07-14",
    image: "/images/blog/patryk-perduta-bluedot.jpg",
    imageAlt: "Patryk Perduta na tle drzew z kartą wynikową 2. miejsca BlueDot Impact",
    imageAltEN: "Patryk Perduta outdoors with a BlueDot Impact 2nd place result card",
    displayDate: "14 lipca 2026",
    displayDateEN: "July 14, 2026",
    title: "Patryk Perduta zajął drugie miejsce w konkursie BlueDot Impact",
    titleEN: "Patryk Perduta takes second place in the BlueDot Impact competition",
    paragraphs: [
      "Z ogromną radością informujemy, że Patryk Perduta z naszej społeczności zajął drugie miejsce w konkursie [Technical AI Safety Puzzle](https://bluedot.org/puzzles/technical-ai-safety), organizowanym przez BlueDot Impact.",
      "Wyzwanie dotyczyło interpretowalności sieci neuronowych. Uczestnicy mieli odkryć, którą cechę tekstu model kodował w nietypowy, nieliniowy sposób, wyjaśnić geometrię tej reprezentacji, a następnie wytrenować własny model wykorzystujący jeszcze bardziej nietypowy sposób kodowania informacji.",
      "Gratulujemy Patrykowi świetnego wyniku. Wszystkich zainteresowanych tą tematyką zachęcamy do przejrzenia zadań konkursowych — to dobra okazja, by sprawdzić swoje umiejętności w praktyce. Rozwiązanie Patryka dostępne jest tutaj: [blog.perduta.net](https://blog.perduta.net/posts/bluedot-puzzle-1/)",
    ],
    paragraphsEN: [
      "We are delighted to announce that Patryk Perduta from our community took second place in the [Technical AI Safety Puzzle](https://bluedot.org/puzzles/technical-ai-safety) competition organised by BlueDot Impact.",
      "The challenge focused on neural network interpretability. Participants had to discover which feature of text the model was encoding in an unusual, non-linear way, explain the geometry of that representation, and then train their own model using an even more unusual method of encoding information.",
      "Congratulations to Patryk on this excellent result. We encourage everyone interested in this topic to browse the competition tasks — it is a great opportunity to put your skills to the test in practice. Patryk's solution is available here: [blog.perduta.net](https://blog.perduta.net/posts/bluedot-puzzle-1/)",
    ],
  },
  {
    slug: "meetup-krakow-q2-2026",
    date: "2026-06-30",
    image: "/images/blog/aispl-krk-q2.jpg",
    imageAlt: "Prelegent z mikrofonem przemawia do pełnej sali uczestników meetupu",
    imageAltEN: "A speaker with a microphone addressing a full room of meetup attendees",
    displayDate: "30 czerwca 2026",
    displayDateEN: "June 30, 2026",
    title: "AI Safety Poland Meetup w Krakowie",
    titleEN: "AI Safety Poland Meetup in Kraków",
    paragraphs: [
      "29 czerwca 2026 roku w krakowskim HEVRE odbył się kolejny AI Safety Poland Meetup! Frekwencja sięgnęła 90 osób, co czyni to spotkanie naszym największym dotychczasowym meetupem w Krakowie.",
      "Głównym punktem programu było 5 angażujących Lightning talków z sesjami Q&A. Prelegentami byli: Piotr Kędziora, Jakub Nowak, Kacper Dudzic, Alicja Grochocka-Dorocińska i Dawid Rymarczyk.",
      "Po części oficjalnej przyszedł czas na networking w fantastycznej atmosferze. Wydarzenie było świetną okazją do integracji naszej społeczności z uczestnikami szkoły letniej MLSS 2026. Ogromne podziękowania dla zespołu ML in PL za kolejną świetną współpracę, a wszystkim obecnym dziękujemy za niesamowitą energię!",
    ],
    paragraphsEN: [
      "On 29 June 2026 the next AI Safety Poland Meetup took place at HEVRE in Kraków! Attendance reached 90 people, making this our largest meetup in Kraków to date.",
      "The main highlight of the programme was 5 engaging Lightning Talks with Q&A sessions. The speakers were: Piotr Kędziora, Jakub Nowak, Kacper Dudzic, Alicja Grochocka-Dorocińska and Dawid Rymarczyk.",
      "After the official part came time for networking in a fantastic atmosphere. The event was a great opportunity to integrate our community with participants of the MLSS 2026 summer school. Huge thanks to the ML in PL team for another great collaboration, and to everyone who attended — thank you for the incredible energy!",
    ],
  },
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
