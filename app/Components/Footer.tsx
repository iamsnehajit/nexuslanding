"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FooterNexus() {
  const nexusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nexusRef.current) return;

   
    const letters = nexusRef.current.querySelectorAll(".nexus-letter");

    gsap.fromTo(
      letters,
      {
        y: 100,         
        opacity: 0,      
      },
      {
        y: 0,           
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,    
        scrollTrigger: {
          trigger: nexusRef.current,
          start: "top 90%", 
        },
      }
    );
  }, []);

 
  const word = "Nexus";

  return (
    <footer className="w-full pt-30 pb-5 rounded-t-[50px] overflow-hidden">
      <div className="container-custom mx-auto text-[#D7D7D7] overflow-hidden">
        
       
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="w-1/2">
             <ul className="flex gap-8 text-xl text-white mb-6">
               <li>Why Us <span className="pl-8">|</span></li>
               <li>Service <span className="pl-8">|</span></li>
               <li>Benefits</li>
             </ul>
             <p className="text-[16px] text-white leading-[1.2] max-w-3/4">
               Medical services are an essential part of our lives, offering care and treatment for various health conditions.
             </p>
             <div className="flex items-center gap-3 text-white mt-5">
                {/* Facebook */}
                <a href="#" className="hover:text-[#CCFA82] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:text-[#CCFA82] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="hover:text-[#CCFA82] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                </div>
          </div>
          
          <div className="mt-10 md:mt-0 w-1/2">
             <h4 className="text-3xl font-semibold mb-6">Still have questions?</h4>
             <div className="flex">
               <input 
                 type="email" 
                 placeholder="Enter your e-mail" 
                 className="bg-white w-3/4 rounded-4xl text-black py-1 px-4"
               />
               <CustomButton text="Submit"  href="/contact" variant="lime" />
             </div>
          </div>
        </div>

        {/* Nexus Letter Animation Area */}
        <div 
          ref={nexusRef} 
          className="flex justify-center items-center overflow-hidden h-[150px] lg:h-[200px] xl:h-[215px] 2xl:h-[250px] -mb-3"
        >
          {word.split("").map((char, index) => (
            <span 
              key={index} 
              className="nexus-letter inline-block text-[15vw] text-[#D7D7D7] tracking-[5%] md:text-[18vw] font-black leading-none"
            >
              {char}
            </span>
          ))}
        </div>
        
      </div>
      <div className="pt-5 border-t border-white">
        <div className="container-custom flex justify-between">
            <p className="text-white text-[16px]">© 2025 Nexus. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="" className="text-white text-[16px]">Privacy Policy</Link>
                <Link href="" className="text-white text-[16px]">Cookies Policy</Link>
            </div>
        </div>    
      </div>
    </footer>
  );
}