import React, { useState, useEffect } from 'react';
import { Shield, FileText, Menu, X, Activity } from 'lucide-react';
import { getHealth } from '../services/api';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [systemOnline, setSystemOnline] = useState<boolean>(true);
  const [latency, setLatency] = useState<number>(24);

  useEffect(() => {
    const checkApi = async () => {
      const start = performance.now();
      try {
        const health = await getHealth();
        setSystemOnline(health.status.includes('healthy') || health.status === 'ok');
        setLatency(Math.round(performance.now() - start) || 18);
      } catch {
        setSystemOnline(false);
      }
    };
    checkApi();
    const interval = setInterval(checkApi, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'UAV Defense', href: '#uav-defense' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Vision Demo', href: '#cv-demo' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Callout */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-cyan-500/10 animate-pulse-slow" />
            </div>
            <div>
              <span className="font-mono font-bold text-slate-100 tracking-wider text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                SAIRAM SAKETH
              </span>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-cyan-400/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>EDGE AI // JETSON ORIN</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-mono text-xs tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Status & Resume */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono">
              <Activity className={`w-3.5 h-3.5 ${systemOnline ? 'text-emerald-400' : 'text-amber-400'}`} />
              <span className="text-slate-400">API:</span>
              <span className={systemOnline ? 'text-emerald-400' : 'text-amber-400'}>
                {systemOnline ? 'ONLINE' : 'FALLBACK'}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400">{latency}ms</span>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-all duration-200 shadow-sm hover:shadow-cyan-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME.PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono px-3">
            <span className="text-slate-400">Cluster Status:</span>
            <span className="text-emerald-400">k3s Node Ready</span>
          </div>
        </div>
      )}
    </header>
  );
};
