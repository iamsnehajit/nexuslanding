"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Arrow from "../../public/images/arrow.svg";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-2 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-sm" // 
          : "py-4 bg-[linear-gradient(180deg,rgba(238,238,238,0.6)_0%,rgba(218,218,218,0)_100%)]"
      }`}>
      <div className="container-custom flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="image not found" className="2xl:w-52 xl:w-48 lg:w-36 md:w-32 w-24"/>
     </Link>

     
      <nav className="md:flex items-center gap-7 md:gap-6 font-medium text-xs md:text-sm text-neutral-400 tracking-wide hidden">
        
        <Link href="/" className="text-black flex text-[18px] font-normal transition-colors">
          <span className="nav-link">Why Us </span> <span className="inline-block pl-6">|</span>  
        </Link>
        <Link href="/contact" className="text-black text-[18px] font-normal flex transition-colors">
          <span className="nav-link">Service </span> <span className="inline-block pl-6">|</span> 
        </Link>
        <Link href="/contact" className="nav-link text-black font-normal text-[18px] transition-colors">
          Benefits
        </Link>
        <Link href="/contact" className="text-black hover:bg-[#CCFA82] font-normal text-[18px] group  border border-black rounded-3xl transition-colors px-5 py-2">
          Let’s Talk! <Image src={Arrow} alt="image not found" className="w-4 pl-1 inline-block"/>
        </Link> 
      </nav>

      {/* mobile menu */}
      <button 
          onClick={() => setIsOpen(true)}
          className="flex md:hidden flex-col gap-1.5 justify-center items-center w-8 h-8 z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black rounded-full transition-all"></span>
          <span className="w-6 h-0.5 bg-black rounded-full transition-all"></span>
          <span className="w-4 h-0.5 bg-black rounded-full self-end transition-all"></span>
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      
      <div className={`fixed top-0 left-0 h-full w-[75vw] sm:w-[60vw] bg-white z-50 md:hidden p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
         
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-8">
            <Image src={logo} alt="Nexus Logo" className="w-24"/>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-black text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

         
          <nav className="flex flex-col gap-5">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-black text-xl font-medium py-2 border-b border-neutral-50 hover:pl-2 transition-all duration-200"
            >
              Why Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-black text-xl font-medium py-2 border-b border-neutral-50 hover:pl-2 transition-all duration-200"
            >
              Service
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-black text-xl font-medium py-2 border-b border-neutral-50 hover:pl-2 transition-all duration-200"
            >
              Benefits
            </Link>
          </nav>
        </div>

      
        <div className="mb-6">
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 text-black bg-[#CCFA82] hover:bg-[#bce674] font-medium text-lg rounded-3xl transition-colors w-full py-3"
          >
            Let’s Talk! <Image src={Arrow} alt="arrow" className="w-4"/>
          </Link> 
        </div>
      </div>
    </header>
  );
}