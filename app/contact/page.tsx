import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactMap } from "@/components/contact-map"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
            <ContactForm />
            </div>
            <div className="space-y-6 col-span-1">
              <ContactInfo />
            </div>
          </div>
          
          {/* Map section at the bottom */}
          <div className="mt-16">
            <ContactMap />
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="space-y-2">
      {/* Our Office Card */}
      <Card>
        <CardContent className="p-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-primary" />
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
        <CardContent className="p-2">
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

      {/* Email Card */}
      <Card>
        <CardContent className="p-2">
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

      {/* Business Hours Card */}
      <Card>
        <CardContent className="p-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <p className="text-[#777777]">Monday - Friday</p>
              <p className="text-[#777777]">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
