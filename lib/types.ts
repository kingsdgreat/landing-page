export interface Property {
  _id: string
  title: string
  slug: {
    current: string
  }
  apn?: string
  size?: string
  price: number
  address: string
  city?: string
  county?: string
  zipCode?: string
  state?: string
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
  zoning?: string
  utilities: string[]
  schoolDistrict?: string
  _createdAt: string
  
  // New fields from CSV
  water?: boolean
  electricity?: boolean
  sewerSeptic?: boolean
  buildingRestriction?: string
  subDivision?: string
  mobileHomes?: boolean
  notes?: string
  contactInfo?: string
  dateFirstAvailable?: string
  dateToReevaluate?: string
  propertyPicturesLink?: string
  mlsListingLink?: string
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
