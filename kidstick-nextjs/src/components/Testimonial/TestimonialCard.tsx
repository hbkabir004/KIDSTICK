import { Testimonial } from '@/app/types/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div style={{ marginRight: "0", borderColor: `${testimonial.border}`, backgroundColor: `${testimonial.color}` }} className="pt-16 p-6 border-2 border-dashed rounded-md lg:w-[24rem] md:w-[20rem]">
      <div className="relative bg-white rounded-3xl shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="absolute -top-8">
            <div style={{ borderColor: `${testimonial.color}` }} className="rounded-full border-8 overflow-hidden lg:w-[5.6875rem] lg:h-[5.6875rem] md:w-[4.6875rem] md:h-[4.6875rem] w-[4rem] h-[4rem]">
              <img
                style={{ borderColor: `${testimonial.border}` }}
                src={testimonial.imageSrc}
                alt={`${testimonial.name}'s testimonial`}
                width={91}
                height={91}
                className="object-cover w-full h-full border-4 rounded-full"
              />
            </div>
          </div>
          <div className="mt-2 p-2 text-center rounded-lg">
            <div className="flex gap-1 my-2 justify-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  style={{ fill: `${testimonial.color}`, color: `${testimonial.color}` }}
                />
              ))}
            </div>
            <h3 style={{ color: `${testimonial.color}` }} className="font-bold text-lg mb-4">{testimonial.name}</h3>
            <p style={{ color: `${testimonial.color}` }} className="text-center font-medium mb-6 font-montserrat">
              {testimonial.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};