"use client"

import Image from 'next/image'
import Heading from '../common/Heading'
import GoldCard from './GoldCard'
import PlatinumCard from './PlatinumCard'
import SilverCard from './SilverCard'

// interface PricingTier {
//   priceTier: string[]
// }

// const priceTier: PricingTier[] = ["", ", "", ""];


export default function PricingSection() {
  return (
    <section className="w-full bg-[#FFA8A0] px-4 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Price</h2>
          <Heading
            title='Our Offer For You'
            bgColor='bg-[#FFE3AC]'
          />
          <p className="text-gray-600 font-medium mx-auto">
            KidStick offers flexible pricing plans to fit your needs, providing quality programs and resources. Choose the best option for your child's journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <SilverCard />
            <GoldCard/>
            <PlatinumCard/>
        </div>

        <Image
          src="/images/offer/rubiks_cube.png"
          alt="3D Cube"
          width={300}
          height={300}
          className="absolute left-24 top-40 opacity-50 lg:opacity-100"
        />
      </div>


      <Image
        src="/images/offer/sunflower.png"
        alt="Flower Character"
        width={200}
        height={200}
        className="absolute right-0 bottom-0 opacity-50 lg:opacity-100"
      />
    </section>
  )
}

