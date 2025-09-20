"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="w-full ">
      {/* Top bar with contact info and social links */}
      <div className="bg-[#0E2207] text-white py-2 px-4 sm:px-6 lg:px-10 hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          {/* Social links - hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-3">
            <Facebook className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Twitter className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Linkedin className="h-4 w-4 cursor-pointer hover:text-primary" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-primary" />
          </div>
          
          {/* Contact info - responsive layout */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">269 24th St, Suite 920 Oakland, CA. 94216</span>
              <span className="sm:hidden">Oakland, CA</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">offers@sundiallands.com</span>
              <span className="sm:hidden">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-border py-4 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Sundial Lands" className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative font-medium transition-colors ${
                isActive("/") 
                  ? "text-[#1A5DC9]" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
              {isActive("/") && (
                <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1A5DC9]"></div>
              )}
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium transition-colors ${
                isActive("/about") 
                  ? "text-[#1A5DC9]" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
              {isActive("/about") && (
                <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1A5DC9]"></div>
              )}
            </Link>
            <Link 
              href="/properties" 
              className={`relative font-medium transition-colors ${
                isActive("/properties") 
                  ? "text-[#1A5DC9]" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Properties
              {isActive("/properties") && (
                <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1A5DC9]"></div>
              )}
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium transition-colors ${
                isActive("/contact") 
                  ? "text-[#1A5DC9]" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1A5DC9]"></div>
              )}
            </Link>
            <Link 
              href="/buy-from-us" 
              className={`relative font-medium transition-colors ${
                isActive("/buy-from-us") 
                  ? "text-[#1A5DC9]" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Buy From Us
              {isActive("/buy-from-us") && (
                <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#1A5DC9]"></div>
              )}
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Button asChild className="hidden sm:flex bg-[#1A5DC9] hover:bg-primary/90">
            <Link href="/schedule-visit">Schedule A Visit</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className={`font-medium py-2 transition-colors ${
                  isActive("/") 
                    ? "text-[#1A5DC9]" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`font-medium py-2 transition-colors ${
                  isActive("/about") 
                    ? "text-[#1A5DC9]" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/properties" 
                className={`font-medium py-2 transition-colors ${
                  isActive("/properties") 
                    ? "text-[#1A5DC9]" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium py-2 transition-colors ${
                  isActive("/contact") 
                    ? "text-[#1A5DC9]" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/buy-from-us" 
                className={`font-medium py-2 transition-colors ${
                  isActive("/buy-from-us") 
                    ? "text-[#1A5DC9]" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy From Us
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full bg-[#1A5DC9] hover:bg-primary/90">
                  <Link href="/schedule-visit" onClick={() => setIsMobileMenuOpen(false)}>
                    Schedule A Visit
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
