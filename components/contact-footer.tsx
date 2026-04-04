"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactFooter() {
  return (
    <section id="kontakt" className="relative">
      {/* Overlapping card area -- sits between light bg and dark footer */}
      <div className="relative z-10 -mb-20 bg-secondary pb-0">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-card shadow-xl md:flex md:items-center md:justify-between"
            style={{ paddingTop: "0px", paddingBottom: "0px", paddingRight: "0px", paddingLeft: "0px" }}
          >
            <div style={{ marginLeft: "40px" }}>
              <h3 className="text-xl font-bold text-card-foreground md:text-2xl">
                Masz pytanie?
              </h3>
              <a
                href="mailto:kontakt@aisafety.pl"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-light"
                style={{ marginLeft: "40px" }}
              >
                Napisz do nas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* 3D hand/envelope illustration */}
            <div className="mt-6 flex items-center justify-center md:mt-0">
              <div className="relative h-28 w-36 md:h-32 md:w-40">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-Jlff4fq5DlgNpBB6tmQQ9yGe833CpO.png"
                  alt="Robotyczna reka trzymajaca koperte"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-aispl.svg"
                alt="AI Safety Polska logo"
                width={32}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-sm font-semibold text-primary-foreground">AI Safety Polska</span>
            </Link>
            <nav aria-label="Stopka">
              <ul className="flex flex-wrap items-center justify-center gap-6">
                <li>
                  <Link href="/#kim-jestesmy" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Kim jesteśmy
                  </Link>
                </li>
                <li>
                  <Link href="/#co-robimy" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Co robimy
                  </Link>
                </li>
                <li>
                  <Link href="/#zaangazuj-sie" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    {"Zaangażuj się"}
                  </Link>
                </li>
                <li>
                  <Link href="/#kontakt" className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-xs text-primary-foreground/30">
              {"© 2025 AI Safety Polska. Wszelkie prawa zastrzezone."}
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
