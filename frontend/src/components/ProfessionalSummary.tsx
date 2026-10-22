import React from 'react';
import { Cpu, Eye, Video, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProfessionalSummary: React.FC = () => {
  const focusPillars = [
    {
      title: "Edge AI & Hardware Acceleration",
      desc: "Quantizing PyTorch architectures to ONNX and FP16 TensorRT engines for sub-15ms inference on NVIDIA Jetson Orin Nano.",
      icon: Cpu,
    },
    {
      title: "UAV Defense & Thermal Vision",
      desc: "Architecting real-time object detection and infrared (IR) thermal vision pipelines for loiter munition surveillance systems.",
      icon: Eye,
    },
    {
      title: "DeepStream & GStreamer Streaming",
      desc: "Engineering hardware-accelerated video ingestion, batch inference, and low-latency network streaming to Ground Control Stations.",
      icon: Video,
    },
    {
      title: "Commercial AI & Process Safety",
      desc: "Deploying production computer vision with Finite State Machines (FSM), CIELAB color triggers, and full-stack React dashboards.",
      icon: Layers,
    },
  ];

  return (
    <section id="summary" className="py-16 lg:py-20 bg-theme-bg border-b border-theme-border transition-colors duration-300 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
            <span>01 · PROFESSIONAL SUMMARY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Bridging Deep Learning Research with Deployed Edge Systems
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-2xl">
            A concise overview of my engineering background, technical focus, and field-tested contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card: Readable in 10-15 seconds */}
          <div className="lg:col-span-7 card-surface p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-mono text-theme-accent uppercase pb-2 border-b border-theme-border font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Profile & Experience Summary</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-theme-secondary leading-relaxed">
              <p>
                I am a <strong className="text-theme-text font-semibold">Computer Vision Engineer</strong> with{' '}
                <strong className="text-theme-text font-semibold">1.5 years of experience at Solar Industries India Limited</strong> (Solar Defence and Aerospace Limited), 
                specializing in deep learning, real-time video analytics, and embedded Edge AI deployment.
              </p>
              <p>
                Currently, I engineer low-latency vision pipelines on <strong className="text-theme-text font-medium">NVIDIA Jetson Orin Nano</strong> for the 
                <strong className="text-theme-text font-medium"> CALM (Canister Launched Anti-Armoured Loiter Munition)</strong> UAV program, 
                while concurrently delivering 4 commercial computer vision systems spanning PPE compliance, X-ray munitions flaw detection, 10,000-image plant process-deviation monitoring (70% mAP50), and CCTV face recognition.
              </p>
              <p>
                I bridge the gap between machine learning models and production deployment: converting PyTorch models into TensorRT FP16 engines, orchestrating DeepStream multimedia pipelines, and integrating vision outputs into robust software layers.
              </p>
            </div>

            {/* Quick-Scan Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-theme-text font-medium">
              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-theme-elevated border border-theme-border">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>PyTorch → ONNX → TensorRT FP16</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-theme-elevated border border-theme-border">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>NVIDIA Jetson Orin Nano Embedded Linux</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-theme-elevated border border-theme-border">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>DeepStream & GStreamer Pipelines</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-theme-elevated border border-theme-border">
                <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>Full-Stack Web & WebSocket Telemetry</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-theme-border text-xs text-theme-secondary">
              <span>Looking for: Computer Vision & Edge AI Roles</span>
              <a href="#experience" className="text-theme-accent hover:underline flex items-center gap-1 font-semibold">
                <span>View Full Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Adjacent Focus Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-surface p-6 space-y-4">
              <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono pb-2 border-b border-theme-border flex items-center justify-between">
                <span>Technical Focus Pillars</span>
                <span className="w-2 h-2 rounded-full bg-theme-accent" />
              </h3>

              <div className="space-y-3.5">
                {focusPillars.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border hover:border-theme-accent/40 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-theme-card border border-theme-border text-theme-accent mt-0.5 flex-shrink-0 shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-theme-text">
                            {area.title}
                          </h4>
                          <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
                            {area.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfessionalSummary;
