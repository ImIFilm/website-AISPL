"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: 'Czym dokładnie jest "AI Safety"?',
    answer:
      "AI Safety to dziedzina badań i praktyk skupiona na zapewnieniu, że systemy sztucznej inteligencji działają w sposób bezpieczny, przewidywalny i zgodny z ludzkimi wartościami. Obejmuje zarówno aspekty techniczne, jak i etyczne rozwoju AI.",
  },
  {
    question: "Jaki jest główny cel AI Safety Polska?",
    answer:
      "Naszym głównym celem jest budowanie polskiej społeczności ekspertów, badaczy i entuzjastów zainteresowanych bezpieczeństwem AI, a także prowadzenie działań edukacyjnych i badawczych w tym obszarze.",
  },
  {
    question: "Czy muszę być programistą lub ekspertem ML, żeby dołączyć?",
    answer:
      "Nie! Zapraszamy osoby z różnych dziedzin - filozofii, prawa, polityki publicznej, a także osoby bez technicznego wykształcenia. Każda perspektywa jest cenna w dyskusji o bezpieczeństwie AI.",
  },
  {
    question: "Gdzie znajdę informacje o nadchodzących wydarzeniach?",
    answer:
      "Informacje o wydarzeniach publikujemy na naszym kanale Slack, w mediach społecznościowych oraz na stronie internetowej. Dołącz do naszej społeczności, aby być na bieżąco.",
  },
  {
    question:
      "Jak mogę wesprzeć AI Safety Polska, jeśli nie mam czasu na większe zaangażowanie?",
    answer:
      "Możesz udostępniać nasze materiały, polecać nas znajomym lub wspierać finansowo. Nawet małe działania pomagają budować świadomość tematu bezpieczeństwa AI w Polsce.",
  },
  {
    question: "Od jakich książek lub materiałów polecacie zacząć?",
    answer:
      'Polecamy zacząć od "Superintelligence" Nicka Bostroma, "Human Compatible" Stuarta Russella, oraz materiałów dostępnych na stronach takich jak AI Alignment Forum czy 80,000 Hours.',
  },
  {
    question:
      "Jestem dziennikarzem/przedstawicielem mediów. Jak mogę się z Wami skontaktować?",
    answer:
      "Zapraszamy do kontaktu przez formularz na naszej stronie lub bezpośrednio przez e-mail. Chętnie udzielamy wywiadów i komentarzy na temat bezpieczeństwa AI.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-foreground md:text-3xl font-serif"
        >
          {"Często zadawane pytania"}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
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
