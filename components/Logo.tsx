
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'horizontal', light = true }) => {
  const textColor = light ? 'text-white' : 'text-black';
  const accentColor = 'text-amber-400'; // Vibrant Yellow

  return (
    <div className={`flex items-center ${variant === 'vertical' ? 'flex-col text-center' : 'flex-row'} ${className}`}>
      {/* Minimalist Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${variant === 'vertical' ? 'w-24 h-24 mb-4' : 'w-12 h-12 mr-3'}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract "P" + Flame Shape */}
        <path 
          d="M30 20H60C73.8071 20 85 31.1929 85 45C85 58.8071 73.8071 70 60 70H45V85H30V20Z" 
          fill="currentColor" 
          className={light ? 'text-amber-400' : 'text-black'}
        />
        <path 
          d="M45 40H60C62.7614 40 65 42.2386 65 45C65 47.7614 62.7614 50 60 50H45V40Z" 
          fill={light ? 'black' : 'white'}
        />
        {/* Minimalist Heat/Pot Curve Accent */}
        <path 
          d="M20 75C20 83.2843 26.7157 90 35 90H75" 
          stroke="currentColor" 
          strokeWidth="8" 
          strokeLinecap="round"
          className={light ? 'text-white' : 'text-black'}
        />
      </svg>

      {/* Modern Typography */}
      <div className="flex flex-col">
        <h1 className={`font-bebas leading-none tracking-[0.15em] ${variant === 'vertical' ? 'text-5xl' : 'text-2xl'}`}>
          <span className={textColor}>POPPER</span>
          <span className={`ml-2 ${accentColor}`}>POI</span>
        </h1>
        <span className={`text-[8px] uppercase tracking-[0.5em] font-bold mt-1 ${light ? 'text-gray-500' : 'text-gray-400'}`}>
          YOUR ONLY CHOICE
        </span>
      </div>
    </div>
  );
};

export default Logo;
