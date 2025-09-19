import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleVisitHero } from "@/components/schedule-visit-hero"
import { ScheduleVisitForm } from "@/components/schedule-visit-form"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ScheduleVisitPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScheduleVisitHero />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScheduleVisitForm />
            <ScheduleVisitInfo />
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function ScheduleVisitInfo() {
  return (
    <div className="space-y-6">
      {/* Email Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-[#777777]">offers@sundiallands.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Office</h3>
              <p className="text-[#777777]">269 24th St, Suite 920 Oakland, CA. 94216</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phone Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-[#777777]">+32 341-02500</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
