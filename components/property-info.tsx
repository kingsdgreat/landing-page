"use client"

import { MapPin, Maximize, Mountain, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Property } from "@/lib/types"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        
        <div className="text-4xl font-bold text-blue-600 mb-4">
          ${property.price?.toLocaleString() || 'Price not available'}
      </div>

      <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{property.location}</span>
        </div>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Maximize className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{property.acreage} Acre{property.acreage !== 1 ? 's' : ''}</span>
          </div>
          {property.features?.includes("mountain-view") && (
            <div className="flex items-center gap-2">
              <Mountain className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Mountain View</span>
          </div>
        )}
        {property.features?.includes("paved-access") && (
          <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Paved Access</span>
          </div>
        )}
      </div>
      </CardContent>
    </Card>
  )
}
