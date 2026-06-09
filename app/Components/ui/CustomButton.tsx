"use client";
import React from 'react';
import Link from 'next/link';


interface CustomButtonProps {
  text: string;               
  href?: string;              
  onClick?: () => void;       
  variant?: 'lime' | 'dark' | 'outline'; 
  className?: string;         
  type?: 'button' | 'submit' | 'reset'; 
}

export default function CustomButton({
  text,
  href,
  onClick,
  variant = 'lime', 
  className = '',
  type = 'button'
}: CustomButtonProps) {

  
  const baseStyle = "inline-flex items-center text-[18px] font-semibold transition-all duration-300 rounded-full group cursor-pointer select-none overflow-hidden";

 
  const variants = {
    lime: "text-black", 
    dark: "bg-black text-white px-6 py-2.5 hover:bg-neutral-800 transition-colors duration-300",
    outline: "border border-black text-black px-6 py-2.5 hover:bg-black hover:text-white transition-colors duration-300"
  };

  
  const renderContent = () => (
    <>
      {variant === 'lime' ? (
        <>
        
          <span className="bg-[#CCFA82] py-2.5 px-5 text-[18px] text-black font-medium rounded-full z-10 relative overflow-hidden block h-[47px] flex items-center justify-center">
            <span className="relative block h-[24px] overflow-hidden">
              
             
              <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                {text}
              </span>
              
             
              <span className="absolute inset-0 block transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 text-black">
                {text}
              </span>

            </span>
          </span>

        
          <span className="bg-[#CCFA82] w-[47px] h-[47px] rounded-full -ml-2 flex justify-center items-center transition-all duration-300 overflow-hidden relative">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-3 h-3 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 absolute"
            >
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
          
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-3 h-3 transition-transform duration-500 ease-out -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 absolute"
            >
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </>
  );

  
  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {renderContent()}
      </Link>
    );
  }

 
  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {renderContent()}
    </button>
  );
}