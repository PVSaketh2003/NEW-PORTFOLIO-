import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Experience', href: '#experience' },
    { name: 'Internships', href: '#internships' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-theme-surface border-t border-theme-border py-12 text-xs text-theme-secondary transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-theme-border">
          
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-theme-card border border-theme-border flex items-center justify-center text-[10px] font-bold font-mono text-theme-accent">
                PV
              </div>
              <span className="font-bold text-sm text-theme-text">PV Sairam Saketh</span>
            </div>
            <span className="text-theme-muted hidden sm:inline-block">·</span>
            <span className="text-theme-secondary text-xs">
              Computer Vision & Edge AI Engineer (Solar Industries India Limited)
            </span>
          </div>

          {/* Jump Links in Required Order */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-theme-secondary hover:text-theme-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-theme-muted text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-theme-text font-semibold">PV Sairam Saketh</strong>. 
            All rights reserved. Verified to resume specifications.
          </div>

          <div className="flex items-center space-x-5 text-xs font-mono">
            <a
              href="mailto:pvsairamsaketh@gmail.com"
              className="hover:text-theme-accent transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-theme-accent" />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/pvsaketh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-accent transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-theme-accent" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/PVSaketh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-accent transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5 text-theme-accent" />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-accent transition-colors flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5 text-theme-accent" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/50 transition-colors ml-2 shadow-xs"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
