'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FormData {
    name: string
    email: string
    phone: string
    message: string
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="relative bg-pink-50 overflow-hidden my-[7.5rem]">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-48 h-48 z-0">
                <div className="absolute -top-12 left-0 w-full h-full">
                    <Image
                        className="absolute top-0 left-0"
                        alt="background element"
                        width={400}
                        height={200}
                        src="/images/contact-us/bg-circle.png"
                    />
                </div>
            </div>
            {/* Background Image */}
            <div className="absolute right-60 inset-0 flex justify-center items-center">
                <Image
                    src="/images/contact-us/design-rotate.png"
                    alt="Background"
                    layout="fill"
                    objectFit="scale-down"
                    className="opacity-100"
                />
            </div>
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Images Column */}
                    <div className="space-y-8 hidden lg:block">
                        <div className="absolute left-36 top-10 w-[30rem] h-[19rem] rounded-3xl overflow-hidden shadow-xl z-10">
                            <Image
                                src="/images/contact-us/kid01.jpg"
                                alt="Happy child with green paint"
                                width={400}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="absolute w-[30rem] h-[18rem] rounded-3xl overflow-hidden shadow-xl z-10">
                            <Image
                                src="/images/contact-us/kid02.jpg"
                                alt="Child on paddleboard"
                                width={400}
                                height={200}
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Dot Pattern */}
                        <div className="absolute left-64 top-[25rem] transform -translate-y-1/2 grid grid-cols-12 gap-4 z-0">
                            {[...Array(204)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-transparent border-2 border-black rounded-full hidden lg:block" />
                            ))}
                        </div>
                    </div>


                    {/* Form Column */}
                    <div className="space-y-8 z-50">
                        <div>
                            <h2 className="text-sm font-semibold text-gray-600">Contact Us</h2>
                            <h1 className="text-4xl font-bold text-navy-900 mt-2">
                                Contact Us For Any Support
                            </h1>
                            {/* <div className="absolute w-[15rem] md:w-[18rem] lg:w-[30rem] inset-0 bg-[#FFE3AC] -z-10" style={{ height: '10px', top: '7.5rem', left: '51%' }}></div> */}

                        </div>

                        <p className="text-gray-600">
                            We're here to help! Whether you have questions about our programs, need assistance with enrollment, or require support, the KidStick team is ready to assist. Contact us anytime, and we'll ensure you get the guidance and answers you need.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-pink-100 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 transition-colors"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-pink-100 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 transition-colors"
                                    required
                                />
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-pink-100 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 transition-colors"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl border border-pink-100 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 transition-colors resize-none"
                                required
                            />

                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#FF5C5C] hover:bg-[#ff4747] text-white font-medium rounded-full transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Pencil Decoration */}
            <div className="absolute bottom-32 right-20 hidden lg:block">
                <Image
                    src="/images/contact-us/pen.png"
                    alt="Decorative pencil"
                    width={120}
                    height={10}
                    className=""
                />
            </div>
        </div>
    )
}

