'use client'

import { ChevronDown, Phone, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  images?: string[]
}

const faqs: FAQItem[] = [
  {
    question: "What age groups does KidStick accommodate?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati blanditiis perferendis vitae labore inventore libero pariatur quidem nemo suscipit?"
  },
  {
    question: "How can I enroll my child in a program?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati blanditiis perferendis vitae labore inventore libero pariatur quidem nemo suscipit?"
  },
  {
    question: "What are the core objectives of the KidStick program?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati blanditiis perferendis vitae labore inventore libero pariatur quidem nemo suscipit?"
  },
  {
    question: "How does KidStick measure and track a child's progress?",
    answer: "KidStick tracks progress with regular assessments on skills like coordination and agility, providing individualized feedback and progress reports to highlight each child's development.",
    images: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300"
    ]
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3)

  return (
    <div className="min-h-screen bg-[#FFE5BA] relative overflow-hidden">
      {/* Zigzag Pattern - Top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FFB963]" 
        style={{
          clipPath: "polygon(0 0, 4% 100%, 8% 0, 12% 100%, 16% 0, 20% 100%, 24% 0, 28% 100%, 32% 0, 36% 100%, 40% 0, 44% 100%, 48% 0, 52% 100%, 56% 0, 60% 100%, 64% 0, 68% 100%, 72% 0, 76% 100%, 80% 0, 84% 100%, 88% 0, 92% 100%, 96% 0, 100% 100%, 100% 0)"
        }} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-gray-600">Your Questions</h2>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-[#1A1A1A] font-medium">{faq.question}</span>
                    <ChevronDown 
                      className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      {faq.images && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {faq.images.map((image, i) => (
                            <div key={i} className="rounded-xl overflow-hidden">
                              <Image
                                src={image}
                                alt="KidStick activity"
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Support Card */}
            <div className="bg-[#7CD5F2] rounded-3xl p-4 border-2 border-dashed border-black/10">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Support representative"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Need Support?
              </h2>
              <p className="text-white text-center text-sm mb-4">
                Contact support for assistance with enrollment or inquiries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3 px-4 rounded-xl hover:bg-black/80 transition-colors">
                  <User size={20} />
                  <span>Contact Us</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#8046C7] text-white py-3 px-4 rounded-xl hover:bg-[#6c3ba8] transition-colors">
                  <Phone size={20} />
                  <span>Call Us</span>
                </button>
              </div>
            </div>

            {/* Download App Card */}
            <div className="bg-[#C41E3A] rounded-3xl p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Download Our App
              </h2>
              <p className="text-white text-sm mb-6">
                Download the KidStick app for schedules, tracking, and updates
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=135"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-10"
                />
                <Image
                  src="/placeholder.svg?height=40&width=135"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag Pattern - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FFB963]" 
        style={{
          clipPath: "polygon(0 100%, 4% 0, 8% 100%, 12% 0, 16% 100%, 20% 0, 24% 100%, 28% 0, 32% 100%, 36% 0, 40% 100%, 44% 0, 48% 100%, 52% 0, 56% 100%, 60% 0, 64% 100%, 68% 0, 72% 100%, 76% 0, 80% 100%, 84% 0, 88% 100%, 92% 0, 96% 100%, 100% 0, 100% 100%)"
        }} 
      />
    </div>
  )
}

