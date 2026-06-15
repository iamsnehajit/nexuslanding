"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const counterObj = { value: 0 };
    
    // const tl = gsap.timeline({
    //   onComplete: () => {
    //     gsap.to("#preloader-overlay", {
    //       yPercent: -100,
    //       duration: 0.8,
    //       ease: "power4.inOut",
    //       delay: 0.2,
    //     });
    //   }
    // });
    const tl = gsap.timeline({
  onComplete: () => {
    gsap.to("#preloader-overlay", {
      scale: 5,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      delay: 0,
      pointerEvents: "none",
     
      onComplete: () => {
       
        const loader = document.getElementById("preloader-overlay");
        if (loader) loader.style.display = "none";
        document.body.style.overflow = "unset";

        
        window.dispatchEvent(new Event('resize'));
      }
    });
  }
});

    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: "power1.out",
      onUpdate: () => {
        setCount(Math.floor(counterObj.value));
      },
    });
  }, []);

  return (
    <div
      id="preloader-overlay"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#151515] text-white overflow-hidden select-none"
    >
     
      <div className="relative w-[58vw] h-[20vh] md:h-[30vh] flex items-center justify-center">
        
       
        <span className="absolute inset-0 flex items-center justify-center text-[15vw] font-black tracking-tight text-white/5 uppercase leading-none w-full text-center">
          Nexus
        </span>
        
        
        <span className="absolute inset-0 flex items-center justify-center text-[15vw] font-black uppercase tracking-tight text-white figma-exact-wave overflow-hidden leading-none w-full text-center">
          Nexus
        </span>

      
        <div className="absolute bottom-[20px] md:bottom-[-25px] right-0 flex items-center gap-1 font-mono text-sm md:text-xl text-white bg-[#151515] px-2">
          <span>loading...</span>
          <span className="w-[35px] text-right">{count}%</span>
        </div>
        
      </div>
    </div>
  );
}