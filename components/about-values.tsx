import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in transparency in every transaction and we're always being transparent with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to property verification.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "Our clients' success is our success. We're dedicated to providing the best possible service and support.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Value</h2>
          <p className="text-[#777777]">The principles that guide everything we do at Sundial Real Estate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-[#777777] text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
