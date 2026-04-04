"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    subtitle: "Budujemy bezpieczną przyszłość sztucznej inteligencji",
  },
  en: {
    subtitle: "Building a safe future for artificial intelligence",
  },
}

export function HeroSection() {
  const { lang } = useLanguage()
  const text = t[lang]

  return (
    <section className="relative bg-background pt-28 pb-40 md:pt-36 md:pb-56">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-medium tracking-normal text-foreground md:text-5xl lg:text-6xl text-balance"
          style={{ fontSize: "40px", fontWeight: 500 }}
        >
          AI Safety Polska
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-lg text-pretty"
          style={{ color: "#008644", fontWeight: 300, fontSize: "18px" }}
        >
          {text.subtitle}
        </motion.p>

      </div>

      {/* Full-width image - outside max-w container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 w-full"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "1920 / 910", minHeight: "350px" }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-photo-1-Oo0f6K76XQmQoaiHOo5fFdb2YcOq4d.png"
            alt="Izometryczna ilustracja 3D budynku..."
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
