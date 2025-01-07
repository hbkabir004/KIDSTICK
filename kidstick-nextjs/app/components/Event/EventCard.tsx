import { Clock, Star } from "lucide-react";

interface EventProps {
    date: string;
    month: string;
    title: string;
    image: string;
    rating: number;
    reviews: number;
    startTime: string;
    endTime: string;
    location: string;
    price: number;
}

export default function EventCard({ date, month, title, image, rating, reviews, startTime, endTime, location, price, }: EventProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Date Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg z-10">
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-900">{date}</span>
                    <span className="block text-sm text-green-500">{month}</span>
                </div>
            </div>

            {/* Image */}
            <div className="relative h-48 w-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-gray-600">
                        {rating} ({reviews} Review)
                    </span>
                </div>

                {/* Time */}
                <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>
                        {startTime} - {endTime}
                    </span>
                </div>

                {/* Location */}
                <div className="text-gray-600 mb-4">{location}</div>

            </div>
            {/* Price and Button */}
            <div className="p-3 bg-[#F8F8F8] flex items-center justify-between">
                <div>
                    <span className="text-gray-600 border-r-2 pr-2 border-green-500">From</span>
                    <span className="ml-2 text-xl font-bold">${price}</span>
                </div>
                <button className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Find Out More
                </button>
            </div>
        </div>
    );
}