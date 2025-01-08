import './index.css'

export default function Hero() {
    return (
        <section style={{ backgroundImage: "url('/images/hero/rainbow.png')" }} className='bg-cover bg-center pt-0'>
            <div style={{ backgroundImage: "url('/images/hero/stars.png')" }} className='bg-cover bg-center'>
                <div className="relative min-h-[600px] overflow-hidden px-4 md:px-6 lg:px-8 z-10">
                    {/* Decorative Elements */}
                    <div className="absolute left-20 top-10 animate-bounce">
                        <img
                            src="/images/hero/planet.png"
                            alt=""
                            width={100}
                            height={100}
                            className="opacity-75"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="absolute right-8 top-16 animate-pulse">
                        <div className="h-16 w-16 text-yellow-400">
                            <img
                                src="/images/hero/pulse.png"
                                alt=""
                                width={50}
                                height={50}
                                className=""
                                aria-hidden="true"
                            />
                        </div>
                    </div>


                    {/* Main Content */}
                    <div className="mx-auto max-w-6xl pt-12 md:pt-16">
                        <div className="relative z-10 flex flex-col items-start gap-4">

                            <div className="absolute right-0 top-8 animate-bounce transform -translate-x-1/2">
                                {/* Sun */}
                                <div className="h-32 w-32 text-yellow-400">
                                    <img
                                        src="/images/hero/sun.png"
                                        alt=""
                                        width={100}
                                        height={100}
                                        className=""
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            <div className="relative inline-block">
                                {/* Wave shape container */}
                                <div
                                    className="relative bg-teal-400 px-6 pt-6 pb-2"
                                    style={{
                                        clipPath: "path('M0,16 C40,0 80,32 120,16 C160,0 200,32 240,16 L240,80 L0,80 Z')"
                                    }}
                                >
                                    {/* Text content */}
                                    <span className="relative z-10 text-sm font-semibold md:text-base">
                                        Welcome To KidsLand
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
                                Learn, Play and<br />Grow!
                            </h1>

                            <p className="max-w-xl text-lg text-gray-600">
                                A fun-filled space where kids explore, create, and make new friends!
                                From games and sports to arts and crafts, we offer exciting activities
                                for all ages. Join us for a world of play, learning, and adventure!
                            </p>

                            <button className="mt-2 bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full transition-colors duration-200">
                                Get Started
                            </button>
                        </div>
                        {/* Bottom Grass and Tiger */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <div className="relative">
                                <div
                                    style={{ backgroundImage: "url('/images/hero/grass.png')" }}
                                    className="h-32 bg-repeat-x animate-move"
                                />
                                <div className="absolute bottom-0 left-8 z-10 w-20 animate-bounce md:w-24 hidden lg:block">
                                    <img
                                        src="/images/hero/tiger.png"
                                        alt=""
                                        width={80}
                                        height={80}
                                        className="opacity-90"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="absolute bottom-0 right-0 w-full max-w-2xl">
                            <img
                                src="/images/hero/raising-hands.png"
                                alt="Happy children with raised hands"
                                width={1000}
                                height={1000}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                {/* Background Grass Image */}
                <div className="absolute lg:bottom-[7rem] left-0 right-0 h-64 bg-fill bg-bottom -z-0" style={{ backgroundImage: "url('/images/hero/bg-grass.png')" }} />
            </div>
        </section>
    )
}

