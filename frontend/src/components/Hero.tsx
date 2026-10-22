import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { initialCareerHighlights } from '../data/fallbackData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-14 lg:pt-24 lg:pb-20 border-b border-[#2A3240]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-block text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
              COMPUTER VISION ENGINEER · EDGE AI
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3F5F7] leading-tight">
              Building real-world AI systems from vision models to edge deployment.
            </h1>

            <p className="text-base sm:text-lg text-[#A6AFBD] leading-relaxed max-w-2xl">
              I'm a Computer Vision Engineer working across deep learning, real-time video analytics, embedded inference, and industrial AI. I build end-to-end systems that connect computer vision models with practical software and hardware deployments.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4 text-[#A6AFBD]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-[#A6AFBD] hover:text-[#55BFE5] transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Technical Sub-line */}
            <div className="pt-3 text-xs sm:text-sm text-[#A6AFBD] border-t border-[#2A3240]/80">
              <span className="text-[#F3F5F7] font-medium">Core Focus: </span>
              Computer Vision · TensorRT · NVIDIA Jetson · Real-Time Video Analytics
            </div>

          </div>

          {/* Right Column: Clean Engineer Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-72 md:w-80">
              <div className="rounded-xl overflow-hidden bg-[#1A202B] border border-[#2A3240] shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Sairam Saketh - Computer Vision Engineer"
                  className="w-full h-auto aspect-[3/4] object-cover object-center"
                  loading="eager"
                />
                <div className="p-3 bg-[#151922] border-t border-[#2A3240] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-[#F3F5F7]">P V Sairam Saketh</div>
                    <div className="text-[11px] text-[#A6AFBD]">Nagpur, Maharashtra, India</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#55BFE5] bg-[#1A202B] px-2 py-0.5 rounded border border-[#2A3240]">
                    Executive CV Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Career Highlights Row */}
        <div className="mt-14 pt-8 border-t border-[#2A3240] grid grid-cols-2 md:grid-cols-4 gap-6">
          {initialCareerHighlights.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#151922] border border-[#2A3240]">
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#F3F5F7]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#55BFE5] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A6AFBD] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
