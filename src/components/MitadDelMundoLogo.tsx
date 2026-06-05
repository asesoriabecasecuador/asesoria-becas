import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function MitadDelMundoLogo({ className = '', size }: LogoProps) {
  return (
    <svg 
      width={size || "100%"} 
      height={size || "100%"} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id="mitad-mundo-logo-svg"
    >
      {/* Sutil Ecuadorian flag aesthetic background lines (thin curved premium stripes) */}
      <path 
        d="M12 48C20 52 44 52 52 48" 
        stroke="var(--color-ec-yellow)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.9"
      />
      <path 
        d="M14 51C21 54 43 54 50 51" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.9"
      />
      <path 
        d="M16 54C22 56 42 56 48 54" 
        stroke="var(--color-ec-red)" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Styled Grid/Equator Line - indicating 0° 0' 0" */}
      <line 
        x1="8" 
        y1="34" 
        x2="56" 
        y2="34" 
        stroke="#94A3B8" 
        strokeWidth="0.75" 
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* The Globe at the top of the monument */}
      <circle 
        cx="32" 
        cy="15" 
        r="6.5" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="1.5" 
        fill="white"
      />
      {/* Curved latitude / meridian lines inside globe */}
      <path 
        d="M27.5 15C29 17 35 17 36.5 15" 
        stroke="var(--color-ec-yellow)" 
        strokeWidth="1" 
        opacity="0.8"
      />
      <path 
        d="M32 8.5V21.5" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="1.2" 
        opacity="0.5"
      />

      {/* The Trapezoidal Peak Monument Structure (Obelisk of Mitad del Mundo) */}
      <path 
        d="M27 22 L25 43 H39 L37 22 Z" 
        fill="#FFFFFF" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="1.8" 
        strokeLinejoin="round"
      />

      {/* Internal structural lines for elegant 3D minimal look */}
      <path 
        d="M32 22 V43" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="1" 
        opacity="0.4"
      />

      {/* Miniature Central emblem on the monument body */}
      <rect 
        x="30" 
        y="28" 
        width="4" 
        height="5" 
        rx="0.5" 
        fill="var(--color-ec-yellow)" 
        opacity="0.9"
      />

      {/* Secure Base Platform */}
      <path 
        d="M20 43 H44" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      <rect 
        x="16" 
        y="45" 
        width="32" 
        height="2.5" 
        rx="0.5" 
        fill="#E2E8F0" 
        stroke="var(--color-ec-blue)" 
        strokeWidth="0.75"
      />
    </svg>
  );
}
