import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { initialCareerHighlights } from '../data/fallbackData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-14 lg:pt-24 lg:pb-20 border-b border-[#273142]/60 bg-[#0B0D12]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-block text-xs font-mono font-semibold tracking-wider text-[#62C6F2] uppercase">
              COMPUTER VISION ENGINEER · EDGE AI
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight">
              Turning computer vision research into <span className="text-[#62C6F2]">real-world AI systems.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A4ADBB] leading-relaxed max-w-2xl">
              I'm PV Sairam Saketh, a Computer Vision Engineer focused on deep learning, real-time video analytics, and Edge AI deployment. I work across the pipeline, from object detection and model optimization to deploying vision systems on resource-constrained hardware.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4 text-[#A4ADBB]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-[#A4ADBB] hover:text-[#62C6F2] transition-colors ml-1"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#62C6F2]" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Technology Line */}
            <div className="pt-3 text-xs sm:text-sm text-[#A4ADBB] border-t border-[#273142]/80 flex flex-wrap items-center gap-2">
              <span className="text-[#F5F7FA] font-medium">Core Stack: </span>
              <span className="font-mono text-xs text-[#7CE0C3]">
                Computer Vision · TensorRT · NVIDIA Jetson · DeepStream
              </span>
            </div>

          </div>

          {/* Right Column: Clean Engineer Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-72 md:w-80">
              <div className="rounded-xl overflow-hidden bg-[#151B26] border border-[#273142] shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="PV Sairam Saketh - Computer Vision Engineer"
                  className="w-full h-auto aspect-[3/4] object-cover object-center"
                  loading="eager"
                />
                
                {/* Clean Professional Caption */}
                <div className="p-3.5 bg-[#11151D] border-t border-[#273142] space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm text-[#F5F7FA]">PV Sairam Saketh</div>
                    <span className="text-[10px] font-mono text-[#62C6F2] bg-[#151B26] px-2 py-0.5 rounded border border-[#273142]">
                      Executive CV Engineer
                    </span>
                  </div>
                  <div className="text-[11px] text-[#A4ADBB]">
                    Solar Defence and Aerospace · Nagpur, India
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Highlights Row */}
        <div className="mt-14 pt-8 border-t border-[#273142] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {initialCareerHighlights.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#11151D] border border-[#273142]">
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#62C6F2] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A4ADBB] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
