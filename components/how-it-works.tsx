import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Home } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Select A Property",
    description: "Reserve the property, and complete the checkout form to make a deposit of $99 to reserve the period.",
  },
  {
    icon: FileText,
    title: "Sign Agreement",
    description: "We will then prepare a land purchase agreement for your review. Sign and return.",
  },
  {
    icon: Home,
    title: "Close On Property",
    description:
      "We'll begin the closing process either through a third party like a title company to complete the land sale.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-[#777777]">How to purchase a property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-[#1A5DC9]" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#777777] text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
