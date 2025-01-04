import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  imageSrc: string;
  border: string;
  color: string;
}

interface TestimonialListProps {
  testimonials: Testimonial[];
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials }) => {
  const [Swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    const loadSwiper = async () => {
      const { Swiper, SwiperSlide } = await import('swiper/react');
      const { Autoplay, Pagination, Navigation } = await import('swiper/modules');
      setSwiper({ Swiper, SwiperSlide, Autoplay, Pagination, Navigation });
    };
    loadSwiper();
  }, []);

  if (!Swiper) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center px-72">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-col items-center ml-32 max-w-full font-bold text-indigo-950 w-[1049px]">
          <div className="text-xl leading-7">Review</div>
          <div className="mt-5 text-5xl leading-10">Our Testimonial</div>
          <div className="self-stretch mt-6 text-lg font-extralight leading-8 text-center text-slate-700 max-md:max-w-full">
            "KidStick has been a fantastic experience for our child,
            building confidence, coordination, and a love for physical activity.
            The coaches are supportive and dedicated, creating an environment
            that fosters growth. We highly recommend KidStick!"
          </div>
        </div>
      </div>
      <Swiper.Swiper
        className="testimonials-swiper-slider"
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
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
      >
        {testimonials.map((testimonial) => (
          <Swiper.SwiperSlide key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </Swiper.SwiperSlide>
        ))}
      </Swiper.Swiper>
    </div>
  );
};

export default TestimonialList;