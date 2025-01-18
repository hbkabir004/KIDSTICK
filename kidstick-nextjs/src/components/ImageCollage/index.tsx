
export default function ImageCollage() {
    const activities = [
      {
        image: "/images/image-collage/01.png",
        alt: "Child in denim jacket",
        bgColor: "bg-[#FFB5B5]" // Pink
      },
      {
        image: "/images/image-collage/02.png",
        alt: "Child jumping with raised arms",
        bgColor: "bg-[#E8E1D9]" // Beige
      },
      {
        image: "/images/image-collage/03.png",
        alt: "Child with hula hoop",
        bgColor: "bg-[#87CEEB]" // Light blue
      },
      {
        image: "/images/image-collage/04.png",
        alt: "Child playing guitar",
        bgColor: "bg-[#FFD700]" // Yellow
      },
      {
        image: "/images/image-collage/05.png",
        alt: "Child on roller skates",
        bgColor: "bg-[#98D8C8]" // Mint green
      }
    ]
  
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 mb-32">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`relative aspect-[3/4] ${activity.bgColor} overflow-hidden group`}
          >
            <img
              src={activity.image}
              alt={activity.alt}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
          </div>
        ))}
      </div>
    )
  }
  
  