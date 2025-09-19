import { client } from "./sanity"
import type { Property } from "./types"

export async function getAllProperties(): Promise<Property[]> {
  try {
    console.log('Fetching all properties...')
    console.log('Sanity config:', {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
    })

  const query = `*[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    location,
    acreage,
    category,
    featured,
    "images": images[]{
      asset,
      alt
    },
    description,
    features,
    coordinates,
    zoning,
    utilities,
    _createdAt
  }`

    const result = await client.fetch(query)
    console.log('Properties fetched:', result?.length || 0, 'properties')
    return result || []
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}

export async function getFeaturedProperties(): Promise<Property[]> {
  try {
    console.log('Fetching featured properties...')
    
    const query = `*[_type == "property" && featured == true] | order(_createdAt desc) [0...6] {
      _id,
      title,
      slug,
      price,
      location,
      acreage,
      category,
      "images": images[0...1]{
        asset,
        alt
      },
      _createdAt
    }`

    const result = await client.fetch(query)
    console.log('Featured properties fetched:', result?.length || 0, 'properties')
    
    // If no featured properties, get first 6 properties as fallback
    if (!result || result.length === 0) {
      console.log('No featured properties found, fetching first 6 properties...')
      const fallbackQuery = `*[_type == "property"] | order(_createdAt desc) [0...6] {
        _id,
        title,
        slug,
        price,
        location,
        acreage,
        category,
        "images": images[0...1]{
          asset,
          alt
        },
        _createdAt
      }`
      const fallbackResult = await client.fetch(fallbackQuery)
      return fallbackResult || []
    }
    
    return result || []
  } catch (error) {
    console.error('Error fetching featured properties:', error)
    // Return sample data for development
    return getSampleProperties()
  }
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
  const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    price,
    location,
    acreage,
    category,
    "images": images[]{
      asset,
      alt
    },
    description,
    features,
    coordinates,
    zoning,
    utilities,
    schoolDistrict,
    county,
    _createdAt
  }`

    const result = await client.fetch(query, { slug })
    return result || null
  } catch (error) {
    console.error('Error fetching property by slug:', error)
    return null
  }
}

export async function getPropertiesByCategory(category: string): Promise<Property[]> {
  try {
  const query = `*[_type == "property" && category == $category] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    location,
    acreage,
    category,
    "images": images[0...1]{
      asset,
      alt
    },
    _createdAt
  }`

    const result = await client.fetch(query, { category })
    return result || []
  } catch (error) {
    console.error('Error fetching properties by category:', error)
    return []
  }
}

export async function searchProperties(searchTerm: string): Promise<Property[]> {
  try {
  const query = `*[_type == "property" && (
    title match $searchTerm + "*" ||
    location match $searchTerm + "*" ||
    description match $searchTerm + "*"
  )] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    location,
    acreage,
    category,
    "images": images[0...1]{
      asset,
      alt
    },
    _createdAt
  }`

    const result = await client.fetch(query, { searchTerm })
    return result || []
  } catch (error) {
    console.error('Error searching properties:', error)
    return []
  }
}

// Sample data for development when Sanity is not configured
function getSampleProperties(): Property[] {
  return [
    {
      _id: "sample-1",
      title: "Beautiful Mountain View Property",
      slug: { current: "beautiful-mountain-view-property" },
      price: 125000,
      location: "Colorado Springs, CO",
      acreage: 5.2,
      category: "residential",
      featured: true,
      images: [
        {
          _type: "image",
          asset: { _ref: "sample-1", _type: "reference" },
          alt: "Mountain view property"
        }
      ],
      description: "Stunning mountain view property with excellent potential for development.",
      features: ["mountain-view", "utilities", "paved-access"],
      coordinates: { lat: 38.8339, lng: -104.8214 },
      zoning: "residential",
      utilities: ["electricity", "water"],
      schoolDistrict: "Colorado Springs D11",
      county: "El Paso",
      _createdAt: new Date().toISOString()
    },
    {
      _id: "sample-2",
      title: "Prime Commercial Development Land",
      slug: { current: "prime-commercial-development-land" },
      price: 250000,
      location: "Austin, TX",
      acreage: 2.8,
      category: "commercial",
      featured: true,
      images: [
        {
          _type: "image",
          asset: { _ref: "sample-2", _type: "reference" },
          alt: "Commercial development land"
        }
      ],
      description: "Prime commercial development opportunity in growing Austin market.",
      features: ["utilities", "paved-access", "building-permitted"],
      coordinates: { lat: 30.2672, lng: -97.7431 },
      zoning: "commercial",
      utilities: ["electricity", "water", "sewer", "gas"],
      schoolDistrict: "Austin Independent School District",
      county: "Travis",
      _createdAt: new Date().toISOString()
    },
    {
      _id: "sample-3",
      title: "Agricultural Farmland with Water Rights",
      slug: { current: "agricultural-farmland-with-water-rights" },
      price: 180000,
      location: "Fresno, CA",
      acreage: 10.5,
      category: "agricultural",
      featured: true,
      images: [
        {
          _type: "image",
          asset: { _ref: "sample-3", _type: "reference" },
          alt: "Agricultural farmland"
        }
      ],
      description: "Fertile agricultural land with established water rights and irrigation.",
      features: ["well-rights", "utilities", "building-permitted"],
      coordinates: { lat: 36.7378, lng: -119.7871 },
      zoning: "agricultural",
      utilities: ["electricity", "water"],
      schoolDistrict: "Fresno Unified",
      county: "Fresno",
      _createdAt: new Date().toISOString()
    }
  ]
}
