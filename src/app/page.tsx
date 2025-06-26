import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Philosophy } from "@/components/sections/Philosophy"
import { FAQ } from "@/components/sections/FAQ"
import { DownloadCTA } from "@/components/sections/DownloadCTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Philosophy />
      <FAQ />
      <DownloadCTA />
    </main>
  )
}
