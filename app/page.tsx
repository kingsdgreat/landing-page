import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { getFeaturedProperties } from "@/lib/sanity-queries"

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
          <FeaturedProperties properties={featuredProperties} />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
