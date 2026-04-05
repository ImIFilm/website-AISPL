"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context"

const faqPL = [
  {
    question: 'Czym dokładnie jest "AI Safety"?',
    answer: "AI Safety to szeroka dziedzina badawcza skupiająca się na redukcji wielu rodzajów ryzyk i zagrożeń związanych z zaawansowaną sztuczną inteligencją. Jednym z najsłynniejszych problemów jest tzw. 'alignment', czyli możliwość sterowania systemów AI zgodnie z intencjami ich twórców. AI Safety obejmuje również badania nad kwestiami takimi jak: wpływ systemów AI na ekonomię i społeczeństwo, zapobieganie wykorzystaniu AI do niepożądanych celów (np. cyberataki), regulacje prawne, a nawet świadomość AI.",
  },
  {
    question: "Jaki jest główny cel AI Safety Polska?",
    answer: "Głównym celem AI Safety Polska jest stworzenie silnej, merytorycznej społeczności, która aktywnie pracuje nad bezpieczeństwem AI. Edukujemy, łączymy ekspertów z różnych dziedzin i wspieramy badania, które mają zapobiec potencjalnym zagrożeniom wynikającym z zaawansowanej sztucznej inteligencji. Prowadzimy regularne webinary, klub czytelniczy i społeczność na Slacku, a także organizujemy lokalne spotkania.",
  },
  {
    question: "Czy umieć programować, żeby zangażować się w AI Safety?",
    answer: "Zdecydowanie nie! Choć badacze techniczni są kluczowi, bezpieczeństwo AI to wyzwanie, które wymaga bardzo zróżnicowanych kompetencji. Środowisko pilnie potrzebuje prawników, analityków, badaczy społecznych, filozofów, ekspertów ds. stosunków międzynarodowych i wielu innych. Ogromną rolę odgrywają również specjaliści od cyberbezpieczeństwa, biosecurity, infrastruktury, a także specjaliści HR, managerowie projektów oraz eksperci ds. komunikacji i operacji. Jeśli nie wiesz, jak Twoje obecne umiejętności pasują do tej układanki, w AI Safety Poland prowadzimy indywidualne konsultacje kariery. Pomożemy Ci przeanalizować Twoje doświadczenie i podpowiemy, w jaki sposób możesz wnieść największą wartość do obszaru bezpieczeństwa AI – niezależnie od tego, jakie masz wykształcenie i na jakim etapie zawodowym jesteś.",
  },
  {
    question: "Gdzie znajdę informacje o nadchodzących wydarzeniach?",
    answer: "Informacje o wydarzeniach publikujemy na naszym Slacku, LinkedInie oraz Lumie: https://luma.com/aisafetypl",
  },
  {
    question: "W jaki sposób mógłbym wesprzeć AI Safety Polska?",
    answer: "Aktualnie szukamy osób do pomocy przy stronie internetowej (frontent, DevOps), prowadzeniu mediów społecznościowych, pisaniu artykułów na temat AI i AI Safety oraz specjalistów do automatyzacji procesów. Jeśli natomiast chciałbyś wesprzeć finansowo działania dotyczące AI Safety w Polsce, prosimy o kontakt mailowy.",
  },
  {
    question: "Od jakich książek lub materiałów polecacie zacząć?",
    answer: (<>Na start polecamy nasz dedykowany <a href="/blog/intro-ai-safety" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">artykuł wprowadzający do AI Safety</a>. Na YouTube dostępne są również świetnie materiały wideo: <a href="https://www.youtube.com/RationalAnimations" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Rational Animations</a>, <a href="https://www.youtube.com/@RobertMilesAI" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Robert Miles AI Safety</a> oraz <a href="https://www.youtube.com/@AI_In_Context" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">AI in Context</a>. Polecamy również <a href="https://80000hours.org/ai/" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">dogłębne artykuły od organizacji 80,000 Hours</a>. Jeśli macie czas na książki, polecamy <a href="https://www.goodreads.com/book/show/44767248-human-compatible" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">„Human Compatible"</a> Stuarta Russella oraz <a href="https://www.goodreads.com/book/show/50489349-the-alignment-problem" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">"The Alignment Problem"</a> Briana Christiana.</>),
  },
  {
    question: "Jestem dziennikarzem/przedstawicielem mediów. Jak mogę się z Wami skontaktować?",
    answer: "Zapraszamy do kontaktu bezpośrednio przez nasz e-mail: contact@aisafety.org.pl Chętnie udzielamy wywiadów i komentarzy na temat bezpieczeństwa AI.",
  },
]

const faqEN = [
  {
    question: 'What exactly is "AI Safety"?',
    answer: "",
  },
  {
    question: "What is the main goal of AI Safety Polska?",
    answer: "",
  },
  {
    question: "Do I need to be a programmer or ML expert to join?",
    answer: "",
  },
  {
    question: "Where can I find information about upcoming events?",
    answer: "",
  },
  {
    question: "How can I support AI Safety Polska if I don't have time for a bigger commitment?",
    answer: "",
  },
  {
    question: "Which books or materials do you recommend to get started?",
    answer: '',
  },
  {
    question: "I am a journalist/media representative. How can I contact you?",
    answer: "",
  },
]

const t = {
  pl: { heading: "Często zadawane pytania", items: faqPL },
  en: { heading: "Frequently asked questions", items: faqEN },
}

export function FaqSection() {
  const { lang } = useLanguage()
  const text = t[lang]

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-medium text-foreground md:text-3xl"
          style={{ fontWeight: 500 }}
        >
          {text.heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="w-full">
            {text.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
