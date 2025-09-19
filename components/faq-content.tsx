"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    question: "If I buy this property, am I obligated to start building on it immediately?",
    answer:
      "No. You can hold the property for a hundred years, do nothing with it and you will be well within your rights as the owner of the land.",
  },
  {
    question: "Can I take a tour of the property before I buy it?",
    answer:
      "Yes, we encourage property visits. Please contact us to schedule a tour at your convenience. We can arrange guided tours or provide detailed directions for self-guided visits.",
  },
  {
    question: "Will a representative from your office be able to show me the property?",
    answer:
      "Yes, our representatives are available to show properties by appointment. We recommend scheduling in advance to ensure availability.",
  },
  {
    question: "Is there a Mapping App your company recommends to locate vacant land?",
    answer:
      "We recommend using Google Earth, GPS coordinates, and our detailed property maps. We also provide specific directions and landmarks for each property.",
  },
  {
    question:
      "I want to purchase a property but how do I know that this entire website is not actually an elaborate ruse designed to fleece me of my hard-earned land-buying money?",
    answer:
      "We understand your concern. We are a licensed real estate company with proper credentials, insurance, and a track record of successful transactions. We encourage you to verify our credentials and read customer testimonials.",
  },
  {
    question: "You keep mentioning closing through a 'Title/Escrow Company.' How long does that take?",
    answer:
      "The title/escrow process typically takes 30-45 days from start to finish. This includes title research, document preparation, and final recording of the deed.",
  },
  {
    question: "If I am not an American citizen, may I still buy land from you?",
    answer:
      "Yes, foreign nationals can purchase land in most states. However, there may be additional documentation requirements and restrictions depending on the property location and your country of origin.",
  },
  {
    question: "Do you have any questions we didn't answer?",
    answer:
      "If you have additional questions not covered here, please don't hesitate to contact us directly. Our team is happy to provide personalized answers to your specific concerns.",
  },
]

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-lg self-start">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left p-6 hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 font-medium text-sm flex-1">{faq.question}</span>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full flex-shrink-0">
                  {openIndex === index ? (
                    <X className="text-[#1A5DC9] size-4" />
                  ) : (
                    <Plus className="text-[#1A5DC9] size-4" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-[#777777] text-sm pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
