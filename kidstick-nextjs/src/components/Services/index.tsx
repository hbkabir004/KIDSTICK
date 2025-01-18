"use client"

import { Service } from '@/app/types/types';
import { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import { ServiceCard } from './ServiceCard';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch('https://kidstick-server.vercel.app/services');
      const data = await res.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <section
      className='bg-cover bg-center my-32'
      style={{ backgroundImage: "url('/images/services/bg-services.png')" }}
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
          <img
            src="/images/services/bg-services.png"
            alt="Decorative backpack"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Header */}
        <div className="relative mb-12">
          <span className="text-gray-600 font-semibold">Service</span>
          <div className="flex justify-between items-center mt-2">
            <Heading
              title='What We Offer'
              bgColor='bg-[#FCCDDA]' />
            <button className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full hover:bg-[#FF5252] transition-colors">
              All Service
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
