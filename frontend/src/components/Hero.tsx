import React from 'react';
import { Cpu, Terminal, ArrowRight, Download, Crosshair } from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SOLAR DEFENCE & AEROSPACE // UAV DIVISION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Computer Vision</span> & Edge AI for Defense
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium">
              {profile.title} <span className="text-cyan-400">|</span> {profile.subtitle}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">4+</div>
                <div className="text-[11px] text-slate-400 font-mono">Defense AI Projects</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">10k+</div>
                <div className="text-[11px] text-slate-400 font-mono">YOLO26x Dataset</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">FP16</div>
                <div className="text-[11px] text-slate-400 font-mono">TensorRT Engines</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">9.33</div>
                <div className="text-[11px] text-slate-400 font-mono">SRM CGPA / 10</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#uav-defense"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/20 group"
              >
                <span>Explore UAV Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-cyan-950/40 hover:bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-sm font-mono transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>Contact Engineer</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo with HUD Viewfinder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              {/* Animated HUD Outer Box */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border-2 border-cyan-500/50 shadow-2xl">
                {/* HUD Viewfinder Reticle Corners */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top HUD Telemetry Banner */}
                <div className="bg-slate-950/90 border-b border-cyan-500/30 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <div className="flex items-center space-x-1">
                    <Crosshair className="w-3 h-3 text-red-400 animate-spin" />
                    <span>TARGET LOCK // ORIN_NANO</span>
                  </div>
                  <div className="text-emerald-400 flex items-center space-x-1">
                    <span>CONF: 99.8%</span>
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="P V Sairam Saketh"
                    className="w-full h-full object-cover object-center filter contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle HUD scanline sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-12 w-full animate-scan pointer-events-none" />

                  {/* Overlaid Bounding Box */}
                  <div className="absolute top-8 left-8 right-8 bottom-16 border border-cyan-400/60 rounded pointer-events-none">
                    <div className="absolute -top-5 left-0 px-1.5 py-0.5 bg-cyan-950/90 border border-cyan-400 text-[9px] font-mono text-cyan-300">
                      ID:01 // P.V.S. SAKETH
                    </div>
                    <div className="absolute -bottom-5 right-0 px-1.5 py-0.5 bg-cyan-950/90 border border-cyan-400 text-[9px] font-mono text-emerald-400">
                      CLASS: CV_ENGINEER
                    </div>
                  </div>
                </div>

                {/* Bottom HUD Hardware & Telemetry Bar */}
                <div className="bg-slate-950/90 border-t border-cyan-500/30 p-2.5 font-mono text-[10px] text-slate-300 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 flex items-center space-x-1">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      <span>DEVICE: Jetson Orin Nano</span>
                    </span>
                    <span className="text-cyan-400">FPS: 60.0 (FP16)</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>STACK: DeepStream + TensorRT</span>
                    <span className="text-emerald-400">LATENCY: 12.4ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
