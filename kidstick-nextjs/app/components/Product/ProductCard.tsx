'use client'

import { Eye, Heart, Share2, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  title: string
  currentPrice: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
  imageUrl: string
}

export default function ProductCard02({
  title,
  currentPrice,
  originalPrice,
  discount,
  rating,
  reviews,
  imageUrl,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  return (
    <div className="max-w-[280px] rounded-2xl border border-dashed border-gray-200 p-3">
      {/* Image Section */}
      <div className="relative rounded-xl overflow-hidden mb-3">
        <Image
          src={imageUrl}
          alt={title}
          width={280}
          height={200}
          className="w-full h-[180px] object-cover"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-[#FFB800] text-white text-xs font-medium px-2 py-1 rounded">
          -{discount}%
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart size={16} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Eye size={16} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Share2 size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < Math.floor(rating) ? 'fill-[#FFB800] text-[#FFB800]' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
        <span className="text-sm text-gray-400">({reviews} Review)</span>
      </div>

      {/* Title */}
      <h3 className="text-[#1A1A1A] font-medium mb-2">
        {title}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#1A1A1A] font-bold">${currentPrice.toFixed(2)}</span>
        <span className="text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>
      </div>

      {/* Quantity and Buy Button */}
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-gray-200 rounded-full">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 text-gray-600 hover:bg-gray-50 rounded-l-full transition-colors"
          >
            -
          </button>
          <span className="px-3 py-1 text-sm">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 text-gray-600 hover:bg-gray-50 rounded-r-full transition-colors"
          >
            +
          </button>
        </div>
        <button className="flex-1 bg-[#FF5C5C] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#ff4747] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  )
}

