import Image from 'next/image'

export default function OurApproach() {
  return (
    <section className="md:bg-transparent bg-[#FFE6E6] relative pt-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/our-approach/bg-approach.png')" }}>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-[20%]">
        <Image
          src="/images/our-approach/orange-star.png"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-12 left-[40%]">
        <Image
          src="/images/our-approach/green-star.png"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10"
          aria-hidden="true"
        />
      </div>
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center md:px-0 px-6">
            {/* Image Grid */}
            <div className="relative">
              {/* Background Images */}
              <div className="absolute -top-[6.3rem] -left-5 w-[5.5rem] h-[5.5rem]">
                <Image
                  src="/images/our-approach/top-left.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute bottom-4 right-5 w-full h-full">
                <Image
                  src="/images/our-approach/bg-group-img.png"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -top-36 -right-44 w-[17rem] h-[12rem] md:block hidden">
                <Image
                  src="/images/our-approach/top-right.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full"
                  aria-hidden="true"
                />
              </div>

              <div className="grid grid-cols-2 gap-0 bg-white rounded-3xl shadow-lg">
                <div className="relative aspect-[1.5]">
                  <Image
                    src="/images/our-approach/image_4.jpg"
                    alt="Children engaged in outdoor learning activities"
                    fill
                    className="object-cover border-[#49D574] border-2 rounded-tl-2xl"
                  />
                </div>
                <div className="relative aspect-[1.5]">
                  <Image
                    src="/images/our-approach/image_5.jpg"
                    alt="Children participating in group activities"
                    fill
                    className="object-cover border-[#FFA766] border-2 rounded-tr-2xl"
                  />
                </div>
                <div className="relative aspect-[1.5]">
                  <Image
                    src="/images/our-approach/image_6.jpg"
                    alt="Children playing sports"
                    fill
                    className="object-cover border-[#5BA8FD] border-2 rounded-bl-2xl"
                  />
                </div>
                <div className="relative aspect-[1.5]">
                  <Image
                    src="/images/our-approach/image_7.jpg"
                    alt="Children in an art class"
                    fill
                    className="object-cover border-[#FF98C9] border-2 rounded-br-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg text-gray-600 mb-2">Our Approach</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a4b] mb-6">
                  Welcome<br />To Kids Stick!
                </h1>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Kidstick, we blend adventure, creativity, and learning to spark
                growth and curiosity in kids. Our programs prioritize safety,
                engagement, confidence, and teamwork. Led by skilled instructors,
                we offer a rich environment for kids to discover, bond, and have fun
                experiences.
              </p>
              <button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Spiral */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64">
        <Image
          src="/images/our-approach/circle.png"
          alt=""
          width={160}
          height={160}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

