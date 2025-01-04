"use client";

import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import './index.css';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  imageSrc: string;
  border: string;
  color: string;
}

const TestimonialList: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [Swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('https://kidstick-server.vercel.app/testimonials');
      const data = await res.json();
      setTestimonials(data);
    };

    const loadSwiper = async () => {
      const { Swiper, SwiperSlide } = await import('swiper/react');
      const { Autoplay, Pagination, Navigation } = await import('swiper/modules');
      setSwiper({ Swiper, SwiperSlide, Autoplay, Pagination, Navigation });
    };

    fetchTestimonials();
    loadSwiper();
  }, []);

  if (!Swiper) {
    return null; // or a loading spinner
  }

  return (
    <section className="relative lg:px-[15rem] md:px-[7rem] px-[3rem]">
      <div className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-left-top -z-10" style={{ backgroundImage: 'url(/images/testimonials/bg-left.png)' }}></div>
      <div className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-right-bottom" style={{ backgroundImage: 'url(/images/testimonials/bg-right.png)' }}></div>
      <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center max-w-full font-bold text-indigo-950 w-[1049px]">
        <div className="text-xl leading-7">Review</div>
        <div className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-9 lg:leading-10 relative w-full text-center">
        <div className="relative z-10">Our Testimonial</div>
        <div className="absolute w-[15rem] md:w-[18rem] lg:w-[22.5rem] inset-0 bg-[#FFE3AC]" style={{ height: '10px', top: '30px', left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>
        <div className="self-stretch mt-6 mb-14 text-lg font-extralight leading-8 text-center text-slate-700 max-md:max-w-full">
        "KidStick has been a fantastic experience for our child,
        building confidence, coordination, and a love for physical activity.
        The coaches are supportive and dedicated, creating an environment
        that fosters growth. We highly recommend KidStick!"
        </div>
      </div>
      <Swiper.Swiper
        breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          // spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          // spaceBetween: 24,
        },
        }}
        modules={[Swiper.Autoplay, Swiper.Pagination, Swiper.Navigation]}
        // autoplay={{
        //   delay: 2500,
        //   pauseOnMouseEnter: true,
        // }}
        pagination={{
        clickable: true,
        }}
        loop={true}
        navigation={true}
        cssMode={true}
      >
        {testimonials.map((testimonial) => (
        <Swiper.SwiperSlide key={testimonial.id}>
          <TestimonialCard {...testimonial} />
        </Swiper.SwiperSlide>
        ))}
      </Swiper.Swiper>
      </div>
    </section>
  );
};

export default TestimonialList;