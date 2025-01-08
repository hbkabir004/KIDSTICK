'use client'

import { Phone, User } from 'lucide-react'
import Image from 'next/image'
import Heading from '../common/Heading'
import FAQAccordion from './FaqAccordion'

export default function FAQSection() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: "url('/images/faq/bg-faq.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="container mx-auto md:px-16 px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-gray-600 font-semibold">Your Questions</h2>
             <Heading
             title='Frequently Asked Questions'
             bgColor="bg-[#FCCDDA]"
             />
            </div>
            
            <FAQAccordion />
          </div>

          {/* Right Side Cards */}
          <div className="space-y-6 mt-24">
            {/* Support Card */}
            <div className="bg-[#7CD5F2] rounded-3xl p-4 border-2 border-dashed border-black/60">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/faq/support.jpg"
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
            <div className="bg-[#C41E3A] rounded-3xl p-6 text-center border-2 border-dashed border-black">
              <h2 className="text-2xl font-bold text-white mb-2">
                Download Our App
              </h2>
              <p className="text-white text-sm mb-6">
                Download the KidStick app for schedules, tracking, and updates
              </p>
              <div className="flex flex-row justify-center gap-4">
                <Image
                  src="/images/faq/playstore.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-10"
                />
                <Image
                  src="/images/faq/app-store.png"
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
    </div>
  )
}

