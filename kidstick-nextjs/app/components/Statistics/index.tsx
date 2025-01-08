import Image from 'next/image'
import { StatCounter } from './StatCounter'

export default function StatsSection() {
  return (
    <div style={{backgroundImage: "url('/images/stats/bg-stat.png')"}} className="relative overflow-hidden bg-cover bg-center bg-[#fff1f1]">

      {/* Decorative elements */}
      <div className="absolute left-4 top-16 w-16 animate-bounce md:w-20">
        <Image
          src="/images/stats/octopus.png"
          alt=""
          width={300}
          height={300}
          className="opacity-120"
          aria-hidden="true"
        />
      </div>
      <div className="absolute right-[30%] top-5 w-16 animate-bounce md:w-20">
        <Image
          src="/images/stats/fish.png"
          alt=""
          width={80}
          height={80}
          className="opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="absolute -bottom-4 right-8 w-8 animate-bounce md:w-16">
        <Image
          src="/images/stats/ameba.png"
          alt=""
          width={80}
          height={80}
          className="opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* Stats content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          <StatCounter value={25} label="Total Groups" />
          <StatCounter value={42} label="Qualified Teachers" />
          <StatCounter value={350} label="Students Enrolled" />
          <StatCounter value={10} label="Year of Experience" />
        </div>
      </div>
    </div>
  )
}

