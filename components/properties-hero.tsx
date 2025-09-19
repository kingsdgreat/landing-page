"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { PROPERTY_CATEGORIES } from "@/lib/constants"

interface PropertiesHeroProps {
  onSearch: (searchTerm: string) => void
  onFiltersToggle: () => void
  onCategoryChange: (category: string) => void
  activeCategory: string
}

export function PropertiesHero({ 
  onSearch, 
  onFiltersToggle, 
  onCategoryChange, 
  activeCategory 
}: PropertiesHeroProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
        <p className="text-[#777777] mb-8">Discover premium land properties for sale across prime locations</p>

        {/* Search and filters - matching the image design */}
        <div className=" mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center gap-3">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search properties..." 
                className="pl-12 pr-4 py-4 text-lg border-0 shadow-none focus:ring-0 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            
            {/* Filters Button */}
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-4 text-blue-600 border-blue-200 hover:bg-blue-50 rounded-xl"
              onClick={onFiltersToggle}
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </Button>
            
            {/* Search Button */}
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>

        {/* Category Filter Buttons - matching the image */}
        <div className="flex flex-wrap justify-center gap-3">
          {PROPERTY_CATEGORIES.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              onClick={() => onCategoryChange(category.value)}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeCategory === category.value 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
