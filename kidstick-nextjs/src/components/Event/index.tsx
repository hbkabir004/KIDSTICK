"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Event } from '@/src/types/types';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import Heading from '../common/Heading';
import EventCard from './EventCard';
import './index.css';


export default function EventSection() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
      const fetchServices = async () => {
        const res = await fetch('https://kidstick-server.vercel.app/events');
        const data = await res.json();
        setEvents(data);
      };
  
      fetchServices();
    }, []);

    return (
        <section style={{ background: "url('/images/bg-event.png')", backgroundRepeat: "no-repeat" }} className="bg-cover bg-center my-32 overflow-hidden">
            <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center pb-12 pt-32">
                    <h2 className="text-gray-600 text-lg mb-5 font-semibold">Event</h2>
                    <Heading
                        title='Our Event'
                        bgColor='bg-[#FCCDDA]'
                    />
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
                            <EventCard event={event} />
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
