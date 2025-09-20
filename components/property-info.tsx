"use client"

import { MapPin, Maximize, Mountain, Car, Hash, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/types"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        {/* Header with title and share icon */}
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        
        {/* Price */}
        <div className="text-4xl font-bold text-blue-600 mb-4">
          ${property.price?.toLocaleString() || 'Price not available'}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{property.address}</span>
        </div>

        {/* Key Features - Horizontal layout with separators */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Maximize className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{property.size || `${property.acreage} Acre${property.acreage !== 1 ? 's' : ''}`}</span>
          </div>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          {property.features?.includes("mountain-view") && (
            <>
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Mountain View</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
            </>
          )}
          
          {property.features?.includes("paved-access") && (
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Paved Access</span>
            </div>
          )}
        </div>

        {/* Property Status Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {property.category?.charAt(0).toUpperCase() + property.category?.slice(1) || 'Property'}
          </Badge>
          {property.zoning && (
            <Badge variant="outline" className="text-green-600 border-green-600">
              {property.zoning}
            </Badge>
          )}
          {property.featured && (
            <Badge className="bg-yellow-500 text-white">
              Featured
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
