"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"

const faqs = [
  {
    question: "Do you perform credit checks?",
    answer:
      "No. As long as you can afford the down payment, we trust you'll be committed to keeping the land and paying on time each month.",
  },
  {
    question: "Can I pay the property off earlier than the terms suggest?",
    answer: "Yes, you can pay off the property early without any penalties.",
  },
  {
    question: "Can I use the land while I make payments?",
    answer: "Yes, once you complete the purchase, you can use the land as you see fit within local regulations.",
  },
  {
    question: "Can I propose potential terms on a property without financing offered?",
    answer: "Yes, we are open to discussing custom terms for properties that don't have standard financing options.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-[#777777]">
            Find answers to common questions about our land properties and purchasing process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg px-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:no-underline"
              >
                <span>{faq.question}</span>
                <div className="flex items-center justify-center w-6 h-6">
                  {openIndex === index ? (
                    <X className="text-[#1A5DC9] size-4" />
                  ) : (
                    <Plus className="text-[#1A5DC9] size-4" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="text-[#777777] pb-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => router.push('/faq')} className="bg-primary hover:bg-primary/90">View All FAQs</Button>
        </div>
      </div>
    </section>
  )
}
