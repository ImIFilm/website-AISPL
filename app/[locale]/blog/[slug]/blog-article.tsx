"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Info, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { useLanguage } from "@/context/language-context"

const translations = {
  pl: {
    backLink: "Strona główna",
    joinDiscussion: "Dołącz do dyskusji",
    discussCta: "Chcesz porozmawiać o tym artykule? Dołącz do naszej społeczności na Slacku.",
    joinSlack: "Dołącz na Slack",
    autoTranslatedNotice:
      "Ten artykuł został automatycznie przetłumaczony z polskiego na angielski przy użyciu Claude Opus 4.7 i może zawierać błędy tłumaczenia.",
  },
  en: {
    backLink: "Homepage",
    joinDiscussion: "Join the discussion",
    discussCta: "Want to discuss this article? Join our Slack community.",
    joinSlack: "Join Slack",
    autoTranslatedNotice:
      "This article was automatically translated from Polish to English using Claude Opus 4.7 and may contain translation errors.",
  },
} as const

export type LinkItem = {
  href: string
  label: string
  labelEN?: string
}

export type ArticleImage = {
  src: string
  alt: string
  altEN?: string
  caption?: string
  captionEN?: string
}

export type ArticleIframe = {
  src: string
  height?: number
  caption?: string
  captionEN?: string
}

export type ArticleSection = {
  heading: string
  headingEN?: string
  body: string
  bodyEN?: string
  /** Image displayed before the section body */
  imageBefore?: ArticleImage
  /** Image displayed after the section body */
  imageAfter?: ArticleImage
  /** Iframe displayed before the section body */
  iframeBefore?: ArticleIframe
  /** Iframe displayed after the section body */
  iframeAfter?: ArticleIframe
  linksTitle?: string
  linksTitleEN?: string
  links?: LinkItem[]
}

export type ArticleData = {
  title: string
  titleEN?: string
  author: string
  date: string
  dateEN?: string
  readTime: string
  lead: string
  leadEN?: string
  leadNote?: string
  leadNoteEN?: string
  sections: ArticleSection[]
  outroNote?: string
  outroNoteEN?: string
  /** When true and the active locale is "en", a subtle banner is shown at the top of the article. */
  autoTranslated?: boolean
}

/**
 * Render a plain-text string with inline markdown-style links [label](url)
 * and bold spans (**text** or __text__).
 * Links open in a new tab with safe rel attributes.
 */
