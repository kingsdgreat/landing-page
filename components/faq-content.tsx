"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-lg p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#777777] text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">View All FAQs</Button>
        </div>
      </div>
    </section>
  )
}
