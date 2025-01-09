'use client'

import { Teacher } from '@/app/types/types'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from '../common/Heading'
import './index.css'


const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/01.jpg',
  },
  {
    id: 2,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/02.jpg',
    showSocial: true,
  },
  {
    id: 3,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/03.jpg',
  },
  {
    id: 4,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/01.jpg',
  },
  {
    id: 5,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/02.jpg',
    showSocial: true,
  },
  {
    id: 6,
    name: 'Aurora Jackson',
    role: 'Adventure Coach',
    image: '/images/teachers/03.jpg',
  }
]

export default function Teachers() {
  return (
    <section className="bg-[#fff8eb] relative min-h-screen lg:px-4 py-16 overflow-hidden px-10 my-32">
      {/* Left Background Image */}
      <div className="absolute left-32 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <img src="/images/teachers/design-rotate.png" alt="Left Background" className="w-full h-auto" />
      </div>
      {/* Right Background Image */}
      <div className="absolute right-64 bottom-[30rem] transform hidden lg:block">
        <img src="/images/teachers/oval.png" alt="Right Background" className="w-[15rem] h-auto" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 text-[#0C1A40]">
          <div className="text-xl leading-7 mb-5 font-semibold">Our Teachers</div>
          
          <Heading
            title='Amazing Teachers With Professional Experiences'
            bgColor='bg-[#FFE3AC]' />
          
          <p className="text-gray-400 mx-auto">
            KidStick&apos;s teachers are dedicated professionals who foster growth, confidence, and a love for learning in every child.
          </p>
        </div>

        {/* Teacher Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="w-full"
          id='teacher-swiper'
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <div className="bg-white rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-80 object-cove"
                  />
                  <div className="absolute right-4 top-4 flex flex-col gap-2 bg-green-400 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-white hover:text-[#FF6B6D]">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#FF6B6D]">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#FF6B6D]">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#FF6B6D]">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                </div>
                <p className="bg-[#F8F8F8] text-gray-600 text-center py-4 px-2">{teacher.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

