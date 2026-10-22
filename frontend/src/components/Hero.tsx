import React from 'react';
import { ArrowRight, Download, Mail, ShieldCheck, Cpu } from 'lucide-react';
import { initialCareerHighlights } from '../data/fallbackData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-theme-border bg-theme-bg overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Radial Lighting for rich depth */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#75CFFF]/10 via-[#8FE3CC]/5 to-transparent blur-3xl opacity-70 dark:opacity-40" 
        aria-hidden="true" 
      />

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning with staggered entrance */}
          <div className="lg:col-span-7 space-y-6 animate-slide-up">
            
            {/* Professional Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-theme-elevated border border-theme-border text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span>COMPUTER VISION ENGINEER · EDGE AI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-theme-text leading-[1.15]">
              Building intelligent vision systems for the{' '}
              <span className="bg-gradient-to-r from-theme-accent via-sky-400 to-theme-accentSec bg-clip-text text-transparent">
                real world.
              </span>
            </h1>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed max-w-2xl">
              I'm <strong className="text-theme-text font-semibold">PV Sairam Saketh</strong>, a Computer Vision Engineer with{' '}
              <span className="text-theme-text font-semibold">1.5 years of experience at Solar Industries India Limited</span>. 
              I design and deploy real-time deep learning pipelines on NVIDIA Jetson embedded hardware for defense UAV and industrial safety applications.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#experience"
                className="btn-primary group"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="btn-secondary"
              >
                <span>Explore Projects</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-lg border border-theme-border bg-theme-card hover:bg-theme-elevated text-xs font-semibold text-theme-text hover:border-theme-accent/50 transition-all duration-200 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-theme-accent" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-theme-secondary hover:text-theme-accent transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-theme-accent" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Core Toolchain Footer Line */}
            <div className="pt-4 text-xs sm:text-sm text-theme-secondary border-t border-theme-border flex flex-wrap items-center gap-2">
              <span className="text-theme-text font-medium flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-theme-accent" />
                <span>Core Toolchain:</span>
              </span>
              <span className="font-mono text-xs text-theme-accentSec font-medium">
                TensorRT FP16 · NVIDIA Jetson Orin Nano · DeepStream · YOLOv8 · OpenCV · PyTorch
              </span>
            </div>

          </div>

          {/* Right Column: Clean Engineer Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="w-64 sm:w-72 md:w-80 relative group">
              
              {/* Subtle Card Glow in Dark Mode */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-theme-accent/20 to-theme-accentSec/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" 
                aria-hidden="true" 
              />

              <div className="relative rounded-2xl overflow-hidden bg-theme-card border border-theme-border shadow-xl hover:shadow-2xl hover:border-theme-borderHover transition-all duration-300">
                <img
                  src="/profile.jpg"
                  alt="PV Sairam Saketh - Computer Vision Engineer"
                  className="w-full h-auto aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                
                {/* Professional Caption */}
                <div className="p-4 bg-theme-surface/95 backdrop-blur-md border-t border-theme-border space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm text-theme-text flex items-center gap-1.5">
                      <span>PV Sairam Saketh</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-theme-accent" />
                    </div>
                    <span className="text-[10px] font-mono text-theme-accent bg-theme-elevated px-2 py-0.5 rounded border border-theme-border font-medium">
                      Executive CV Engineer
                    </span>
                  </div>
                  <div className="text-[11px] text-theme-secondary">
                    Solar Industries India Limited · Nagpur, India
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Career Highlights Row */}
        <div className="mt-14 pt-8 border-t border-theme-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {initialCareerHighlights.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-theme-card border border-theme-border shadow-sm hover:border-theme-accent/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-theme-text group-hover:text-theme-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-theme-accent mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-theme-secondary mt-0.5 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
