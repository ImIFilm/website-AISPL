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
    answer: "AI Safety to dziedzina badań i praktyk skupiona na zapewnieniu, że systemy sztucznej inteligencji działają w sposób bezpieczny, przewidywalny i zgodny z ludzkimi wartościami. Obejmuje zarówno aspekty techniczne, jak i etyczne rozwoju AI.",
  },
  {
    question: "Jaki jest główny cel AI Safety Polska?",
    answer: "Naszym głównym celem jest budowanie polskiej społeczności ekspertów, badaczy i entuzjastów zainteresowanych bezpieczeństwem AI, a także prowadzenie działań edukacyjnych i badawczych w tym obszarze.",
  },
  {
    question: "Czy muszę być programistą lub ekspertem ML, żeby dołączyć?",
    answer: "Nie! Zapraszamy osoby z różnych dziedzin - filozofii, prawa, polityki publicznej, a także osoby bez technicznego wykształcenia. Każda perspektywa jest cenna w dyskusji o bezpieczeństwie AI.",
  },
  {
    question: "Gdzie znajdę informacje o nadchodzących wydarzeniach?",
    answer: "Informacje o wydarzeniach publikujemy na naszym kanale Slack, w mediach społecznościowych oraz na stronie internetowej. Dołącz do naszej społeczności, aby być na bieżąco.",
  },
  {
    question: "Jak mogę wesprzeć AI Safety Polska, jeśli nie mam czasu na większe zaangażowanie?",
    answer: "Możesz udostępniać nasze materiały, polecać nas znajomym lub wspierać finansowo. Nawet małe działania pomagają budować świadomość tematu bezpieczeństwa AI w Polsce.",
  },
  {
    question: "Od jakich książek lub materiałów polecacie zacząć?",
    answer: 'Polecamy zacząć od "Superintelligence" Nicka Bostroma, "Human Compatible" Stuarta Russella, oraz materiałów dostępnych na stronach takich jak AI Alignment Forum czy 80,000 Hours.',
  },
  {
    question: "Jestem dziennikarzem/przedstawicielem mediów. Jak mogę się z Wami skontaktować?",
    answer: "Zapraszamy do kontaktu przez formularz na naszej stronie lub bezpośrednio przez e-mail. Chętnie udzielamy wywiadów i komentarzy na temat bezpieczeństwa AI.",
  },
]

const faqEN = [
  {
    question: 'What exactly is "AI Safety"?',
    answer: "AI Safety is a field of research and practice focused on ensuring that artificial intelligence systems operate in a safe, predictable and human-values-aligned way. It covers both the technical and ethical aspects of AI development.",
  },
  {
    question: "What is the main goal of AI Safety Polska?",
    answer: "Our main goal is to build a Polish community of experts, researchers and enthusiasts interested in AI safety, as well as to carry out educational and research activities in this area.",
  },
  {
    question: "Do I need to be a programmer or ML expert to join?",
    answer: "Not at all! We welcome people from all fields - philosophy, law, public policy, as well as those without a technical background. Every perspective is valuable in discussions about AI safety.",
  },
  {
    question: "Where can I find information about upcoming events?",
    answer: "We publish event information on our Slack channel, social media and website. Join our community to stay up to date.",
  },
  {
    question: "How can I support AI Safety Polska if I don't have time for a bigger commitment?",
    answer: "You can share our materials, recommend us to friends or provide financial support. Even small actions help raise awareness of AI safety in Poland.",
  },
  {
    question: "Which books or materials do you recommend to get started?",
    answer: 'We recommend starting with "Superintelligence" by Nick Bostrom, "Human Compatible" by Stuart Russell, and materials available on sites such as AI Alignment Forum or 80,000 Hours.',
  },
  {
    question: "I am a journalist/media representative. How can I contact you?",
    answer: "Please get in touch via the form on our website or directly by e-mail. We are happy to give interviews and comments on AI safety.",
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
