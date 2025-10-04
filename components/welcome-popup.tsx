"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, CheckCircle } from "lucide-react"

interface PopupFormData {
  state: string
  county: string
  source: string
  name: string
  email: string
  phone: string
  additionalInfo: string
}

// US States data
const US_STATES = [
  { value: "alabama", label: "Alabama" },
  { value: "alaska", label: "Alaska" },
  { value: "arizona", label: "Arizona" },
  { value: "arkansas", label: "Arkansas" },
  { value: "california", label: "California" },
  { value: "colorado", label: "Colorado" },
  { value: "connecticut", label: "Connecticut" },
  { value: "delaware", label: "Delaware" },
  { value: "florida", label: "Florida" },
  { value: "georgia", label: "Georgia" },
  { value: "hawaii", label: "Hawaii" },
  { value: "idaho", label: "Idaho" },
  { value: "illinois", label: "Illinois" },
  { value: "indiana", label: "Indiana" },
  { value: "iowa", label: "Iowa" },
  { value: "kansas", label: "Kansas" },
  { value: "kentucky", label: "Kentucky" },
  { value: "louisiana", label: "Louisiana" },
  { value: "maine", label: "Maine" },
  { value: "maryland", label: "Maryland" },
  { value: "massachusetts", label: "Massachusetts" },
  { value: "michigan", label: "Michigan" },
  { value: "minnesota", label: "Minnesota" },
  { value: "mississippi", label: "Mississippi" },
  { value: "missouri", label: "Missouri" },
  { value: "montana", label: "Montana" },
  { value: "nebraska", label: "Nebraska" },
  { value: "nevada", label: "Nevada" },
  { value: "new-hampshire", label: "New Hampshire" },
  { value: "new-jersey", label: "New Jersey" },
  { value: "new-mexico", label: "New Mexico" },
  { value: "new-york", label: "New York" },
  { value: "north-carolina", label: "North Carolina" },
  { value: "north-dakota", label: "North Dakota" },
  { value: "ohio", label: "Ohio" },
  { value: "oklahoma", label: "Oklahoma" },
  { value: "oregon", label: "Oregon" },
  { value: "pennsylvania", label: "Pennsylvania" },
  { value: "rhode-island", label: "Rhode Island" },
  { value: "south-carolina", label: "South Carolina" },
  { value: "south-dakota", label: "South Dakota" },
  { value: "tennessee", label: "Tennessee" },
  { value: "texas", label: "Texas" },
  { value: "utah", label: "Utah" },
  { value: "vermont", label: "Vermont" },
  { value: "virginia", label: "Virginia" },
  { value: "washington", label: "Washington" },
  { value: "west-virginia", label: "West Virginia" },
  { value: "wisconsin", label: "Wisconsin" },
  { value: "wyoming", label: "Wyoming" }
]

