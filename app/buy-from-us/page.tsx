import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BuyFromUsHero } from "@/components/buy-from-us-hero"
import { PurchaseOptions } from "@/components/purchase-options"
import { BuyFromUsFAQ } from "@/components/buy-from-us-faq"

export default function BuyFromUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BuyFromUsHero />
        <PurchaseOptions />
        <BuyFromUsFAQ />
      </main>
      <Footer />
    </div>
  )
}
