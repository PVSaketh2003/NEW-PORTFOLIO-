import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101216] border-t border-[#2A3240] py-10 text-xs text-[#A6AFBD]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="font-semibold text-[#F3F5F7]">Sairam Saketh</span>
            <span className="text-[#6B7688] mx-2">·</span>
            <span>Computer Vision & Edge AI Engineer</span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a
              href="mailto:pvsairamsaketh@gmail.com"
              className="hover:text-[#F3F5F7] transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#55BFE5]" />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/pvsaketh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F5F7] transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#55BFE5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/PVSaketh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F5F7] transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5 text-[#55BFE5]" />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F5F7] transition-colors flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#55BFE5]" />
              <span>Resume</span>
            </a>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-[#2A3240]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7688]">
          <div>
            © {new Date().getFullYear()} P V Sairam Saketh. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            portfolio.pvsairamsaketh.in
          </div>
        </div>

      </div>
    </footer>
  );
};
