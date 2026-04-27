"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const translations = {
  pl: {
    label: "Dlaczego AI Safety ma znaczenie?",
    readMore: "czytaj więcej",
    articles: [
      {
        author: "Marcel Windys",
        title: "Dlaczego powinieneś zainteresować się AI Safety?",
        href: "/blog/intro-ai-safety",
      },
      {
        author: "Jakub Kryś",
        title: "Wkład Polaków w rozwój bezpieczeństwa AI",
        href: "/blog/wklad-polakow-w-rozwoj-bezpieczenstwa-ai",
      },
    ],
  },
  en: {
    label: "Why does AI Safety matter?",
    readMore: "read more",
    articles: [
      {
        author: "Marcel Windys",
        title: "Why should you care about AI Safety?",
        href: "/blog/intro-ai-safety",
      },
      {
        author: "Jakub Kryś",
        title: "Polish contributions to the development of AI safety",
        href: "/blog/wklad-polakow-w-rozwoj-bezpieczenstwa-ai",
      },
    ],
  },
} as const

export function ArticlesSection() {
  const { lang } = useLanguage()

  return (
    <section className="bg-background py-20" style={{ paddingBottom: "20px" }}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#01985D" }}
        >
          {translations[lang].label}
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {translations[lang].articles.map((article, i) => (
            <Link
              href={article.href}
              key={article.title}
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="flex cursor-pointer gap-4 rounded-xl bg-secondary p-4 transition-transform duration-300 md:p-5"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted md:h-28 md:w-28">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy/10 to-emerald/10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-medium text-muted-foreground">{article.author}</p>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-foreground">{article.title}</h3>
                  <div
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: "#01985D" }}
                  >
                    {translations[lang].readMore}
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
