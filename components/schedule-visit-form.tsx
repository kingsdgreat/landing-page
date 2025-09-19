"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ScheduleVisitForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Contact Our Sales Team</CardTitle>
        <p className="text-[#777777]">Get in touch with us.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">First Name</label>
          <Input placeholder="Enter your first name" />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Last Name</label>
          <Input placeholder="Enter your last name" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Email Address</label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Subject</label>
          <Input placeholder="Enter subject" />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Message</label>
          <Textarea placeholder="Type your message here..." className="min-h-[120px]" />
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
      </CardContent>
    </Card>
  )
}
