import React from 'react';
import { Shield, Server, Lock, Cpu, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architecture Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 mb-8 border-b border-slate-900 text-[11px]">
          <div className="flex items-center space-x-2 text-slate-300">
            <Server className="w-4 h-4 text-cyan-400" />
            <span>AWS EC2 + k3s Kube</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>TLS 1.3 Let's Encrypt</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>NVIDIA Jetson Optimized</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Globe className="w-4 h-4 text-amber-400" />
            <span>portfolio.pvsairamsaketh.in</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-200 font-semibold">P V SAIRAM SAKETH</span>
            <span>— Computer Vision & Edge AI Engineer</span>
          </div>

          <div className="text-slate-500">
            Built with React 18, Django 5, Docker, Kubernetes & GitHub Actions
          </div>
        </div>

      </div>
    </footer>
  );
};
