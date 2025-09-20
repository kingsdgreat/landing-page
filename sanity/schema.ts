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
      name: "apn",
      title: "Property APN",
      type: "string",
    },
    {
      name: "size",
      title: "Property Size",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.positive(),
    },
    {
      name: "address",
      title: "Property Address",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "city",
      title: "Property City",
      type: "string",
    },
    {
      name: "county",
      title: "Property County",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Property Zip Code",
      type: "string",
    },
    {
      name: "description",
      title: "Property Description",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "coordinates",
      title: "GPS Coordinates",
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
    },
    {
      name: "water",
      title: "Water Available",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "electricity",
      title: "Electricity Available",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "sewerSeptic",
      title: "Sewer/Septic Available",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "buildingRestriction",
      title: "Building Restriction",
      type: "string",
    },
    {
      name: "subDivision",
      title: "Sub-Division",
      type: "string",
    },
    {
      name: "zoning",
      title: "Zoning",
      type: "string",
    },
    {
      name: "mobileHomes",
      title: "Mobile Homes Allowed",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "notes",
      title: "Notes - Utilities and Important Info",
      type: "text",
      rows: 3,
    },
    {
      name: "contactInfo",
      title: "City or County Contact Information",
      type: "text",
      rows: 2,
    },
    {
      name: "dateFirstAvailable",
      title: "Date First Available",
      type: "date",
    },
    {
      name: "dateToReevaluate",
      title: "Date to Re-evaluate Price",
      type: "date",
    },
    {
      name: "propertyPicturesLink",
      title: "Link to Property Pictures",
      type: "url",
    },
    {
      name: "mlsListingLink",
      title: "Link to MLS Listing",
      type: "url",
    },
    // Legacy fields for backward compatibility
    {
      name: "location",
      title: "Location (Legacy)",
      type: "string",
    },
    {
      name: "acreage",
      title: "Acreage (Legacy)",
      type: "number",
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
    },
    {
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
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
      name: "state",
      title: "State",
      type: "string",
      options: {
        list: [
          { title: "Texas", value: "TX" },
          { title: "California", value: "CA" },
        ],
      },
    },
    {
      name: "schoolDistrict",
      title: "School District",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      address: "address",
      city: "city",
      price: "price",
      media: "images.0",
    },
    prepare(selection: any) {
      const { title, address, city, price, media } = selection
      return {
        title: title || `${address}, ${city}`,
        subtitle: `${city} - ${price ? `$${price.toLocaleString()}` : 'Price TBD'}`,
        media,
      }
    },
  },
}

export const schema = {
  types: [propertySchema],
}
