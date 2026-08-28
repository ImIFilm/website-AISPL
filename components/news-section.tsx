"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import {
  type BlogPost,
  getPostTitle,
  getPostDate,
  getPostAlt,
  getPostParagraphs,
  toPlainText,
} from "@/app/[locale]/aktualnosci/posts"

const translations = {
  pl: {
    label: "Co u nas słychać?",
    heading: "Aktualności",
    cta: "Zobacz wszystkie wpisy",
  },
  en: {
    label: "What's new with us?",
    heading: "News",
    cta: "See all posts",
  },
} as const

export function NewsSection({
  lang,
  latestPosts,
}: {
  lang: Locale
  latestPosts: BlogPost[]
}) {
  const t = translations[lang]

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
          {t.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-center text-foreground"
          style={{ fontWeight: 500, fontSize: "2rem" }}
        >
          {t.heading}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestPosts.map((post, i) => {
            const excerpt = toPlainText(getPostParagraphs(post, lang)[0] ?? "")
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/${lang}/aktualnosci#${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-secondary transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={getPostAlt(post, lang)}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-muted-foreground">{getPostDate(post, lang)}</p>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-foreground text-pretty">
                      {getPostTitle(post, lang)}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={`/${lang}/aktualnosci`}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
