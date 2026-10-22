import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 34 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="logoCyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="logoRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="logoCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Squircle Container */}
        <rect
          x="6"
          y="6"
          width="116"
          height="116"
          rx="28"
          className="fill-slate-900/90 dark:fill-slate-950/95 stroke-theme-accent/40 group-hover:stroke-theme-accent transition-colors duration-300"
          strokeWidth="3"
        />

        {/* Optical Camera Reticle Corner Brackets */}
        <path
          d="M 24 36 L 24 24 L 36 24"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <path
          d="M 104 36 L 104 24 L 92 24"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <path
          d="M 24 92 L 24 104 L 36 104"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <path
          d="M 104 92 L 104 104 L 92 104"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity"
        />

        {/* Core Glow */}
        <circle cx="64" cy="64" r="36" fill="url(#logoCoreGlow)" />

        {/* Aperture Dash Ring */}
        <circle
          cx="64"
          cy="64"
          r="34"
          fill="none"
          stroke="url(#logoCyberGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          className="opacity-60 group-hover:opacity-100 transition-opacity"
        />

        {/* Monogram 'P' */}
        <path
          d="M 40 40 L 40 88 M 40 40 L 56 40 C 66 40 66 58 56 58 L 40 58"
          fill="none"
          stroke="url(#logoCyberGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram 'V' */}
        <path
          d="M 64 54 L 78 88 L 92 54"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-white stroke-sky-400"
        />

        {/* Detection Focal Dot */}
        <circle cx="78" cy="42" r="3.5" fill="#38bdf8" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default Logo;
