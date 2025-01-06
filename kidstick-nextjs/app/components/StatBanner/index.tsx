import { OceanAnimations } from "./OceanAnimations";
import { StatCounter } from "./StatCounter";
import { Waves } from "./Waves";
import './index.css';

export default function OceanStats() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#B5E7F9] to-[#87CEFA] py-16">
      <Waves />
      <OceanAnimations />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCounter value={25} label="Total Groups" />
          <StatCounter value={42} label="Qualified Teachers" />
          <StatCounter value={350} label="Students Enrolled" />
          <StatCounter value={10} label="Year of Experience" />
        </div>
      </div>
    </div>
  )
}