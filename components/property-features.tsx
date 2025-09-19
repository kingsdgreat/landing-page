"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Mountain, Zap, Shield, MapPin, Building } from "lucide-react"
import type { Property } from "@/lib/types"
import { getFeatureDisplayName } from "@/lib/utils/property-helpers"

const featureIcons: Record<string, any> = {
  utilities: Home,
  "well-rights": Mountain,
  wooded: Zap,
  "mountain-view": Shield,
  "paved-access": MapPin,
  "building-permitted": Building,
}

interface PropertyFeaturesProps {
  property: Property
}

export function PropertyFeatures({ property }: PropertyFeaturesProps) {
  const features = property.features || []

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[feature] || Home
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium">{getFeatureDisplayName(feature)}</span>
              </div>
            )
          })}
        </div>
        {features.length === 0 && (
          <p className="text-gray-500 text-sm">No specific features listed for this property.</p>
        )}
      </CardContent>
    </Card>
  )
}
