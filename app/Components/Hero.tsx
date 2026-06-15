"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularText from "./ui/CircularText";
import Arrow from "../../public/images/arrow.svg";
import Arrow2 from "../../public/images/Arrow2.svg";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

// GSAP-er register 
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // bootom animation
  
  const bounceRef = useRef<HTMLDivElement>(null);
  const contactTextRef = useRef<HTMLParagraphElement>(null);
  const contactButtonRef = useRef<HTMLDivElement>(null);
   const circularTextRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const getTargetWidth = () => {
      const width = window.innerWidth;
      if (width >= 1800) return "1800px";
      if (width >= 1600) return "1400px";
      if (width >= 1440) return "1300px";
      if (width >= 1366) return "1250px";
      if (width >= 1280) return "1200px";
      
      return "calc(100vw - 20px)";
    };

    const getTargetHeight = () => {
      const width = window.innerWidth;
      if (width < 676) return "40vh";
      return "60vh";
    };

    const ctx = gsap.context(() => {
     
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=150%",    
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

    
      tl.to(containerRef.current, {
        width: getTargetWidth(),
        height: getTargetHeight(),
        top: "10vh",
        borderRadius: "24px",
        ease: "none",
      })
     
      .to([bounceRef.current, circularTextRef.current], {
        opacity: 0,
        y: -20,
        ease: "power1.out",
      }, ">") 
     
      .to(contactTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      
      .to(contactButtonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    
    <div ref={triggerRef} className="w-full bg-white overflow-hidden">
      
     
      <div 
        ref={containerRef} 
        className="relative mx-auto w-screen h-screen overflow-hidden bg-black flex items-center justify-center transition-all duration-100 ease-out"
      >
        
        
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        

      </div>
      <div className="container-custom absolute herobottom z-3 left-1/2 -translate-x-1/2 w-full">
      <div>
          <h1 className="hero-txt dark font-semibold leading-[1.2] md:w-2/4">
            We collect, pack, and deliver your medicines. Easy!
          </h1>
          <p className="text-[18px] dark font-medium leading-[1.1] md:w-2/4 lg:w-3/4 pt-5">
            Pathology test, Medicines & Doctor Consolations - all in one place.
          </p>
          </div>
          <div className="absolute right-3 lg:right-0 z-10 bottom-3" ref={circularTextRef}>
          <CircularText
            text="DOWN SCROLL DOWN SCROLL DOWN SCROLL "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class "
          />
        </div>
        <div className="arrow bounce bounce2" ref={bounceRef}>
            <Image src={Arrow2} alt="Image not found" className="w-4"/>
        </div>
        <div className="arrow contact w-full md:w-[385px] md:mr-3 lg:mr-0 ml-auto">
            
            <p ref={contactTextRef} className="opacity-0 translate-y-4 dark text-[20px] leading-[1.2] ">
              Quality Health close to home<br/>Caring you every step
            </p>
            
            {/* <Link href="/" ref={contactButtonRef} className="opacity-0 translate-y-4 inline-block text-[18px] text-black mt-5">
              <span className=" bg-[#CCFA82] py-2.5 px-3.5 rounded-3xl">Contact Us</span> <div className="inline-block"><span className=" bg-[#CCFA82] w-10 h-10 rounded-4xl -ml-2 flex justify-center items-center"><Image src={Arrow} alt="image not found" className="w-3 inline-block rounded-2xl bg-[#CCFA82]"/></span></div>
            </Link> */}
            <div ref={contactButtonRef} className="opacity-0 translate-y-4 mt-5">
                <CustomButton text="Contact Us"  href="/contact" variant="lime" />
            </div>
            
        </div>
        </div>
        
    </div>
  );
}