"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const translations = {
  pl: {
    subtitle: "Budujemy bezpieczną przyszłość sztucznej inteligencji",
  },
  en: {
    subtitle: "Building a safe future for artificial intelligence",
  },
} as const

const HERO_IMAGE_DEFAULT =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-photo-1-Oo0f6K76XQmQoaiHOo5fFdb2YcOq4d.png"
const HERO_IMAGE_WIDE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20photo%204k%20%282%29-iJte7LYLL5iHtrX9csRBo69iNQZvta.png"

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="relative bg-background pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-foreground"
          style={{ fontSize: "2.5rem", fontWeight: 600 }}
        >
          AI Safety Polska
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-pretty"
          style={{ color: "#008644", fontWeight: 300, fontSize: "1.125rem" }}
        >
          {translations[lang].subtitle}
        </motion.p>
      </div>

      <div className="mt-10 w-full">
        {/* Default image (hidden on ultra-wide screens) */}
        <div
          className="relative w-full overflow-hidden min-[1920px]:hidden"
          style={{ aspectRatio: "1920 / 910", minHeight: "350px" }}
        >
          <Image
            src={HERO_IMAGE_DEFAULT}
            alt="Izometryczna ilustracja 3D budynku..."
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
        {/* Wide image (shown only on ultra-wide screens) */}
        <div className="relative hidden w-full overflow-hidden min-[1920px]:block">
          <Image
            src={HERO_IMAGE_WIDE}
            alt="Izometryczna ilustracja 3D budynku..."
            width={1920}
            height={540}
            className="block h-auto w-full"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
