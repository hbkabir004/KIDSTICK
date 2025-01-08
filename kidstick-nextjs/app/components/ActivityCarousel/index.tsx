'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.css'

interface Activity {
  id: number
  title: string
  image: string
  borderColor: string
  bgColor:string
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Happy Adventure',
    image: '/images/activities/01.jpg',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Experience Coach',
    image: '/images/activities/02.jpg',
    borderColor: 'border-yellow-200',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Soccer Club',
    image: '/images/activities/03.jpg',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-100',
  },
  {
    id: 4,
    title: 'Arts & Craft',
    image: '/images/activities/04.jpg',
    borderColor: 'border-pink-200',
    bgColor: 'bg-pink-100',
  },
  {
    id: 5,
    title: 'Happy Adventure',
    image: '/images/activities/01.jpg',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-100',
  },
  {
    id: 6,
    title: 'Experience Coach',
    image: '/images/activities/02.jpg',
    borderColor: 'border-yellow-200',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 7,
    title: 'Soccer Club',
    image: '/images/activities/03.jpg',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-100',
  },
  {
    id: 8,
    title: 'Arts & Craft',
    image: '/images/activities/04.jpg',
    borderColor: 'border-pink-200',
    bgColor: 'bg-pink-100',
  },
]

export default function ActivitiesCarousel() {
  const swiperRef = useRef<SwiperType>()

  return (
    <section className='bg-[#FFFDF5] relative px-6 lg:px-0'>
      {/* Background Images */}
      <div className="absolute left-20 top-0 transform translate-y-1/2 h-[11rem] w-1/4 bg-no-repeat bg-left bg-contain" style={{ backgroundImage: "url('/images/activities/bg-circle.png')" }}></div>
      <div className="absolute right-0 bottom-0 h-[10rem] w-1/4 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: "url('/images/activities/banner-shape.png')" }}></div>

      <div className="relative w-full max-w-7xl mx-auto p-14 overflow-hidden">
      {/* Carousel */}
      <div className="relative">
        <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          640: {
          slidesPerView: 1,
          spaceBetween: 5,
          },
          768: {
          slidesPerView: 2,
          spaceBetween: 10,
          },
          1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          },
          1280: {
          slidesPerView: 4,
          spaceBetween: 30,
          },
        }}
        className="w-full py-8"
        >
        {activities.map((activity) => (
          <SwiperSlide key={activity.id}>
          <div className={`rounded-lg overflow-hidden border-4 border-dashed ${activity.borderColor} transition-transform hover:scale-105`}>
            <div className="relative aspect-[4/3]">
            <Image
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
            </div>
            <div className={`p-4 text-center ${activity.bgColor}`}>
            <h3 className="text-xl font-semibold text-gray-900">
              {activity.title}
            </h3>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-red-400 text-white shadow-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
        <ChevronLeft className="w-6 h-6" />
        </button>
        <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-red-400 text-white shadow-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
        <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      </div>
    </section>
  )
}

