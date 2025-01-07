import Image from "next/image";

interface PricingCardProps {
    color: string;
    name: string;
    price: string;
    services: string[];
}

export default function PricingCard({ color, name, price, services }: PricingCardProps) {
    return (
        <div className="">
            <div className="relative bg-cover bg-center h-[14rem]" style={{ backgroundImage: "url('/images/offer/bg-silver.png')" }}>
                <div className="relative rounded-tb-3xl p-6 pb-8 overflow-hidden flex flex-col items-center justify-center">

                    {/* Star icons */}
                    <Image
                        src="/images/offer/orange-star.png"
                        alt="Star"
                        width={24}
                        height={24}
                        className="absolute top-4 left-4"
                    />
                    <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Star"
                        width={24}
                        height={24}
                        className="absolute top-4 right-4"
                    />
                    <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Star"
                        width={24}
                        height={24}
                        className="absolute bottom-8 left-4"
                    />

                    {/* Award icon */}
                    <Image
                        src="/images/offer/star-badge.png"
                        alt="Award"
                        width={68}
                        height={68}
                        className="mb-4"
                    />

                    <h2 className="text-4xl text-white font-bold mb-2">{price}</h2>
                </div>

                <div className="">
                <div className="absolute -bottom-4 left-[8.3rem] bg-red-400 text-lg text-gray-800 rounded-full px-7 py-2 font-semibold z-10">
                    {name}
                </div>
                </div>
            </div>

            <div className="bg-white rounded-b-3xl p-6 shadow-lg flex flex-col items-center justify-center">
                <ul className="space-y-3 mb-8 mt-6">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-center text-md">
                            <Image
                                src="/images/offer/bullet.png"
                                height={15}
                                width={15}
                                alt="green bullet point"
                                className="mr-[0.75rem]"
                            />
                            {service}
                        </li>
                    ))}
                </ul>

                <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Buy Now
                </button>
            </div>

            {/* Dotted pattern */}
            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                    ))}
                </div>
            </div>

            {/* SVG for scalloped edge */}
            <svg width="0" height="0" className="hidden">
                <defs>
                    <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0,1 C0.15,1,0.35,0.8,0.5,0.8 S0.85,1,1,1 V1 H0 Z" />
                    </clipPath>
                </defs>
            </svg>
        </div>

    );
}