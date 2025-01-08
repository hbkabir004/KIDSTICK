import { Service } from '@/app/types/types'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="relative bg-[#FCEEEE] rounded-lg p-4 border-2 border-dashed border-[#5BA8FD] hover:border-[#49D574] transition-transform hover:scale-105 hover:border-3/4 group">
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-start items-center">
        <h3 className="text-xl font-semibold mb-2 mr-3 group-hover:text-[#49D574]">{service.title}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-red-400 text-red-400"
            />
          ))}
          <span className="ml-2 text-gray-600">
            {service.rating} ({service.reviews} Review)
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 min-h-[48px]">{service.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-navy-900 font-bold group-hover:text-[#49D574]">${service.currentPrice}</span>
          <span className="text-gray-400 line-through">${service.originalPrice}</span>
        </div>
        <button className="px-10 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#FF5252] transition-colors">
          Join Now
        </button>
      </div>
    </div>
  )
}

