import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { initialCareerHighlights } from '../data/fallbackData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 border-b border-theme-border bg-theme-bg transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning with animation */}
          <div className="lg:col-span-7 space-y-6 animate-slide-up">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-theme-elevated border border-theme-border text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span>COMPUTER VISION ENGINEER · EDGE AI</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-theme-text leading-tight">
              Building intelligent vision systems for the <span className="text-theme-accent">real world.</span>
            </h1>

            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed max-w-2xl">
              I'm <strong className="text-theme-text font-semibold">PV Sairam Saketh</strong>, a Computer Vision Engineer focused on deep learning, real-time video analytics, model optimization, and Edge AI deployment. I build practical systems that connect vision models with software and hardware.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4 text-theme-secondary" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-theme-secondary hover:text-theme-accent transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-theme-accent" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Technology Line */}
            <div className="pt-3 text-xs sm:text-sm text-theme-secondary border-t border-theme-border flex flex-wrap items-center gap-2">
              <span className="text-theme-text font-medium">Core Toolchain: </span>
              <span className="font-mono text-xs text-theme-accentSec font-medium">
                Computer Vision · TensorRT · NVIDIA Jetson · DeepStream · GStreamer
              </span>
            </div>

          </div>

          {/* Right Column: Clean Engineer Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="w-64 sm:w-72 md:w-80">
              <div className="rounded-xl overflow-hidden bg-theme-card border border-theme-border shadow-2xl transition-all duration-300 hover:shadow-3xl hover:border-theme-borderHover">
                <img
                  src="/profile.jpg"
                  alt="PV Sairam Saketh - Computer Vision Engineer"
                  className="w-full h-auto aspect-[3/4] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
                
                {/* Clean Professional Caption */}
                <div className="p-3.5 bg-theme-surface border-t border-theme-border space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm text-theme-text">PV Sairam Saketh</div>
                    <span className="text-[10px] font-mono text-theme-accent bg-theme-elevated px-2 py-0.5 rounded border border-theme-border">
                      Executive CV Engineer
                    </span>
                  </div>
                  <div className="text-[11px] text-theme-secondary">
                    Solar Defence and Aerospace · Nagpur, India
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Highlights Row */}
        <div className="mt-12 pt-8 border-t border-theme-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {initialCareerHighlights.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-theme-card border border-theme-border shadow-sm hover:border-theme-borderHover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-theme-text">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-theme-accent mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-theme-secondary mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
