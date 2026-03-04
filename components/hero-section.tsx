"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative bg-background pt-28 pb-32 md:pt-36 md:pb-48">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance"
        >
          AI Safety Polska
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-lg text-emerald font-medium md:text-xl text-pretty"
        >
          {"Budujemy bezpieczna przyszlosc sztucznej inteligencji"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20picture-XoDPeVwySoFvlSvcZLrJm1tTlY7r1w.png"
              alt="Izometryczna ilustracja 3D budynku przedstawiajacego sale konferencyjne, laboratoria badawcze i serwerownie symbolizujace prace nad bezpieczenstwem AI"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* V-shaped SVG divider - white to navy transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[120px]">
          <polygon points="0,0 1200,0 600,120" className="fill-white" />
        </svg>
      </div>
    </section>
  )
}
