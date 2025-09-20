import { createClient } from '@sanity/client'

// Remove dotenv import and use process.env directly
// dotenv.config({ path: '.env.production' })

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

// Texas properties data from your CSV
const texasProperties = [
  {
    apn: "75124",
    size: "152,460 SqFt.",
    price: 420000,
    address: "1851 S US HIGHWAY 277 DEL RIO, TX 78840",
    city: "Del Rio",
    county: "Val Verde",
    zipCode: "78840",
    description: `Vacant Lot Listing

Parcel ID:75124  | 152,460 SqFt.

Exceptional 3.5-acre commercial lot (Parcel ID: 75124) located along high-traffic US Highway 277 in Del Rio, Texas, offering unbeatable visibility and convenient access.
Commercial zoning makes it ideal for retail centers, restaurants, gas stations, storage facilities, or multi-family housing developments.
City water, sewer, and electricity are available nearby, ensuring a smooth and cost-effective build.
Just minutes from downtown Del Rio and close to Amistad Reservoir, the property benefits from both local and regional traffic.
A rare opportunity for developers and investors to secure a prime site in a steadily growing market`,
    coordinates: {
      lat: 29.347002,
      lng: -100.868337
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "No Zoning (NZ)",
    mobileHomes: false,
    notes: "cvalerde@.texas.gove",
    contactInfo: "830‑774‑7501",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1HWVzJtv-AqRlgPm21E6mq7GH2JrxnRRD?usp=drive_link",
    category: "commercial",
    featured: true
  },
  {
    apn: "543259",
    size: "9,000 SqFt.",
    price: 50000,
    address: "21712 Oxford Dr, Leander, Tx 78645",
    city: "Leander",
    county: "Travis",
    zipCode: "78645",
    description: `Vacant Lot Listing

Discover the potential of this 9,000 sq. ft. residential lot at 21712 Oxford Drive, perfectly situated in one of Leander's most sought-after neighborhoods. Zoned for single-family use, it's ideal for building your dream home or a smart investment property. Enjoy proximity to Lake Travis, Balcones Canyonlands National Wildlife Refuge, and Sandy Creek Park, where natural beauty and outdoor recreation abound. Electricity, water, and septic options are available nearby, ensuring an easy and cost-effective build`,
    coordinates: {
      lat: 30.426741,
      lng: -98.027138
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "It is buildable and permit needs to be received from Lago vista city planner. There is an access road and no restriction on the lot. (she directed to visit lago vista website, navigate to service and scroll to GIS to get more information)",
    subDivision: "",
    zoning: "Single Family Residential Small Lot",
    mobileHomes: false,
    notes: "",
    contactInfo: "512) 267‑5259",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1vAAn1boTASqe1POw_nco7RdiYl3BaBNi?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "6841-0006-0010-000, 6841-0006-0019-000, 6841-0006-0020-000",
    size: "10,800 SQFT (0.25 Acres)",
    price: 0, // Set to 0 instead of null for properties without prices
    address: "Galveston County, Texas",
    city: "Galveston",
    county: "Galveston",
    zipCode: "",
    description: `Nestled in the quiet and growing communities of Galveston County, Texas, this 3,600 square foot residential lot is a blank canvas full of promise. Zoned for Single Family Residential use, it offers the perfect setting to build a cozy haven, a family home, or a long-term investment that grows in value over time. The neighborhood offers a welcoming atmosphere, with easy access to nearby schools, shops, and major roads making daily life both convenient and comfortable while utilities are within reach.`,
    coordinates: {
      lat: 29.235168,
      lng: -94.881499
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Residential Single Family",
    mobileHomes: false,
    notes: "",
    contactInfo: "409-797-3500",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1oEduj4_9TPd7txjR4M_I28kDmSm3RyyG?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "22589",
    size: "6,000 SqFt",
    price: 0, // Set to 0 instead of null for properties without prices
    address: "Bradshaw St, Terrell, Tx 75160",
    city: "Terrell",
    county: "Kaufman",
    zipCode: "75160",
    description: `Vacant Lot Listing

Parcel ID: 22589                   Size: 6000sqft

This lot offers the perfect blend of small-town charm and easy accessibility. Conveniently located near downtown Terrell, Ben Gill Park, and the shopping and dining options at Crossroads at Terrell, this property places you just minutes from U.S. Highway 80 and Interstate 20, providing a quick commute to Dallas. Zoned for single-family residential use, it's ideal for building a custom home or long-term investment property. City water, sewer, and electricity connections are availablenearby, making development smooth and cost-effective. Level and build-ready, this lot offers a rare chance to create something lasting in one of Terrell's most welcoming neighborhoods.`,
    coordinates: {
      lat: 32.732873,
      lng: -96.288804
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "No easement",
    subDivision: "",
    zoning: "Single Family Residential 6",
    mobileHomes: false,
    notes: "",
    contactInfo: "(972) 551‑6600- To visit their office for other zoning details",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1bqnyn9ODf6RRyDytvT3zAmj5LSc0maIa?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "169446",
    size: "14,726 SqFt. (0.338 Acres)",
    price: 0, // Set to 0 instead of null for properties without prices
    address: "20010 Coolidge Ln Lago Vista, TX 78645",
    city: "Lago Vista",
    county: "Travis", // Added county since it was missing
    zipCode: "78645",
    description: `Build your dream home on this 14,726 sq ft (0.338-acre) homesite in the heart of Lago Vista. Set in a peaceful neighborhood, the property is just minutes from Lago Vista Golf Course, Lago Vista Elementary, and the Rusty Allen Airport, with easy access to Lake Travis, shopping, and dining. City of Lago Vista water and sewer service is available, and electricity along with high-speed internet is accessible at the street, making construction simple and convenient. Zoned Single-Family Residential ,Small Lot (R-SF), this lot is ideal for a custom home that combines the charm of an established lakeside community with modern convenience.`,
    coordinates: {
      lat: 30.433842,
      lng: -97.990935
    },
    water: true,
    electricity: true,
    sewerSeptic: true,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Single Family Residential Small Lot",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "",
    category: "residential",
    featured: false
  }
]

// Function to create title and slug from address and city
function createTitleAndSlug(address: string, city: string, apn: string) {
  const title = `${address}, ${city} - APN: ${apn}`
  const slug = `${city.toLowerCase().replace(/\s+/g, '-')}-${apn.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  return { title, slug }
}

// Function to calculate acreage from size string
function calculateAcreage(size: string): number {
  if (size.includes('Acres')) {
    const match = size.match(/(\d+\.?\d*)\s*Acres/)
    return match ? parseFloat(match[1]) : 0
  } else if (size.includes('SqFt')) {
    const match = size.match(/(\d+\.?\d*)\s*SqFt/)
    if (match) {
      const sqft = parseFloat(match[1].replace(/,/g, ''))
      return sqft / 43560 // Convert sqft to acres
    }
  }
  return 0
}

// Import function
async function importProperties() {
  try {
    console.log('Starting import of Texas properties...')
    
    for (const property of texasProperties) {
      const { title, slug } = createTitleAndSlug(property.address, property.city, property.apn)
      
      const propertyDoc = {
        _type: 'property',
        title,
        slug: {
          _type: 'slug',
          current: slug
        },
        ...property,
        // Set legacy fields for backward compatibility
        location: `${property.city}, ${property.county} County, TX`,
        acreage: calculateAcreage(property.size)
      }
      
      const result = await client.create(propertyDoc)
      console.log(`✅ Created property: ${title} (ID: ${result._id})`)
    }
    
    console.log('🎉 All Texas properties imported successfully!')
  } catch (error) {
    console.error('❌ Error importing properties:', error)
  }
}

// Run the import
importProperties() 