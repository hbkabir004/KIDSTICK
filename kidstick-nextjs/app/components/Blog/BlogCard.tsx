import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

export default function BlogCard({
  title = "The Ultimate Guide To Creating A positive Adventure",
  description = "The Ultimate Guide to Creating a Positive Adventure by KidStick provides practical strategies to inspire confidence, growth, and joy in every journey...",
  imageUrl = "/placeholder.svg?height=400&width=400",
  href = "#"
}: BlogCardProps) {
  return (
    <div className="max-w-3xl rounded-[32px] border border-dashed border-gray-200 p-3 hover:shadow-lg transition-shadow duration-300">
      <Link href={href} className="flex gap-4">
        {/* Image Container */}
        <div className="relative w-[180px] h-[180px] flex-shrink-0">
          <div className="relative h-full rounded-l-[24px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Date Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-[#FF5C5C] text-white text-sm font-medium px-4 py-1 rounded-full">
              14 May
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 py-3 pr-3 space-y-3">
          <h3 className="text-[#1A1A1A] text-lg font-bold leading-tight">
            {title}
          </h3>
          <p className="text-[#666666] text-sm leading-relaxed">
            {description}
          </p>
          <div>
            <button
              className="bg-[#FF5C5C] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#ff4747] transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

