import Image from "next/image";
import Whychoose1 from "../../public/images/Whychoose1.png";
import Whychoose2 from "../../public/images/Whychoose2.png";
import Doot1 from "../../public/images/dot1.png";
import Doot2 from "../../public/images/dot2.png";
import AnimatedContent from "./ui/AnimatedContent";
import SplitText from "../Components/ui/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default function WhyChoose() {
  return (
    <div>
        <div className="container-custom relative py-20">
            <div className="grid grid-cols-12 gap-8 h-screen relative z-20">
                <div className="col-span-4 h-full flex justify-start items-start">
                    <AnimatedContent distance={100} direction="vertical" reverse={false} duration={1} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={1} className="w-full">
                        <Image src={Whychoose1} alt="Image not found" className="w-full"/>
                    </AnimatedContent>
                </div>
                <div className="col-span-4">
                    <div className="flex h-screen flex-col justify-center">
                    <div className="pl-2">
                        <label className="text-xl text-[#0D7F80] relative pl-28"><span className="w-27 h-2 border-t border-[#0D7F80] z-10 absolute left-0 top-1/2"></span>Why Choose Nexus</label>
                        <div className="mt-3">
                            <SplitText
  text="Compassionate Care Always There Health First"
  className="text-[#0C0B0B] font-semibold text-[40px] leading-[1.2] tracking-[1%]"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
  onLetterAnimationComplete={handleAnimationComplete}
  
/>
                            
                           
                            <p className="text-black text-[16px] leading-[1.2] mt-5">Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to treatment of cuses on promoting</p>

                        </div>
                        
                        <div className="flex mt-8">
                            <div className="dark font-semibold pr-3">
                                01.
                            </div>
                            <div>
                                <h3 className="dark font-semibold">Enhancing Lives Through Care</h3>
                                <p className="text-black text-[16px] leading-[1.2] mt-1">Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to treatment of cuses on promoting</p>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className="dark font-semibold pr-3">
                                02.
                            </div>
                            <div>
                                <h3 className="dark font-semibold">Tomorrow's Health, Today's Care</h3>
                                <p className="text-black text-[16px] leading-[1.2] mt-1">Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to treatment of cuses on promoting</p>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className="dark font-semibold pr-3">
                                03.
                            </div>
                            <div>
                                <h3 className="dark font-semibold">Enhancing Lives Through Care</h3>
                                <p className="text-black text-[16px] leading-[1.2] mt-1">Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to treatment of cuses on promoting</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-4 h-full flex justify-end items-end">
                    <AnimatedContent distance={100} direction="vertical" reverse={false} duration={1} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={1} className="w-full">
                        <Image src={Whychoose2} alt="Image not found" className="w-full relative z-20"/>
                    </AnimatedContent>
                </div>
            </div>
            <Image src={Doot1} alt="image not found" className="w-auto absolute right-0 bottom-0 z-10 float" />
            <Image src={Doot2} alt="image not found" className="w-auto absolute left-0 bottom-50 float" />
            </div>
            
        </div>
   
  )
}
