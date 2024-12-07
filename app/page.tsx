import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer/footer"
import { FeaturesSection } from "@/components/features/features-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Footer />
    </main>
  )
}