"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import EventCard from './EventCard';
import './index.css';

interface Event {
    id: number;
    date: string;
    month: string;
    title: string;
    image: string;
    rating: number;
    reviews: number;
    startTime: string;
    endTime: string;
    location: string;
    price: number;
}

const events: Event[] = [
    {
        id: 1,
        date: '14',
        month: 'May',
        title: 'Adventure camping',
        image: '/placeholder.svg?height=300&width=400',
        rating: 5.0,
        reviews: 2,
        startTime: '8:00 am',
        endTime: '5:00 pm',
        location: 'San Diego, California',
        price: 90,
    },
    {
        id: 2,
        date: '14',
        month: 'May',
        title: 'Enjoy Kayaking',
        image: '/placeholder.svg?height=300&width=400',
        rating: 5.0,
        reviews: 2,
        startTime: '8:00 am',
        endTime: '5:00 pm',
        location: 'San Diego, California',
        price: 90,
    },
    {
        id: 3,
        date: '14',
        month: 'May',
        title: 'Adventure camping',
        image: '/placeholder.svg?height=300&width=400',
        rating: 5.0,
        reviews: 2,
        startTime: '8:00 am',
        endTime: '5:00 pm',
        location: 'San Diego, California',
        price: 90,
    },
    {
        id: 4,
        date: '14',
        month: 'May',
        title: 'Adventure camping',
        image: '/placeholder.svg?height=300&width=400',
        rating: 5.0,
        reviews: 2,
        startTime: '8:00 am',
        endTime: '5:00 pm',
        location: 'San Diego, California',
        price: 90,
    },
];

export default function EventSection() {
    return (
        <section style={{ background: "url('/images/bg-event.png')", backgroundRepeat: "no-repeat" }} className="bg-cover bg-center my-32">
            <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center pb-12 pt-32">
                    <span className="text-gray-600 text-lg">Event</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Event</h2>
                </div>

                {/* Carousel */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
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
                    className="w-full pb-12 event-swiper"
                >
                    {events.map((event) => (
                        <SwiperSlide className='mb-12' key={event.id}>
                            <EventCard {...event} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Decorative Badge */}
                <div className="absolute -right-32 bottom-8 w-28 h-28">
                    <img
                        src="/images/badge.png"
                        alt="Decorative badge"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
