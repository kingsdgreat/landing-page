export const PROPERTY_CATEGORIES = [
  { value: "all", label: "All Properties" },
  { value: "residential", label: "Residential Lands" },
  { value: "commercial", label: "Commercial Plots" },
  { value: "industrial", label: "Industrial Plots" },
  { value: "agricultural", label: "Agricultural Lands" },
] as const

export const PROPERTY_FEATURES = [
  { value: "utilities", label: "Utilities Available", icon: "Home" },
  { value: "well-rights", label: "Well Rights", icon: "Mountain" },
  { value: "wooded", label: "Wooded Area", icon: "Zap" },
  { value: "mountain-view", label: "Mountain View", icon: "Shield" },
  { value: "paved-access", label: "Paved Access", icon: "MapPin" },
  { value: "building-permitted", label: "Building Permitted", icon: "Building" },
] as const

export const ZONING_TYPES = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "agricultural", label: "Agricultural" },
  { value: "mixed-use", label: "Mixed Use" },
] as const

export const UTILITY_TYPES = [
  { value: "electricity", label: "Electricity" },
  { value: "water", label: "Water" },
  { value: "sewer", label: "Sewer" },
  { value: "gas", label: "Gas" },
  { value: "internet", label: "Internet" },
  { value: "phone", label: "Phone" },
] as const
