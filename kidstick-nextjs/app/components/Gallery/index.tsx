'use client'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from '../common/Heading'
import './index.css'

const galleryImages = [
    {
        src: '/images/our-gallery/01.jpg',
        alt: 'Children kayaking',
    },
    {
        src: '/images/our-gallery/02.jpg',
        alt: 'Child swimming',
    },
    {
        src: '/images/our-gallery/01.jpg',
        alt: 'Children kayaking',
    },
    {
        src: '/images/our-gallery/02.jpg',
        alt: 'Child swimming',
    },
    // Add more images as needed
]

export default function GallerySection() {
    return (
        <section
            className='bg-cover bg-center my-32'
            style={{ backgroundImage: "url('/images/our-gallery/bg-gallery.png')", backgroundRepeat: "no-repeat" }}>
            <div className="relative px-10 md:pr-0 md:px-4 py-12 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-sm text-gray-600 mb-2 font-semibold">Gallery</h2>
                        <div className="flex justify-between items-center">
                            <Heading
                            title='Explore Our Gallery'
                            bgColor='bg-[#FCCDDA]'
                            />
                            <a href="#" className="text-red-500 hover:underline">View All</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <p className="text-gray-600 mb-4">
                                Explore our gallery to see KidStick in action—children engaging in skill-building activities,
                                fostering teamwork, and experiencing the joy of learning and growth. Each captured
                                moment showcases the energy, achievements, and connections that define the KidStick
                                experience, offering a glimpse into the supportive and inspiring environment where
                                children thrive.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{
                                    clickable: true,
                                }}
                                spaceBetween={20}
                                slidesPerView={2}
                                className="w-full h-64 rounded-lg overflow-hidden"
                                id='gallery-swiper'
                            >
                                {galleryImages.map((image, index) => (
                                    <SwiperSlide className='mb-12' key={index}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

