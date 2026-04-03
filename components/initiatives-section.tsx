"use client"

import { motion } from "framer-motion"
import { Hash } from "lucide-react"

const initiatives = [
  {
    title: "Webinary",
  },
  {
    title: "Lokalne spotkania",
  },
  {
    title: "Wspolpraca z uczelniami",
  },
  {
    title: "Doradztwo zawodowe",
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

        {/* Main grid: 3 columns on desktop, 1 on mobile */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left nested grid: 2x2 for 4 smaller cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((item, i) => {
              const isUniversity = item.title === "Wspolpraca z uczelniami"
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col justify-end overflow-hidden rounded-2xl h-64"
                  style={
                    isUniversity
                      ? {
                          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uczelnie-JLiAEQwGwGiAg7aKVb3E9UpKEcvlAo.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : { backgroundColor: 'rgb(203, 213, 225)' }
                  }
                >
                  {/* Placeholder background for non-university cards */}
                  {!isUniversity && <div className="absolute inset-0 bg-slate-300" />}
                  
                  {/* Dark gradient overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  
                  {/* Text content */}
                  <div className="relative z-10 p-6">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Slack card -- spans full height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-emerald-500 p-8 text-center min-h-64 md:min-h-auto"
          >
            <Hash className="mb-4 h-14 w-14 text-white/80" />
            <h3 className="text-lg font-bold text-white">{"Spolecznosc online - Slack"}</h3>
            <p className="mt-2 text-sm text-white/70">{"Dolacz do naszej spolecznosci"}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
