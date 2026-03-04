"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Monitor,
  Users,
  GraduationCap,
  Briefcase,
  Hash,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"

const initiatives = [
  {
    id: "webinary",
    title: "Webinary",
    icon: Monitor,
    color: "bg-emerald/10 text-emerald",
    description:
      "Organizujemy regularne webinary z ekspertami z dziedziny AI Safety, uczenia maszynowego i etyki technologii. Nasze wydarzenia online sa dostepne dla kazdego, kto chce poszerzyc wiedze na temat bezpieczenstwa sztucznej inteligencji. Zapraszamy zarowno poczatkujacych, jak i zaawansowanych uczestnikow.",
    highlights: [
      "Regularne sesje z ekspertami z calego swiata",
      "Nagrania dostepne na naszym kanale",
      "Interaktywne sesje Q&A po kazdym wystapeniu",
    ],
  },
  {
    id: "lokalne-spotkania",
    title: "Lokalne spotkania",
    icon: Users,
    color: "bg-emerald/10 text-emerald",
    description:
      "Budujemy lokalne spolecznosci w glownych miastach Polski. Nasze spotkania to okazja do networkingu, wymiany pomyslow i wspolnej pracy nad projektami zwiazanymi z bezpieczenstwem AI. Dzialamy juz w Warszawie, Krakowie i Wroclawiu.",
    highlights: [
      "Spotkania w Warszawie, Krakowie i Wroclawiu",
      "Warsztaty i dyskusje grupowe",
      "Mozliwosc prezentacji wlasnych badan",
    ],
  },
  {
    id: "wspolpraca-z-uczelniami",
    title: "Wspolpraca z uczelniami",
    icon: GraduationCap,
    color: "bg-emerald/10 text-emerald",
    description:
      "Nawiazujemy wspolprace z polskimi uczelniami wyzszymi, aby wlaczyc tematyke AI Safety do programow nauczania. Wspieramy studentow i doktorantow zainteresowanych prowadzeniem badan w dziedzinie bezpieczenstwa sztucznej inteligencji.",
    highlights: [
      "Wspieranie prac badawczych na polskich uczelniach",
      "Wyklady gosciane i warsztaty akademickie",
      "Program mentoringu dla studentow",
    ],
  },
  {
    id: "doradztwo-zawodowe",
    title: "Doradztwo zawodowe",
    icon: Briefcase,
    color: "bg-emerald/10 text-emerald",
    description:
      "Pomagamy osobom zainteresowanym kariera w AI Safety znalezc odpowiednia sciezke rozwoju. Oferujemy indywidualne konsultacje, przeglad CV oraz polaczenia z organizacjami poszukujacymi talentow w dziedzinie bezpieczenstwa AI.",
    highlights: [
      "Indywidualne sesje doradcze",
      "Przeglad CV i przygotowanie do rozmow",
      "Baza ofert pracy w AI Safety",
    ],
  },
  {
    id: "slack",
    title: "Spolecznosc online - Slack",
    icon: Hash,
    color: "bg-emerald text-accent-foreground",
    description:
      "Nasza spolecznosc na Slacku to serce AI Safety Polska. Tu dzielimy sie artykuami, prowadzimy dyskusje, organizujemy grupy badawcze i pomagamy sobie nawzajem w rozwoju. Dolacz do nas, aby byc na biezaco z najwazniejszymi wydarzeniami w swiecie AI Safety.",
    highlights: [
      "Ponad 500 aktywnych czlonkow",
      "Dedykowane kanaly tematyczne",
      "Codzienne aktualizacje i artykuly",
    ],
  },
]

export function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
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
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl font-serif text-balance"
            >
              Nasze inicjatywy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {"Dziaalmy na wielu frontach, zeby budowac swiadomosc i kompetencje w zakresie bezpieczenstwa sztucznej inteligencji w Polsce."}
            </motion.p>
          </div>
        </section>

        {/* Initiatives list */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-12 md:gap-16">
              {initiatives.map((initiative, i) => (
                <motion.article
                  key={initiative.id}
                  id={initiative.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="rounded-2xl bg-card p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${initiative.color}`}
                    >
                      <initiative.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-foreground md:text-2xl font-serif">
                        {initiative.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {initiative.description}
                      </p>
                      <ul className="mt-5 flex flex-col gap-2">
                        {initiative.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  )
}
