import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Property } from "@/lib/types"
import {
  formatPrice,
  getPropertyImageUrl,
  getCategoryDisplayName,
  generatePropertyUrl,
} from "@/lib/utils/property-helpers"

interface FeaturedPropertiesProps {
  properties: Property[]
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-[#777777]">Discover premium land properties for sale across prime locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <Card key={property._id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={getPropertyImageUrl(property.images?.[0]) || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-purple-600 hover:bg-purple-700">
                  {getCategoryDisplayName(property.category)}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-[#777777] text-sm mb-3">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{formatPrice(property.price)}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={generatePropertyUrl(property)}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[#777777]">No featured properties available at the moment.</p>
          </div>
        )}

        <div className="text-center">
          <Button asChild className="bg-[#1A5DC9] hover:bg-primary/90">
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
