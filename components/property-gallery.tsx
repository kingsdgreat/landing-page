"use client"

import { useState } from "react"
import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/types"
import { getPropertyImageUrl } from "@/lib/utils/property-helpers"

interface PropertyGalleryProps {
  property: Property
}

export function PropertyGallery({ property }: PropertyGalleryProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const images = property.images || []

  if (images.length === 0) {
    return (
      <section className="relative h-96 md:h-[600px]">
        <img src="/placeholder.svg" alt="Property main view" className="w-full h-full object-cover" />
      </section>
    )
  }

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 h-[600px]">
          {/* Main image - takes about 2/3 of the width */}
          <div className="flex-[2] relative rounded-lg overflow-hidden">
            <img
              src={getPropertyImageUrl(images[mainImageIndex], 1200, 600) || "/placeholder.svg"}
              alt={images[mainImageIndex]?.alt || property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Thumbnail gallery - takes about 1/3 of the width, stacked vertically */}
          {images.length > 1 && (
            <div className="flex-1 space-y-2">
              {images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImageIndex(index)}
                  className={`w-full h-[calc(25%-6px)] rounded-lg overflow-hidden border-2 transition-all ${
                    mainImageIndex === index 
                      ? "border-blue-500 ring-2 ring-blue-200" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={getPropertyImageUrl(image, 300, 150) || "/placeholder.svg"}
                    alt={image?.alt || `Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
