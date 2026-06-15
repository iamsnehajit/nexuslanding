"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./ui/CustomButton"; 
import Image from "next/image";
import bg from "../../public/images/bg.png"; 

gsap.registerPlugin(ScrollTrigger);

export default function TextSplitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
         
          start: "top 90%",
          end: "top top", 
          scrub: 1.5,     
          pin: false,    
        },
      });

      tl.to(leftTextRef.current, {
        x: "-20vw", 
        ease: "power2.inOut",
      }, 0)
      .to(rightTextRef.current, {
        x: "20vw",  
        ease: "power2.inOut",
      }, 0)
      .to(centerContentRef.current, {
        y: "0%",    
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      }, 0.1);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[500px]  relative overflow-hidden flex items-center justify-center">
      <div className="absolute w-full bottom-0 left-0 z-0 pointer-events-none select-none h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full flag-wave-container">
          <Image 
            src={bg} 
            alt="Liquid Wave Gradient" 
            fill
            className="object-cover object-bottom opacity-80 flag-wave-element" 
            priority
          />
        </div>
      </div>

     
      <div className="hidden absolute w-full md:flex justify-center text-[20px] xl:text-[35px] font-bold text-[#3E3F3F] pointer-events-none select-none z-10 whitespace-nowrap">
        <div ref={leftTextRef} className="pr-2">
          expert ✦ collab ✦ explore ✦ expert ✦ collab ✦ explore ✦
        </div>
        <div ref={rightTextRef} className="pl-2">
          collab ✦ neural ✦ empathetic ✦ collab ✦ neural ✦ empathetic
        </div>
      </div>

     
      <div 
        ref={centerContentRef} 
        className="absolute flex flex-col items-center text-center w-full md:max-w-[300px] lg:max-w-[400px] xl:max-w-[680px] px-6 z-20 translate-y-[100px] opacity-0"
      >
        <h2 className="text-[30px] lg:text-[30px] lg:text-[40px] xl:text-[50px] font-medium text-[#121212] leading-[1.1]">
          We’re a collaborative<br/>team of experts
        </h2>
        <p className="text-[18px] md:text-[18px] text-[#2C2C2C] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[560px] mx-auto mt-6 leading-[1.2]">
          Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive
        </p>
        <div className="mt-9">
          <CustomButton text="Contact Us" variant="lime" href="/contact" />
        </div>
      </div>

    </div>
  );
}