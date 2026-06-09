// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import contact from "../../public/images/cbg.jpeg";
// import contactpeople from "../../public/images/cpeople.png";
// import AnimatedContent from "./ui/AnimatedContent";
// import SplitText from "../Components/ui/SplitText";
// import CustomButton from "./ui/CustomButton";
// gsap.registerPlugin(ScrollTrigger);
// const handleAnimationComplete = () => {
//   console.log('All letters have animated!');
// };

// export default function Contact() {

//     const containerRef = useRef<HTMLDivElement>(null);
//      const peopleImgRef = useRef<HTMLDivElement>(null);
 
//     const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 🎯 সেকশনটি স্ক্রিনে এসে পিন হবে এবং স্ক্রল করলে ইমেজটি নিচ থেকে ওপরে উঠবে
//       gsap.to(peopleImgRef.current, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",      // সেকশনটি স্ক্রিনের একদম ওপরে টাচ করলে পিন শুরু হবে
//           end: "+=100%",         // স্ক্রল ডিউরেশন (যতক্ষণ ইউজার স্ক্রল করবে)
//           scrub: 1,              // স্ক্রলের গতির সাথে স্মুথলি অ্যানিমেশন সিঙ্ক হবে
//           pin: true,             // সম্পূর্ণ সেকশনটি লক বা স্টিকি থাকবে
//           invalidateOnRefresh: true,
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);
//   return (
//     <div>
//         <div className="relative bg-[#f1f1f1] py-24">
//             <div className="container-custom">
//                 <div className="grid grid-cols-12">
//                     <div className="col-span-6 relative">
//                         <div className="contact-left p-15 rounded-4xl overflow-hidden">
//                              <AnimatedContent distance={100} direction="vertical" reverse={false} duration={1} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={1}>
//                                 <Image src={contact} alt="Image not found" className="w-full rounded-4xl overflow-hidden"  />
//                             </AnimatedContent>
//                             <div 
//                 ref={peopleImgRef}
//                 className="absolute inset-x-0 bottom-0 w-full h-full flex items-end justify-center translate-y-[60%] opacity-0 will-change-transform z-10"
//               >
//                 <Image 
//                   src={contactpeople} 
//                   alt="People" 
//                   className="w-full h-auto object-contain max-h-[90%]" 
//                   priority
//                 />
//               </div>
//                         </div>
//                     </div>
                    
//                     <div className="col-span-6">
//                         <div>
//                             <label className="text-xl text-[#0D7F80] relative pl-28"><span className="w-27 h-2 border-t border-[#0D7F80] z-10 absolute left-0 top-1/2"></span>Contact Us</label>
//                         <div className="">
//                             <SplitText
//   text="Get in touch"
//   className="text-[#0C0B0B] font-semibold text-[60px] leading-[1.2] tracking-[3%]"
//   delay={50}
//   duration={1.25}
//   ease="power3.out"
//   splitType="chars"
//   from={{ opacity: 0, y: 40 }}
//   to={{ opacity: 1, y: 0 }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="left"
//   onLetterAnimationComplete={handleAnimationComplete}
  
// />
                            
                           
//                             <p className="dark text-[18px] leading-[1.2] mt-2 w-3/4">Book your appointment quickly and easily with our trusted healthcare experts for fast and reliable medical support.</p>

//                         </div>

//                         <div className="from-area mt-16">
//                             <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        
       
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
//                                 <div className="relative border-b border-neutral-300 text-black py-2 focus-within:border-black transition-colors duration-300">
//                                     <input
//                                     type="text"
//                                     id="name"
//                                     placeholder=" " /* 👈 ক্রুসিয়াল স্পেস: এটি ফ্লোটিং লেবেলের জন্য লাগবে */
//                                     className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                                     required
//                                     />
//                                     <label
//                                     htmlFor="name"
//                                     className="absolute left-0 top-4  text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
//                                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
//                                     peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
//                                     not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
//                                     >
//                                     Enter Your Name
//                                     </label>
//                                 </div>

                                
//                                 <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
//                                     <input
//                                     type="tel"
//                                     id="phone"
//                                     placeholder=" "
//                                     className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
//                                     value={formData.phone}
//                                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                                     required
//                                     />
//                                     <label
//                                     htmlFor="phone"
//                                     className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
//                                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
//                                     peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
//                                     not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
//                                     >
//                                     Enter Your Phone
//                                     </label>
//                                 </div>
//                                 </div>

                                
//                                 <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     placeholder=" "
//                                     className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
//                                     value={formData.email}
//                                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
//                                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
//                                     peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
//                                     not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
//                                 >
//                                     Enter Your Email
//                                 </label>
//                                 </div>

                                
//                                 <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
//                                 <textarea
//                                     id="message"
//                                     placeholder=" "
//                                     rows={2}
//                                     className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-3 pb-1 resize-none placeholder-transparent"
//                                     value={formData.message}
//                                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="message"
//                                     className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
//                                     peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
//                                     peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
//                                     not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
//                                 >
//                                     Enter Message
//                                 </label>
//                                 </div>

