export interface Property {
  _id: string
  title: string
  slug: {
    current: string
  }
  price: number
  location: string
  acreage: number
  category: string
  featured?: boolean
  images: SanityImage[]
  description: string
  features: string[]
  coordinates?: {
    lat: number
    lng: number
  }
  zoning: string
  utilities: string[]
  schoolDistrict?: string
  county?: string
  _createdAt: string
}

export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

export interface PropertyCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
}
