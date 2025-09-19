import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQHero } from "@/components/faq-hero"
import { FAQContent } from "@/components/faq-content"
import { CTASection } from "@/components/cta-section"

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FAQHero />
        <FAQContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
