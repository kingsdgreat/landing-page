"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Property } from "@/lib/types"

interface PropertyDescriptionProps {
  property: Property
}

export function PropertyDescription({ property }: PropertyDescriptionProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="text-xl font-semibold">Property Description</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-gray-600 leading-relaxed">{property.description}</p>
      </CardContent>
    </Card>
  )
} 