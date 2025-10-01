"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, User, Mail, Phone, CheckCircle, ChevronDown } from "lucide-react"

interface FormData {
  location: string
  name: string
  email: string
  phone: string
}

const LOCATIONS = [
  "California - Oakland",
  "California - Los Angeles", 
  "California - San Francisco",
  "California - San Diego",
  "California - Sacramento",
  "Colorado - Denver",
  "Colorado - Colorado Springs",
  "Colorado - Boulder",
  "Colorado - Fort Collins",
  "Texas - Austin",
  "Texas - Houston",
  "Texas - Dallas",
  "Texas - San Antonio",
  "Texas - Fort Worth",
  "Florida - Miami",
  "Florida - Orlando",
  "Florida - Tampa",
  "Florida - Jacksonville",
  "Arizona - Phoenix",
  "Arizona - Tucson",
  "Arizona - Scottsdale",
  "Nevada - Las Vegas",
  "Nevada - Reno",
  "Utah - Salt Lake City",
  "Utah - Provo",
  "Oregon - Portland",
  "Oregon - Eugene",
  "Washington - Seattle",
  "Washington - Spokane",
  "Idaho - Boise",
  "Montana - Billings",
  "Montana - Missoula",
  "Wyoming - Cheyenne",
  "Wyoming - Casper",
  "New Mexico - Albuquerque",
  "New Mexico - Santa Fe",
  "Oklahoma - Oklahoma City",
  "Oklahoma - Tulsa",
  "Kansas - Wichita",
  "Kansas - Kansas City",
  "Nebraska - Omaha",
  "Nebraska - Lincoln",
  "North Dakota - Fargo",
  "South Dakota - Sioux Falls",
  "Minnesota - Minneapolis",
  "Minnesota - Saint Paul",
  "Iowa - Des Moines",
  "Iowa - Cedar Rapids",
  "Missouri - St. Louis",
  "Missouri - Kansas City",
  "Arkansas - Little Rock",
  "Arkansas - Fayetteville",
  "Louisiana - New Orleans",
  "Louisiana - Baton Rouge",
  "Mississippi - Jackson",
  "Mississippi - Gulfport",
  "Alabama - Birmingham",
  "Alabama - Mobile",
  "Tennessee - Nashville",
  "Tennessee - Memphis",
  "Kentucky - Louisville",
  "Kentucky - Lexington",
  "Georgia - Atlanta",
  "Georgia - Savannah",
  "South Carolina - Charleston",
  "South Carolina - Columbia",
  "North Carolina - Charlotte",
  "North Carolina - Raleigh",
  "Virginia - Richmond",
  "Virginia - Virginia Beach",
  "West Virginia - Charleston",
  "West Virginia - Huntington",
  "Maryland - Baltimore",
  "Maryland - Annapolis",
  "Delaware - Wilmington",
  "Delaware - Dover",
  "Pennsylvania - Philadelphia",
  "Pennsylvania - Pittsburgh",
  "New Jersey - Newark",
  "New Jersey - Jersey City",
  "New York - New York City",
  "New York - Albany",
  "Connecticut - Hartford",
  "Connecticut - Bridgeport",
  "Rhode Island - Providence",
  "Rhode Island - Warwick",
  "Massachusetts - Boston",
  "Massachusetts - Worcester",
  "Vermont - Burlington",
  "Vermont - Montpelier",
  "New Hampshire - Manchester",
  "New Hampshire - Nashua",
  "Maine - Portland",
  "Maine - Bangor",
  "Alaska - Anchorage",
  "Alaska - Fairbanks",
  "Hawaii - Honolulu",
  "Hawaii - Hilo"
]

export function HeroSection() {
  const [formData, setFormData] = useState<FormData>({
    location: "",
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState(LOCATIONS)
  const locationInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear messages when user starts typing
    if (successMessage || errorMessage) {
      setSuccessMessage("")
      setErrorMessage("")
    }
  }

  const handleLocationInput = (value: string) => {
    setFormData(prev => ({ ...prev, location: value }))
    
    // Filter locations based on input
    const filtered = LOCATIONS.filter(location =>
      location.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredLocations(filtered)
    setShowLocationDropdown(value.length > 0 && filtered.length > 0)
  }

  const selectLocation = (location: string) => {
    setFormData(prev => ({ ...prev, location }))
    setShowLocationDropdown(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous messages
    setSuccessMessage("")
    setErrorMessage("")
    
    // Basic validation
    if (!formData.location || !formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in all fields")
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
      // Here you would typically send the data to your backend API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: formData.location,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Interest in properties in ${formData.location}`,
          source: 'hero-section'
        }),
      })

      if (response.ok) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.")
        // Reset form
        setFormData({
          location: "",
          name: "",
          email: "",
          phone: ""
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Find Your Perfect Land Properties</h1>
        <p className="text-xl mb-8 text-balance">Discover premium land properties for sale across prime locations</p>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-5xl mx-auto shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2 relative">
              <MapPin className="h-5 w-5 text-[#000]" />
              <div className="relative flex-1">
                <Input
                  ref={locationInputRef}
                  placeholder="Location"
                  className="border-gray-200 text-gray-900 bg-white "
                  value={formData.location}
                  onChange={(e) => handleLocationInput(e.target.value)}
                  onFocus={() => {
                    if (formData.location.length > 0) {
                      setShowLocationDropdown(true)
                    }
                  }}
                />
                {showLocationDropdown && filteredLocations.length > 0 && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 text-left   right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
                  >
                    {filteredLocations.map((location, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm"
                        onClick={() => selectLocation(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-[#000]" />
              <Input 
                placeholder="Name" 
                className="border-gray-200 text-gray-900 bg-white placeholder:text-gray-500"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#000]" />
              <Input 
                placeholder="Email" 
                type="email"
                className="border-gray-200 text-gray-900 bg-white placeholder:text-gray-500"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[#000]" />
              <Input 
                placeholder="Phone" 
                type="tel"
                className="border-gray-200 text-gray-900 bg-white placeholder:text-gray-500"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-8 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <p className="text-green-700 text-sm">{successMessage}</p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
          )}
        </form>
      </div>
    </section>
  )
}
