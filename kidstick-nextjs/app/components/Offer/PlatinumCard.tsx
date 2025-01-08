import Image from "next/image";
import OfferList from "./OfferList";


export default function PlatinumCard() {
    return (
        <div className="">
            <div className="relative bg-cover bg-center h-[14rem]" style={{ backgroundImage: "url('/images/offer/bg-platinum.png')" }}>
                <div className="relative rounded-tb-3xl p-6 pb-8 overflow-hidden flex flex-col items-center justify-center">

                    {/* Star icons */}
                    <Image
                        src="/images/offer/orange-star.png"
                        alt="Star"
                        width={40}
                        height={40}
                        className="absolute top-8 left-4"
                    />
                    <Image
                        src="/images/offer/orange-star.png"
                        alt="Star"
                        width={40}
                        height={40}
                        className="absolute top-20 right-4"
                    />
                    <Image
                        src="/images/offer/orange-star.png"
                        alt="Star"
                        width={40}
                        height={40}
                        className="absolute bottom-0 left-10"
                    />

                    {/* Award icon */}
                    <Image
                        src="/images/offer/platinum-badge.png"
                        alt="Award"
                        width={100}
                        height={100}
                        className="mb-4"
                    />

                    <h2 className="text-4xl text-white font-bold mb-2">$29.99</h2>
                </div>

                <div className="">
                    <div className="absolute -bottom-4 left-[8.3rem] bg-white text-lg text-gray-800 rounded-full px-7 py-2 font-semibold z-10">
                        Platinum
                    </div>
                </div>
            </div>

            <OfferList />

        </div>

    );
}