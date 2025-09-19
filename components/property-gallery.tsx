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
      <section className="relative h-64 md:h-[600px]">
        <img
          src="/placeholder.svg"
          alt="Property main view"
          className="w-full h-full object-cover"
        />
      </section>
    )
  }

  return (
    <section className="relative">
      <div className="mx-auto px-2">
        {/* Responsive flex/stack */}
        <div className="flex flex-col md:flex-row gap-4 mt-1">
          {/* Main image */}
          <div className="relative overflow-hidden  md:flex-[2] h-64 md:h-[600px]">
            <img
              src={getPropertyImageUrl(images[mainImageIndex], 1200, 600) || "/placeholder.svg"}
              alt={images[mainImageIndex]?.alt || property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-2 md:flex-1 md:grid-rows-2 h-40 md:h-[600px]">
              {images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImageIndex(index)}
                  className={`w-full h-full rounded-lg overflow-hidden border-2 transition-all ${
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
