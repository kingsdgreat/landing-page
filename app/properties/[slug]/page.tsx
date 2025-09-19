import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyInfo } from "@/components/property-info"
import { PropertyDescription } from "@/components/property-description"
import { PropertyFeatures } from "@/components/property-features"
import { PropertyLocation } from "@/components/property-location"
import { PropertyContact } from "@/components/property-contact"
import { CTASection } from "@/components/cta-section"
import { getPropertyBySlug } from "@/lib/sanity-queries"
import { notFound } from "next/navigation"

interface PropertyDetailsPageProps {
  params: { slug: string }
}

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = await getPropertyBySlug(params.slug)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PropertyGallery property={property} />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <PropertyInfo property={property} />
              <PropertyDescription property={property} />
              <PropertyFeatures property={property} />
              <PropertyLocation property={property} />
            </div>
            <div className="lg:col-span-1">
              <PropertyContact property={property} />
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
