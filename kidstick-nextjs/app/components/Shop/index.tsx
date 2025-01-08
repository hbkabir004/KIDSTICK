import { Product } from "@/app/types/product"
import { ProductCard } from "./ProductCard"

const products: Product[] = [
  {
    id: '1',
    title: 'Swimming Glass',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: 'https://i.ibb.co.com/sySwGFY/swim.jpg',
    discount: 12
  },
  {
    id: '2',
    title: 'Binoculars',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: '/placeholder.svg?height=400&width=400',
    discount: 12
  },
  {
    id: '3',
    title: 'Paddle Leash',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: '/placeholder.svg?height=400&width=400',
    discount: 12
  },
  // Duplicate products for the grid
  {
    id: '4',
    title: 'Binoculars',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: '/placeholder.svg?height=400&width=400',
    discount: 12
  },
  {
    id: '5',
    title: 'Binoculars',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: '/placeholder.svg?height=400&width=400',
    discount: 12
  },
  {
    id: '6',
    title: 'Paddle Leash',
    price: 20.00,
    originalPrice: 25.00,
    rating: 5.0,
    reviews: 2,
    image: '/placeholder.svg?height=400&width=400',
    discount: 12
  },
]

export default function ShopSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Our Shop</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Visit our KidStick Shop for high-quality gear and essentials. Find apparel, equipment, and accessories designed to support your child's journey and enhance their experience with KidStick.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors">
          All Product
        </button>
      </div>
    </section>
  )
}

