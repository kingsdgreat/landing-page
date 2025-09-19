"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, CheckCircle } from "lucide-react"

interface PopupFormData {
  location: string
  county: string
  source: string
  name: string
  email: string
  phone: string
  additionalInfo: string
}

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<PopupFormData>({
    location: "",
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
          {/* Where do you want to own land? */}
          <div>
            <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
              <SelectTrigger className="bg-[#F0EDE5] border-gray-300 text-gray-900">
                <SelectValue placeholder="Where do you want to own land?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="colorado">Colorado</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
                <SelectItem value="arizona">Arizona</SelectItem>
                <SelectItem value="nevada">Nevada</SelectItem>
                <SelectItem value="utah">Utah</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* County */}
          <div>
            <Select value={formData.county} onValueChange={(value) => handleInputChange('county', value)}>
              <SelectTrigger className="bg-[#F0EDE5] border-gray-300 text-gray-900">
                <SelectValue placeholder="County" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alameda">Alameda County</SelectItem>
                <SelectItem value="contra-costa">Contra Costa County</SelectItem>
                <SelectItem value="marin">Marin County</SelectItem>
                <SelectItem value="napa">Napa County</SelectItem>
                <SelectItem value="sonoma">Sonoma County</SelectItem>
                <SelectItem value="solano">Solano County</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
            className="w-full bg-[#8B7355] hover:bg-[#7A6349] text-white font-medium py-3 rounded-lg disabled:opacity-50"
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