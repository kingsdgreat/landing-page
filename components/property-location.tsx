"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/types"

interface PropertyLocationProps {
  property: Property
}

export function PropertyLocation({ property }: PropertyLocationProps) {
  // Default coordinates (San Francisco) if property coordinates are not available
  const defaultCoords = { lat: 37.7749, lng: -122.4194 }
  const coords = property.coordinates || defaultCoords
  console.log(coords,'coords  ') 
  
  // Get Google Maps API key from environment variables
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
  // Generate proper Google Maps embed URL using the coordinates
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=${coords.lat},${coords.lng}&zoom=15&maptype=roadmap`
  
  // Generate Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`
  
  // Generate Google Maps view URL
  const viewUrl = `https://www.google.com/maps/@${coords.lat},${coords.lng},15z`

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Interactive Google Maps */}
        <div className="w-full h-64 rounded-lg mb-6 relative overflow-hidden border">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing location of ${property.title}`}
          />
          </div>

        {/* Location Actions */}
        <div className="flex gap-3 mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(directionsUrl, '_blank')}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(viewUrl, '_blank')}
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            View on Google Maps
          </Button>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-medium text-gray-500 mb-1">School District</div>
            <div className="font-medium">{property.schoolDistrict || "N/A"}</div>
          </div>
          <div>
            <div className="font-medium text-gray-500 mb-1">County</div>
            <div className="font-medium">{property.county || "N/A"}</div>
          </div>
          <div>
            <div className="font-medium text-gray-500 mb-1">Zoning</div>
            <div className="font-medium capitalize">{property.zoning || "N/A"}</div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
