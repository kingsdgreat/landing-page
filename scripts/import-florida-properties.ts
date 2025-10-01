import { createClient } from '@sanity/client'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

// Florida properties data from CSV
const floridaProperties = [
  {
    apn: "R14-123-21-1290-0000-0910",
    size: "21,497 SqFt.",
    price: 0,
    address: "34945 Reynolds St, Dade City, FL 33523",
    city: "Dade City",
    county: "Hernando",
    zipCode: "33523",
    state: "FL",
    description: `Vacant Lot Listing

Parcel ID: R14-123-21-1290-0000-0910 | 21,497 SqFt.

This lot is close to multiple highways making an easy commute! Located in the backwoods off the tail end of Hernando County, this property has the privacy every owner would desire. Well and Septic Tank will be needed. Electrical is available nearby. The surrounding area is growing fast.`,
    coordinates: {
      lat: 28.482119,
      lng: -82.171027
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Planned Development Project Mobile Home",
    mobileHomes: true,
    notes: "",
    contactInfo: "(352) 754‑4048",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1IZwt87FghZJuQWo04N9xCgchjjSrP2e8?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "26-26-30-0613-0001-2570",
    size: "1,611 SqFt",
    price: 0,
    address: "1911 Portofino Vista Blvd, Saint Cloud, FL 34772",
    city: "Saint Cloud",
    county: "Osceola",
    zipCode: "34772",
    state: "FL",
    description: `Prime Residential Building Opportunity in St. Cloud, FL
1911 Portofino Vista Blvd, St. Cloud, FL 34772

This 1,611 square foot lot presents an exceptional opportunity to build your dream home in one of Central Florida's most desirable communities. Zoned for single family residential use, this property offers the perfect foundation for your custom home design in a neighborhood known for its convenient location and quality living.

Your perfect Florida lifestyle begins with the right location - make this property yours today!`,
    coordinates: {
      lat: 28.193375,
      lng: -81.292044
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Single Family Residential",
    mobileHomes: false,
    notes: "",
    contactInfo: "(407) 957‑7255",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1DosQ6v7tQM6z3uTC753ME3aOl08mlPAo?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "1130-21-6531",
    size: "19,415 SqFt.",
    price: 0,
    address: "Nee Ct, North Port, FL 34288",
    city: "North Port",
    county: "Sarasota",
    zipCode: "34288",
    state: "FL",
    description: `Vacant Lot Listing

Build your dream home on this 0.446-acre lot along peaceful Nee Court in North Port, FL, one of Southwest Florida's fastest-growing areas.
Zoned for a custom single-family residence, it offers both investment potential and quiet charm.
City water and electricity are close by, with newly repaved roads and expanding utility lines making construction simple and cost-effective.
Just minutes from Warm Mineral Springs and the Myakka River, and a short drive to Venice beaches and downtown North Port, this property blends natural beauty with easy access to shopping, schools, and I-75.`,
    coordinates: {
      lat: 27.047856,
      lng: -82.072828
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Agric/Comm/Residential",
    mobileHomes: false,
    notes: "",
    contactInfo: "(941) 429‑7156",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1Otn_6udHl855NW9AuJvQIzHchVpn2REQ?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "29-31-24-994160-042008",
    size: "21,802 SqFt.",
    price: 0,
    address: "2 Valencia Dr, Indian Lake Estates, FL 33855",
    city: "Indian Lake Estates",
    county: "Polk",
    zipCode: "33855",
    state: "FL",
    description: `PRIME RESIDENTIAL BUILDING LOT
2 Valencia Dr, Indian Lake Estates, FL
APN: 29-31-24-994160-042008 | 21,802 SqFt (0.5 Acre)

Build your dream home on this generous half-acre lot in peaceful Indian Lake Estates. This cleared parcel offers plenty of space for a custom single-family home with room for a pool, outdoor living areas, and lush landscaping.

Located in a quiet neighborhood just minutes from Lake Wales and premium fishing/boating at Indian Lake. Perfect for those seeking space and privacy in Central Florida's scenic lake country.`,
    coordinates: {
      lat: 27.774499,
      lng: -81.382155
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Residential",
    mobileHomes: false,
    notes: "",
    contactInfo: "(863) 534‑6084, 800‑780‑5346",
    propertyPicturesLink: "https://drive.google.com/drive/folders/12TAnbzMCIc5morCjJgQuPe50ogcVqPTC?usp=drive_link",
    category: "residential",
    featured: true
  },
  {
    apn: "24-15-27-0100-051-01200",
    size: "7,500 SqFt.",
    price: 0,
    address: "Possum Rd, Astor, FL 32102",
    city: "Astor",
    county: "Lake",
    zipCode: "32102",
    state: "FL",
    description: `Vacant Lot Listing

Residential Land Offering in Lake County

Parcel ID: 24-15-27-0100-051-01200

Imagine waking up to birds singing and sunlight dancing through ancient oaks on your very own 7,500 sq. ft. paradise in picturesque Astor. This enchanting residential lot on Possum Road offers more than just land - it's the perfect canvas for your dream home where the St. Johns River whispers nearby and nature embraces you daily with easy access to utilities within neighborhood.

Nestled in one of Florida's most peaceful river communities, this property invites you to build the cozy cottage or charming family home you've always imagined.`,
    coordinates: {
      lat: 29.17357,
      lng: -81.537515
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Mixed/Multi Residential (R-7)",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1UkNmqiCZx9ueGilHgd0lxRRG_Ohv1ooY?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "1149-21-4405",
    size: "0.29 acres",
    price: 15000,
    address: "Hark Pl, North Port, FL 34288",
    city: "North Port",
    county: "Sarasota",
    zipCode: "34288",
    state: "FL",
    description: `Discover the perfect canvas for your future home in the heart of North Port. Located on the peaceful and desirable Hark Place, this 13,664 sq ft (0.312-acre) lot offers ample space to build a custom single-family residence in one of Florida's most rapidly growing communities.

Nestled in a quiet, residential neighborhood, this property combines privacy with convenience. Enjoy easy access to I-75, shopping centers, schools, and parks, all while being just a short drive from the pristine Gulf Coast beaches. The lot's generous dimensions provide flexibility for home design, outdoor living, and potential future expansion.`,
    coordinates: {
      lat: 27.042906,
      lng: -82.080841
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Residential Single Family 2",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/17gyWzzuMJ5DMZ9BfZzqvPG0p0u9e1nkF?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "27-27-28-768500-000010",
    size: "0.38 Acres",
    price: 95000,
    address: "Melbourne Ave E, Haines City, FL 33844",
    city: "Haines City",
    county: "Polk",
    zipCode: "33844",
    state: "FL",
    description: `This strategically positioned 16,453 square foot (0.378 acre) parcel presents an exceptional opportunity for light industrial warehousing development in the thriving Haines City market. Zoned for industrial use, the level lot offers immediate potential for contractors, investors, or business owners seeking a well-located property with excellent transportation access.

Situated on Melbourne Avenue East, the property benefits from convenient proximity to major highways including US-27 and I-4, providing efficient connectivity to Central Florida's robust distribution networks. The generous lot dimensions allow for flexible development options to accommodate various light industrial needs.`,
    coordinates: {
      lat: 28.110071,
      lng: -81.621709
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Industrial Light Warehousing",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1U5c5f0dD6z3eGrznA0eM4wR_Fogg_7OA?usp=drive_link",
    category: "commercial",
    featured: true
  },
  {
    apn: "51-42-04-00-0200",
    size: "228,877 SqFt.",
    price: 6000000,
    address: "N 24th Ave, Hollywood, FL 33020",
    city: "Hollywood",
    county: "Broward",
    zipCode: "33020",
    state: "FL",
    description: `Vacant Lot Listing

Single Family Residential Lot in Broward County

Parcel ID: 51-42-04-00-0200 | 228,877 SqFt.

Rare opportunity to own a 5.25-acre single-family residential lot in the heart of Hollywood, Broward County. Zoned for single-family use, the property offers exceptional potential to subdivide and build custom luxury homes surrounded by lush tropical landscaping. City water, sewer, and electricity are available nearby, ensuring a smooth and cost-effective development process. Ideally located just minutes from Hollywood Beach Broadwalk and the vibrant dining and arts scene of downtown Hollywood. Easy access to I-95 and US-1 provides quick connections to Miami and Fort Lauderdale. Perfect for developers or investors seeking a prestigious residential enclave in one of South Florida's most desirable coastal markets.`,
    coordinates: {
      lat: 26.041165,
      lng: -80.156702
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Single Family Residential",
    mobileHomes: false,
    notes: "water-9548313250",
    contactInfo: "(954) 921-3471",
    propertyPicturesLink: "https://drive.google.com/drive/folders/14EV_DlRvWiOXol7iskgAE9xaOxkR5xPx?usp=drive_link",
    category: "residential",
    featured: true
  },
  {
    apn: "19-1n-27-0000-00801-0000",
    size: "40,075 SqFt.",
    price: 85000,
    address: "0 Hickory Hammock Rd Milton, FL 32583",
    city: "Milton",
    county: "Santa Rosa",
    zipCode: "32583",
    state: "FL",
    description: `Vacant Lot Listing

Parcel ID: 19-1n-27-0000-00801-0000| Size: 40,075 SqFt.

This lot offers the perfect blend of rural charm and convenient access to nearby amenities. Zoned Agriculture/Residential/Mobile Home
Electricity is available at the street, with well and septic options giving you flexibility to create your ideal homestead.
Just minutes from Milton and Pace, and with easy access to Interstate 10, you're close to shopping, schools, and healthcare while enjoying peaceful country surroundings.
Nearby Blackwater River State Park and historic downtown Milton offer outdoor recreation and timeless small-town appeal.`,
    coordinates: {
      lat: 30.586331,
      lng: -86.992155
    },
    water: false,
    electricity: true,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Agriculture/Residential/Mobile Home",
    mobileHomes: true,
    notes: "",
    contactInfo: "(352) 596‑4000",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1R0C-A2OaO2zxL1kJ3CBJlKxH4PBm8iXY?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "013821-0000",
    size: "30,810 SqFt.",
    price: 0,
    address: "310 1st Ave NE Lutz, FL",
    city: "Lutz",
    county: "Hillsborough",
    zipCode: "",
    state: "FL",
    description: `Vacant Lot Listing

Parcel ID: 013821-0000 | 30,810 SqFt.

This 30,810 sq. ft. lot is tucked away in the peaceful and growing community of Lutz, Florida, presenting a rare chance to build your dream home or secure a smart investment in a high-demand area. It's just minutes from Lake Park, Buchanan Middle School, and the shopping and dining options at The Shops at Wiregrass and Tampa Premium Outlets. The property is surrounded by top-rated Hillsborough County schools and welcoming, family-friendly neighborhoods. RSC-6 residential zoning allows for single-family construction, giving you flexibility for a custom home or long-term investment. With nearby access to electricity, water, and septic options, development is both straightforward and cost-effective.`,
    coordinates: {
      lat: 28.152422,
      lng: -82.458037
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Residential Single Family Conventional",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1yiSXcMgK2hcN7INieXP88s7yXNz_GcCk?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "20-1s-30-2101-251-004",
    size: "5,227 SqFt.",
    price: 0,
    address: "850 E Olive Rd, Pensacola, FL 32514",
    city: "Pensacola",
    county: "Escambia",
    zipCode: "32514",
    state: "FL",
    description: `Vacant Lot Listing

Parcel ID: 20-1s-30-2101-251-004 Size: 5,227 SqFt.

Imagine building your dream home or vacation retreat on this 5,227 sq. ft. lot (GPS: 30.51105, -87.237363) ideally located in Pensacola, Florida, just minutes from Cordova Mall, downtown Pensacola, and the area's world-famous white-sand beaches. High-Density Mixed Use zoning offers exceptional flexibility, whether you envision a single-family home, a mobile home, or a smart investment property. The property enjoys easy access to major routes, including Interstate 110 and U.S. Highway 90, making commuting and travel simple. City water, sewer, and electricity connections are available nearby, ensuring a smooth and cost-effective build.`,
    coordinates: {
      lat: 30.51105,
      lng: -87.237363
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "It has a huge electricity Easement",
    subDivision: "",
    zoning: "High Density Mixed Use",
    mobileHomes: true,
    notes: "Yet to get it from Pamela",
    contactInfo: "850-595-3475",
    propertyPicturesLink: "",
    category: "residential",
    featured: false
  },
  {
    apn: "17041-000-000",
    size: "435,600 SqFt. (10 Acres)",
    price: 0,
    address: "Unassigned Location Re, Waldo, FL 32694",
    city: "Waldo",
    county: "Alachua",
    zipCode: "32694",
    state: "FL",
    description: `Vacant Lot Listing

Experience the best of country living on this 10-acre (435,600 sq ft) property zoned Agriculture, offering limitless potential for farming, ranching, or creating your own private retreat. Conveniently located near Gainesville, FL, just minutes from I-75, it provides quick access to shopping, schools, and local amenities while preserving the serenity of a rural setting. Electricity is available nearby, and you can easily install a well and septic system, giving you the freedom to design your homestead your way. Whether you envision growing crops, raising livestock, or building a custom country estate, this property is the perfect canvas for your dream lifestyle.`,
    coordinates: {
      lat: 29.796731,
      lng: -82.163963
    },
    water: false,
    electricity: true,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Agriculture",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1YEXHxJxMW0Uv8Qs-zEHx4UdZHhF5wT8E?usp=drive_link",
    category: "agricultural",
    featured: false
  },
  {
    apn: "24-01-20-612-006.2",
    size: "140,698 SqFt. (3.23 Acres)",
    price: 0,
    address: "0 N MERIDIAN RD TALLAHASSEE, FL 32312",
    city: "Tallahassee",
    county: "Leon",
    zipCode: "32312",
    state: "FL",
    description: `This 3.23-acre parcel offers remarkable flexibility for residential development, small-scale agriculture, or a private estate. Build your dream home, create a hobby farm, or hold for future growth the Urban Fringe zoning supports a wide range of possibilities.
Located in North Tallahassee's sought-after Meridian corridor. Enjoy nearby attractions such as Alfred B. Maclay Gardens State Park, perfect for gardens, hiking, and kayaking, and Lake Lamonia, a favorite spot for boating and fishing. Utilities are available nearby, making future development easier and lowering startup costs.`,
    coordinates: {
      lat: 30.596103,
      lng: -84.288394
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Urban Fringe",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1f0a2j-00Bs6iEy5fs7rssU_tCfU3Idma?usp=drive_link",
    category: "residential",
    featured: false
  }
]

// Helper function to generate features array from property characteristics
function generateFeatures(property: any): string[] {
  const features: string[] = []
  
  if (property.water) features.push('Water Available')
  if (property.electricity) features.push('Electricity Available')
  if (property.sewerSeptic) features.push('Sewer/Septic Available')
  if (property.mobileHomes) features.push('Mobile Homes Allowed')
  if (property.subDivision && property.subDivision.toLowerCase() === 'yes') features.push('Subdivision Potential')
  
  return features
}

// Helper function to generate utilities array
function generateUtilities(property: any): string[] {
  const utilities: string[] = []
  
  if (property.water) utilities.push('Water')
  if (property.electricity) utilities.push('Electricity')
  if (property.sewerSeptic) utilities.push('Sewer/Septic')
  
  return utilities
}

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
    console.log('Starting import of Florida properties...')
    
    for (const property of floridaProperties) {
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
        location: `${property.city}, ${property.county} County, FL`,
        acreage: calculateAcreage(property.size),
        features: generateFeatures(property),
        utilities: generateUtilities(property)
      }
      
      const result = await client.create(propertyDoc)
      console.log(`✅ Created property: ${title} (ID: ${result._id})`)
    }
    
    console.log('🎉 All Florida properties imported successfully!')
  } catch (error) {
    console.error('❌ Error importing properties:', error)
  }
}

// Run the import
importProperties() 