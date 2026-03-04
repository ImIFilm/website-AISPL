"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"

interface ArticleData {
  title: string
  author: string
  date: string
  readTime: string
  lead: string
  sections: { heading: string; body: string }[]
}

export function BlogArticle({ article }: { article: ArticleData }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Article header */}
        <article className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Strona glowna
            </Link>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl font-serif text-balance leading-tight">
                {article.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="text-border">|</span>
                <span>{article.date}</span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </motion.header>

            {/* Lead paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 text-lg leading-relaxed text-foreground/80 md:text-xl"
            >
              {article.lead}
            </motion.p>

            {/* Divider */}
            <div className="my-10 h-px bg-border" />

            {/* Article body */}
            <div className="flex flex-col gap-10">
              {article.sections.map((section, i) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <h2 className="text-xl font-bold text-foreground md:text-2xl font-serif">
                    {section.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground md:text-base">
                    {section.body}
                  </p>
                </motion.section>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-2xl bg-navy p-8 text-center md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
                Dolacz do dyskusji
              </p>
              <h3 className="mt-3 text-lg font-bold text-primary-foreground md:text-xl font-serif text-balance">
                {"Chcesz porozmawiac o tym artykule? Dolacz do naszej spolecznosci na Slacku."}
              </h3>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                {"Dolacz na Slack"}
              </a>
            </motion.div>
          </div>
        </article>
      </main>
      <ContactFooter />
    </>
  )
}
