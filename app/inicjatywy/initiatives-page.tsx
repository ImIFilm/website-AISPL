"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    backLink: "Strona główna",
    heading: "Nasze inicjatywy",
    tocWebinars: "Webinary i spotkania",
    tocSlack: "Społeczność Slack",
    tocUniversities: "Współpraca z uczelniami",
    tocCareer: "Doradztwo zawodowe",
    webinarsTitle: "Webinary i lokalne spotkania",
    webinarsDesc1: "Organizujemy wydarzenia, które łączą pasjonatów i profesjonalistów dbających o bezpieczny rozwój sztucznej inteligencji. Od webinarów, przez klub czytelniczy, aż po lokalne spotkania – tworzymy warunki do nauki, dyskusji i realnego działania.",
    webinarsDesc2: "Najbliższe wydarzenia znajdziesz na",
    webinarsLink: "naszym kalendarzu na Lumie.",
    calendarTitle: "Kalendarz wydarzen AI Safety Polska",
    careerTitle: "Doradztwo zawodowe",
    careerDesc: "Oferujemy indywidualne, spersonalizowane konsultacje kariery skoncentrowane na ścieżkach zawodowych w AI Safety. Pomożemy Ci wyznaczyć plan działania, znaleźć odpowiednie materiały, a także połączymy z innymi osobami o podobnych zainteresowaniach.",
    careerForWhom: "Dla kogo?",
    careerForWhomItems: [
      "Pomagamy zarówno osobom na poważnie myślącym o karierze w AI Safety, jak i tym, którzy dopiero zaczynają się nad tym zastanawiać.",
      "AI Safety potrzebuje nie tylko specjalistów od AI! Chętnie pomożemy osobom zajmującym się szeroko pojętą informatyką, fizyką, matematyką, prawem, ekonomią, cyberbezpieczeństwem, etyką, psychologią, naukami społecznymi, stosunkami międzynarodowymi czy komunikacją.",
    ],
    careerHowTitle: "Jak to dziala?",
    careerHowItems: [
      "Wypełnij formularz zgłoszeniowy",
      "Rozmowa z doświadczonym specjalistą",
      "Konkretne kroki, rekomendacje i kontakty",
      "Możliwość następnego spotkania w zależności od potrzeb",
    ],
    careerApply: "Aplikuj na konsultacje",
    slackTitle: "Społeczność online - Slack",
    slackDesc1: "Nasz Slack to główne miejsce wymiany wiedzy i doświadczeń dla polskiej społeczności zainteresowanej bezpieczeństwem AI. Obecnie liczymy ponad 200 członków - od profesjonalistów pracujących w branży AI, przez badaczy akademickich, po studentów i entuzjastów dopiero rozpoczynających swoja przygodę z tematem.",
    slackDesc2: "Prowadzimy tu wiele dedykowanych kanałów tematycznych: zagadnienia techniczne, polityka publiczna ds. AI, a nawet dyskusje o możliwej świadomości systemów AI. Dzielimy się najnowszymi publikacjami i newsami ze świata AI safety, a także dajemy znać o nadchodzących wydarzeniach i możliwościach rozwoju kariery. Nie brakuje też luźniejszych rozmów i networkingu!",
    slackMembers: "członków społeczności",
    slackJoin: "Dolacz do Slacka",
    universitiesTitle: "Współpraca z uczelniami",
    universitiesDesc1: "Współpraca z polskimi uczelniami obejmuje organizację wykładów gościnnych i warsztatów na uczelniach, wspieranie prac badawczych związanych z AI Safety, łączenie studentów i doktorantów z mentorami z branży oraz promowanie możliwości stażowych i zawodowych w organizacjach zajmujących się AI Safety.",
    universitiesDesc2: "Jeśli reprezentujesz uczelnię, wydział lub koło naukowe i chcesz nawiązać współpracę, skontaktuj się z nami bezpośrednio przez mail: contact@aisafety.org.pl",
  },
  en: {
    backLink: "Homepage",
    heading: "Our initiatives",
    tocWebinars: "Webinars and meetups",
    tocSlack: "Slack community",
    tocUniversities: "University collaboration",
    tocCareer: "Career counselling",
    webinarsTitle: "Webinars and local meetups",
    webinarsDesc1: "We organise events that bring together enthusiasts and professionals dedicated to the safe development of artificial intelligence. From webinars, through reading clubs, to local meetups – we create conditions for learning, discussion, and real action.",
    webinarsDesc2: "You can find upcoming events on",
    webinarsLink: "our calendar on Luma.",
    calendarTitle: "AI Safety Polska events calendar",
    careerTitle: "Career counselling",
    careerDesc: "We offer individual, personalised career consultations focused on career paths in AI Safety. We will help you set an action plan, find the right materials, and connect you with others who share similar interests.",
    careerForWhom: "For whom?",
    careerForWhomItems: [
      "We help both those seriously considering a career in AI Safety and those just starting to think about it.",
      "AI Safety needs more than just AI specialists! We are happy to help people working in broadly understood computer science, physics, mathematics, law, economics, cybersecurity, ethics, psychology, social sciences, international relations, or communications.",
    ],
    careerHowTitle: "How does it work?",
    careerHowItems: [
      "Fill out the application form",
      "Conversation with an experienced specialist",
      "Concrete steps, recommendations, and contacts",
      "Possibility of a follow-up meeting depending on needs",
    ],
    careerApply: "Apply for consultation",
    slackTitle: "Online community - Slack",
    slackDesc1: "Our Slack is the main place for knowledge and experience exchange for the Polish community interested in AI safety. We currently have over 200 members - from professionals working in the AI industry, academic researchers, to students and enthusiasts just starting their journey with this topic.",
    slackDesc2: "We run many dedicated thematic channels: technical issues, AI public policy, and even discussions about the possible consciousness of AI systems. We share the latest publications and news from the AI safety world, and we also let you know about upcoming events and career development opportunities. There is also plenty of casual conversation and networking!",
    slackMembers: "community members",
    slackJoin: "Join our Slack",
    universitiesTitle: "University collaboration",
    universitiesDesc1: "Collaboration with Polish universities includes organising guest lectures and workshops at universities, supporting research related to AI Safety, connecting students and PhD candidates with industry mentors, and promoting internship and career opportunities at organisations working on AI Safety.",
    universitiesDesc2: "If you represent a university, faculty, or student organisation and want to collaborate, please contact us directly by email: contact@aisafety.org.pl",
  },
}

