"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Droplets, Mountain, MapPin, Building } from "lucide-react"
import type { Property } from "@/lib/types"
import { getFeatureDisplayName } from "@/lib/utils/property-helpers"

const featureIcons: Record<string, any> = {
  utilities: Zap,
  "well-rights": Droplets,
  wooded: Mountain,
  "mountain-view": Mountain,
  "paved-access": MapPin,
  "building-permitted": Building,
}

interface PropertyFeaturesProps {
  property: Property
}

export function PropertyFeatures({ property }: PropertyFeaturesProps) {
  const features = property.features || []
  
  // Create a combined list of all features and utilities
  const allFeatures = [
    // Property features from the features array
    ...features.map(feature => ({
      key: feature,
      label: getFeatureDisplayName(feature),
      icon: featureIcons[feature] || Zap,
      type: 'feature'
    })),
    
    // Utilities from boolean fields - only show if they are true
    ...(property.water === true ? [{
      key: 'water',
      label: 'Water Available',
      icon: Droplets,
      type: 'utility'
    }] : []),
    
    ...(property.electricity === true ? [{
      key: 'electricity',
      label: 'Electricity Available',
      icon: Zap,
      type: 'utility'
    }] : []),
    
    ...(property.sewerSeptic === true ? [{
      key: 'sewer',
      label: 'Sewer/Septic Available',
      icon: Building,
      type: 'utility'
    }] : []),
    
    // Additional utilities from utilities array
    ...(property.utilities || []).map(utility => ({
      key: utility,
      label: utility.charAt(0).toUpperCase() + utility.slice(1),
      icon: utility === 'water' ? Droplets : 
            utility === 'electricity' ? Zap :
            utility === 'gas' ? Building :
            utility === 'internet' ? Zap :
            utility === 'phone' ? Zap : Zap,
      type: 'utility'
    }))
  ]

  // If no features are available, show some default features based on property characteristics
  if (allFeatures.length === 0) {
    // Add some default features based on property data
    if (property.zoning?.includes('Commercial')) {
      allFeatures.push({
        key: 'commercial',
        label: 'Commercial Zoning',
        icon: Building,
        type: 'feature'
      })
    }
    
    if (property.zoning?.includes('Residential')) {
      allFeatures.push({
        key: 'residential',
        label: 'Residential Zoning',
        icon: Building,
        type: 'feature'
      })
    }
    
    if (property.zoning?.includes('Agriculture')) {
      allFeatures.push({
        key: 'agricultural',
        label: 'Agricultural Land',
        icon: Mountain,
        type: 'feature'
      })
    }
    
    // Add paved access if address contains road indicators
    if (property.address?.includes('HIGHWAY') || property.address?.includes('ROAD') || property.address?.includes('STREET')) {
      allFeatures.push({
        key: 'paved-access',
        label: 'Paved Access',
        icon: MapPin,
        type: 'feature'
      })
    }
    
    // Add mountain view for certain locations
    if (property.city?.includes('Lago Vista') || property.city?.includes('Del Rio') || property.city?.includes('Kingsburg')) {
      allFeatures.push({
        key: 'mountain-view',
        label: 'Mountain View',
        icon: Mountain,
        type: 'feature'
      })
    }
  }

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="text-xl font-semibold">Property Features</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        {allFeatures.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {allFeatures.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={`${item.key}-${index}`} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No specific features listed for this property.</p>
        )}
      </CardContent>
    </Card>
  )
}