//                                 {/* পলিসি শর্ত এবং সাবমিট বাটন */}
//                                 <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                                 <p className="text-sm text-black  max-w-[340px] leading-relaxed">
//                                     By clicking submit, I acknowledge I have read and accepted the{" "}
//                                     <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a>.
//                                 </p>
                                
//                                 {/* আপনার কাস্টম লাইম কালার বাটন */}
//                                 <CustomButton 
//                                     text="Book An Appointment" 
//                                     variant="lime" 
//                                     className=""
//                                 />
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </div>
//   )
// }
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import contact from "../../public/images/cbg.jpeg";
import contactpeople from "../../public/images/cpeople.png";
import SplitText from "../Components/ui/SplitText";
import CustomButton from "./ui/CustomButton";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#f1f1f1] flex items-center justify-center overflow-hidden">
      <div className="container-custom py-24 w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          
         
          <div className="col-span-12 lg:col-span-6">
            <div className="contact-left relative rounded-4xl overflow-hidden h-[450px] md:h-[550px] w-full">
              
             
              <Image 
                src={contact} 
                alt="Background" 
                className="h-[70%] w-[90%] rounded-4xl left-0 bottom-0 absolute object-cover"
                priority
              />
              
            
              <div 
                className={`absolute inset-x-0 bottom-0 w-full h-full flex items-end justify-center transition-all duration-1000 ease-out z-10 ${
                  isVisible 
                    ? "translate-y-0 opacity-100 scale-100" 
                    : "translate-y-[40%] opacity-0 scale-95"
                }`}
              >
                <Image 
                  src={contactpeople} 
                  alt="People" 
                  className="w-full h-auto object-contain max-h-[95%]" 
                  priority
                />
              </div>

            </div>
          </div>
          
         
          <div className="col-span-12 lg:col-span-6">
            <div>
              <label className="text-xl text-[#0D7F80] relative pl-28 inline-block mb-2">
                <span className="w-24 h-[1px] bg-[#0D7F80] z-10 absolute left-0 top-1/2"></span>
                Contact Us
              </label>
              
              <div>
                <SplitText
                  text="Get in touch"
                  className="text-[#0C0B0B] font-semibold text-[48px] md:text-[60px] leading-[1.2] tracking-[1%]"
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
                
                <p className="text-neutral-600 text-[16px] md:text-[18px] leading-[1.4] mt-4 w-full md:w-3/4">
                  Book your appointment quickly and easily with our trusted healthcare experts for fast and reliable medical support.
                </p>
              </div>

              <div className="from-area mt-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative border-b border-neutral-300 text-black py-2 focus-within:border-black transition-colors duration-300">
                      <input
                        type="text"
                        id="name"
                        placeholder=" "
                        className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-4 text-neutral-500 text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                        peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                        not-placeholder-shown:top-0 not-placeholder-shown:text-xs"
                      >
                        Enter Your Name
                      </label>
                    </div>

                    <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                      <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 top-4 text-neutral-500 text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                        peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                        not-placeholder-shown:top-0 not-placeholder-shown:text-xs"
                      >
                        Enter Your Phone
                      </label>
                    </div>
                  </div>

                  <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 text-neutral-500 text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                      not-placeholder-shown:top-0 not-placeholder-shown:text-xs"
                    >
                      Enter Your Email
                    </label>
                  </div>

                  <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                    <textarea
                      id="message"
                      placeholder=" "
                      rows={2}
                      className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-3 pb-1 resize-none placeholder-transparent"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-4 text-neutral-500 text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                      not-placeholder-shown:top-0 not-placeholder-shown:text-xs"
                    >
                      Enter Message
                    </label>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500 max-w-[340px] leading-relaxed">
                      By clicking submit, I acknowledge I have read and accepted the{" "}
                      <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a>.
                    </p>
                    <CustomButton 
                      text="Book An Appointment" 
                      variant="lime" 
                      type="submit"
                    />
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}