import ScrollVelocity from "./ui/ScrollVelocity"
import Image from "next/image";
import Star from "../../public/images/star.svg";

export default function Scroll() {
  return (
    <div className="py-6">
  
        <ScrollVelocity
       texts={[
        <span className="inline-flex items-center gap-6 py-3">
          Quality Care Service
          <Image src={Star} alt="icon" className="w-10 h-10 inline-block mx-2" />
        </span>,
        <span className="inline-flex items-center gap-6 py-3">
          Quality Care Service 
          <Image src={Star} alt="icon" className="w-10 h-10 inline-block mx-2" />
        </span>
      ]}
        velocity={50}
        className="custom-scroll-text text-[#242424] text-[60px] font-normal"
        numCopies={6}
        damping={50}
        stiffness={400}
        />
    </div>
  )
}
