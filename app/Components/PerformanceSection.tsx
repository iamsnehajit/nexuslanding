// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CustomButton from "./ui/CustomButton"; 
// import Image from "next/image";
// import bg from "../../public/images/bg.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function TextSplitSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const leftTextRef = useRef<HTMLDivElement>(null);
//   const rightTextRef = useRef<HTMLDivElement>(null);
//   const centerContentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 🎯 মেইন টাইমলাইন: যা স্ক্রিনকে পিন করে রাখবে
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=150%", // স্ক্রল লেন্থ
//           scrub: 1,      // স্ক্রলের সাথে স্মুথ ট্র্যাকিং
//           pin: true,     // স্ক্রিন লক করে রাখার জন্য
//         },
//       });

//       // একসাথে দুইটা কাজ হবে: টেক্সট ২ ভাগ হয়ে দুই পাশে সরবে + মাঝখানের মেইন টেক্সট নিচ থেকে উঠবে
//       tl.to(leftTextRef.current, {
//         x: "-20vw", // বামের টেক্সট বামে চলে যাবে
//         ease: "power2.inOut",
//       }, 0)
//       .to(rightTextRef.current, {
//         x: "20vw",  // ডানের টেক্সট ডানে চলে যাবে
//         ease: "power2.inOut",
//       }, 0)
//       .to(centerContentRef.current, {
//         y: "20%",    // নিচ থেকে মেইন কন্টেন্ট এসে ফাঁকা জায়গায় বসবে
//         scale: 1,
//         opacity: 1,

//         ease: "power2.out",
//       }, 0.1); // সামান্য একটু পরে টেক্সটটা ওপরে উঠবে

//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-screen bg-white relative overflow-hidden flex items-center justify-center">
//       <div className="absolute w-full left-0 bottom-0 z-10">
//         <Image src={bg} alt="Image not found" className="w-full" />
//       </div>
//       {/* ↔️ স্ক্রল করলে এই টেক্সট লাইনটিই মাঝখান থেকে ২ ভাগ হয়ে যাবে */}
//       <div className="absolute w-full flex justify-center text-[35px] font-bold text-[#3E3F3F] pointer-events-none select-none z-10 whitespace-nowrap">
//         {/* বামের অংশ */}
//         <div ref={leftTextRef} className="pr-2">
//           expert ✦ collab ✦ explore ✦ expert ✦ collab ✦ explore ✦
//         </div>
//         {/* ডানের অংশ */}
//         <div ref={rightTextRef} className="pl-2">
//           collab ✦ neural ✦ empathetic ✦ collab ✦ neural ✦ empathetic
//         </div>
//       </div>

//       {/* 🎯 মাঝখানের ফাঁকা জায়গায় নিচ থেকে উঠে আসা মেইন কন্টেন্ট (ফিগমা ডিজাইন অনুযায়ী) */}
//       <div 
//         ref={centerContentRef} 
//         className="absolute flex flex-col items-center text-center max-w-[600px] px-6 z-20 translate-y-[100px] opacity-0 z-20"
//       >
//         <h2 className="text-[48px] md:text-[54px] font-medium text-[#121212] leading-[1.2]">
//           We’re a collaborative team of experts
//         </h2>
//         <p className="text-[18px] md:text-[18px] dark max-w-[560px] mx-auto mt-5 leading-relaxed">
//           Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive
//         </p>
//         <div className="mt-8">
//           {/* আপনার কাস্টম বাটন */}
//           <CustomButton text="Contact Us" variant="lime" href="/contact" />
//         </div>
//       </div>

//     </div>
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./ui/CustomButton"; 
import Image from "next/image";
import bg from "../../public/images/bg.png"; // আপনার ওই লিকুইড গ্রাডিয়েন্ট ইমেজটি

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

      {/* ↔️ স্ক্রল টেক্সট লাইন */}
      <div className="absolute w-full flex justify-center text-[35px] font-bold text-[#3E3F3F] pointer-events-none select-none z-10 whitespace-nowrap">
        <div ref={leftTextRef} className="pr-2">
          expert ✦ collab ✦ explore ✦ expert ✦ collab ✦ explore ✦
        </div>
        <div ref={rightTextRef} className="pl-2">
          collab ✦ neural ✦ empathetic ✦ collab ✦ neural ✦ empathetic
        </div>
      </div>

      {/* 🎯 মাঝখানের কন্টেন্ট */}
      <div 
        ref={centerContentRef} 
        className="absolute flex flex-col items-center text-center max-w-[680px] px-6 z-20 translate-y-[100px] opacity-0"
      >
        <h2 className="text-[48px] md:text-[50px] font-medium text-[#121212] leading-[1.1]">
          We’re a collaborative<br/>team of experts
        </h2>
        <p className="text-[18px] md:text-[18px] text-[#2C2C2C] max-w-[560px] mx-auto mt-6 leading-[1.2]">
          Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive
        </p>
        <div className="mt-9">
          <CustomButton text="Contact Us" variant="lime" href="/contact" />
        </div>
      </div>

    </div>
  );
}