'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Activity {
  title: string
  image: string
  color: string
}

const activities: Activity[] = [
  {
    title: "Happy Adventure",
    image: "/placeholder.svg?height=400&width=600",
    color: "border-green-200 bg-green-50",
  },
  {
    title: "Experience Couch",
    image: "/placeholder.svg?height=400&width=600",
    color: "border-orange-200 bg-orange-50",
  },
  {
    title: "Soccer Club",
    image: "/placeholder.svg?height=400&width=600",
    color: "border-blue-200 bg-blue-50",
  },
  {
    title: "Arts & Craft",
    image: "/placeholder.svg?height=400&width=600",
    color: "border-pink-200 bg-pink-50",
  },
]

export function ActivityCarousel() {
  return (
    <div className="relative w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="w-full"
      >
        {activities.map((activity, index) => (
          <SwiperSlide key={index}>
            <Card className={cn(
              "border-2 transition-all duration-300 hover:shadow-lg",
              activity.color
            )}>
              <CardContent className="p-4">
                <div className="aspect-[3/2] overflow-hidden rounded-lg">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center">
                  {activity.title}
                </h3>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="secondary"
        size="icon"
        className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="swiper-pagination absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2" />
    </div>
  )
}

