"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"

export function InitiativesPage() {
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
              Strona główna
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance"
            >
              Nasze inicjatywy
            </motion.h1>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#webinary" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                Webinary i spotkania
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#slack" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                Społeczność Slack
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#wspolpraca-z-uczelniami" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                Współpraca z uczelniami
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#doradztwo-zawodowe" className="text-sm font-medium text-emerald hover:text-emerald-dark transition-colors">
                Doradztwo zawodowe
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
                  Webinary i lokalne spotkania
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  Organizujemy wydarzenia, które łączą pasjonatów i profesjonalistów dbających o bezpieczny rozwój sztucznej inteligencji. Od webinarów, przez klub czytelniczy, aż po lokalnie spotkania – tworzymy warunki do nauki, dyskusji i realnego działania.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  Nasze najbliższe wydarzenia znajdziesz na <a href="https://luma.com/aisafetypl"> naszym kalendarzu na Lumie </a>
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
                    title="Kalendarz wydarzen AI Safety Polska"
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
                  Doradztwo zawodowe
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Oferujemy indywidualne, spersonalizowane konsultacje kariery skoncentrowane na ścieżkach zawodowych w AI Safety. Pomożemy Ci wyznaczyć plan działania, znaleźć odpowiednie materiały, a także połączymy z innymi osobami o podobnych zainteresowaniach."}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">Dla kogo?</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Pomagamy zarówno osobom na poważnie myślącym o karierze w AI Safety, jak i tym, którzy dopiero wchodzą w temat.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        AI Safety potrzebuje nie tylko specjalistów od AI! Chętnie pomożemy osobom zajmującym się informatyką, fizyką, matematyką, prawem, ekonomią, cyberbezpieczeństwem, etyką, psychologią, naukami społecznymi, stosunkami międzynarodowymi czy komunikacją.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">Jak to dziala?</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Wypełnij formularz zgłoszeniowy
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Rozmowa z doświadczonym specjalistą
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Konkretne kroki, rekomendacje i kontakty
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Możliwość następnego spotkania w zależności od potrzeb
                      </li>
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
                      Aplikuj na konsultacje
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
                  Społeczność online - Slack
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Nasz Slack to główne miejsce wymiany wiedzy i doświadczeń dla polskiej społeczności zainteresowanej bezpieczeństwem AI. Obecnie liczymy ponad 200 członków - od profesjonalistów pracujących w branży AI, przez badaczy akademickich, po studentów i entuzjastów dopiero rozpoczynających swoja przygodę z tematem."}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Prowadzimy tu wiele dedykowanych kanałów tematycznych: zagadnienia techniczne, polityka publiczna ds. AI, a nawet dyskusje o możliwej świadomości systemów AI. Dzielimy się najnowszymi publikacjami i newsami ze świata AI safety, a także dajemy znać o nadchodzących wydarzeniach i możliwościach rozwoju kariery. Nie brakuje też luźniejszych rozmów i networkingu!"}
                </p>

                <div className="mt-8 rounded-xl bg-emerald/10 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">200+</p>
                      <p className="text-sm text-muted-foreground">członków społeczności</p>
                    </div>
                    <Button asChild className="bg-emerald hover:bg-emerald-dark text-white">
                      <a
                        href="https://forms.gle/J2yTVJXYcaMyR5i56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Dolacz do Slacka
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
                  Współpraca z uczelniami
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Nawiazujemy wspolprace z polskimi uczelniami wyzszymi, aby wlaczyc tematyke AI Safety do programow nauczania i wspierac rozwoj badan w tej dziedzinie. Wierzymy, ze przyszlosc bezpiecznej sztucznej inteligencji zalezy od edukacji kolejnych pokolen badaczy i inzynierow."}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  Nasza współpraca obejmuje organizacje wykładów gościnnych i warsztatów na uczelniach, wspieranie prac badawczych związanych z AI Safety, łączenie studentów i doktorantów z mentorami z branży oraz promowanie możliwości stażowych i zawodowych w organizacjach zajmujących się AI Safety.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Wykłady</p>
                    <p className="mt-1 text-sm text-muted-foreground">gościnne na uczelniach</p>
                  </div>
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Warsztaty</p>
                    <p className="mt-1 text-sm text-muted-foreground">praktyczne dla studentów</p>
                  </div>
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Mentoring</p>
                    <p className="mt-1 text-sm text-muted-foreground">dla doktorantów</p>
                  </div>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  Jeśli reprezentujesz uczelnie i chcesz nawiązać współpracę, skontaktuj się z nami przez formularz kontaktowy poniżej.
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
