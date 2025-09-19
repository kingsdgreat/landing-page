"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "./ui/button"

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
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-[#777777]">
            Find answers to common questions about our land properties and purchasing process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-[#777777]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button className="bg-primary hover:bg-primary/90">View All FAQs</Button>
        </div>
      </div>
    </section>
  )
}
