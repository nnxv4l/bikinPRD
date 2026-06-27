import { Navbar } from "@/components/marketing/navbar"
import { Hero } from "@/components/marketing/hero"
import { HeroMockup } from "@/components/marketing/hero-mockup"
import { ProblemSection } from "@/components/marketing/problem-section"
import { HowItWorksSection } from "@/components/marketing/how-it-works"
import { FeatureGrid } from "@/components/marketing/feature-grid"
import { OutputPreviewSection } from "@/components/marketing/output-preview"
import { FinalCTASection } from "@/components/marketing/final-cta"
import { Footer } from "@/components/marketing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pure-white flex flex-col" style={{ fontFamily: "var(--font-sohne)" }}>
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <HeroMockup />
        <ProblemSection />
        <HowItWorksSection />
        <FeatureGrid />
        <OutputPreviewSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
