import { ServiceCard } from './ServiceCard'

const services = [
  {
    title: 'Join Hiking',
    image: '/placeholder.svg?height=300&width=400',
    description: "Get KidStick's Hiking Package for a guided adventure fostering fun and growth.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
  {
    title: 'Join Swimming',
    image: '/placeholder.svg?height=300&width=400',
    description: "Get KidStick's Swimming Package for a safe, skill-building aquatic experience.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
  {
    title: 'Join Soccer',
    image: '/placeholder.svg?height=300&width=400',
    description: "Unlock skills and confidence with KidStick's Soccer Package.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
  {
    title: 'Join Arts',
    image: '/placeholder.svg?height=300&width=400',
    description: "Inspire creativity with KidStick's Arts Package.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
  {
    title: 'Join Music',
    image: '/placeholder.svg?height=300&width=400',
    description: "Foster creativity with KidStick's Music Package.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
  {
    title: 'Join Swimming',
    image: '/placeholder.svg?height=300&width=400',
    description: "Get KidStick's Swimming Package for a safe, skill-building aquatic experience.",
    rating: 5.0,
    reviews: 2,
    currentPrice: 110,
    originalPrice: 120,
  },
]

export default function Services() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
        <img
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative backpack"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-5">
        <img
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative backpack"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header */}
      <div className="relative mb-12">
        <span className="text-gray-600">Service</span>
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            What We Offer
          </h2>
          <button className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full hover:bg-[#FF5252] transition-colors">
            All Service
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  )
}

