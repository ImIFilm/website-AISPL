"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const videoId = "yOrLpUOrVG0"

const translations = {
  pl: {
    label: "Dlaczego AI Safety ma znaczenie?",
    videoTitle: "Obejrzyj pierwszy film o AI Safety po polsku!",
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
    videoTitle: "New video: introduction to AI Safety",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="aspect-video overflow-hidden rounded-2xl bg-navy shadow-lg">
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={translations[lang].videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <h3 className="mt-5 text-center text-lg font-semibold leading-snug text-foreground sm:text-xl">
            {translations[lang].videoTitle}
          </h3>
        </motion.div>

        <div className="mx-auto mt-5 flex max-w-4xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-5">
          {translations[lang].articles.map((article) => (
            <Link
              href={`/${lang}${article.href}`}
              key={article.title}
              className="text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
            >
              {article.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
