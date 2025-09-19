import type { Property, SanityImage } from "../types"
import { urlFor } from "../sanity"

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getPropertyImageUrl(image: SanityImage, width = 800, height = 600): string {
  if (!image?.asset) return "/placeholder.svg"

  return urlFor(image).width(width).height(height).fit("crop").auto("format").url()
}

export function getCategoryDisplayName(category: string): string {
  const categoryMap: Record<string, string> = {
    residential: "Residential Land",
    commercial: "Commercial Plot",
    industrial: "Industrial Plot",
    agricultural: "Agricultural Land",
  }

  return categoryMap[category] || category
}

export function getFeatureDisplayName(feature: string): string {
  const featureMap: Record<string, string> = {
    utilities: "Utilities Available",
    "well-rights": "Well Rights",
    wooded: "Wooded Area",
    "mountain-view": "Mountain View",
    "paved-access": "Paved Access",
    "building-permitted": "Building Permitted",
  }

  return featureMap[feature] || feature
}

export function generatePropertyUrl(property: Property): string {
  return `/properties/${property.slug.current}`
}

export function getPropertyMainImage(property: Property): SanityImage | null {
  return property.images?.[0] || null
}

export function formatAcreage(acreage: number): string {
  return `${acreage} Acre${acreage !== 1 ? "s" : ""}`
}
