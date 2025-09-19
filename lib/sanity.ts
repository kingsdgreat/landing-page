import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false, // Set to true in production for better performance
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for properties
export const PROPERTIES_QUERY = `*[_type == "property"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  price,
  location,
  acreage,
  category,
  featured,
  images,
  description,
  features,
  coordinates,
  zoning,
  utilities,
  _createdAt
}`

export const PROPERTY_QUERY = `*[_type == "property" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  price,
  location,
  acreage,
  category,
  images,
  description,
  features,
  coordinates,
  zoning,
  utilities,
  schoolDistrict,
  county,
  _createdAt
}`

export const FEATURED_PROPERTIES_QUERY = `*[_type == "property" && featured == true] | order(_createdAt desc) [0...6] {
  _id,
  title,
  slug,
  price,
  location,
  acreage,
  category,
  images[0],
  _createdAt
}`
