"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  return (
    <Card className="h-fit">
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="text-sm font-medium mb-2 block">First Name</label>
          <Input placeholder="Enter your first name" />
          </div>
          <div>
          <label className="text-sm font-medium mb-2 block">Last Name</label>
          <Input placeholder="Enter your last name" />
          </div>

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
