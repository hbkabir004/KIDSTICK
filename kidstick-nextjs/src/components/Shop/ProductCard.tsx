'use client'

import { Eye, Heart, Lock, Star } from 'lucide-react'
import { useState } from 'react'
import { Product } from '../../types/types'

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
    <div className="bg-white relative p-4 border-2 border-dashed border-red-400 rounded-lg group h-96">
      {product.discount > 0 && (
        <div className="absolute top-6 left-6 bg-orange-400 text-white text-sm px-2 py-1 rounded-md z-10">
          -{product.discount}%
        </div>
      )}
      <div className="relative aspect-square mb-4 h-44 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover rounded-lg w-full h-full"
        />

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
          <Star
            key={i}
            className="w-4 h-4 mx-1 fill-red-400 text-red-400"
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {product.rating} ({product.reviews} Review)
        </span>
      </div>
      <h3 className="text-lg font-medium mb-2 truncate">{product.title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-bold">${product.price}</span>
        <span className="text-sm text-gray-500 line-through">
          ${product.originalPrice}
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

