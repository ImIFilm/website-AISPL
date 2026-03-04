"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const coordinators = [
  {
    name: "Jakub Kryś",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Kry%C5%9B-dq1KmxDFTvxQ3zQDZnuALJpgMgBUWm.png",
  },
  {
    name: "Jakub Nowak",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Nowak-VZCVFCZXHBHej75gV7AhEzlY9mMI8g.png",
  },
  {
    name: "Patryk Wielopolski",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patryk%20Wielopolski-ymboVxNC8EOitIa7gepriKkSVyDyNs.png",
  },
  {
    name: "Marcel Windys",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcel%20Windys-G4SNL2BL61Mf99csCxyuiA8bOIVCYl.png",
  },
  {
    name: "Piotr Kędziora",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Piotr%20K%C4%99dziora-OLGbMWOsn49Rzfu1AmCbbAXfR6IU70.png",
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
  return (
    <section id="kim-jestesmy" className="bg-navy py-20 md:py-28 -mt-1">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
        >
          Kim jesteśmy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl text-balance leading-relaxed"
        >
          {"AI Safety Polska to społeczność naukowców, działaczy i pasjonatów skupiona na bezpieczeństwie AI."}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/60 md:text-base"
        >
          {"Prowadzimy działania, których celem jest redukcja ryzyk związanych z zaawansowaną sztuczną inteligencją. Organizujemy wykłady, spotkania i dyskusje, a także wspieramy rozwój polskich talentów w tej dziedzinie."}
        </motion.p>

        {/* Coordinators */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50"
        >
          Koordynatorzy
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
            href="/zespol"
            className="mt-8 inline-block text-sm text-primary-foreground/60 underline underline-offset-4 transition-colors hover:text-emerald"
          >
            {"poznaj caly zespol \u2192"}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