export function InitiativesPage() {
  const { lang } = useLanguage()
  const text = t[lang]
  return (
    <>
      <Navbar />
      {/* Full-width auto-advancing photo slider, sits below the fixed navbar */}
      <div className="pt-[72px]">
        <HeroSlider />
      </div>
      <main className="pb-0">
        {/* Header */}
        <section className="bg-background py-16 md:py-24" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {text.backLink}
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance"
            >
              {text.heading}
            </motion.h1>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#webinary" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                {text.tocWebinars}
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#slack" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                {text.tocSlack}
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#wspolpraca-z-uczelniami" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                {text.tocUniversities}
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#doradztwo-zawodowe" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                {text.tocCareer}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Initiatives content */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-16 md:gap-24">

              {/* Webinary i lokalne spotkania */}
              <motion.article
                id="webinary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <span id="lokalne-spotkania" className="block -mt-32 pt-32" style={{ paddingTop: "92px" }} />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {text.webinarsTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.webinarsDesc1}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.webinarsDesc2} <a href="https://luma.com/aisafetypl" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">{text.webinarsLink}</a>
                </p>

                {/* Luma Calendar Embed */}
                <div className="mt-8 rounded-2xl overflow-hidden bg-card shadow-sm">
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-NVnZuKq5mAMSq4Q/events"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    style={{ border: "1px solid #e2e8f0", borderRadius: "16px" }}
                    allowFullScreen
                    aria-hidden="false"
                    title={text.calendarTitle}
                  />
                </div>
              </motion.article>

              {/* Doradztwo zawodowe */}
              <motion.article
                id="doradztwo-zawodowe"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {text.careerTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.careerDesc}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">{text.careerForWhom}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {text.careerForWhomItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">{text.careerHowTitle}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {text.careerHowItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="bg-emerald hover:bg-emerald-dark text-white">
                    <a
                      href="https://forms.gle/r3pHarn2cN2dzYrm8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {text.careerApply}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.article>

              {/* Spolecznosc online - Slack */}
              <motion.article
                id="slack"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {text.slackTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.slackDesc1}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.slackDesc2}
                </p>

                <div className="mt-8 rounded-xl bg-emerald/10 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">200+</p>
                      <p className="text-sm text-muted-foreground">{text.slackMembers}</p>
                    </div>
                    <Button asChild className="bg-emerald hover:bg-emerald-dark text-white">
                      <a
                        href="https://forms.gle/J2yTVJXYcaMyR5i56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        {text.slackJoin}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>

              {/* Wspolpraca z uczelniami */}
              <motion.article
                id="wspolpraca-z-uczelniami"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {text.universitiesTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.universitiesDesc1}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {text.universitiesDesc2}
                </p>
              </motion.article>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  )
}
