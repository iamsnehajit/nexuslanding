"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Hero from "./Components/Hero";
import WhyChoose from "./Components/WhyChoose";
import Services from "./Components/Services";
import Scrollv from "./Components/Scroll";
import Contact from "./Components/Contact";
import PerformanceSection from "./Components/PerformanceSection";

export default function Home() {
  useEffect(() => {
    
    const tl = gsap.timeline({ delay: 2.3 });

    
    tl.fromTo(
      ".hero-reveal",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.2 }
    );

    
    tl.fromTo(
      ".card-reveal",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
      "-=0.5" 
    );
  }, []);

  return (
   <div>
    <section>
      <Hero/>
    </section>
    <section id="whyUs">
      <WhyChoose/>
    </section>
    <section id="services">
      <Services/>
    </section>
    <section className="py-20" id="benefit">
      <Scrollv/>
    </section>
    <section>
      <Contact/>
    </section>
    <section>
      <PerformanceSection/>
    </section>
   </div>
  );
}