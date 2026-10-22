import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Camera } from 'lucide-react';

interface SimulatedTarget {
  id: number;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  conf: number;
  color: string;
}

export const InteractiveCVDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [visionMode, setVisionMode] = useState<'rgb' | 'thermal' | 'edges'>('thermal');
  const [fps, setFps] = useState<number>(60.0);
  const [latency, setLatency] = useState<number>(12.4);
  const [targetCount, setTargetCount] = useState<number>(3);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const targetsRef = useRef<SimulatedTarget[]>([
    { id: 101, label: 'ARMORED_VEHICLE', x: 80, y: 70, vx: 0.8, vy: 0.4, width: 110, height: 70, conf: 0.96, color: '#ef4444' },
    { id: 102, label: 'UAV_SURVEILLANCE', x: 260, y: 140, vx: -0.6, vy: 0.5, width: 85, height: 55, conf: 0.98, color: '#00f0ff' },
    { id: 103, label: 'PERSONNEL_PPE_OK', x: 180, y: 200, vx: 0.5, vy: -0.4, width: 60, height: 80, conf: 0.94, color: '#10b981' },
  ]);

  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Clear Canvas with Mode-specific styling
      if (visionMode === 'thermal') {
        // High-contrast thermal infrared background
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#0f051d');
        grad.addColorStop(0.5, '#1e0826');
        grad.addColorStop(1, '#05020c');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Simulated thermal noise grid
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.08)';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else if (visionMode === 'edges') {
        // Pure edge detection wireframe
        ctx.fillStyle = '#05070a';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(width / 2, height / 2, 40 * (i + 1), 0, Math.PI * 2);
          ctx.stroke();
        }
      } else {
        // Standard RGB Drone feed simulation
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, width, height);
      }

      // Update & Draw Targets
      const targets = targetsRef.current;
      targets.forEach((t) => {
        if (isRunning) {
          t.x += t.vx;
          t.y += t.vy;

          if (t.x < 10 || t.x + t.width > width - 10) t.vx *= -1;
          if (t.y < 10 || t.y + t.height > height - 10) t.vy *= -1;
        }

        // Bounding Box
        ctx.strokeStyle = visionMode === 'thermal' ? '#f43f5e' : t.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(t.x, t.y, t.width, t.height);

        // Corner reticle accents
        const cornerSize = 8;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(t.x, t.y + cornerSize);
        ctx.lineTo(t.x, t.y);
        ctx.lineTo(t.x + cornerSize, t.y);
        ctx.stroke();
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(t.x + t.width, t.y + t.height - cornerSize);
        ctx.lineTo(t.x + t.width, t.y + t.height);
        ctx.lineTo(t.x + t.width - cornerSize, t.y + t.height);
        ctx.stroke();

        // Label Tag
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(t.x, t.y - 20, t.width, 18);
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 1;
        ctx.strokeRect(t.x, t.y - 20, t.width, 18);

        ctx.fillStyle = '#ffffff';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(`ID:${t.id} ${t.label}`, t.x + 4, t.y - 7);

        // Confidence score
        ctx.fillStyle = '#34d399';
        ctx.fillText(`${(t.conf * 100).toFixed(1)}%`, t.x + t.width - 34, t.y - 7);

        // Center crosshair
        const cx = t.x + t.width / 2;
        const cy = t.y + t.height / 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.moveTo(cx - 5, cy);
        ctx.lineTo(cx + 5, cy);
        ctx.moveTo(cx, cy - 5);
        ctx.lineTo(cx, cy + 5);
        ctx.stroke();
      });

      // Overlay Scanline
      if (Math.random() < 0.05) {
        setFps(+(59.5 + Math.random() * 0.9).toFixed(1));
        setLatency(+(11.8 + Math.random() * 1.2).toFixed(1));
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, visionMode]);

  // Click on canvas to spawn a new tracked target
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - 40;
    const y = e.clientY - rect.top - 30;

    const newTarget: SimulatedTarget = {
      id: Math.floor(Math.random() * 900) + 100,
      label: 'TARGET_LOCKED',
      x: Math.max(10, Math.min(canvas.width - 90, x)),
      y: Math.max(10, Math.min(canvas.height - 70, y)),
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      width: 80,
      height: 60,
      conf: +(0.93 + Math.random() * 0.06).toFixed(2),
      color: '#00f0ff',
    };

    targetsRef.current = [...targetsRef.current, newTarget];
    setTargetCount(targetsRef.current.length);
  };

  const resetTargets = () => {
    targetsRef.current = [
      { id: 101, label: 'ARMORED_VEHICLE', x: 80, y: 70, vx: 0.8, vy: 0.4, width: 110, height: 70, conf: 0.96, color: '#ef4444' },
      { id: 102, label: 'UAV_SURVEILLANCE', x: 260, y: 140, vx: -0.6, vy: 0.5, width: 85, height: 55, conf: 0.98, color: '#00f0ff' },
      { id: 103, label: 'PERSONNEL_PPE_OK', x: 180, y: 200, vx: 0.5, vy: -0.4, width: 60, height: 80, conf: 0.94, color: '#10b981' },
    ];
    setTargetCount(3);
  };

  return (
    <section id="cv-demo" className="py-20 relative bg-slate-950/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real-Time Edge AI Vision Simulator
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Simulating NVIDIA Jetson Orin Nano + TensorRT FP16 object detection, ByteTrack tracking, and thermal IR pipeline in real time. Click canvas to add lock targets.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
          
          {/* Top Control Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-colors"
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isRunning ? 'PAUSE INFERENCE' : 'RESUME'}</span>
              </button>

              <button
                onClick={resetTargets}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-colors"
              >
                RESET TARGETS
              </button>
            </div>

            {/* Vision Mode Selectors */}
            <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setVisionMode('thermal')}
                className={`px-3 py-1 rounded transition-colors ${
                  visionMode === 'thermal'
                    ? 'bg-red-500/20 text-red-400 font-bold border border-red-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                THERMAL IR
              </button>
              <button
                onClick={() => setVisionMode('rgb')}
                className={`px-3 py-1 rounded transition-colors ${
                  visionMode === 'rgb'
                    ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                RGB FEED
              </button>
              <button
                onClick={() => setVisionMode('edges')}
                className={`px-3 py-1 rounded transition-colors ${
                  visionMode === 'edges'
                    ? 'bg-purple-500/20 text-purple-400 font-bold border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EDGES / HUD
              </button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="relative bg-black flex justify-center items-center overflow-hidden cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={680}
              height={380}
              onClick={handleCanvasClick}
              className="w-full max-w-full h-auto block"
            />

            {/* Canvas Corner Markers */}
            <div className="hud-corner-tl m-3" />
            <div className="hud-corner-tr m-3" />
            <div className="hud-corner-bl m-3" />
            <div className="hud-corner-br m-3" />

            {/* Live Top-Right Telemetry Overlay */}
            <div className="absolute top-4 right-4 bg-slate-950/80 border border-slate-800 p-2.5 rounded font-mono text-[11px] text-slate-300 space-y-1 pointer-events-none">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold">FP16 TENSORRT</span>
              </div>
              <div className="text-slate-400">FPS: <span className="text-cyan-400">{fps}</span></div>
              <div className="text-slate-400">LATENCY: <span className="text-emerald-400">{latency} ms</span></div>
              <div className="text-slate-400">TRACKS: <span className="text-purple-400">{targetCount}</span></div>
            </div>

            {/* Hint at bottom */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-cyan-400/80 pointer-events-none">
              💡 TIP: Click anywhere inside viewfinder to deploy new bounding box tracking reticle
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="bg-slate-900/90 border-t border-slate-800 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">INFERENCE ACCELERATOR</span>
              <span className="text-cyan-400 font-semibold">NVIDIA Jetson Orin Nano</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">TRACKING ENGINE</span>
              <span className="text-emerald-400 font-semibold">ByteTrack (Kalman Filter)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">PRECISION</span>
              <span className="text-purple-400 font-semibold">FP16 Serialized Engine</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">VIDEO PIPELINE</span>
              <span className="text-amber-400 font-semibold">DeepStream + GStreamer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
