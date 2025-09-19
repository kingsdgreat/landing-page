"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Property } from "@/lib/types"

interface PropertyDescriptionProps {
  property: Property
}

export function PropertyDescription({ property }: PropertyDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{property.description}</p>
      </CardContent>
    </Card>
  )
} 