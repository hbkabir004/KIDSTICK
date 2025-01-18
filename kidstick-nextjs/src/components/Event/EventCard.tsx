
import { Event } from "@/src/types/types";
import { Clock, Star } from "lucide-react";

interface EventProps {
    event: Event
}

export default function EventCard({ event }: EventProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md group">
            {/* Date Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg z-10">
                <div className={`${event.textColor} text-center group-hover:text-green-500`}>
                    <span className="block text-lg font-bold">{event.date}</span>
                    <span className="block text-sm">{event.month}</span>
                </div>
            </div>

            {/* Image */}
            <div className="relative h-48 w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-500">{event.title}</h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-red-400 text-red-400"
                        />
                    ))}
                    <span className="ml-2 text-gray-600">
                        {event.rating} ({event.reviews} Review)
                    </span>
                </div>

                {/* Time */}
                <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>
                        {event.startTime} - {event.endTime}
                    </span>
                </div>

                {/* Location */}
                <div className="text-gray-600 mb-4">{event.location}</div>

            </div>
            {/* Price and Button */}
            <div className="p-3 bg-[#F8F8F8] flex items-center justify-between">
                <div>
                    <span className="text-gray-600 border-r-2 pr-2 border-yellow-400">From</span>
                    <span className="ml-2 text-xl font-bold group-hover:text-green-500">${event.price}</span>
                </div>
                <button className={`px-4 py-2 text-sm font-semibold group-hover:text-white rounded-lg group-hover:bg-green-500 transition-colors border-2 ${event.textColor} ${event.borderColor}`}>
                    Find Out More
                </button>
            </div>
        </div>
    );
}