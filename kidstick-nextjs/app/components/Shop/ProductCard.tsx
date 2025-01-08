'use client'

import { Eye, Heart, Lock } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="relative p-4 border-2 border-dashed border-red-400 rounded-lg">
      {product.discount > 0 && (
        <div className="absolute top-6 left-6 bg-orange-400 text-white text-sm px-2 py-1 rounded-md z-10">
          -{product.discount}%
        </div>
      )}
      <div className="relative aspect-square mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
        />

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Heart size={16} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Eye size={16} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Lock size={16} className="text-gray-600" />
          </button>
        </div>

      </div>


      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {product.rating} ({product.reviews} Review)
        </span>
      </div>
      <h3 className="text-lg font-medium mb-2 truncate">{product.title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <span className="text-sm text-gray-500 line-through">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center gap-4 font-semibold">
        <div className="flex-1 bg-[#F7F3F3] flex justify-between items-center border rounded-md">
          <button
            onClick={decreaseQuantity}
            className="p-2 ml-2 text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="p-2 mr-2 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button className="flex-1 border-2 border-red-400 text-black py-2 px-4 rounded-md hover:bg-[#FE5C45] hover:text-white transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  )
}

