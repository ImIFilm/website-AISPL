import type { Metadata } from "next"
import { InitiativesPage } from "./initiatives-page"

export const metadata: Metadata = {
  title: "Nasze inicjatywy - AI Safety Polska",
  description:
    "Poznaj inicjatywy AI Safety Polska: webinary, lokalne spotkania, wspolpraca z uczelniami, doradztwo zawodowe i spolecznosc online.",
}

export default function Page() {
  return <InitiativesPage />
}
