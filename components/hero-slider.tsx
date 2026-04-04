"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events1-cgAvEBdrKwPnfJhmXQJR3CULe0dQ1s.jpg",
    alt: "Speaker with microphone addressing a packed auditorium",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events2-fXJgaArYEDbqGtjGK8Dl7SRR1KFJzm.jpg",
    alt: "Aerial view of a lecture hall with AI & Safety projected on screen",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events3-59x6Rh3XPNkjaKGkIoK5gwuteBZ7H3.jpg",
    alt: "Speaker at podium presenting to audience with team slide projected",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events4-657P3fLu5yUfF4c2Afjuv1LE3wwUol.jpg",
    alt: "Woman presenter gesturing in front of a screen in a dark room",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events5-z68DFSJ1n7vpFXSObS2R9TYs8Apebb.jpg",
    alt: "Bearded speaker presenting LLM content at a whiteboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events6-FdbVprHaikfHftdBbFvNaSX0Wxn57y.jpg",
    alt: "Large lecture hall audience watching a presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/events7-3BIW1G7rwspJLChtzsfrmwx6WySGNh.jpg",
    alt: "Three people at a lecture desk, one speaking with a microphone",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(240px, 40vw, 480px)" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={current === 0}
          />
          {/* Subtle darkening overlay for visual polish */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Przejdz do zdjecia ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              backgroundColor: i === current ? "white" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
