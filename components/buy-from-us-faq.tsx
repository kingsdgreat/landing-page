"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Do you perform credit checks?",
    answer:
      "No. As long as you can afford the down payment, we trust you'll be committed to keeping the land and paying on time each month.",
  },
  {
    question: "Can I pay the property off earlier than the terms suggest?",
    answer: "Yes, you can pay off the property early without any penalties or additional fees.",
  },
  {
    question: "Can I use the land while I make payments?",
    answer:
      "Yes, once you complete the purchase process, you have full rights to use the land according to local zoning regulations.",
  },
  {
    question: "Can I propose potential terms on a property without financing offered?",
    answer:
      "We are open to discussing custom financing arrangements on a case-by-case basis. Please contact us to discuss your specific needs.",
  },
]

export function BuyFromUsFAQ() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-[#777777]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90">View All FAQs</Button>
        </div>
      </div>
    </section>
  )
}
