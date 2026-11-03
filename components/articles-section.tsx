"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, FileText } from "lucide-react"
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
          className="mx-auto mt-8 max-w-2xl"
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
          <h3 className="mt-3 text-center text-sm font-semibold leading-snug text-foreground sm:text-base">
            {translations[lang].videoTitle}
          </h3>
        </motion.div>

        <div className="mx-auto mt-5 flex max-w-2xl flex-col gap-2 border-t border-border pt-3">
          {translations[lang].articles.map((article) => (
            <Link
              href={`/${lang}${article.href}`}
              key={article.title}
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-emerald"
            >
              <FileText className="size-4 shrink-0 text-emerald/70 transition-colors group-hover:text-emerald" aria-hidden="true" />
              <span className="underline decoration-border underline-offset-4 group-hover:decoration-emerald">
                {article.title}
              </span>
              <ArrowUpRight className="ml-auto size-3.5 shrink-0 opacity-60" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
