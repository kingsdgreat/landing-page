"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, MessageSquare } from "lucide-react"
import type { Property } from "@/lib/types"

interface PropertyContactProps {
  property: Property
}

export function PropertyContact({ property }: PropertyContactProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Book Property</CardTitle>
        <p className="text-sm text-gray-600">
          Fill the form and send us a message while you wait for us to get back to you briefly
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Your name" className="pl-10" />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Your email address" className="pl-10" />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Your Phone number" className="pl-10" />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Textarea
            placeholder="Type your message"
            className="pl-10 min-h-[100px]"
          />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>

        <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
          Call Agent
        </Button>
      </CardContent>
    </Card>
  )
}
