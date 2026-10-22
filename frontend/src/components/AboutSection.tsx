import React from 'react';
import { Cpu, Eye, Video, Layers, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    {
      title: "Model Optimization & TensorRT",
      desc: "Quantizing and converting PyTorch architectures to ONNX and FP16 TensorRT engines for low-latency onboard inference.",
      icon: Cpu,
    },
    {
      title: "Real-Time Embedded Vision",
      desc: "Deploying high-throughput detection pipelines on NVIDIA Jetson Orin Nano with zero-copy memory buffers.",
      icon: Eye,
    },
    {
      title: "DeepStream & GStreamer Pipelines",
      desc: "Hardware-accelerated video decoding, batch preprocessing, OSD rendering, and low-latency network streaming.",
      icon: Video,
    },
    {
      title: "Industrial & Full-Stack Integration",
      desc: "Bridging vision engines with finite state machines (FSM), React dashboards, and robust Django REST APIs.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-theme-bg border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase">
              ABOUT MY WORK
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight">
              From models to deployed systems.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-theme-secondary leading-relaxed">
              <p>
                My work connects deep learning research with production-grade engineering. In defense surveillance and industrial automation, the challenge is not just training an accurate model, but ensuring it operates reliably under strict power, compute, and latency budgets.
              </p>
              <p>
                At Solar Defence and Aerospace Limited, I engineer computer vision pipelines from the ground up: annotating domain-specific datasets, training YOLO detection models, serializing engines with TensorRT FP16, and building DeepStream and GStreamer pipelines that stream low-latency video to Ground Control Stations.
              </p>
              <p>
                Beyond embedded edge devices, I build the full-stack software layer—integrating vision outputs with state machines, WebSockets, and user interfaces so that operators and plant managers can act on computer vision intelligence in real time.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-theme-text">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>PyTorch → ONNX → TensorRT FP16</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>NVIDIA Jetson Embedded Linux</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>ByteTrack Multi-Object Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>Full-Stack Web & Telemetry Integration</span>
              </div>
            </div>
          </div>

          {/* Adjacent Focus Areas Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-theme-surface border border-theme-border shadow-sm">
              <h3 className="text-sm font-semibold text-theme-text uppercase tracking-wider mb-4 font-mono pb-2 border-b border-theme-border">
                Technical Focus Areas
              </h3>

              <div className="space-y-4">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3 pb-3 border-b border-theme-border last:border-0 last:pb-0">
                      <div className="p-2 rounded bg-theme-elevated border border-theme-border text-theme-accent mt-0.5 flex-shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-theme-text">
                          {area.title}
                        </h4>
                        <p className="text-xs text-theme-secondary mt-0.5 leading-relaxed">
                          {area.desc}
                        </p>
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
