"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, User, Mail, Phone, CheckCircle } from "lucide-react"

interface FormData {
  location: string
  name: string
  email: string
  phone: string
}

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
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Find Your Perfect Land Properties</h1>
        <p className="text-xl mb-8 text-balance">Discover premium land properties for sale across prime locations</p>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#000]" />
              <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                <SelectTrigger className="border-gray-200 text-gray-900 bg-white">
                  <SelectValue placeholder="Location" className="text-gray-900" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="california-oakland" className="text-gray-900 hover:bg-gray-100">California - Oakland</SelectItem>
                  <SelectItem value="california-los-angeles" className="text-gray-900 hover:bg-gray-100">California - Los Angeles</SelectItem>
                  <SelectItem value="california-san-francisco" className="text-gray-900 hover:bg-gray-100">California - San Francisco</SelectItem>
                  <SelectItem value="california-san-diego" className="text-gray-900 hover:bg-gray-100">California - San Diego</SelectItem>
                  <SelectItem value="california-sacramento" className="text-gray-900 hover:bg-gray-100">California - Sacramento</SelectItem>
                  <SelectItem value="colorado-denver" className="text-gray-900 hover:bg-gray-100">Colorado - Denver</SelectItem>
                  <SelectItem value="colorado-colorado-springs" className="text-gray-900 hover:bg-gray-100">Colorado - Colorado Springs</SelectItem>
                  <SelectItem value="colorado-boulder" className="text-gray-900 hover:bg-gray-100">Colorado - Boulder</SelectItem>
                  <SelectItem value="colorado-fort-collins" className="text-gray-900 hover:bg-gray-100">Colorado - Fort Collins</SelectItem>
                  <SelectItem value="texas-austin" className="text-gray-900 hover:bg-gray-100">Texas - Austin</SelectItem>
                  <SelectItem value="texas-houston" className="text-gray-900 hover:bg-gray-100">Texas - Houston</SelectItem>
                  <SelectItem value="texas-dallas" className="text-gray-900 hover:bg-gray-100">Texas - Dallas</SelectItem>
                  <SelectItem value="texas-san-antonio" className="text-gray-900 hover:bg-gray-100">Texas - San Antonio</SelectItem>
                  <SelectItem value="texas-fort-worth" className="text-gray-900 hover:bg-gray-100">Texas - Fort Worth</SelectItem>
                  <SelectItem value="florida-miami" className="text-gray-900 hover:bg-gray-100">Florida - Miami</SelectItem>
                  <SelectItem value="florida-orlando" className="text-gray-900 hover:bg-gray-100">Florida - Orlando</SelectItem>
                  <SelectItem value="florida-tampa" className="text-gray-900 hover:bg-gray-100">Florida - Tampa</SelectItem>
                  <SelectItem value="florida-jacksonville" className="text-gray-900 hover:bg-gray-100">Florida - Jacksonville</SelectItem>
                  <SelectItem value="arizona-phoenix" className="text-gray-900 hover:bg-gray-100">Arizona - Phoenix</SelectItem>
                  <SelectItem value="arizona-tucson" className="text-gray-900 hover:bg-gray-100">Arizona - Tucson</SelectItem>
                  <SelectItem value="arizona-scottsdale" className="text-gray-900 hover:bg-gray-100">Arizona - Scottsdale</SelectItem>
                  <SelectItem value="nevada-las-vegas" className="text-gray-900 hover:bg-gray-100">Nevada - Las Vegas</SelectItem>
                  <SelectItem value="nevada-reno" className="text-gray-900 hover:bg-gray-100">Nevada - Reno</SelectItem>
                  <SelectItem value="utah-salt-lake-city" className="text-gray-900 hover:bg-gray-100">Utah - Salt Lake City</SelectItem>
                  <SelectItem value="utah-provo" className="text-gray-900 hover:bg-gray-100">Utah - Provo</SelectItem>
                  <SelectItem value="oregon-portland" className="text-gray-900 hover:bg-gray-100">Oregon - Portland</SelectItem>
                  <SelectItem value="oregon-eugene" className="text-gray-900 hover:bg-gray-100">Oregon - Eugene</SelectItem>
                  <SelectItem value="washington-seattle" className="text-gray-900 hover:bg-gray-100">Washington - Seattle</SelectItem>
                  <SelectItem value="washington-spokane" className="text-gray-900 hover:bg-gray-100">Washington - Spokane</SelectItem>
                  <SelectItem value="idaho-boise" className="text-gray-900 hover:bg-gray-100">Idaho - Boise</SelectItem>
                  <SelectItem value="montana-billings" className="text-gray-900 hover:bg-gray-100">Montana - Billings</SelectItem>
                  <SelectItem value="montana-missoula" className="text-gray-900 hover:bg-gray-100">Montana - Missoula</SelectItem>
                  <SelectItem value="wyoming-cheyenne" className="text-gray-900 hover:bg-gray-100">Wyoming - Cheyenne</SelectItem>
                  <SelectItem value="wyoming-casper" className="text-gray-900 hover:bg-gray-100">Wyoming - Casper</SelectItem>
                  <SelectItem value="new-mexico-albuquerque" className="text-gray-900 hover:bg-gray-100">New Mexico - Albuquerque</SelectItem>
                  <SelectItem value="new-mexico-santa-fe" className="text-gray-900 hover:bg-gray-100">New Mexico - Santa Fe</SelectItem>
                  <SelectItem value="oklahoma-oklahoma-city" className="text-gray-900 hover:bg-gray-100">Oklahoma - Oklahoma City</SelectItem>
                  <SelectItem value="oklahoma-tulsa" className="text-gray-900 hover:bg-gray-100">Oklahoma - Tulsa</SelectItem>
                  <SelectItem value="kansas-wichita" className="text-gray-900 hover:bg-gray-100">Kansas - Wichita</SelectItem>
                  <SelectItem value="kansas-kansas-city" className="text-gray-900 hover:bg-gray-100">Kansas - Kansas City</SelectItem>
                  <SelectItem value="nebraska-omaha" className="text-gray-900 hover:bg-gray-100">Nebraska - Omaha</SelectItem>
                  <SelectItem value="nebraska-lincoln" className="text-gray-900 hover:bg-gray-100">Nebraska - Lincoln</SelectItem>
                  <SelectItem value="north-dakota-fargo" className="text-gray-900 hover:bg-gray-100">North Dakota - Fargo</SelectItem>
                  <SelectItem value="south-dakota-sioux-falls" className="text-gray-900 hover:bg-gray-100">South Dakota - Sioux Falls</SelectItem>
                  <SelectItem value="minnesota-minneapolis" className="text-gray-900 hover:bg-gray-100">Minnesota - Minneapolis</SelectItem>
                  <SelectItem value="minnesota-saint-paul" className="text-gray-900 hover:bg-gray-100">Minnesota - Saint Paul</SelectItem>
                  <SelectItem value="iowa-des-moines" className="text-gray-900 hover:bg-gray-100">Iowa - Des Moines</SelectItem>
                  <SelectItem value="iowa-cedar-rapids" className="text-gray-900 hover:bg-gray-100">Iowa - Cedar Rapids</SelectItem>
                  <SelectItem value="missouri-st-louis" className="text-gray-900 hover:bg-gray-100">Missouri - St. Louis</SelectItem>
                  <SelectItem value="missouri-kansas-city" className="text-gray-900 hover:bg-gray-100">Missouri - Kansas City</SelectItem>
                  <SelectItem value="arkansas-little-rock" className="text-gray-900 hover:bg-gray-100">Arkansas - Little Rock</SelectItem>
                  <SelectItem value="arkansas-fayetteville" className="text-gray-900 hover:bg-gray-100">Arkansas - Fayetteville</SelectItem>
                  <SelectItem value="louisiana-new-orleans" className="text-gray-900 hover:bg-gray-100">Louisiana - New Orleans</SelectItem>
                  <SelectItem value="louisiana-baton-rouge" className="text-gray-900 hover:bg-gray-100">Louisiana - Baton Rouge</SelectItem>
                  <SelectItem value="mississippi-jackson" className="text-gray-900 hover:bg-gray-100">Mississippi - Jackson</SelectItem>
                  <SelectItem value="mississippi-gulfport" className="text-gray-900 hover:bg-gray-100">Mississippi - Gulfport</SelectItem>
                  <SelectItem value="alabama-birmingham" className="text-gray-900 hover:bg-gray-100">Alabama - Birmingham</SelectItem>
                  <SelectItem value="alabama-mobile" className="text-gray-900 hover:bg-gray-100">Alabama - Mobile</SelectItem>
                  <SelectItem value="tennessee-nashville" className="text-gray-900 hover:bg-gray-100">Tennessee - Nashville</SelectItem>
                  <SelectItem value="tennessee-memphis" className="text-gray-900 hover:bg-gray-100">Tennessee - Memphis</SelectItem>
                  <SelectItem value="kentucky-louisville" className="text-gray-900 hover:bg-gray-100">Kentucky - Louisville</SelectItem>
                  <SelectItem value="kentucky-lexington" className="text-gray-900 hover:bg-gray-100">Kentucky - Lexington</SelectItem>
                  <SelectItem value="georgia-atlanta" className="text-gray-900 hover:bg-gray-100">Georgia - Atlanta</SelectItem>
                  <SelectItem value="georgia-savannah" className="text-gray-900 hover:bg-gray-100">Georgia - Savannah</SelectItem>
                  <SelectItem value="south-carolina-charleston" className="text-gray-900 hover:bg-gray-100">South Carolina - Charleston</SelectItem>
                  <SelectItem value="south-carolina-columbia" className="text-gray-900 hover:bg-gray-100">South Carolina - Columbia</SelectItem>
                  <SelectItem value="north-carolina-charlotte" className="text-gray-900 hover:bg-gray-100">North Carolina - Charlotte</SelectItem>
                  <SelectItem value="north-carolina-raleigh" className="text-gray-900 hover:bg-gray-100">North Carolina - Raleigh</SelectItem>
                  <SelectItem value="virginia-richmond" className="text-gray-900 hover:bg-gray-100">Virginia - Richmond</SelectItem>
                  <SelectItem value="virginia-virginia-beach" className="text-gray-900 hover:bg-gray-100">Virginia - Virginia Beach</SelectItem>
                  <SelectItem value="west-virginia-charleston" className="text-gray-900 hover:bg-gray-100">West Virginia - Charleston</SelectItem>
                  <SelectItem value="west-virginia-huntington" className="text-gray-900 hover:bg-gray-100">West Virginia - Huntington</SelectItem>
                  <SelectItem value="maryland-baltimore" className="text-gray-900 hover:bg-gray-100">Maryland - Baltimore</SelectItem>
                  <SelectItem value="maryland-annapolis" className="text-gray-900 hover:bg-gray-100">Maryland - Annapolis</SelectItem>
                  <SelectItem value="delaware-wilmington" className="text-gray-900 hover:bg-gray-100">Delaware - Wilmington</SelectItem>
                  <SelectItem value="delaware-dover" className="text-gray-900 hover:bg-gray-100">Delaware - Dover</SelectItem>
                  <SelectItem value="pennsylvania-philadelphia" className="text-gray-900 hover:bg-gray-100">Pennsylvania - Philadelphia</SelectItem>
                  <SelectItem value="pennsylvania-pittsburgh" className="text-gray-900 hover:bg-gray-100">Pennsylvania - Pittsburgh</SelectItem>
                  <SelectItem value="new-jersey-newark" className="text-gray-900 hover:bg-gray-100">New Jersey - Newark</SelectItem>
                  <SelectItem value="new-jersey-jersey-city" className="text-gray-900 hover:bg-gray-100">New Jersey - Jersey City</SelectItem>
                  <SelectItem value="new-york-new-york-city" className="text-gray-900 hover:bg-gray-100">New York - New York City</SelectItem>
                  <SelectItem value="new-york-albany" className="text-gray-900 hover:bg-gray-100">New York - Albany</SelectItem>
                  <SelectItem value="connecticut-hartford" className="text-gray-900 hover:bg-gray-100">Connecticut - Hartford</SelectItem>
                  <SelectItem value="connecticut-bridgeport" className="text-gray-900 hover:bg-gray-100">Connecticut - Bridgeport</SelectItem>
                  <SelectItem value="rhode-island-providence" className="text-gray-900 hover:bg-gray-100">Rhode Island - Providence</SelectItem>
                  <SelectItem value="rhode-island-warwick" className="text-gray-900 hover:bg-gray-100">Rhode Island - Warwick</SelectItem>
                  <SelectItem value="massachusetts-boston" className="text-gray-900 hover:bg-gray-100">Massachusetts - Boston</SelectItem>
                  <SelectItem value="massachusetts-worcester" className="text-gray-900 hover:bg-gray-100">Massachusetts - Worcester</SelectItem>
                  <SelectItem value="vermont-burlington" className="text-gray-900 hover:bg-gray-100">Vermont - Burlington</SelectItem>
                  <SelectItem value="vermont-montpelier" className="text-gray-900 hover:bg-gray-100">Vermont - Montpelier</SelectItem>
                  <SelectItem value="new-hampshire-manchester" className="text-gray-900 hover:bg-gray-100">New Hampshire - Manchester</SelectItem>
                  <SelectItem value="new-hampshire-nashua" className="text-gray-900 hover:bg-gray-100">New Hampshire - Nashua</SelectItem>
                  <SelectItem value="maine-portland" className="text-gray-900 hover:bg-gray-100">Maine - Portland</SelectItem>
                  <SelectItem value="maine-bangor" className="text-gray-900 hover:bg-gray-100">Maine - Bangor</SelectItem>
                  <SelectItem value="alaska-anchorage" className="text-gray-900 hover:bg-gray-100">Alaska - Anchorage</SelectItem>
                  <SelectItem value="alaska-fairbanks" className="text-gray-900 hover:bg-gray-100">Alaska - Fairbanks</SelectItem>
                  <SelectItem value="hawaii-honolulu" className="text-gray-900 hover:bg-gray-100">Hawaii - Honolulu</SelectItem>
                  <SelectItem value="hawaii-hilo" className="text-gray-900 hover:bg-gray-100">Hawaii - Hilo</SelectItem>
                </SelectContent>
              </Select>
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