// Counties by state (top populated counties + Other option)
const COUNTIES_BY_STATE: Record<string, Array<{ value: string; label: string }>> = {
  "alabama": [
    { value: "jefferson", label: "Jefferson County" },
    { value: "mobile", label: "Mobile County" },
    { value: "madison", label: "Madison County" },
    { value: "montgomery", label: "Montgomery County" },
    { value: "shelby", label: "Shelby County" },
    { value: "tuscaloosa", label: "Tuscaloosa County" },
    { value: "baldwin", label: "Baldwin County" },
    { value: "lee", label: "Lee County" },
    { value: "morgan", label: "Morgan County" },
    { value: "calhoun", label: "Calhoun County" },
    { value: "houston", label: "Houston County" },
    { value: "marshall", label: "Marshall County" },
    { value: "lauderdale", label: "Lauderdale County" },
    { value: "other", label: "Other" }
  ],
  "alaska": [
    { value: "anchorage", label: "Anchorage Municipality" },
    { value: "fairbanks-north-star", label: "Fairbanks North Star Borough" },
    { value: "matanuska-susitna", label: "Matanuska-Susitna Borough" },
    { value: "kenai-peninsula", label: "Kenai Peninsula Borough" },
    { value: "juneau", label: "Juneau City and Borough" },
    { value: "ketchikan-gateway", label: "Ketchikan Gateway Borough" },
    { value: "kodiak-island", label: "Kodiak Island Borough" },
    { value: "sitka", label: "Sitka City and Borough" },
    { value: "other", label: "Other" }
  ],
  "arizona": [
    { value: "maricopa", label: "Maricopa County" },
    { value: "pima", label: "Pima County" },
    { value: "pinal", label: "Pinal County" },
    { value: "yavapai", label: "Yavapai County" },
    { value: "mohave", label: "Mohave County" },
    { value: "coconino", label: "Coconino County" },
    { value: "yuma", label: "Yuma County" },
    { value: "cochise", label: "Cochise County" },
    { value: "navajo", label: "Navajo County" },
    { value: "apache", label: "Apache County" },
    { value: "gila", label: "Gila County" },
    { value: "other", label: "Other" }
  ],
  "arkansas": [
    { value: "pulaski", label: "Pulaski County" },
    { value: "benton", label: "Benton County" },
    { value: "washington", label: "Washington County" },
    { value: "sebastian", label: "Sebastian County" },
    { value: "craighead", label: "Craighead County" },
    { value: "faulkner", label: "Faulkner County" },
    { value: "garland", label: "Garland County" },
    { value: "saline", label: "Saline County" },
    { value: "jefferson", label: "Jefferson County" },
    { value: "lonoke", label: "Lonoke County" },
    { value: "other", label: "Other" }
  ],
  "california": [
    { value: "los-angeles", label: "Los Angeles County" },
    { value: "san-diego", label: "San Diego County" },
    { value: "orange", label: "Orange County" },
    { value: "riverside", label: "Riverside County" },
    { value: "san-bernardino", label: "San Bernardino County" },
    { value: "santa-clara", label: "Santa Clara County" },
    { value: "alameda", label: "Alameda County" },
    { value: "sacramento", label: "Sacramento County" },
    { value: "contra-costa", label: "Contra Costa County" },
    { value: "fresno", label: "Fresno County" },
    { value: "kern", label: "Kern County" },
    { value: "san-francisco", label: "San Francisco County" },
    { value: "ventura", label: "Ventura County" },
    { value: "san-mateo", label: "San Mateo County" },
    { value: "other", label: "Other" }
  ],
  "colorado": [
    { value: "denver", label: "Denver County" },
    { value: "jefferson", label: "Jefferson County" },
    { value: "arapahoe", label: "Arapahoe County" },
    { value: "adams", label: "Adams County" },
    { value: "douglas", label: "Douglas County" },
    { value: "boulder", label: "Boulder County" },
    { value: "weld", label: "Weld County" },
    { value: "el-paso", label: "El Paso County" },
    { value: "larimer", label: "Larimer County" },
    { value: "pueblo", label: "Pueblo County" },
    { value: "mesa", label: "Mesa County" },
    { value: "other", label: "Other" }
  ],
  "connecticut": [
    { value: "fairfield", label: "Fairfield County" },
    { value: "hartford", label: "Hartford County" },
    { value: "new-haven", label: "New Haven County" },
    { value: "new-london", label: "New London County" },
    { value: "litchfield", label: "Litchfield County" },
    { value: "middlesex", label: "Middlesex County" },
    { value: "tolland", label: "Tolland County" },
    { value: "windham", label: "Windham County" }
  ],
  "delaware": [
    { value: "new-castle", label: "New Castle County" },
    { value: "kent", label: "Kent County" },
    { value: "sussex", label: "Sussex County" }
  ],
  "florida": [
    { value: "miami-dade", label: "Miami-Dade County" },
    { value: "broward", label: "Broward County" },
    { value: "palm-beach", label: "Palm Beach County" },
    { value: "hillsborough", label: "Hillsborough County" },
    { value: "orange", label: "Orange County" },
    { value: "pinellas", label: "Pinellas County" },
    { value: "duval", label: "Duval County" },
    { value: "lee", label: "Lee County" },
    { value: "polk", label: "Polk County" },
    { value: "volusia", label: "Volusia County" },
    { value: "brevard", label: "Brevard County" },
    { value: "seminole", label: "Seminole County" },
    { value: "pasco", label: "Pasco County" },
    { value: "sarasota", label: "Sarasota County" },
    { value: "other", label: "Other" }
  ],
  "georgia": [
    { value: "fulton", label: "Fulton County" },
    { value: "gwinnett", label: "Gwinnett County" },
    { value: "cobb", label: "Cobb County" },
    { value: "dekalb", label: "DeKalb County" },
    { value: "chatham", label: "Chatham County" },
    { value: "clayton", label: "Clayton County" },
    { value: "henry", label: "Henry County" },
    { value: "richmond", label: "Richmond County" },
    { value: "cherokee", label: "Cherokee County" },
    { value: "muscogee", label: "Muscogee County" },
    { value: "forsyth", label: "Forsyth County" },
    { value: "hall", label: "Hall County" },
    { value: "columbia", label: "Columbia County" },
    { value: "other", label: "Other" }
  ],
  "hawaii": [
    { value: "honolulu", label: "Honolulu County" },
    { value: "hawaii", label: "Hawaii County" },
    { value: "maui", label: "Maui County" },
    { value: "kauai", label: "Kauai County" }
  ],
  "idaho": [
    { value: "ada", label: "Ada County" },
    { value: "canyon", label: "Canyon County" },
    { value: "kootenai", label: "Kootenai County" },
    { value: "bonneville", label: "Bonneville County" },
    { value: "twin-falls", label: "Twin Falls County" },
    { value: "bannock", label: "Bannock County" },
    { value: "bingham", label: "Bingham County" },
    { value: "madison", label: "Madison County" },
    { value: "jefferson", label: "Jefferson County" },
    { value: "other", label: "Other" }
  ],
  "illinois": [
    { value: "cook", label: "Cook County" },
    { value: "dupage", label: "DuPage County" },
    { value: "lake", label: "Lake County" },
    { value: "will", label: "Will County" },
    { value: "kane", label: "Kane County" },
    { value: "mchenry", label: "McHenry County" },
    { value: "winnebago", label: "Winnebago County" },
    { value: "madison", label: "Madison County" },
    { value: "st-clair", label: "St. Clair County" },
    { value: "champaign", label: "Champaign County" },
    { value: "sangamon", label: "Sangamon County" },
    { value: "peoria", label: "Peoria County" },
    { value: "other", label: "Other" }
  ],
  "indiana": [
    { value: "marion", label: "Marion County" },
    { value: "lake", label: "Lake County" },
    { value: "allen", label: "Allen County" },
    { value: "hamilton", label: "Hamilton County" },
    { value: "st-joseph", label: "St. Joseph County" },
    { value: "vanderburgh", label: "Vanderburgh County" },
    { value: "tippecanoe", label: "Tippecanoe County" },
    { value: "hendricks", label: "Hendricks County" },
    { value: "porter", label: "Porter County" },
    { value: "johnson", label: "Johnson County" },
    { value: "monroe", label: "Monroe County" },
    { value: "other", label: "Other" }
  ],
  "iowa": [
    { value: "polk", label: "Polk County" },
    { value: "linn", label: "Linn County" },
    { value: "scott", label: "Scott County" },
    { value: "johnson", label: "Johnson County" },
    { value: "black-hawk", label: "Black Hawk County" },
    { value: "woodbury", label: "Woodbury County" },
    { value: "dubuque", label: "Dubuque County" },
    { value: "story", label: "Story County" },
    { value: "pottawattamie", label: "Pottawattamie County" },
    { value: "cerro-gordo", label: "Cerro Gordo County" },
    { value: "other", label: "Other" }
  ],
  "kansas": [
    { value: "johnson", label: "Johnson County" },
    { value: "sedgwick", label: "Sedgwick County" },
    { value: "wyandotte", label: "Wyandotte County" },
    { value: "shawnee", label: "Shawnee County" },
    { value: "douglas", label: "Douglas County" },
    { value: "leavenworth", label: "Leavenworth County" },
    { value: "butler", label: "Butler County" },
    { value: "riley", label: "Riley County" },
    { value: "reno", label: "Reno County" },
    { value: "other", label: "Other" }
  ],
  "kentucky": [
    { value: "jefferson", label: "Jefferson County" },
    { value: "fayette", label: "Fayette County" },
    { value: "kenton", label: "Kenton County" },
    { value: "boone", label: "Boone County" },
    { value: "warren", label: "Warren County" },
    { value: "hardin", label: "Hardin County" },
    { value: "daviess", label: "Daviess County" },
    { value: "campbell", label: "Campbell County" },
    { value: "mccracken", label: "McCracken County" },
    { value: "oldham", label: "Oldham County" },
    { value: "other", label: "Other" }
  ],
  "louisiana": [
    { value: "orleans", label: "Orleans Parish" },
    { value: "jefferson", label: "Jefferson Parish" },
    { value: "east-baton-rouge", label: "East Baton Rouge Parish" },
    { value: "caddo", label: "Caddo Parish" },
    { value: "calcasieu", label: "Calcasieu Parish" },
    { value: "lafayette", label: "Lafayette Parish" },
    { value: "st-tammany", label: "St. Tammany Parish" },
    { value: "rapides", label: "Rapides Parish" },
    { value: "ouachita", label: "Ouachita Parish" },
    { value: "bossier", label: "Bossier Parish" },
    { value: "other", label: "Other" }
  ],
  "maine": [
    { value: "cumberland", label: "Cumberland County" },
    { value: "york", label: "York County" },
    { value: "penobscot", label: "Penobscot County" },
    { value: "kennebec", label: "Kennebec County" },
    { value: "androscoggin", label: "Androscoggin County" },
    { value: "hancock", label: "Hancock County" },
    { value: "aroostook", label: "Aroostook County" },
    { value: "other", label: "Other" }
  ],
  "maryland": [
    { value: "montgomery", label: "Montgomery County" },
    { value: "prince-georges", label: "Prince George's County" },
    { value: "baltimore", label: "Baltimore County" },
    { value: "anne-arundel", label: "Anne Arundel County" },
    { value: "howard", label: "Howard County" },
    { value: "baltimore-city", label: "Baltimore City" },
    { value: "frederick", label: "Frederick County" },
    { value: "harford", label: "Harford County" },
    { value: "carroll", label: "Carroll County" },
    { value: "other", label: "Other" }
  ],
  "massachusetts": [
    { value: "middlesex", label: "Middlesex County" },
    { value: "worcester", label: "Worcester County" },
    { value: "suffolk", label: "Suffolk County" },
    { value: "essex", label: "Essex County" },
    { value: "norfolk", label: "Norfolk County" },
    { value: "bristol", label: "Bristol County" },
    { value: "plymouth", label: "Plymouth County" },
    { value: "hampden", label: "Hampden County" },
    { value: "barnstable", label: "Barnstable County" },
    { value: "other", label: "Other" }
  ],
  "michigan": [
    { value: "wayne", label: "Wayne County" },
    { value: "oakland", label: "Oakland County" },
    { value: "macomb", label: "Macomb County" },
    { value: "kent", label: "Kent County" },
    { value: "genesse", label: "Genesee County" },
    { value: "washtenaw", label: "Washtenaw County" },
    { value: "livingston", label: "Livingston County" },
    { value: "st-clair", label: "St. Clair County" },
    { value: "kalamazoo", label: "Kalamazoo County" },
    { value: "ottawa", label: "Ottawa County" },
    { value: "other", label: "Other" }
  ],
  "minnesota": [
    { value: "hennepin", label: "Hennepin County" },
    { value: "ramsey", label: "Ramsey County" },
    { value: "dakota", label: "Dakota County" },
    { value: "anoka", label: "Anoka County" },
    { value: "washington", label: "Washington County" },
    { value: "st-louis", label: "St. Louis County" },
    { value: "olmsted", label: "Olmsted County" },
    { value: "wright", label: "Wright County" },
    { value: "scott", label: "Scott County" },
    { value: "other", label: "Other" }
  ],
  "mississippi": [
    { value: "hinds", label: "Hinds County" },
    { value: "harrison", label: "Harrison County" },
    { value: "desoto", label: "DeSoto County" },
    { value: "rankin", label: "Rankin County" },
    { value: "madison", label: "Madison County" },
    { value: "jones", label: "Jones County" },
    { value: "lauderdale", label: "Lauderdale County" },
    { value: "jackson", label: "Jackson County" },
    { value: "lamar", label: "Lamar County" },
    { value: "other", label: "Other" }
  ],
  "missouri": [
    { value: "st-louis", label: "St. Louis County" },
    { value: "jackson", label: "Jackson County" },
    { value: "st-charles", label: "St. Charles County" },
    { value: "st-louis-city", label: "St. Louis City" },
    { value: "green", label: "Greene County" },
    { value: "clay", label: "Clay County" },
    { value: "platte", label: "Platte County" },
    { value: "boone", label: "Boone County" },
    { value: "joplin", label: "Jasper County" },
    { value: "other", label: "Other" }
  ],
  "montana": [
    { value: "yellowstone", label: "Yellowstone County" },
    { value: "missoula", label: "Missoula County" },
    { value: "gallatin", label: "Gallatin County" },
    { value: "flathead", label: "Flathead County" },
    { value: "cascade", label: "Cascade County" },
    { value: "lewis-clark", label: "Lewis and Clark County" },
    { value: "ravalli", label: "Ravalli County" },
    { value: "silver-bow", label: "Silver Bow County" },
    { value: "other", label: "Other" }
  ],
  "nebraska": [
    { value: "douglas", label: "Douglas County" },
    { value: "lancaster", label: "Lancaster County" },
    { value: "sarpy", label: "Sarpy County" },
    { value: "buffalo", label: "Buffalo County" },
    { value: "hall", label: "Hall County" },
    { value: "platte", label: "Platte County" },
    { value: "dakota", label: "Dakota County" },
    { value: "madison", label: "Madison County" },
    { value: "other", label: "Other" }
  ],
  "nevada": [
    { value: "clark", label: "Clark County" },
    { value: "washoe", label: "Washoe County" },
    { value: "carson-city", label: "Carson City" },
    { value: "lyon", label: "Lyon County" },
    { value: "elko", label: "Elko County" },
    { value: "douglas", label: "Douglas County" },
    { value: "churchill", label: "Churchill County" },
    { value: "humboldt", label: "Humboldt County" },
    { value: "other", label: "Other" }
  ],
  "new-hampshire": [
    { value: "hillsborough", label: "Hillsborough County" },
    { value: "rockingham", label: "Rockingham County" },
    { value: "merrimack", label: "Merrimack County" },
    { value: "strafford", label: "Strafford County" },
    { value: "cheshire", label: "Cheshire County" },
    { value: "grafton", label: "Grafton County" },
    { value: "belknap", label: "Belknap County" },
    { value: "coos", label: "Coos County" },
    { value: "other", label: "Other" }
  ],
  "new-jersey": [
    { value: "bergen", label: "Bergen County" },
    { value: "middlesex", label: "Middlesex County" },
    { value: "essex", label: "Essex County" },
    { value: "hudson", label: "Hudson County" },
    { value: "monmouth", label: "Monmouth County" },
    { value: "ocean", label: "Ocean County" },
    { value: "union", label: "Union County" },
    { value: "camden", label: "Camden County" },
    { value: "morris", label: "Morris County" },
    { value: "burlington", label: "Burlington County" },
    { value: "other", label: "Other" }
  ],
  "new-mexico": [
    { value: "bernalillo", label: "Bernalillo County" },
    { value: "dona-ana", label: "Doña Ana County" },
    { value: "santa-fe", label: "Santa Fe County" },
    { value: "sandoval", label: "Sandoval County" },
    { value: "valencia", label: "Valencia County" },
    { value: "san-juan", label: "San Juan County" },
    { value: "chaves", label: "Chaves County" },
    { value: "eddy", label: "Eddy County" },
    { value: "other", label: "Other" }
  ],
  "new-york": [
    { value: "kings", label: "Kings County (Brooklyn)" },
    { value: "queens", label: "Queens County" },
    { value: "new-york", label: "New York County (Manhattan)" },
    { value: "suffolk", label: "Suffolk County" },
    { value: "bronx", label: "Bronx County" },
    { value: "nassau", label: "Nassau County" },
    { value: "westchester", label: "Westchester County" },
    { value: "erie", label: "Erie County" },
    { value: "monroe", label: "Monroe County" },
    { value: "richmond", label: "Richmond County (Staten Island)" },
    { value: "onondaga", label: "Onondaga County" },
    { value: "orange", label: "Orange County" },
    { value: "other", label: "Other" }
  ],
  "north-carolina": [
    { value: "mecklenburg", label: "Mecklenburg County" },
    { value: "wake", label: "Wake County" },
    { value: "guilford", label: "Guilford County" },
    { value: "forsyth", label: "Forsyth County" },
    { value: "durham", label: "Durham County" },
    { value: "cumberland", label: "Cumberland County" },
    { value: "buncombe", label: "Buncombe County" },
    { value: "union", label: "Union County" },
    { value: "gaston", label: "Gaston County" },
    { value: "new-hanover", label: "New Hanover County" },
    { value: "other", label: "Other" }
  ],
  "north-dakota": [
    { value: "cass", label: "Cass County" },
    { value: "burleigh", label: "Burleigh County" },
    { value: "grand-forks", label: "Grand Forks County" },
    { value: "ward", label: "Ward County" },
    { value: "stark", label: "Stark County" },
    { value: "williams", label: "Williams County" },
    { value: "morton", label: "Morton County" },
    { value: "other", label: "Other" }
  ],
  "ohio": [
    { value: "franklin", label: "Franklin County" },
    { value: "cuyahoga", label: "Cuyahoga County" },
    { value: "hamilton", label: "Hamilton County" },
    { value: "summit", label: "Summit County" },
    { value: "montgomery", label: "Montgomery County" },
    { value: "stark", label: "Stark County" },
    { value: "lucas", label: "Lucas County" },
    { value: "butler", label: "Butler County" },
    { value: "lorain", label: "Lorain County" },
    { value: "warren", label: "Warren County" },
    { value: "other", label: "Other" }
  ],
  "oklahoma": [
    { value: "oklahoma", label: "Oklahoma County" },
    { value: "tulsa", label: "Tulsa County" },
    { value: "cleveland", label: "Cleveland County" },
    { value: "canadian", label: "Canadian County" },
    { value: "rogers", label: "Rogers County" },
    { value: "comanche", label: "Comanche County" },
    { value: "payne", label: "Payne County" },
    { value: "pottawatomie", label: "Pottawatomie County" },
    { value: "wagoner", label: "Wagoner County" },
    { value: "other", label: "Other" }
  ],
  "oregon": [
    { value: "multnomah", label: "Multnomah County" },
    { value: "washington", label: "Washington County" },
    { value: "clackamas", label: "Clackamas County" },
    { value: "lane", label: "Lane County" },
    { value: "marion", label: "Marion County" },
    { value: "deschutes", label: "Deschutes County" },
    { value: "jackson", label: "Jackson County" },
    { value: "yamhill", label: "Yamhill County" },
    { value: "linn", label: "Linn County" },
    { value: "other", label: "Other" }
  ],
  "pennsylvania": [
    { value: "philadelphia", label: "Philadelphia County" },
    { value: "allegheny", label: "Allegheny County" },
    { value: "montgomery", label: "Montgomery County" },
    { value: "bucks", label: "Bucks County" },
    { value: "delaware", label: "Delaware County" },
    { value: "chester", label: "Chester County" },
    { value: "lancaster", label: "Lancaster County" },
    { value: "york", label: "York County" },
    { value: "lehigh", label: "Lehigh County" },
    { value: "berks", label: "Berks County" },
    { value: "other", label: "Other" }
  ],
  "rhode-island": [
    { value: "providence", label: "Providence County" },
    { value: "kent", label: "Kent County" },
    { value: "washington", label: "Washington County" },
    { value: "bristol", label: "Bristol County" },
    { value: "newport", label: "Newport County" }
  ],
  "south-carolina": [
    { value: "greenville", label: "Greenville County" },
    { value: "richland", label: "Richland County" },
    { value: "charleston", label: "Charleston County" },
    { value: "spartanburg", label: "Spartanburg County" },
    { value: "horry", label: "Horry County" },
    { value: "lexington", label: "Lexington County" },
    { value: "york", label: "York County" },
    { value: "berkeley", label: "Berkeley County" },
    { value: "sumter", label: "Sumter County" },
    { value: "other", label: "Other" }
  ],
  "south-dakota": [
    { value: "minnehaha", label: "Minnehaha County" },
    { value: "pennington", label: "Pennington County" },
    { value: "lincoln", label: "Lincoln County" },
    { value: "brown", label: "Brown County" },
    { value: "brookings", label: "Brookings County" },
    { value: "codington", label: "Codington County" },
    { value: "meade", label: "Meade County" },
    { value: "other", label: "Other" }
  ],
  "tennessee": [
    { value: "shelby", label: "Shelby County" },
    { value: "davidson", label: "Davidson County" },
    { value: "knox", label: "Knox County" },
    { value: "hamilton", label: "Hamilton County" },
    { value: "rutherford", label: "Rutherford County" },
    { value: "williamson", label: "Williamson County" },
    { value: "sumner", label: "Sumner County" },
    { value: "sullivan", label: "Sullivan County" },
    { value: "montgomery", label: "Montgomery County" },
    { value: "other", label: "Other" }
  ],
  "texas": [
    { value: "harris", label: "Harris County" },
    { value: "dallas", label: "Dallas County" },
    { value: "tarrant", label: "Tarrant County" },
    { value: "bexar", label: "Bexar County" },
    { value: "travis", label: "Travis County" },
    { value: "collin", label: "Collin County" },
    { value: "fort-bend", label: "Fort Bend County" },
    { value: "denton", label: "Denton County" },
    { value: "montgomery", label: "Montgomery County" },
    { value: "hidalgo", label: "Hidalgo County" },
    { value: "el-paso", label: "El Paso County" },
    { value: "galveston", label: "Galveston County" },
    { value: "other", label: "Other" }
  ],
  "utah": [
    { value: "salt-lake", label: "Salt Lake County" },
    { value: "utah", label: "Utah County" },
    { value: "davis", label: "Davis County" },
    { value: "weber", label: "Weber County" },
    { value: "washington", label: "Washington County" },
    { value: "cache", label: "Cache County" },
    { value: "summit", label: "Summit County" },
    { value: "tooele", label: "Tooele County" },
    { value: "other", label: "Other" }
  ],
  "vermont": [
    { value: "chittenden", label: "Chittenden County" },
    { value: "rutland", label: "Rutland County" },
    { value: "washington", label: "Washington County" },
    { value: "windsor", label: "Windsor County" },
    { value: "franklin", label: "Franklin County" },
    { value: "orleans", label: "Orleans County" },
    { value: "addison", label: "Addison County" },
    { value: "bennington", label: "Bennington County" },
    { value: "other", label: "Other" }
  ],
  "virginia": [
    { value: "fairfax", label: "Fairfax County" },
    { value: "prince-william", label: "Prince William County" },
    { value: "loudoun", label: "Loudoun County" },
    { value: "chesterfield", label: "Chesterfield County" },
    { value: "norfolk", label: "Norfolk County" },
    { value: "virginia-beach", label: "Virginia Beach City" },
    { value: "henrico", label: "Henrico County" },
    { value: "arlington", label: "Arlington County" },
    { value: "portsmouth", label: "Portsmouth City" },
    { value: "other", label: "Other" }
  ],
  "washington": [
    { value: "king", label: "King County" },
    { value: "pierce", label: "Pierce County" },
    { value: "snohomish", label: "Snohomish County" },
    { value: "spokane", label: "Spokane County" },
    { value: "clark", label: "Clark County" },
    { value: "thurston", label: "Thurston County" },
    { value: "kitsap", label: "Kitsap County" },
    { value: "yakima", label: "Yakima County" },
    { value: "whatcom", label: "Whatcom County" },
    { value: "other", label: "Other" }
  ],
  "west-virginia": [
    { value: "kanawha", label: "Kanawha County" },
    { value: "berkeley", label: "Berkeley County" },
    { value: "monongalia", label: "Monongalia County" },
    { value: "cabell", label: "Cabell County" },
    { value: "jefferson", label: "Jefferson County" },
    { value: "wood", label: "Wood County" },
    { value: "raleigh", label: "Raleigh County" },
    { value: "marshall", label: "Marshall County" },
    { value: "other", label: "Other" }
  ],
  "wisconsin": [
    { value: "milwaukee", label: "Milwaukee County" },
    { value: "dane", label: "Dane County" },
    { value: "waukesha", label: "Waukesha County" },
    { value: "brown", label: "Brown County" },
    { value: "racine", label: "Racine County" },
    { value: "kenosha", label: "Kenosha County" },
    { value: "winnebago", label: "Winnebago County" },
    { value: "outagamie", label: "Outagamie County" },
    { value: "rock", label: "Rock County" },
    { value: "other", label: "Other" }
  ],
  "wyoming": [
    { value: "laramie", label: "Laramie County" },
    { value: "natrona", label: "Natrona County" },
    { value: "campbell", label: "Campbell County" },
    { value: "sweetwater", label: "Sweetwater County" },
    { value: "fremont", label: "Fremont County" },
    { value: "albany", label: "Albany County" },
    { value: "park", label: "Park County" },
    { value: "teton", label: "Teton County" },
    { value: "other", label: "Other" }
  ]
}

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<PopupFormData>({
    state: "",
    county: "",
    source: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Show popup on first visit (check localStorage)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup')
    if (!hasSeenPopup) {
      // Delay popup appearance by 2 seconds for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleInputChange = (field: keyof PopupFormData, value: string) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        [field]: value
      }
      
      // If state changes, reset county
      if (field === 'state') {
        newData.county = ""
      }
      
      return newData
    })
    // Clear messages when user starts typing
    if (successMessage || errorMessage) {
      setSuccessMessage("")
      setErrorMessage("")
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    // Mark as seen so it doesn't show again
    localStorage.setItem('hasSeenWelcomePopup', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous messages
    setSuccessMessage("")
    setErrorMessage("")
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in your name, email, and phone number")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'welcome-popup',
          subject: 'Welcome Popup - Property Access Request'
        }),
      })

      if (response.ok) {
        setSuccessMessage("Thank you! You now have access to view our properties. Check your email for confirmation.")
        // Close popup after 3 seconds on success
        setTimeout(() => {
          handleClose()
        }, 3000)
      } else {
        setErrorMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get counties for the selected state
  const availableCounties = formData.state ? (COUNTIES_BY_STATE[formData.state] || []) : []

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-[#F8F6F0] border-0 rounded-2xl shadow-2xl">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900 font-serif">
            Get Immediate Access To View Our Properties
          </DialogTitle>
          <p className="text-gray-700 text-sm mt-2">
            Submit the form below to get immediate access and get on our deals alert email list:
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* State Selection */}
          <div>
            <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
              <SelectTrigger className="bg-[#F0EDE5] border-gray-300 text-gray-900">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* County Selection - only show if state is selected */}
          {formData.state && (
            <div>
              <Select value={formData.county} onValueChange={(value) => handleInputChange('county', value)}>
                <SelectTrigger className="bg-[#F0EDE5] border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select a county" />
                </SelectTrigger>
                <SelectContent>
                  {availableCounties.length > 0 ? (
                    availableCounties.map((county) => (
                      <SelectItem key={county.value} value={county.value}>
                        {county.label}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="other">Other</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* How did you find us? */}
          <div>
            <Select value={formData.source} onValueChange={(value) => handleInputChange('source', value)}>
              <SelectTrigger className="bg-[#F0EDE5] border-gray-300 text-gray-900">
                <SelectValue placeholder="How did you find us?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="advertisement">Advertisement</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Your Name */}
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="bg-[#F0EDE5] border-gray-300 text-gray-900 placeholder:text-gray-500"
            required
          />

          {/* Your Email */}
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-[#F0EDE5] border-gray-300 text-gray-900 placeholder:text-gray-500"
            required
          />

          {/* Your Phone Number */}
          <Input
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-[#F0EDE5] border-gray-300 text-gray-900 placeholder:text-gray-500"
            required
          />

          {/* Additional Information */}
          <Textarea
            placeholder="Additional Information"
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            className="bg-[#F0EDE5] border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-[80px] resize-none"
            rows={3}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-lg disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "See Properties"}
          </Button>
        </form>

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <p className="text-green-700 text-sm">{successMessage}</p>
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

      </DialogContent>
    </Dialog>
  )
}
