"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-32 md:pt-36 md:pb-48">
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
          className="mt-4 text-lg text-emerald md:text-xl text-pretty"
        >
          {"Budujemy bezpieczną przyszłość sztucznej inteligencji"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy/5 to-emerald/10 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 3D Isometric building illustration placeholder */}
              <svg viewBox="0 0 400 300" className="h-full w-full p-8 opacity-80" aria-hidden="true">
                {/* Base platform */}
                <defs>
                  <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B132B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0B132B" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Building base */}
                <polygon points="200,240 340,170 200,100 60,170" fill="#0B132B" opacity="0.15" />
                {/* Floor 1 */}
                <rect x="100" y="160" width="200" height="60" rx="4" fill="url(#glassGrad)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                {/* Floor 2 */}
                <rect x="110" y="100" width="180" height="55" rx="4" fill="url(#glassGrad)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                {/* Floor 3 (top) */}
                <rect x="120" y="45" width="160" height="50" rx="4" fill="url(#glassGrad)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                {/* Grid lines floor 1 */}
                <line x1="150" y1="160" x2="150" y2="220" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="200" y1="160" x2="200" y2="220" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="250" y1="160" x2="250" y2="220" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="100" y1="190" x2="300" y2="190" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                {/* Grid lines floor 2 */}
                <line x1="160" y1="100" x2="160" y2="155" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="200" y1="100" x2="200" y2="155" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="240" y1="100" x2="240" y2="155" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="110" y1="128" x2="290" y2="128" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                {/* Grid lines floor 3 */}
                <line x1="170" y1="45" x2="170" y2="95" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="200" y1="45" x2="200" y2="95" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="230" y1="45" x2="230" y2="95" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="120" y1="70" x2="280" y2="70" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
                {/* Small dots representing people */}
                <circle cx="140" cy="180" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="180" cy="200" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="230" cy="175" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="270" cy="195" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="160" cy="120" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="220" cy="140" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="260" cy="115" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="175" cy="60" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="220" cy="80" r="3" fill="#10b981" opacity="0.6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diagonal shape divider - white to navy transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-16 w-full md:h-24 lg:h-28"
          aria-hidden="true"
        >
          <polygon
            points="0,120 1440,0 1440,120"
            fill="#0B132B"
          />
        </svg>
      </div>
    </section>
  )
}
