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
    <section id="about" className="py-16 lg:py-20 bg-[#101216] border-b border-[#2A3240]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
              ENGINEERING APPROACH
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F5F7] tracking-tight">
              Engineering computer vision systems beyond the model.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A6AFBD] leading-relaxed">
              <p>
                Modern computer vision requires far more than training weights in a notebook. In real-world defense and industrial environments, the bottleneck is rarely model architecture alone—it is video ingestion latency, memory bandwidth, frame drops, target occlusions, and reliable edge deployment.
              </p>
              <p>
                At Solar Defence and Aerospace Limited, my day-to-day work spans the full technical lifecycle: from collecting and annotating specialized defense datasets, to training YOLO detection models, optimizing models via TensorRT FP16, and constructing robust DeepStream/GStreamer video pipelines running on NVIDIA Jetson Orin Nano hardware.
              </p>
              <p>
                Whether building real-time thermal IR target acquisition for UAV loiter munitions, automated X-ray defect classification with Rust, or CCTV face recognition that solves duplicate embeddings, I prioritize reproducible engineering, measurable latency reduction, and stable deployment.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F3F5F7]">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#55BFE5] flex-shrink-0" />
                <span>PyTorch → ONNX → TensorRT FP16</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#55BFE5] flex-shrink-0" />
                <span>NVIDIA Jetson Embedded Linux</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#55BFE5] flex-shrink-0" />
                <span>ByteTrack Multi-Object Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#55BFE5] flex-shrink-0" />
                <span>Full-Stack Web & Telemetry Integration</span>
              </div>
            </div>
          </div>

          {/* Adjacent Focus Areas Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#151922] border border-[#2A3240]">
              <h3 className="text-sm font-semibold text-[#F3F5F7] uppercase tracking-wider mb-4 font-mono">
                Technical Focus Areas
              </h3>

              <div className="space-y-4">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3 pb-3 border-b border-[#2A3240]/60 last:border-0 last:pb-0">
                      <div className="p-2 rounded bg-[#1A202B] border border-[#2A3240] text-[#55BFE5] mt-0.5 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#F3F5F7]">
                          {area.title}
                        </h4>
                        <p className="text-xs text-[#A6AFBD] mt-0.5 leading-relaxed">
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
