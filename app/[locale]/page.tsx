import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ArticlesSection } from "@/components/articles-section"
import { InitiativesSection } from "@/components/initiatives-section"
import { NewsSection } from "@/components/news-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFooter } from "@/components/contact-footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <InitiativesSection />
        <NewsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <ContactFooter />
    </>
  )
}
