export default function ChoseForKids() {
    return (
      <section className="relative w-full min-h-[400px] overflow-hidden">
        {/* Background Image Collage */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/bg-choseforkids.png')`
          }}
        />
  
        {/* Content Container */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            {/* Left Column */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-right">
            <span className="text-[#ff6b6b]">Chose</span> For Your Kids<br />
            & Join <span className="text-[#ff6b6b]">KidStick</span>
              </h1>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px border-dashed border-l-4 border-green-500"></div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              Kidstick offers a secure space for kids to discover, learn, and 
              thrive. Our activities promote creativity, confidence, and 
              teamwork. Led by skilled teachers, children participate in 
              fun tasks, form bonds, and enhance skills.
            </p>
            <p className="text-gray-700 text-lg">
              Discover the lively Kidstick community for your child. Join 
              today!
            </p>
              </div>
              <button className="bg-[#ff6b6b] text-white px-8 py-3 rounded-full hover:bg-[#ff5252] transition-colors duration-300">
            Join Today
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  