import type { Metadata } from "next"
import { TeamPage } from "./team-page"

export const metadata: Metadata = {
  title: "Zespół - AI Safety Polska",
  description:
    "Poznaj zespół AI Safety Polska - koordynatorów i członków naszej społeczności",
}

export default function Page() {
  return <TeamPage />
}
