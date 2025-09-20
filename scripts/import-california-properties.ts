import { createClient } from '@sanity/client'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

// California properties data from your CSV
const californiaProperties = [
  {
    apn: "39603112",
    size: "58,806 SqFt. (1.35 Acres)",
    price: 0, // No price listed
    address: "1889 Marion Streer, Kingsburg",
    city: "Kingsburg",
    county: "Fresno",
    zipCode: "",
    state: "CA",
    description: `Seize the opportunity to own 1.35 acres (approx. 58,806 sq. ft.) of prime Core Commercial land in the heart of Kingsburg, California, a vibrant and fast-growing community in the San Joaquin Valley. This property offers unmatched visibility along Highway 99, drawing steady traffic and ideal exposure for retail, dining, office, or mixed-use development. Core Commercial zoning provides exceptional flexibility for a wide range of business ventures. Essential utilities including water, sewer, and electricity are available nearby, making development both straightforward and cost-efficient. Surrounded by Kingsburg's charming Swedish Village downtown, local shops, and popular dining destinations, this lot is a rare chance to invest in one of the Valley's most appealing commercial corridors.`,
    coordinates: {
      lat: 36.516756,
      lng: -119.556622
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Core Commercial",
    mobileHomes: false,
    notes: "Yet to get it from Pamela",
    contactInfo: "",
    propertyPicturesLink: "",
    category: "commercial",
    featured: true
  },
  {
    apn: "0515213060000",
    size: "189,080 SqFt (4.34 Acres)",
    price: 0,
    address: "Blanco Rd, Adelanto",
    city: "Adelanto",
    county: "San Bernardino",
    zipCode: "",
    state: "CA",
    description: `Build your dream home in this spacious 4.34-acre lot zoned Rural Living/Residential. Enjoy privacy, flexibility, and off-grid potential with nearby power, well water, and septic options. Just off I-15 & I-40, you're minutes from Barstow and within easy reach of Las Vegas and Los Angeles. Surrounded by iconic Route 66 landmarks like Bagdad Café and Volcano House, this property blends scenic desert charm with long-term growth potential, perfect for homebuilders, investors, or rural lifestyle seekers.`,
    coordinates: {
      lat: 34.88373,
      lng: -116.725896
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Rural Living/Residential/ Single Family",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1EWoPWB7T09mtmqv5Ix3R4kbJXQqaSHut?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "3037022004",
    size: "42,777 SqFt. (0.98 acres)",
    price: 0,
    address: "0 Vac/135 Ste/Vic Ave W6, Pearblossom, CA 93553",
    city: "Pearlblossom",
    county: "Los Angeles",
    zipCode: "93553",
    state: "CA",
    description: `Own 0.98 acres in Pearblossom, CA with Light Agriculture/Residential zoning, perfect for building a dream home or small-scale farming. The property combines affordability, privacy, and long-term investment value in a peaceful desert setting. Its close proximity to Lancaster, Palmdale, and major highways makes it both a tranquil retreat and a smart investment. Utilities are nearby, offering easy development, while the Devil's Punchbowl Natural Area adds natural beauty with sandstone formations, hiking trails, and mountain views.`,
    coordinates: {
      lat: 34.492936,
      lng: -117.890622
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Light Agriculture/Residential",
    mobileHomes: false,
    notes: "800) 655-4555, 800-499-8840 Submit your project request here: New Business http://www.sce.com/projectportal For more info, visit http://www.sce.com/projectrequest",
    contactInfo: "800) 655-4555, 800-499-8840",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1hfUs1lcALNnf6PiVy0hWqDfxYC6EuD_O?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "3225-009-013",
    size: "0.12 Acres",
    price: 0,
    address: "0 Vac/Alderwood Rd/Vic Datetree Dr, Lake Elizabeth, CA",
    city: "Lake Elizabeth",
    county: "Los Angeles",
    zipCode: "93532",
    state: "CA",
    description: `This 5,390 SqFt. (0.124 Acre) lot in Lake Hughes, CA is zoned Single Family Residential (SFR), giving you the flexibility to build a home, vacation retreat, or long-term investment property. The zoning makes it especially attractive as it ensures residential quality of life, strong housing demand, and better financing opportunities. Utilities are conveniently nearby, making development easier while still allowing you to enjoy the peace and privacy of rural living. The location combines quiet desert surroundings with close proximity to Lancaster, Palmdale, and major highways for easy access. Just minutes away, the Angeles National Forest and Castaic Lake provide outdoor recreation and scenic beauty, enhancing both lifestyle and investment value.`,
    coordinates: {
      lat: 34.656446,
      lng: -118.377648
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Single Family Residential",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1wjHNSRIliVLCQN0Rz5b0wSQ89SfRlpjN?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "3264011002",
    size: "217,811 SqFt. (5 Acres)",
    price: 0,
    address: "0 Vac/93 Stw/Vic Ave E10, Antelope Acres, CA 93536",
    city: "Antelope",
    county: "Los Angeles",
    zipCode: "93536",
    state: "CA",
    description: `Embrace the freedom of 5 acres in Lancaster's Antelope Valley, zoned Heavy Agriculture/Irrigated Farm (A-2)—perfect for farming, ranching, equestrian living, or your own desert retreat. With quick access to Highway 14, Lancaster city, and Los Angeles, you'll enjoy both convenience and wide-open space. Landmarks like the Antelope Valley California Poppy Reserve, Apollo Community Regional Park, and Edwards Air Force Base add natural beauty and historic charm. Plus, utilities are conveniently nearby, making this property primed for development. A unique chance to create, invest, or build in one of Southern California's most scenic desert regions.`,
    coordinates: {
      lat: 34.753248,
      lng: -118.297616
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Heavy Agriculture/Irrigated Farm Desert",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1b5QJJVupOSPBsLchzZ8uWQ8hUnu67q0X?usp=drive_link",
    category: "agricultural",
    featured: false
  },
  {
    apn: "3350009052",
    size: "227,458 SqFt. (5.22 Acres)",
    price: 0,
    address: "0 Vac/Cor 188 Ste/Ave H8, Hi Vista, CA 93535",
    city: "Hi Vista",
    county: "Los Angeles",
    zipCode: "93532",
    state: "CA",
    description: `Own 5.22 acres in Lancaster, CA zoned Heavy Agricultural/Irrigated Farm (A-2)—perfect for farming, ranching, equestrian use, or a private retreat. Located in the Antelope Valley with easy access to Highway 14, Lancaster city, and Los Angeles, this lot blends privacy with convenience. Nearby landmarks like the California Poppy Reserve, Apollo Park, and Edwards Air Force Base add natural beauty and cultural appeal.`,
    coordinates: {
      lat: 34.712864,
      lng: -117.795134
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Heavy Agricultural/ Irrigated Fram Desert",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1BShpocC9jrcnRRkjiVSMsShrvBi0uNA5?usp=drive_link",
    category: "agricultural",
    featured: false
  },
  {
    apn: "3363010004",
    size: "113,864 SqFt. (2.614 Acres)",
    price: 0,
    address: "0 Vac/Vic Ave M8/165th Ste, Lake Los Angeles, CA 93535",
    city: "Lake Los Angeles",
    county: "Los Angeles",
    zipCode: "93535",
    state: "CA",
    description: `Build your dream home on 2.61 acres in Lancaster, CA, zoned Light Agricultural/Residential Single (LCA2), perfect for a custom home, small ranch, or rural retreat. Located in the Antelope Valley with easy access to Lancaster city and Los Angeles via Highway 14. Enjoy nearby landmarks like the California Poppy Reserve, Apollo Park, and Edwards Air Force Base. Utilities are nearby, making this property primed for development.`,
    coordinates: {
      lat: 34.638932,
      lng: -117.83555
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Light Agricultural/ Residential Single",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1fNGE1LeBZZBQKeb0DxcR005pCyrK0Wva?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "0462-511-02-0000",
    size: "95,832 SqFt. (2.2 Acres)",
    price: 0,
    address: "Adelanto, Ca",
    city: "Adelanto",
    county: "San Bernardino",
    zipCode: "",
    state: "CA",
    description: `This lot set a perfect setting for recreation, farming, or your own off-grid retreat. Resource Conservation zoning offers exceptional flexibility, allowing agricultural use, rural living, or a custom recreational escape. Conveniently located about 10 miles from El Mirage Dry Lake Off-Highway Recreation Area, it's ideal for outdoor enthusiasts and weekend adventurers. Utilities, including electricity and water access, are available nearby, giving you modern convenience while maintaining that wide-open desert feel. Whether you're seeking an affordable investment or a peaceful getaway, this property captures the best of the High Desert's beauty and potential.`,
    coordinates: {
      lat: 34.746758,
      lng: -117.615241
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Resource Conservation",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1Wgh8ni_lp5TUA29bPJ6iPGk9fO-AZ18B?usp=drive_link",
    category: "agricultural",
    featured: false
  },
  {
    apn: "3037022003",
    size: "43,010 SqFt. (0.987 acres)",
    price: 0,
    address: "0 Vac/Cor 135 Ste/Ave W6, Pearblossom, CA 93553",
    city: "Pearlblosson",
    county: "Los angeles",
    zipCode: "93553",
    state: "CA",
    description: `Own 0.98 acres in Pearblossom, CA (APN: 3037022003) with Light Agriculture/Residential Single zoning, offering flexibility to build a home, farm, or retreat. Utilities are nearby for easy development, and the lot sits just minutes from the Devil's Punchbowl Natural Area, a local landmark with scenic trails and sandstone formations. This property combines affordability, convenience, and long-term investment potential in a peaceful desert setting.`,
    coordinates: {
      lat: 34.493329,
      lng: -117.890624
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Light Agriculture/ Residential Single",
    mobileHomes: false,
    notes: "",
    contactInfo: "",
    propertyPicturesLink: "https://drive.google.com/drive/folders/1awaFa3z9gnrD681WcKvfOD8iAGw8Vmeo?usp=drive_link",
    category: "residential",
    featured: false
  },
  {
    apn: "859-330-063 & 859-330-073",
    size: "879,912 SqFt. (20.2 Acres)",
    price: 0,
    address: "Riverside County, CA",
    city: "Riverside",
    county: "Riverside",
    zipCode: "",
    state: "CA",
    description: `879,912 sq ft (20.2 acres) of prime Controlled Development Area (Residential Desert Land) with APNs 859-330-063 & 859-330-073. Located near Palm Springs, Joshua Tree, and the Coachella Valley corridor, offering scenic mountain views and a peaceful desert setting. Electricity nearby with options for well and septic. Easy access to major highways and local amenities. Perfect for building a private desert retreat, residential community, or long-term investment. A rare chance to own valuable land in one of Southern California's fastest-growing regions.`,
    coordinates: {
      lat: 33.508912,
      lng: -115.373931
    },
    water: false,
    electricity: false,
    sewerSeptic: false,
    buildingRestriction: "",
    subDivision: "",
    zoning: "Controlled Development Areas (Residential Desert Land)",
    mobileHomes: false,
    notes: "Yet to get it from Pamela",
    contactInfo: "",
    propertyPicturesLink: "",
    category: "residential",
    featured: true
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
async function importCaliforniaProperties() {
  try {
    console.log('Starting import of California properties...')
    
    for (const property of californiaProperties) {
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
        location: `${property.city}, ${property.county} County, ${property.state}`,
        acreage: calculateAcreage(property.size)
      }
      
      const result = await client.create(propertyDoc)
      console.log(`✅ Created property: ${title} (ID: ${result._id})`)
    }
    
    console.log('�� All California properties imported successfully!')
  } catch (error) {
    console.error('❌ Error importing properties:', error)
  }
}

// Run the import
importCaliforniaProperties() 