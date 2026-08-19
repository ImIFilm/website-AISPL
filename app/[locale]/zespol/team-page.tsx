"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import { useLanguage } from "@/context/language-context"

const t = {
  pl: {
    backLink: "Strona główna",
    label: "Nasz zespół",
    heading: "Ludzie stojący za AI Safety Polska",
    description: "Łączymy wiedzę z zakresu nauk technicznych, humanistycznych i społecznych. To wielowymiarowe podejście pozwala nam skutecznie działać na rzecz bezpiecznego rozwoju AI. Na chwilę obecną wszyscy działamy jako wolontariusze.",
    coordinators: "Koordynatorzy",
    teamMembers: "Członkowie zespołu",
    advisors: "Doradcy",
  },
  en: {
    backLink: "Homepage",
    label: "Our team",
    heading: "The people behind AI Safety Poland",
    description: "We combine knowledge from technical, humanities, and social sciences. This multidimensional approach allows us to effectively work towards safe AI development. Currently, we all work as volunteers.",
    coordinators: "Board",
    teamMembers: "Team members",
    advisors: "Advisors",
  },
}

const teamMembers = [
  {
    name: "Jakub Nowak",
    role: "Executive Director of AI Safety Poland, Poznań Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Nowak-dgqTuTYz4hu7V5B14VMQQhGCxJfKqJ.png",
    linkedin: "https://www.linkedin.com/in/jknowak/",
    isCoordinator: true,
  },
  {
    name: "Jakub Kryś",
    role: "Career advising, Webinar Host",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jakub%20Krys%20%281%29-6tL4FEexK8MnfkGWL2FxMlMOgnCUJr.png",
    linkedin: "https://www.linkedin.com/in/jakub-krys/",
    isCoordinator: true,
  },
  {
    name: "Patryk Wielopolski",
    role: "Strategic Advisor, Wrocław Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patryk%20Wielopolski-VSvDe0bkoOike7WbzqZSCzIOQZ9e2m.png",
    linkedin: "https://www.linkedin.com/in/patryk-wielopolski/",
    isCoordinator: true,
  },
  {
    name: "Marcel Windys",
    role: "Webinar Technical Coordinator, Kraków Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcel%20Windys-BJWzRZI9TbCj90cBvlL9yaGXmJRKcv.png",
    linkedin: "https://www.linkedin.com/in/marcel-windys-73aa44340/",
    isCoordinator: true,
  },
  {
    name: "Piotr Kędziora",
    role: "Digital & Internal Ops Coordinator, Kraków Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Piotr%20Kedziora-D552vu7Lv1K3SX0XHSUSen4G95BwPF.png",
    linkedin: "https://www.linkedin.com/in/piotr-k%C4%99dziora-4818a9190/",
    isCoordinator: true,
  },
  {
    name: "Ania Szalwa",
    role: "Creative & Social Media Specialist",
    image: null,
    linkedin: "https://www.linkedin.com/in/anna-szalwa-%C5%A1alva-688b76144/",
    isCoordinator: false,
  },
  {
    name: "Kacper Dudzic",
    role: "Reading Group Coordinator, Poznań Lead",
    image: null,
    linkedin: "https://www.linkedin.com/in/kacper-dudzic-4589a7202/",
    isCoordinator: false,
  },
  {
    name: "Kajetan Dymkiewicz",
    role: "Reading Group Coordinator",
    image: null,
    linkedin: "https://www.linkedin.com/in/dymkiewicz/",
    isCoordinator: false,
  },
  {
    name: "Michał Kubiak",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/michalkubiaklodz",
    isCoordinator: false,
  },
  {
    name: "Daniel Polak",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/daniel-polak-a79120159",
    isCoordinator: false,
  },
  {
    name: "Zuzanna Matuszewska",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/z-matuszewska",
    isCoordinator: false,
  },
  {
    name: "Patryk Perduta",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/perduta",
    isCoordinator: false,
  },
  {
    name: "Gabriel Dunin-Borkowski",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/gabriel-d-218080b3",
    isCoordinator: false,
  },
  {
    name: "Michał Skowronek",
    role: null,
    image: null,
    linkedin: "https://www.linkedin.com/in/micha%C5%82-skowronek-60630b1a6",
    isCoordinator: false,
  },
]

const advisors = [
  {
    name: "Chris Szulc",
    descriptor: "strategy",
    linkedin: "https://www.linkedin.com/in/chris-szulc-ea/",
  },
  {
    name: "Jan Betley",
    descriptor: "technical ai safety",
    linkedin: "https://www.linkedin.com/in/jan-betley-118555127",
  },
  {
    name: "Anna Sztyber-Betley",
    descriptor: "technical ai safety",
    linkedin: "https://www.linkedin.com/in/anna-sztyber-7ba143164/",
  },
  {
    name: "Charbel-Raphael Segerie",
    descriptor: "ai governance",
    linkedin: "https://www.linkedin.com/in/charbel-raphael-segerie",
  },
  {
    name: "Tzu Kit Chan",
    descriptor: "operations",
    linkedin: "https://www.linkedin.com/in/tzukit",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function TeamPage() {
  const { lang } = useLanguage()
  const text = t[lang]
  const coordinators = teamMembers.filter((m) => m.isCoordinator)
  const members = teamMembers.filter((m) => !m.isCoordinator)

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Header */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href={`/${lang}`}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {text.backLink}
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
            >
              {text.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance"
            >
              {text.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {text.description}
            </motion.p>
          </div>
        </section>

        {/* Coordinators section */}
        <section className="bg-navy py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
            >
              {text.coordinators}
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {coordinators.map((person) => (
                <motion.div
                  key={person.name}
                  variants={itemVariants}
                  className="flex flex-col items-center rounded-2xl bg-navy-light/50 p-6 text-center"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-emerald/20 text-2xl font-bold text-emerald">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-primary-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/50">{person.role}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs transition-colors"
                      style={{ color: "#1193d9" }}
                      aria-label={`Profil LinkedIn: ${person.name}`}
                    >
                      <Image
                        src="/linkedin-square-icon.svg"
                        alt="LinkedIn"
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5"
                      />
                      LinkedIn
                    </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Other team members */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {text.teamMembers}
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {members.map((person) => (
                <motion.div
                  key={person.name}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-xl border border-border p-5"
                >
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-emerald/10 text-sm font-bold text-emerald">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">{person.name}</h3>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs text-emerald transition-colors hover:text-emerald-dark"
                      aria-label={`Profil LinkedIn: ${person.name}`}
                    >
                      <Image
                        src="/linkedin-square-icon.svg"
                        alt="LinkedIn"
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5"
                      />
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Advisors */}
        <section className="bg-navy py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
            >
              {text.advisors}
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {advisors.map((person) => (
                <motion.div
                  key={person.name}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-xl bg-navy-light/50 p-5"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald/20 text-sm font-bold text-emerald">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-primary-foreground">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-primary-foreground/50">
                      {person.descriptor}
                    </p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs transition-colors"
                      style={{ color: "#1193d9" }}
                      aria-label={`Profil LinkedIn: ${person.name}`}
                    >
                      <Image
                        src="/linkedin-square-icon.svg"
                        alt="LinkedIn"
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5"
                      />
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  )
}
