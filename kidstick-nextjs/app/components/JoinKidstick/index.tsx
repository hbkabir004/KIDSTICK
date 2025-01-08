'use client'

import { Star } from 'lucide-react'

export default function JoinKidstick() {
    return (
        <div className="relative flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Panel - Image Section */}
            <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[600px]">
                <div className="absolute inset-0">
                    <img
                        src="/images/join-kidstick/smilingkids.png"
                        alt="Children enjoying activities"
                        className="w-full h-full object-cover"
                    />
                    {/* Star Decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(12)].map((_, i) => (
                            <Star
                                key={i}
                                className={`absolute text-yellow-400 w-4 h-4 animate-pulse`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.2}s`
                                }}
                                fill="currentColor"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - Content Section */}
            <div className="w-full lg:w-1/2 bg-[#447A9C] text-white px-8 lg:p-12 py-16 md:py-8 relative">
                <div className="max-w-xl mx-auto">
                    <p className="text-lg mb-4">Join KidStick Today!</p>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                        Get Ready For The Adventure With{' '}
                        <span className="text-[#FF6B6B]">KidStick</span>
                    </h1>

                    <p className="mb-4 text-sm lg:text-base">
                        KidStick offers enriching experiences where children thrive through
                        adventure, creativity, and learning. Guided by dedicated instructors,
                        children explore new interests, build essential skills, and form lasting
                        friendships in a safe, supportive environment.
                    </p>

                    <p className="mb-8 text-sm lg:text-base">
                        Sign up today to give your child the opportunity to discover their
                        potential and embark on exciting adventures with KidStick!
                    </p>

                    <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full transition-colors duration-200">
                        Join Today
                    </button>
                </div>

                {/* Cloud Decoration */}
                <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 hidden lg:block">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/join-kidstick/cloud.png)' }}>
                            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/join-kidstick/bird.png)' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Wave Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-12 z-10">
                <img
                    src="/images/join-kidstick/grass.png"
                    alt="Decoration"
                    className="w-full h-full object-fill"
                />
            </div>

            {/* Colorful Star */}
            <div className="absolute bottom-2 left-0 w-28 h-32 z-0 hidden lg:block">
                <img
                    src="/images/join-kidstick/color-start.png"
                    alt="Decoration"
                    className="w-full h-full object-fill"
                />
            </div>
        </div>
    )
}

