import CustomButton from "./ui/CustomButton2";
import AnimatedContent from "./ui/AnimatedContent";
import SplitText from "../Components/ui/SplitText";
import Image from "next/image";
import pinimg from "../../public/images/pin-img.png";
import quality from "../../public/images/quality.svg";
import healing from "../../public/images/healing.svg";
import cure from "../../public/images/cure.svg";
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default function Services() {
  return (
    <div>
        <div className="relative bg-[#151515] rounded-3xl overflow-hidden py-24">
            <div className="container-custom">
                <div className="relative mb-10">
                    <label className="text-xl text-[#CCFA82] relative pl-28"><span className="w-27 h-2 border-t border-[#CCFA82] z-10 absolute left-0 top-1/2"></span>Our Services</label>
                    <div>
                    <SplitText
                    text="What's possible with us"
                    className="text-white font-semibold text-[60px] leading-[1.2] tracking-[1%]"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                
                    />
                    </div>
                </div>
                <div className="group relative py-10 border-b border-[#919090]">
                    <div className="grid grid-cols-12">
                        
                        <div className="col-span-6 flex">
                            
                            <Image src={quality} alt="Image not fonnd" className="w-16 pr-6" />
                       
                            <h3 className="text-white font-medium text-4xl leading-[1.2]">Quality Care<br/>Exceptional Medicines Service</h3>
                        </div>
                        <div className="col-span-2">
                            <ul className="list-disc pl-5">
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Your Health, Our Priority</li>
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Harmony Health</li>
                            </ul>
                        </div>
                                                
                            <div className="col-span-2 relative cursor-pointer">
                                
                            
                                <span className="text-white"></span> 

                            
                                <Image 
                                src={pinimg} 
                                alt="Hover Image" 
                                className="w-48 absolute top-0 left-0 opacity-0 pointer-events-none transition-opacity float duration-300 group-hover:opacity-100" 
                                />
                            </div>
                        <div className="col-span-2">
                             <CustomButton text="Contact Us"  href="/contact" variant="lime" />
                        </div>
                    </div>
                </div>

                <div className="group relative py-10 border-b border-[#919090]">
                    <div className="grid grid-cols-12">
                        
                        <div className="col-span-6 flex">
                            
                            <Image src={healing} alt="Image not fonnd" className="w-16 pr-6" />
                       
                            <h3 className="text-white font-medium text-4xl leading-[1.2]">Healing Lives One<br/> Patient at a Time Consult doctors</h3>
                        </div>
                        <div className="col-span-2">
                            <ul className="list-disc pl-5">
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Your Health, Our Priority</li>
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Harmony Health</li>
                            </ul>
                        </div>
                                                
                            <div className="col-span-2 relative cursor-pointer">
                                
                            
                                <span className="text-white"></span> 

                            
                                <Image 
                                src={pinimg} 
                                alt="Hover Image" 
                                className="w-48 absolute top-0 left-0 opacity-0 pointer-events-none transition-opacity float duration-300 group-hover:opacity-100" 
                                />
                            </div>
                        <div className="col-span-2">
                             <CustomButton text="Contact Us"  href="/contact" variant="lime" className="pointer-events-auto"/>
                        </div>
                    </div>
                </div>

                <div className="group relative py-10">
                    <div className="grid grid-cols-12">
                        
                        <div className="col-span-6 flex">
                            
                            <Image src={cure} alt="Image not fonnd" className="w-16 pr-6" />
                       
                            <h3 className="text-white font-medium text-4xl leading-[1.2]">Caring for You Caring<br/> for Lab tests</h3>
                        </div>
                        <div className="col-span-2">
                            <ul className="list-disc pl-5">
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Your Health, Our Priority</li>
                                <li className="text-[18px] text-[#A8A6A6] mb-1">Harmony Health</li>
                            </ul>
                        </div>
                                                
                            <div className="col-span-2 relative cursor-pointer">
                                
                            
                                <span className="text-white"></span> 

                            
                                <Image 
                                src={pinimg} 
                                alt="Hover Image" 
                                className="w-48 absolute top-0 left-0 opacity-0 pointer-events-none transition-opacity float duration-300 group-hover:opacity-100" 
                                />
                            </div>
                        <div className="col-span-2">
                             <CustomButton text="Contact Us"  href="/contact" variant="lime" className="pointer-events-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
