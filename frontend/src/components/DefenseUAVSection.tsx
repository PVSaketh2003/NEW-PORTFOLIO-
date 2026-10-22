import React from 'react';
import { Target, Zap, Video, Radio, Layers, Flame, ShieldAlert, Cpu } from 'lucide-react';

export const DefenseUAVSection: React.FC = () => {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Video Ingestion & Hardware Demux',
      desc: 'RTSP video feeds captured from UAV thermal IR & RGB gimbal sensors processed via GStreamer hardware acceleration.',
      icon: Video,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
    {
      step: '02',
      title: 'NVIDIA DeepStream Preprocessing',
      desc: 'NVMM memory batching, color-space conversion (NV12 to BGR), letterboxing, and frame normalization without CPU copying.',
      icon: Layers,
      color: 'text-teal-400',
      border: 'border-teal-500/30',
    },
    {
      step: '03',
      title: 'TensorRT FP16 Target Inference',
      desc: 'Custom-trained YOLOv8 / YOLO26 models serialized into optimized TensorRT FP16 engines on NVIDIA Jetson Orin Nano.',
      icon: Cpu,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      step: '04',
      title: 'Telemetry & GCS Live Stream',
      desc: 'Target classification, bounding box OSD rendering, and low-latency H.264/H.265 streaming to Ground Control Station.',
      icon: Radio,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
  ];

  return (
    <section id="uav-defense" className="py-20 bg-slate-950/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-400 mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>SOLAR DEFENCE AND AEROSPACE LIMITED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CALM Project: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-cyan-400">Loiter Munition</span> Vision Architecture
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-time, AI-powered computer vision engineered for the Canister Launched Anti-Armoured Loiter Munition program. High-reliability target acquisition under field conditions and zero-visibility thermal environments.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Thermal IR Tank Detection</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Infrared thermal object detection pipeline targeting armored vehicles and tanks, extending UAV operational capability into night-time and smoke/fog conditions.
            </p>
            <div className="mt-4 text-xs font-mono text-red-400 flex items-center space-x-1">
              <span>STATUS:</span>
              <span className="text-slate-300">Active Field Pipeline</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">PyTorch → TensorRT FP16</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Converted and calibrated PyTorch deep learning checkpoints to ONNX and TensorRT FP16 engines, cutting inference latency down to sub-15ms on NVIDIA Jetson Orin Nano.
            </p>
            <div className="mt-4 text-xs font-mono text-cyan-400 flex items-center space-x-1">
              <span>LATENCY:</span>
              <span className="text-slate-300">Sub-15ms per frame</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Edge AI Integration</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Embedded deployment on Jetson Orin Nano integrated with UAV avionics and flight controllers, delivering real-time target recognition for mission-critical defense operations.
            </p>
            <div className="mt-4 text-xs font-mono text-purple-400 flex items-center space-x-1">
              <span>DEPLOYMENT:</span>
              <span className="text-slate-300">Embedded Linux / JetPack 6.x</span>
            </div>
          </div>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>END-TO-END EMBEDDED PIPELINE EXECUTION FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {pipelineSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className={`p-5 rounded-lg bg-slate-900/80 border ${item.border} relative flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-slate-500">{item.step}</span>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600 font-mono text-xs">
                      ▶
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
