import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-bg border-t border-theme-border py-10 text-xs text-theme-secondary transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-theme-text">PV Sairam Saketh</span>
            <span className="text-theme-textMuted">·</span>
            <span className="text-theme-secondary">Computer Vision & Edge AI Engineer</span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a
              href="mailto:pvsairamsaketh@gmail.com"
              className="hover:text-theme-text transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-theme-accent" />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/pvsaketh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-text transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-theme-accent" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/PVSaketh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-text transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5 text-theme-accent" />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-text transition-colors flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5 text-theme-accent" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/50 transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-theme-textMuted">
          <div>
            © {new Date().getFullYear()} PV Sairam Saketh. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 font-mono text-[10px]">
            portfolio.pvsairamsaketh.in
          </div>
        </div>

      </div>
    </footer>
  );
};
