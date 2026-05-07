"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const translations = {
  pl: {
    label: "Kim jesteśmy",
    heading: "AI Safety Polska to społeczność naukowców, działaczy i pasjonatów skupiona na bezpieczeństwie AI.",
    body: "Prowadzimy działania, których celem jest redukcja ryzyk związanych z zaawansowaną sztuczną inteligencją. Organizujemy wykłady, spotkania i dyskusje, a także wspieramy rozwój polskich talentów w tej dziedzinie.",
    coordinators: "Koordynatorzy",
    teamLink: "poznaj cały zespół →",
  },
  en: {
    label: "Who we are",
    heading: "AI Safety Poland is a community of scientists, activists and enthusiasts focused on AI safety.",
    body: "We carry out activities aimed at reducing risks associated with advanced artificial intelligence. We organise lectures, meetups and discussions, and support the development of Polish talent in this field.",
    coordinators: "Coordinators",
    teamLink: "meet the full team →",
  },
} as const

const coordinators = [
  {
    name: "Jakub Nowak",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Nowak-dgqTuTYz4hu7V5B14VMQQhGCxJfKqJ.png",
  },
  {
    name: "Jakub Kryś",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Krys%20%281%29-6tL4FEexK8MnfkGWL2FxMlMOgnCUJr.png",
  },
  {
    name: "Patryk Wielopolski",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patryk%20Wielopolski-VSvDe0bkoOike7WbzqZSCzIOQZ9e2m.png",
  },
  {
    name: "Marcel Windys",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcel%20Windys-BJWzRZI9TbCj90cBvlL9yaGXmJRKcv.png",
  },
  {
    name: "Piotr Kędziora",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Piotr%20Kedziora-D552vu7Lv1K3SX0XHSUSen4G95BwPF.png",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutSection() {
  const { lang } = useLanguage()

  return (
    <section id="kim-jestesmy" className="scroll-mt-20" style={{ backgroundColor: "#011F39" }}>
      <div className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgb(255, 218, 170)" }}
        >
          {translations[lang].label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-balance text-primary-foreground"
          style={{ lineHeight: "1.4", fontWeight: 500, fontSize: "1.625rem" }}
        >
          {translations[lang].heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-primary-foreground/60"
          style={{ lineHeight: "1.4", fontSize: "1.125rem" }}
        >
          {translations[lang].body}
        </motion.p>

        {/* Coordinators */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#FFDAAA" }}
        >
          {translations[lang].coordinators}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 flex flex-wrap items-start justify-center gap-6 md:gap-10"
        >
          {coordinators.map((person) => (
            <motion.div
              key={person.name}
              variants={itemVariants}
              className="flex w-20 flex-col items-center gap-3 md:w-24"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span className="text-xs text-primary-foreground/70 md:text-sm">{person.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href={`/${lang}/zespol`}
            className="mt-8 inline-block text-sm text-primary-foreground/50 underline underline-offset-4 decoration-primary-foreground/30 transition-[text-decoration-color] hover:text-primary-foreground/80 hover:decoration-primary-foreground/60"
          >
            {translations[lang].teamLink}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
