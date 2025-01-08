'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface FAQItem {
    id: string
    question: string
    answer: string | React.ReactNode
}

const faqs: FAQItem[] = [
    {
        id: '1',
        question: 'What age groups does KidStick accommodate?',
        answer: 'KidStick is a program designed to help children develop physical skills and confidence through fun activities.',
    },
    {
        id: '2',
        question: 'How can I enroll my child in a program?',
        answer: 'KidStick works by providing structured activities and coaching to help children improve their physical abilities.',
    },
    {
        id: '3',
        question: 'What are the core objectives of the KidStick program?',
        answer: 'Any child who wants to improve their physical skills and have fun can join KidStick.',
    },
    {
        id: '4',
        question: 'How does KidStick measure and track a child\'s progress?',
        answer: (
            <div className="space-y-4">
                <p className="text-sm text-gray-600">
                    KidStick tracks progress with regular assessments on skills like coordination and
                    agility, providing individualized feedback and progress reports to highlight each
                    child&apos;s development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative aspect-[2] rounded-lg overflow-hidden">
                        <Image
                            src="/images/faq/01.jpg"
                            alt="Group of children hiking outdoors"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[2] rounded-lg overflow-hidden">
                        <Image
                            src="/images/faq/02.jpg"
                            alt="Children in a field of flowers"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        )
    }
]

export function FAQAccordion() {
    const [openItem, setOpenItem] = useState<string | null>(faqs[faqs.length - 1].id)

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <div className="bg-[#FFFFFF] border-2 border-[#FF6B6D] rounded-3xl p-6 md:px-8 md:py-4">
            <div className="space-y-4">
                {faqs.map((faq) => (
                    <div key={faq.id} className="border-b border-black last:border-b-0">
                        <button
                            onClick={() => toggleItem(faq.id)}
                            className="flex items-center justify-between w-full py-4 text-left"
                            aria-expanded={openItem === faq.id}
                            aria-controls={`content-${faq.id}`}
                        >
                            <span className="font-semibold">{faq.question}</span>
                            <ChevronDown
                                className={`h-5 w-5 text-[#5BA8FD] transition-transform duration-200 
                                ${openItem === faq.id ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div
                            id={`content-${faq.id}`}
                            role="region"
                            aria-labelledby={`trigger-${faq.id}`}
                            className={`transition-all duration-200 ease-in-out overflow-hidden
                            ${openItem === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="pb-4">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQAccordion;
