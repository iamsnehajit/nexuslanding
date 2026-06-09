import React from 'react';
import Link from 'next/link';


interface CustomButtonProps {
  text: string;               
  href?: string;              
  onClick?: () => void;       
  variant?: 'lime' | 'dark' | 'outline'; 
  className?: string;         
}


export default function CustomButton({
  text,
  href,
  onClick,
  variant = 'lime', 
  className = ''
}: CustomButtonProps) {

  
  const baseStyle = "inline-flex items-center text-[18px] font-semibold transition-all duration-300 rounded-full group cursor-pointer";

  
  const variants = {
    lime: "text-black", 
    dark: "bg-black text-white px-6 py-2.5 hover:bg-neutral-800",
    outline: "border border-black text-black px-6 py-2.5 hover:bg-black hover:text-white"
  };

 
  const renderContent = () => (
    <>
      {variant === 'lime' ? (
        <>
          <span className="bg-[#CCFA82] py-2.5 px-4 text-[18px] text-black font-medium rounded-full z-10 relative hover:scale-110 transition">
            {text}
          </span>
          <span className="bg-[#CCFA82] w-11 h-11 rounded-full -ml-2 flex justify-center items-center transition-transform duration-300 hover:translate-x-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
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
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {renderContent()}
    </button>
  );
}