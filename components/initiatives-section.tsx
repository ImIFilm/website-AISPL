"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Users, GraduationCap, Briefcase, Hash } from "lucide-react"

const initiatives = [
  {
    title: "Webinary",
    icon: Monitor,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lokalne spotkania",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Wspolpraca z uczelniami",
    icon: GraduationCap,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Doradztwo zawodowe",
    icon: Briefcase,
    className: "md:col-span-1 md:row-span-1",
  },
]

export function InitiativesSection() {
  return (
    <section id="co-robimy" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
        >
          Co robimy?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-center text-2xl font-bold text-foreground md:text-3xl lg:text-4xl"
        >
          Nasze inicjatywy
        </motion.h2>

        {/* Bento Grid: 3 columns on desktop -- 2 on left (2x2), 1 tall on right */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Left 4 cards (2x2) */}
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 ${item.className}`}
              style={{ minHeight: "180px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
              <div className="absolute top-4 right-4 opacity-20">
                <item.icon className="h-12 w-12 text-emerald" />
              </div>
              <div className="relative z-10">
                <item.icon className="mb-2 h-5 w-5 text-emerald" />
                <h3 className="text-sm font-semibold text-primary-foreground md:text-base">{item.title}</h3>
              </div>
            </motion.div>
          ))}

          {/* Slack card -- spans 2 rows on desktop, sits in 3rd column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-emerald p-8 text-center sm:col-span-2 md:col-start-3 md:row-span-2 md:row-start-1 md:col-span-1"
            style={{ minHeight: "180px" }}
          >
            <Hash className="mb-4 h-14 w-14 text-accent-foreground/80" />
            <h3 className="text-lg font-bold text-accent-foreground">{"Spolecznosc online - Slack"}</h3>
            <p className="mt-2 text-sm text-accent-foreground/70">{"Dolacz do naszej spolecznosci"}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/inicjatywy"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald transition-colors hover:text-emerald-dark"
          >
            {"Dowiedz sie wiecej o naszych inicjatywach \u2192"}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
