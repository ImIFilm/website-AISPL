"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://thezvi.substack.com/feed"

type FeedItem = {
  title: string
  link: string
  pubDate: string
  description: string
}

const translations = {
  pl: {
    label: "Co nowego?",
    heading: "Aktualności",
    intro: "Najnowsze wpisy z bloga Don't Worry About the Vase (Zvi Mowshowitz).",
    error: "Nie udało się pobrać aktualności. Spróbuj ponownie później.",
    readMore: "Czytaj dalej",
    locale: "pl-PL",
  },
  en: {
    label: "What's new?",
    heading: "News",
    intro: "Latest posts from the blog Don't Worry About the Vase (Zvi Mowshowitz).",
    error: "Failed to load the news. Please try again later.",
    readMore: "Read more",
    locale: "en-US",
  },
} as const

/** Strip HTML tags and collapse whitespace to build a clean text excerpt. */
function buildExcerpt(html: string, maxLength = 160): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

function CardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-secondary p-6">
      <div className="h-3 w-24 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-5 w-full animate-pulse rounded bg-muted" />
      <div className="mt-2 h-5 w-2/3 animate-pulse rounded bg-muted" />
      <div className="mt-5 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}

export function NewsSection() {
  const { lang } = useLanguage()
  const text = translations[lang]

  const [items, setItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadFeed() {
      setLoading(true)
      setError(false)
      try {
        const res = await fetch(FEED_URL)
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const data = await res.json()
        if (cancelled) return
        const feedItems: FeedItem[] = Array.isArray(data?.items) ? data.items.slice(0, 4) : []
        setItems(feedItems)
      } catch {
        if (!cancelled) setError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadFeed()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="aktualnosci" className="scroll-mt-20 bg-background py-12 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
        >
          {text.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-center text-foreground"
          style={{ fontWeight: 500, fontSize: "2rem" }}
        >
          {text.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-3 max-w-2xl text-pretty text-center text-sm text-muted-foreground"
        >
          {text.intro}
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)}

          {!loading && error && (
            <p className="col-span-full text-center text-sm text-muted-foreground">
              {text.error}
            </p>
          )}

          {!loading &&
            !error &&
            items.map((item, i) => {
              const date = new Date(item.pubDate)
              const formattedDate = Number.isNaN(date.getTime())
                ? ""
                : date.toLocaleDateString(text.locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })

              return (
                <motion.a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-secondary p-6 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between gap-3">
                    {formattedDate && (
                      <time
                        dateTime={item.pubDate}
                        className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        {formattedDate}
                      </time>
                    )}
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-3 text-balance text-lg font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {buildExcerpt(item.description)}
                  </p>
                  <span className="mt-4 text-sm font-medium text-foreground underline underline-offset-2 decoration-foreground/30 transition-[text-decoration-color] group-hover:decoration-foreground/70">
                    {text.readMore}
                  </span>
                </motion.a>
              )
            })}
        </div>
      </div>
    </section>
  )
}
