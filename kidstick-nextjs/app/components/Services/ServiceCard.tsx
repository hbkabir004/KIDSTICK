import { Star } from 'lucide-react'

interface ServiceCardProps {
  title: string
  image: string
  description: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
}

export function ServiceCard({
  title,
  image,
  description,
  rating,
  reviews,
  currentPrice,
  originalPrice
}: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-lg p-4 border-2 border-dashed border-pink-100">
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-red-400 text-red-400"
          />
        ))}
        <span className="ml-2 text-gray-600">
          {rating} ({reviews} Review)
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 min-h-[48px]">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-navy-900 font-bold">${currentPrice}</span>
          <span className="text-gray-400 line-through">${originalPrice}</span>
        </div>
        <button className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-colors">
          Join Now
        </button>
      </div>
    </div>
  )
}

