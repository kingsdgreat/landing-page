"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertiesHero } from "@/components/properties-hero"
import { PropertiesGrid } from "@/components/properties-grid"
import { CTASection } from "@/components/cta-section"
import { getAllProperties } from "@/lib/sanity-queries"
import type { Property } from "@/lib/types"

export default function PropertiesPage() {
  const [allProperties, setAllProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProperties = async () => {
      try {
  const properties = await getAllProperties()
        setAllProperties(properties)
        setFilteredProperties(properties)
      } catch (error) {
        console.error('Error loading properties:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProperties()
  }, [])

  // Filter properties based on search term and category
  useEffect(() => {
    let filtered = allProperties

    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(property => property.category === activeCategory)
    }

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProperties(filtered)
  }, [allProperties, searchTerm, activeCategory])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const handleFiltersToggle = () => {
    setShowFilters(!showFilters)
    // You can add filter logic here later
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-[#777777]">Loading properties...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PropertiesHero 
          onSearch={handleSearch}
          onFiltersToggle={handleFiltersToggle}
          onCategoryChange={handleCategoryChange}
          activeCategory={activeCategory}
        />
        <PropertiesGrid properties={filteredProperties} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
