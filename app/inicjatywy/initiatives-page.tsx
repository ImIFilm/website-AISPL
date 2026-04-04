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
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Strona glowna
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
            >
              Co robimy?
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance"
            >
              Nasze inicjatywy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {"Dzialamy na wielu frontach, zeby budowac swiadomosc i kompetencje w zakresie bezpieczenstwa sztucznej inteligencji w Polsce."}
            </motion.p>
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
                <span id="lokalne-spotkania" className="block -mt-32 pt-32" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Webinary i lokalne spotkania
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Organizujemy regularne wydarzenia online i offline, ktore laczah spolecznosc zainteresowana bezpieczenstwem AI w Polsce. Nasze webinary goszcza ekspertow z calego swiata - badaczy, inzynierow i decydentow zajmujacych sie AI Safety. Lokalne spotkania odbywaja sie w Warszawie, Krakowie i Wroclawiu, oferujac mozliwosc networkingu, dyskusji i wspolnej pracy nad projektami."}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Wszystkie wydarzenia sa otwarte i bezplatne. Ponizej znajdziesz kalendarz nadchodzacych wydarzen - mozesz zapisac sie na wybrane lub dodac caly kalendarz do swojej aplikacji."}
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
                  {"Przygotuj sie i przejdz do kariery o wysokim wplywie w AI Safety. Oferujemy indywidualne, spersonalizowane konsultacje kariery skoncentrowane na sciezkach zawodowych w AI Safety, laczace globalne mozliwosci z polskim kontekstem i kontaktami."}
                </p>
                
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">Dla kogo?</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Studenci informatyki, matematyki, filozofii lub polityki publicznej
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Osoby na poczatku kariery szukajace znaczacej zmiany
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Badacze chcacy polaczyc doswiadczenie z priorytetami AI Safety
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Kazdy zmotywowany do zaangazowania sie w AI Safety
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-card p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground">Jak to dziala?</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Wypelnij formularz zgloszeniowy
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        30-minutowa konsultacja z doswiadczonym specjalista
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Konkretne kroki, rekomendacje i kontakty
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                        Mozliwosc spotkania follow-up po 6-12 miesiacach
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="bg-emerald hover:bg-emerald-dark text-white">
                    <a
                      href="https://aisafety.org.pl/pl/mentoring-kariery/"
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
                  {"Spolecznosc online - Slack"}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Slack AI Safety Poland to centralne miejsce wymiany wiedzy i doswiadczen dla polskiej spolecznosci zainteresowanej bezpieczenstwem sztucznej inteligencji. Obecnie liczymy ponad 220 uzytkownikow - od profesjonalistow pracujacych w branzy AI, przez badaczy akademickich, po studentow i entuzjastow dopiero rozpoczynajacych swoja przygode z tematem."}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Na naszym Slacku znajdziesz dedykowane kanaly tematyczne: od technicznych dyskusji o alignment i interpretability, przez polityke i governance AI, az po ogolne rozmowy i networking. Regularnie dzielimy sie najnowszymi publikacjami, komentujemy biezace wydarzenia w swiecie AI i pomagamy sobie nawzajem w rozwoju karier."}
                </p>
                
                <div className="mt-8 rounded-xl bg-emerald/10 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">220+</p>
                      <p className="text-sm text-muted-foreground">aktywnych czlonkow spolecznosci</p>
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
                  {"Wspolpraca z uczelniami"}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Nawiazujemy wspolprace z polskimi uczelniami wyzszymi, aby wlaczyc tematyke AI Safety do programow nauczania i wspierac rozwoj badan w tej dziedzinie. Wierzymy, ze przyszlosc bezpiecznej sztucznej inteligencji zalezy od edukacji kolejnych pokolen badaczy i inzynierow."}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                  {"Nasza wspolpraca obejmuje organizacje wykladow goscinnych i warsztatow na uczelniach, wspieranie prac dyplomowych i badawczych zwiazanych z AI Safety, laczenie studentow z mentorami z branzy oraz promowanie mozliwosci stazowych i zawodowych w organizacjach zajmujacych sie bezpieczenstwem AI."}
                </p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Wyklady</p>
                    <p className="mt-1 text-sm text-muted-foreground">gosciane na uczelniach</p>
                  </div>
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Warsztaty</p>
                    <p className="mt-1 text-sm text-muted-foreground">praktyczne dla studentow</p>
                  </div>
                  <div className="rounded-xl bg-card p-5 shadow-sm text-center">
                    <p className="text-xl font-bold text-foreground">Mentoring</p>
                    <p className="mt-1 text-sm text-muted-foreground">dla prac badawczych</p>
                  </div>
                </div>
                
                <p className="mt-8 text-sm text-muted-foreground">
                  {"Jesli reprezentujesz uczelnie i chcesz nawiazac wspolprace, skontaktuj sie z nami przez formularz kontaktowy ponizej."}
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
