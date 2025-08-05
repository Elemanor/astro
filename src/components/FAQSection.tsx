import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How much does basement waterproofing cost in Toronto?",
    answer: "The cost varies based on the severity of the issue and the solution required. Minor crack repairs start around $500, while full interior waterproofing systems range from $3,000 to $15,000. We provide free assessments and detailed quotes with multiple financing options.",
    image: "/images/faq/waterproofing-cost-toronto.jpg",
  },
  {
    question: "How long does waterproofing take?",
    answer: "Most projects are completed in 1-3 days. Crack injections take 2-4 hours, interior drainage systems 1-2 days, and exterior excavation 2-5 days. We minimize disruption and clean up completely after each day's work.",
    image: "/images/faq/waterproofing-timeline.jpg",
  },
  {
    question: "What warranty do you provide?",
    answer: "We offer a lifetime transferable warranty on all major waterproofing work. This covers materials and labor for as long as you own your home, and can be transferred to new owners, protecting your investment and home value.",
    image: "/images/faq/lifetime-warranty-certificate.jpg",
  },
  {
    question: "Why is my basement leaking where the wall meets the floor?",
    answer: "This is called the cove joint - the most common entry point for water. As your foundation settles, gaps form between the wall and floor. Our interior drainage system specifically addresses this vulnerable area with permanent protection.",
    image: "/images/faq/cove-joint-leak.jpg",
  },
  {
    question: "Does insurance cover basement waterproofing?",
    answer: "Most insurance covers sudden water damage but not gradual seepage or preventive waterproofing. However, investing in waterproofing can prevent claims and keep premiums lower. We can help document existing damage for insurance purposes.",
    image: "/images/faq/insurance-coverage.jpg",
  },
  {
    question: "What are signs I need waterproofing?",
    answer: "Watch for: musty odors, visible mold, white chalky deposits (efflorescence), cracks in walls/floors, peeling paint, rust on appliances, or increased humidity. Even small signs indicate water intrusion that will worsen over time.",
    image: "/images/faq/warning-signs-basement.jpg",
  },
];

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
            Common <span className="font-semibold">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to your waterproofing concerns from Toronto's trusted experts
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border-none shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:no-underline">
                <span className="text-base sm:text-lg font-medium pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  <div className="relative h-48 sm:h-full min-h-[12rem] rounded-lg overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            Contact our experts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}