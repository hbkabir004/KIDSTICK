
export default function OfferList() {
    return (
        <div className="relative bg-[#FBF1E3] rounded-b-3xl p-6 shadow-lg flex flex-col items-center justify-center">
            <ul className="space-y-3 mb-8 mt-6">
                <li className="flex items-center text-md">
                    <img
                        src="/images/offer/bullet.png"
                        height={15}
                        width={15}
                        alt="green bullet point"
                        className="mr-[0.75rem]"
                    />
                    Hiking Service
                </li>
                <li className="flex items-center text-md">
                    <img
                        src="/images/offer/bullet.png"
                        height={15}
                        width={15}
                        alt="green bullet point"
                        className="mr-[0.75rem]"
                    />
                    Swimming Service
                </li>
                <li className="flex items-center text-md">
                    <img
                        src="/images/offer/bullet.png"
                        height={15}
                        width={15}
                        alt="green bullet point"
                        className="mr-[0.75rem]"
                    />
                    Kayaking Service
                </li>
                <li className="flex items-center text-md">
                    <img
                        src="/images/offer/bullet.png"
                        height={15}
                        width={15}
                        alt="green bullet point"
                        className="mr-[0.75rem]"
                    />
                    Soccer Service
                </li>
            </ul>

            {/* Dotted pattern */}
            <div className="absolute bottom-4 left-4 w-16 h-16">
                <img
                    src="/images/offer/dotted-banner.png"
                    alt="Award"
                    width={68}
                    height={68}
                />
            </div>

            <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Buy Now
            </button>
        </div>
    );
}