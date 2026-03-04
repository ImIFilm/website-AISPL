import type { Metadata } from "next"
import { TeamPage } from "./team-page"

export const metadata: Metadata = {
  title: "Zespol - AI Safety Polska",
  description:
    "Poznaj zespol AI Safety Polska - koordynatorow i czlonkow naszej spolecznosci pracojacej nad bezpieczenstwem sztucznej inteligencji.",
}

export default function Page() {
  return <TeamPage />
}
