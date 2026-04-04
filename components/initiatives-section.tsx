"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Hash } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const initiativesPL = [
  { title: "Webinary",               href: "/inicjatywy#webinary" },
  { title: "Lokalne spotkania",      href: "/inicjatywy#lokalne-spotkania" },
  { title: "Wspolpraca z uczelniami",href: "/inicjatywy#wspolpraca-z-uczelniami" },
  { title: "Doradztwo zawodowe",     href: "/inicjatywy#doradztwo-zawodowe" },
]

const initiativesEN = [
  { title: "Webinars",                  href: "/inicjatywy#webinary" },
  { title: "Local meetups",             href: "/inicjatywy#lokalne-spotkania" },
  { title: "University collaboration",  href: "/inicjatywy#wspolpraca-z-uczelniami" },
  { title: "Career counselling",        href: "/inicjatywy#doradztwo-zawodowe" },
]

const t = {
  pl: {
    label: "Co robimy?",
    heading: "Nasze inicjatywy",
    slackTitle: "Spolecznosc online - Slack",
    slackSub: "Dolacz do naszej spolecznosci",
  },
  en: {
    label: "What we do?",
    heading: "Our initiatives",
    slackTitle: "Online community - Slack",
    slackSub: "Join our community",
  },
}

export function InitiativesSection() {
  const { lang } = useLanguage()
  const text = t[lang]
  const initiatives = lang === "pl" ? initiativesPL : initiativesEN

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
          {text.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-center text-2xl font-bold text-foreground md:text-3xl lg:text-4xl"
        >
          {text.heading}
        </motion.h2>

        {/* Main grid: 3 columns on desktop, 1 on mobile */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left nested grid: 2x2 for 4 smaller cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((item, i) => {
              const key = item.href
              const isWebinary = i === 0
              const isMeetups   = i === 1
              const isUniversity = i === 2
              const isCareer    = i === 3
              const hasImage = true

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-64 block transition-transform hover:scale-[1.02]"
                    style={
                      isWebinary
                        ? { backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webinar-2-6q8RsoSXYeORlygXTAhBxJLU8zRSBl.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }
                        : isMeetups
                          ? { backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meetupy-rUNtmS0fvG2vcG390Ot52WLfHKVVms.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }
                          : isUniversity
                            ? { backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uczelnie-JLiAEQwGwGiAg7aKVb3E9UpKEcvlAo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }
                            : isCareer
                              ? { backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zawodowe-1-pKXBXijfCOV6DLM6my88ATPuhOgN1M.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }
                              : { backgroundColor: 'rgb(203, 213, 225)' }
                    }
                  >
                    {!hasImage && <div className="absolute inset-0 bg-slate-300" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    <div className="relative z-10 p-6">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Slack card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 h-full"
          >
            <Link
              href="/inicjatywy#slack"
              className="h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center min-h-64 md:min-h-full relative block transition-transform hover:scale-[1.02]"
              style={{
                backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slackbackground-2-X835RXYROPNIk8CZ5iTIktkvkdADwu.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/40 to-emerald-900/60" />
              <div className="relative z-10">
                <Hash className="mb-4 h-14 w-14 text-white/90 mx-auto" />
                <h3 className="text-lg font-bold text-white">{text.slackTitle}</h3>
                <p className="mt-2 text-sm text-white/80">{text.slackSub}</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

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
              const isWebinary = item.title === "Webinary"
              const isUniversity = item.title === "Wspolpraca z uczelniami"
              const isMeetups = item.title === "Lokalne spotkania"
              const isCareer = item.title === "Doradztwo zawodowe"
              const hasImage = isWebinary || isUniversity || isMeetups || isCareer
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-64 block transition-transform hover:scale-[1.02]"
                    style={
                      isWebinary
                        ? {
                            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webinar-2-6q8RsoSXYeORlygXTAhBxJLU8zRSBl.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : isUniversity
                          ? {
                              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uczelnie-JLiAEQwGwGiAg7aKVb3E9UpKEcvlAo.jpg)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }
                          : isMeetups
                            ? {
                                backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meetupy-rUNtmS0fvG2vcG390Ot52WLfHKVVms.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }
                            : isCareer
                              ? {
                                  backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zawodowe-1-pKXBXijfCOV6DLM6my88ATPuhOgN1M.jpg)',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                }
                              : { backgroundColor: 'rgb(203, 213, 225)' }
                    }
                  >
                    {/* Placeholder background for cards without images */}
                    {!hasImage && <div className="absolute inset-0 bg-slate-300" />}
                    
                    {/* Dark gradient overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    
                    {/* Text content */}
                    <div className="relative z-10 p-6">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    </div>
                  </Link>
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
            className="md:col-span-1 h-full"
          >
            <Link
              href="/inicjatywy#slack"
              className="h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center min-h-64 md:min-h-full relative block transition-transform hover:scale-[1.02]"
              style={{
                backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slackbackground-2-X835RXYROPNIk8CZ5iTIktkvkdADwu.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/40 to-emerald-900/60" />
              
              {/* Content */}
              <div className="relative z-10">
                <Hash className="mb-4 h-14 w-14 text-white/90 mx-auto" />
                <h3 className="text-lg font-bold text-white">{"Spolecznosc online - Slack"}</h3>
                <p className="mt-2 text-sm text-white/80">{"Dolacz do naszej spolecznosci"}</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
