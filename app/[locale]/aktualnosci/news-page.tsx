"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { useLanguage } from "@/context/language-context"
import {
  posts,
  getPostTitle,
  getPostDate,
  getPostAlt,
  getPostParagraphs,
  renderInline,
} from "./posts"

const translations = {
  pl: {
    backLink: "Strona główna",
    label: "Co u nas słychać?",
    heading: "Aktualności",
    intro: "Najświeższe wiadomości ze świata AI Safety Polska — wydarzenia, sukcesy i kamienie milowe naszej społeczności.",
  },
  en: {
    backLink: "Homepage",
    label: "What's new with us?",
    heading: "News",
    intro: "The latest news from the world of AI Safety Poland — events, successes and milestones of our community.",
  },
} as const

export function NewsPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <>
      <Navbar />
      <main className="bg-background pb-20 pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href={`/${lang}`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backLink}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-border pb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t.label}</p>
            <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t.intro}</p>
          </motion.header>

          <div className="mt-12 flex flex-col gap-16">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                id={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={getPostAlt(post, lang)}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                <p className="mt-6 text-sm font-medium text-muted-foreground">{getPostDate(post, lang)}</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground text-pretty md:text-3xl">
                  {getPostTitle(post, lang)}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {getPostParagraphs(post, lang).map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed text-foreground/80">
                      {renderInline(paragraph)}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <ContactFooter />
    </>
  )
}