function renderInline(text: string): React.ReactNode {
  // Combined regex for links and bold. Order matters: links first.
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|__([^_]+)__/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let keyIdx = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      // Markdown link
      parts.push(
        <a
          key={`link-${keyIdx++}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald underline underline-offset-2 transition-colors hover:text-emerald/80"
        >
          {match[1]}
        </a>,
      )
    } else {
      // Bold span
      const boldText = match[3] ?? match[4] ?? ""
      parts.push(
        <strong key={`b-${keyIdx++}`} className="font-semibold text-foreground">
          {boldText}
        </strong>,
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }

/**
 * Split body on blank lines to produce blocks.
 * A block whose every non-empty line begins with "- " (or "* ") is rendered as a bulleted list.
 */
function splitBlocks(body: string): Block[] {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  const blocks: Block[] = []
  for (const para of paragraphs) {
    const lines = para.split("\n").map((l) => l.trim()).filter(Boolean)
    const isList = lines.length > 0 && lines.every((l) => /^[-*]\s+/.test(l))
    if (isList) {
      blocks.push({
        kind: "list",
        items: lines.map((l) => l.replace(/^[-*]\s+/, "")),
      })
    } else {
      blocks.push({ kind: "paragraph", text: para })
    }
  }
  return blocks
}

/** Backwards-compatible: returns a flat list of paragraphs (used for outroNote/leadNote). */
function splitParagraphs(body: string): string[] {
  return body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
}

export function BlogArticle({ article }: { article: ArticleData }) {
  const { lang } = useLanguage()
  const text = translations[lang]

  const title = lang === "en" && article.titleEN ? article.titleEN : article.title
  const date = lang === "en" && article.dateEN ? article.dateEN : article.date
  const lead = lang === "en" && article.leadEN ? article.leadEN : article.lead
  const leadNote = lang === "en" && article.leadNoteEN ? article.leadNoteEN : article.leadNote
  const outroNote = lang === "en" && article.outroNoteEN ? article.outroNoteEN : article.outroNote

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href={`/${lang}`}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {text.backLink}
            </Link>

            {article.autoTranslated && lang === "en" && (
              <div
                role="note"
                className="mb-8 flex items-start gap-2.5 rounded-lg border border-border bg-muted/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground md:text-sm"
              >
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/80" aria-hidden />
                <span>{text.autoTranslatedNotice}</span>
              </div>
            )}

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="text-border">|</span>
                <span>{date}</span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-col gap-5"
            >
              {splitParagraphs(lead).map((para, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-foreground/80 md:text-xl"
                >
                  {renderInline(para)}
                </p>
              ))}
            </motion.div>

            {leadNote && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 italic text-muted-foreground"
              >
                {renderInline(leadNote)}
              </motion.p>
            )}

            <div className="my-10 h-px bg-border" />

            <div className="flex flex-col gap-10">
              {article.sections.map((section, i) => {
                const sectionHeading =
                  lang === "en" && section.headingEN ? section.headingEN : section.heading
                const sectionBody = lang === "en" && section.bodyEN ? section.bodyEN : section.body
                const linksTitle =
                  lang === "en" && section.linksTitleEN ? section.linksTitleEN : section.linksTitle

                const blocks = splitBlocks(sectionBody)

                // Resolve localized image properties
                const imageBefore = section.imageBefore
                const imageBeforeAlt =
                  lang === "en" && section.imageBefore?.altEN
                    ? section.imageBefore.altEN
                    : section.imageBefore?.alt ?? ""
                const imageBeforeCaption =
                  lang === "en" && section.imageBefore?.captionEN
                    ? section.imageBefore.captionEN
                    : section.imageBefore?.caption

                const imageAfter = section.imageAfter
                const imageAfterAlt =
                  lang === "en" && section.imageAfter?.altEN
                    ? section.imageAfter.altEN
                    : section.imageAfter?.alt ?? ""
                const imageAfterCaption =
                  lang === "en" && section.imageAfter?.captionEN
                    ? section.imageAfter.captionEN
                    : section.imageAfter?.caption

                return (
                  <motion.section
                    key={section.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.2) }}
                  >
                    {sectionHeading && (
                      <h2 className="text-xl font-bold text-foreground md:text-2xl">
                        {sectionHeading}
                      </h2>
                    )}

                    {/* Iframe before section body */}
                    {section.iframeBefore && (
                      <figure className="my-6">
                        <iframe
                          src={section.iframeBefore.src}
                          loading="lazy"
                          style={{ width: "100%", height: section.iframeBefore.height ?? 600, border: "none" }}
                          allow="web-share; clipboard-write"
                        />
                        {(lang === "en" ? section.iframeBefore.captionEN : section.iframeBefore.caption) && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                            {lang === "en" ? section.iframeBefore.captionEN : section.iframeBefore.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Image before section body */}
                    {imageBefore && (
                      <figure className="my-6">
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={imageBefore.src}
                            alt={imageBeforeAlt}
                            width={960}
                            height={540}
                            className="h-auto w-full"
                          />
                        </div>
                        {imageBeforeCaption && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                            {imageBeforeCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {blocks.map((block, bIdx) => {
                      if (block.kind === "list") {
                        return (
                          <ul
                            key={bIdx}
                            className="mt-3 list-disc space-y-2 pl-6 marker:text-emerald"
                          >
                            {block.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="leading-relaxed text-muted-foreground md:text-base"
                              >
                                {renderInline(item)}
                              </li>
                            ))}
                          </ul>
                        )
                      }
                      return (
                        <p
                          key={bIdx}
                          className="mt-3 leading-relaxed text-muted-foreground md:text-base"
                        >
                          {renderInline(block.text)}
                        </p>
                      )
                    })}

                    {/* Iframe after section body */}
                    {section.iframeAfter && (
                      <figure className="my-6">
                        <iframe
                          src={section.iframeAfter.src}
                          loading="lazy"
                          style={{ width: "100%", height: section.iframeAfter.height ?? 600, border: "none" }}
                          allow="web-share; clipboard-write"
                        />
                        {(lang === "en" ? section.iframeAfter.captionEN : section.iframeAfter.caption) && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                            {lang === "en" ? section.iframeAfter.captionEN : section.iframeAfter.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Image after section body */}
                    {imageAfter && (
                      <figure className="my-6">
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={imageAfter.src}
                            alt={imageAfterAlt}
                            width={960}
                            height={540}
                            className="h-auto w-full"
                          />
                        </div>
                        {imageAfterCaption && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                            {imageAfterCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {section.links && section.links.length > 0 && (
                      <div className="mt-5">
                        {linksTitle && (
                          <p className="font-semibold text-foreground">{linksTitle}</p>
                        )}
                        <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-emerald">
                          {section.links.map((link, lIdx) => {
                            const label =
                              lang === "en" && link.labelEN ? link.labelEN : link.label
                            return (
                              <li key={lIdx} className="leading-relaxed text-muted-foreground">
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald underline underline-offset-2 transition-colors hover:text-emerald/80"
                                >
                                  {label}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </motion.section>
                )
              })}
            </div>

            {outroNote && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex flex-col gap-4 border-l-2 border-emerald/40 pl-5"
              >
                {splitParagraphs(outroNote).map((para, i) => (
                  <p key={i} className="italic leading-relaxed text-muted-foreground">
                    {renderInline(para)}
                  </p>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-2xl bg-navy p-8 text-center md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
                {text.joinDiscussion}
              </p>
              <h3 className="mt-3 text-balance text-lg font-bold text-primary-foreground md:text-xl">
                {text.discussCta}
              </h3>
              <a
                href="https://forms.gle/J2yTVJXYcaMyR5i56"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                {text.joinSlack}
              </a>
            </motion.div>
          </div>
        </article>
      </main>
      <ContactFooter />
    </>
  )
}
