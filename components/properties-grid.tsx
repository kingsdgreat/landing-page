"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Property } from "@/lib/types"
import {
  formatPrice,
  getPropertyImageUrl,
  getCategoryDisplayName,
  generatePropertyUrl,
} from "@/lib/utils/property-helpers"

interface PropertiesGridProps {
  properties: Property[]
}

export function PropertiesGrid({ properties }: PropertiesGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 12

  const totalPages = Math.ceil(properties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const paginatedProperties = properties.slice(startIndex, startIndex + propertiesPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Reset to first page when properties change
  useMemo(() => {
    setCurrentPage(1)
  }, [properties])

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedProperties.map((property) => (
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

        {/* Pagination - matching the image design */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Show first few pages */}
            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
              const pageNum = i + 1
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  className={`px-3 py-2 ${
                    currentPage === pageNum 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </Button>
              )
            })}

            {/* Show ellipsis and last page if there are more than 3 pages */}
            {totalPages > 3 && (
              <>
                <span className="px-2 text-gray-500">...</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="px-3 py-2 hover:bg-gray-50"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </Button>
              </>
            )}

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#777777] text-lg">No properties found matching your search criteria.</p>
            <p className="text-[#777777] text-sm mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </section>
  )
}
