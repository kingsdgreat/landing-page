import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export const propertySchema = {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "acreage",
      title: "Acreage",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Residential Land", value: "residential" },
          { title: "Commercial Plot", value: "commercial" },
          { title: "Industrial Plot", value: "industrial" },
          { title: "Agricultural Land", value: "agricultural" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "images",
      title: "Property Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "features",
      title: "Property Features",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Utilities Available", value: "utilities" },
          { title: "Well Rights", value: "well-rights" },
          { title: "Wooded Area", value: "wooded" },
          { title: "Mountain View", value: "mountain-view" },
          { title: "Paved Access", value: "paved-access" },
          { title: "Building Permitted", value: "building-permitted" },
        ],
      },
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        {
          name: "lat",
          title: "Latitude",
          type: "number",
        },
        {
          name: "lng",
          title: "Longitude",
          type: "number",
        },
      ],
    },
    {
      name: "zoning",
      title: "Zoning",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial", value: "commercial" },
          { title: "Industrial", value: "industrial" },
          { title: "Agricultural", value: "agricultural" },
          { title: "Mixed Use", value: "mixed-use" },
        ],
      },
    },
    {
      name: "utilities",
      title: "Available Utilities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Electricity", value: "electricity" },
          { title: "Water", value: "water" },
          { title: "Sewer", value: "sewer" },
          { title: "Gas", value: "gas" },
          { title: "Internet", value: "internet" },
          { title: "Phone", value: "phone" },
        ],
      },
    },
    {
      name: "schoolDistrict",
      title: "School District",
      type: "string",
    },
    {
      name: "county",
      title: "County",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
      price: "price",
      media: "images.0",
    },
    prepare(selection: any) {
      const { title, location, price, media } = selection
      return {
        title,
        subtitle: `${location} - $${price?.toLocaleString()}`,
        media,
      }
    },
  },
}

export const schema = {
  types: [propertySchema],
}
