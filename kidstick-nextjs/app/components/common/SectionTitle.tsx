interface SectionTitleProps {
    title: string;
    bgColor: string;
}

export default function Heading({title, bgColor}: SectionTitleProps) {
    return (
        <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="relative z-10">
                {title}
            </span>
            <span
                className={`absolute bottom-0 left-0 -z-0 h-3 w-full transform ${bgColor} md:h-4`}
                style={{
                    transform: 'skew(-2deg, -0.5deg)'
                }}
            />
        </h2>
    );
}