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
    answer: (<>Głównym celem AI Safety Polska jest stworzenie silnej, merytorycznej społeczności, która aktywnie pracuje nad bezpieczeństwem AI. Edukujemy, łączymy ekspertów z różnych dziedzin i wspieramy badania, które mają zapobiec potencjalnym zagrożeniom wynikającym z zaawansowanej sztucznej inteligencji. Prowadzimy <a href="/inicjatywy#webinary" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">regularne webinary, klub czytelniczy</a> i <a href="/inicjatywy#slack" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">społeczność na Slacku</a>, a także organizujemy <a href="/inicjatywy#lokalne-spotkania" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">lokalne spotkania</a>.</>),
  },
  {
    question: "Czy się różni AI Safety od AI Security?",
    answer: "AI Security zajmuje się ochroną systemów AI przed atakami z zewnątrz, np. jailbreakami, kradzieżą wag modelu czy atakami na łańcuch dostaw software'u. Jest ono związane z antagonistycznym uczeniem maszynowym i szerszym cyberbezpieczeństwem. AI Safety natomiast skupia się głównie na zagrożeniach płynących z wewnątrz takich systemów: jak zapewnić, że zaawansowane systemy AI działają zgodnie z ludzkimi intencjami i wartościami. Bada również wpływ AI na społeczeństwo czy ekonomię. W praktyce te dziedziny często się przenikają - np. wiedza specjalistów od IT security pomaga upewnić się, że autonomiczni agenci AI nie wydostaną się poza swoje dozwolone granice działania.",
  },
  {
    question: "Czy muszę umieć programować, żeby zangażować się w AI Safety?",
    answer: (<>Zdecydowanie nie! Choć badacze techniczni są kluczowi, bezpieczeństwo AI to wyzwanie, które wymaga bardzo zróżnicowanych kompetencji. Środowisko pilnie potrzebuje prawników, analityków, badaczy społecznych, filozofów, ekspertów ds. stosunków międzynarodowych i wielu innych. Ogromną rolę odgrywają również specjaliści od cyberbezpieczeństwa, biosecurity, infrastruktury, a także specjaliści HR, managerowie projektów oraz eksperci ds. komunikacji i operacji. Jeśli nie wiesz, jak Twoje obecne umiejętności pasują do tej układanki, w AI Safety Poland prowadzimy <a href="/inicjatywy#doradztwo-zawodowe" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">indywidualne konsultacje kariery</a>. Pomożemy Ci przeanalizować Twoje doświadczenie i podpowiemy, w jaki sposób możesz wnieść największą wartość do obszaru bezpieczeństwa AI – niezależnie od tego, jakie masz wykształcenie i na jakim etapie zawodowym jesteś."</>),
  },
  {
    question: "Gdzie znajdę informacje o nadchodzących wydarzeniach?",
    answer: (<>Informacje o wydarzeniach publikujemy na <a href="/inicjatywy#slack" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">naszym Slacku</a>, <a href="https://www.linkedin.com/company/ai-safety-poland/" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">LinkedInie</a> oraz <a href="https://luma.com/aisafetypl" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Lumie</a>.</>),
  },
  {
    question: "W jaki sposób mogę wesprzeć AI Safety Polska?",
    answer: "Aktualnie szukamy osób do pomocy przy stronie internetowej (frontend, DevOps), prowadzeniu mediów społecznościowych, pisaniu artykułów na temat AI i AI Safety oraz specjalistów do automatyzacji procesów. Jeśli natomiast chciałbyś wesprzeć finansowo działania dotyczące AI Safety w Polsce, prosimy o kontakt mailowy.",
  },
  {
    question: "Od jakich materiałów polecacie zacząć naukę AI Safety?",
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
    answer: "AI Safety is a broad research field focused on reducing various types of risks and threats associated with advanced artificial intelligence. One of the most famous problems is 'alignment' - ensuring AI systems can be steered according to their creators' intentions. AI Safety also includes research on topics such as: the impact of AI systems on the economy and society, preventing AI from being used for undesirable purposes (e.g., cyberattacks), legal regulations, and even AI consciousness.",
  },
  {
    question: "What is the main goal of AI Safety Polska?",
    answer: (<>The main goal of AI Safety Polska is to create a strong, competent community that actively works on AI safety. We educate, connect experts from various fields, and support research aimed at preventing potential threats from advanced artificial intelligence. We run <a href="/inicjatywy#webinary" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">regular webinars, a reading club</a> and a <a href="/inicjatywy#slack" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Slack community</a>, and we also organise <a href="/inicjatywy#lokalne-spotkania" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">local meetups</a>.</>),
  },
  {
    question: "What is the difference between AI Safety and AI Security?",
    answer: "AI Security deals with protecting AI systems from external attacks, such as jailbreaks, model weight theft, or software supply chain attacks. It is related to adversarial machine learning and broader cybersecurity. AI Safety, on the other hand, focuses mainly on threats coming from within such systems: how to ensure that advanced AI systems act in accordance with human intentions and values. It also examines the impact of AI on society and the economy. In practice, these fields often overlap - for example, IT security expertise helps ensure that autonomous AI agents do not escape their permitted boundaries.",
  },
  {
    question: "Do I need to know how to code to get involved in AI Safety?",
    answer: (<>Definitely not! While technical researchers are crucial, AI safety is a challenge that requires very diverse skills. The field urgently needs lawyers, analysts, social scientists, philosophers, international relations experts, and many others. Specialists in cybersecurity, biosecurity, infrastructure, as well as HR specialists, project managers, and communications and operations experts also play a huge role. If you don&apos;t know how your current skills fit into this puzzle, at AI Safety Poland we offer <a href="/inicjatywy#doradztwo-zawodowe" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">individual career consultations</a>. We will help you analyse your experience and suggest how you can bring the greatest value to the AI safety field - regardless of your educational background or career stage.</>),
  },
  {
    question: "Where can I find information about upcoming events?",
    answer: (<>We publish event information on <a href="/inicjatywy#slack" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">our Slack</a>, <a href="https://www.linkedin.com/company/ai-safety-poland/" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">LinkedIn</a>, and <a href="https://luma.com/aisafetypl" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Luma</a>.</>),
  },
  {
    question: "How can I support AI Safety Polska?",
    answer: "We are currently looking for people to help with our website (frontend, DevOps), running social media, writing articles about AI and AI Safety, and specialists for process automation. If you would like to financially support AI Safety activities in Poland, please contact us by email.",
  },
  {
    question: "Which materials do you recommend to start learning about AI Safety?",
    answer: (<>To start, we recommend our dedicated <a href="/blog/intro-ai-safety" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">introductory article on AI Safety</a>. On YouTube, there are also excellent video materials: <a href="https://www.youtube.com/RationalAnimations" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Rational Animations</a>, <a href="https://www.youtube.com/@RobertMilesAI" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">Robert Miles AI Safety</a>, and <a href="https://www.youtube.com/@AI_In_Context" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">AI in Context</a>. We also recommend <a href="https://80000hours.org/ai/" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">in-depth articles from 80,000 Hours</a>. If you have time for books, we recommend <a href="https://www.goodreads.com/book/show/44767248-human-compatible" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">"Human Compatible"</a> by Stuart Russell and <a href="https://www.goodreads.com/book/show/50489349-the-alignment-problem" className="text-emerald hover:text-emerald-dark font-semibold transition-colors">"The Alignment Problem"</a> by Brian Christian.</>),
  },
  {
    question: "I am a journalist/media representative. How can I contact you?",
    answer: "Please contact us directly via our email: contact@aisafety.org.pl. We are happy to give interviews and comments on AI safety.",
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
                <AccordionTrigger className="cursor-pointer text-left font-medium text-foreground hover:no-underline" style={{ fontSize: "1.125rem" }}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground" style={{ fontSize: "1rem" }}>
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
