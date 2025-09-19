import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1A5DC9] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Find Your Perfect Property?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of customers who found their dream properties with us
          </p>
          <Button asChild size="lg" className="bg-white text-[#1A5DC9] hover:bg-gray-100">
            <Link href="/properties">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
