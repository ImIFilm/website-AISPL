import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ArticlesSection } from "@/components/articles-section"
import { InitiativesSection } from "@/components/initiatives-section"
import { NewsSection } from "@/components/news-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFooter } from "@/components/contact-footer"
import { posts } from "./aktualnosci/posts"
import { isLocale } from "@/lib/i18n/config"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = isLocale(locale) ? locale : "pl"
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <InitiativesSection />
        <NewsSection lang={lang} latestPosts={posts.slice(0, 3)} />
        <CtaSection />
        <FaqSection />
      </main>
      <ContactFooter />
    </>
  )
}
