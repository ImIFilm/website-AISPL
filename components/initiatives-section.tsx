"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const initiativesPL = [
  { title: "Webinary",                 href: "/inicjatywy#webinary" },
  { title: "Lokalne spotkania",        href: "/inicjatywy#lokalne-spotkania" },
  { title: "Współpraca z uczelniami",  href: "/inicjatywy#wspolpraca-z-uczelniami" },
  { title: "Doradztwo zawodowe",       href: "/inicjatywy#doradztwo-zawodowe" },
]

const initiativesEN = [
  { title: "Webinars",                 href: "/inicjatywy#webinary" },
  { title: "Local meetups",            href: "/inicjatywy#lokalne-spotkania" },
  { title: "University collaboration", href: "/inicjatywy#wspolpraca-z-uczelniami" },
  { title: "Career counselling",       href: "/inicjatywy#doradztwo-zawodowe" },
]

const backgroundStyles = [
  { backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webinary%20%281%29-pt8FBYDjrYNshTPHlI6lA5DnbK4Pm9.jpg)",    backgroundSize: "cover", backgroundPosition: "center" },
  { backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meetupy-rUNtmS0fvG2vcG390Ot52WLfHKVVms.jpg)",    backgroundSize: "cover", backgroundPosition: "center" },
  { backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uczelnie-JLiAEQwGwGiAg7aKVb3E9UpKEcvlAo.jpg)",   backgroundSize: "cover", backgroundPosition: "center" },
  { backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zawodowe-1-pKXBXijfCOV6DLM6my88ATPuhOgN1M.jpg)", backgroundSize: "cover", backgroundPosition: "center" },
]

const translations = {
  pl: {
    label: "Co robimy?",
    heading: "Nasze inicjatywy",
    slackTitle: "Społeczność online - Slack",
    slackSub: "",
  },
  en: {
    label: "What we do?",
    heading: "Our initiatives",
    slackTitle: "Online community - Slack",
    slackSub: "",
  },
} as const

export function InitiativesSection() {
  const { lang } = useLanguage()
  const initiatives = lang === "pl" ? initiativesPL : initiativesEN

  return (
    <section id="co-robimy" className="bg-background py-12 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
        >
          {translations[lang].label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-center text-foreground"
          style={{ fontWeight: 500, fontSize: "2rem" }}
        >
          {translations[lang].heading}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* 2x2 initiative cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl transition-transform hover:scale-[1.02]"
                  style={backgroundStyles[i]}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="relative z-10 p-6">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Slack card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full md:col-span-1"
          >
            <Link
              href="/inicjatywy#slack"
              className="relative flex min-h-64 h-full flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center transition-transform hover:scale-[1.02] md:min-h-full"
              style={{
                backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slackbackground-2-X835RXYROPNIk8CZ5iTIktkvkdADwu.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/40 to-emerald-900/60" />
              <div className="relative z-10">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" 
                  alt="Slack" 
                  className="mx-auto mb-4 h-14 w-14"
                />
                <h3 className="text-lg font-bold text-white">{translations[lang].slackTitle}</h3>
                {translations[lang].slackSub && <p className="mt-2 text-sm text-white/80">{translations[lang].slackSub}</p>}
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
