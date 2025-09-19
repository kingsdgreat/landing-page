import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStats } from "@/components/about-stats"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutTeam } from "@/components/about-team"
import { HowItWorks } from "@/components/how-it-works"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
