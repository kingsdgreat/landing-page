"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import type { Property } from "@/lib/types"

interface PropertyContactProps {
  property: Property
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function PropertyContact({ property }: PropertyContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
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
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in all required fields")
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || `I'm interested in ${property.title}. Please contact me with more information.`,
          propertyTitle: property.title,
          propertyLocation: property.location,
          propertyPrice: property.price,
          source: 'property-details'
        }),
      })

      if (response.ok) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
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

  const handleCallAgent = () => {
    // You can replace this with your actual phone number
    window.open('tel:+3234102500', '_self')
  }

  return (
    <Card className="lg:sticky lg:top-4">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Book Property</CardTitle>
        <p className="text-muted-foreground text-sm sm:text-base">
          Fill the form and send us a message while you wait for us to get back to you briefly.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Your name" 
              className="pl-10"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Your email address" 
              type="email"
              className="pl-10"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Your Phone number" 
              type="tel"
              className="pl-10"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Textarea 
              placeholder="Type your message"
              className="pl-10 min-h-[100px]"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

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

        <Button 
          variant="outline" 
          className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 mt-4"
          onClick={handleCallAgent}
        >
          Call Agent
        </Button>
      </CardContent>
    </Card>
  )
}
