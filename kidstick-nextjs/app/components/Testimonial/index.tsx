"use client";

import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide as SwiperSlideType, Swiper as SwiperType } from 'swiper/react';
import Heading from '../common/Heading';
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

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [Swiper, setSwiper] = useState<{
    Swiper: typeof SwiperType;
    SwiperSlide: typeof SwiperSlideType;
    Autoplay: typeof Autoplay;
    Pagination: typeof Pagination;
    Navigation: typeof Navigation;
  } | null>(null);

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
    <section className="relative lg:px-[15rem] md:px-[5rem] px-[3rem] md:my-32">
      <div className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-left-top -z-10" style={{ backgroundImage: 'url(/images/testimonials/bg-left.png)' }}></div>
      <div className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-right-bottom" style={{ backgroundImage: 'url(/images/testimonials/bg-right.png)' }}></div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center max-w-full font-bold text-indigo-950 w-[1049px]">
          <div className="text-xl leading-7">Review</div>
          <div className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-9 lg:leading-10 relative w-full text-center">

            <Heading
              title='Our Testimonial'
              bgColor='bg-[#FFE3AC]'
            />

          </div>
          <div className="self-stretch mt-6 mb-14 text-lg font-extralight leading-8 text-center text-slate-700">
            &quot;KidStick has been a fantastic experience for our child,
            building confidence, coordination, and a love for physical activity.
            The coaches are supportive and dedicated, creating an environment
            that fosters growth. We highly recommend KidStick!&quot;
          </div>
        </div>
        <Swiper.Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 10
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          modules={[Swiper.Autoplay, Swiper.Pagination, Swiper.Navigation]}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
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