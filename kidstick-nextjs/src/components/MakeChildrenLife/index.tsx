
export default function MakeChildrenLife() {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/make-children/bg-make-children.png')" }}
    >
      <div className="pt-28 px-6 lg:px-0 lg:pt-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <img
              src="/images/make-children/girl.png"
              alt="Happy child in colorful clothes"
              className="w-full rounded-lg"
            />
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Make Your Children&apos;s<br />
              Life Special By<br />
              Enrolling Them In<br />
              Our <span className="text-[#FF6B6B]">KidStick</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
              Kidstick offers a secure space for kids to discover, learn, and thrive. Our 
              activities promote creativity, confidence, and teamwork. Led by skilled teachers, 
              children participate in fun tasks, form bonds, and enhance skills.
            </p>

            <button 
              className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] hover:from-[#FF8E8E] hover:to-[#FF6B6B] text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Join Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

