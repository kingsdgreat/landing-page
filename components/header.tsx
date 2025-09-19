"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar with contact info and social links */}
      <div className="bg-[#0E2207] text-white py-2 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm ">
        <div className="flex items-center gap-3">
            <Facebook className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Twitter className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Linkedin className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-primary" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>269 24th St, Suite 920 Oakland, CA. 94216</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>offers@sundiallands.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-border py-4 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center ">
            <img src="/logo.svg" alt="Sundial Lands" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium">
              About
            </Link>
            <Link href="/properties" className="text-foreground hover:text-primary font-medium">
              Properties
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium">
              Contact
            </Link>
            <Link href="/buy-from-us" className="text-foreground hover:text-primary font-medium">
              Buy From Us
            </Link>
          </nav>

          <Button asChild className="bg-[#1A5DC9] hover:bg-primary/90">
            <Link href="/schedule-visit">Schedule A Visit</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
