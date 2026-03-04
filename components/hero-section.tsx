"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-visible bg-background pt-28 pb-32 md:pt-36 md:pb-48" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance font-serif"
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


    </section>
  )
}
