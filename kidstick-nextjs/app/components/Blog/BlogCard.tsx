import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  img: string
}

export default function BlogCard({
  title,
  description,
  img
}: BlogCardProps) {
  return (
    <div className="bg-white max-w-3xl rounded-[1.5rem] border-2 border-dashed border-[#FF6B6D] hover:shadow-2xl transition-shadow duration-300">
      <Link href="#" className="flex flex-col md:flex-row gap-4">
        {/* Image Container */}
        <div className="relative w-full md:w-[12.5rem] h-[15.625rem] flex-shrink-0">
          <div className="relative h-full rounded-tl-[24px] md:rounded-l-[24px] overflow-hidden">
            <img
              src={img}
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
        <div className="flex-1 py-5 px-3 space-y-3">
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

