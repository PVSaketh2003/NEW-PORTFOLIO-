import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0D12] border-t border-[#273142] py-10 text-xs text-[#A4ADBB]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="font-semibold text-[#F5F7FA]">PV Sairam Saketh</span>
            <span className="text-[#788396] mx-2">·</span>
            <span>Computer Vision & Edge AI Engineer</span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a
              href="mailto:pvsairamsaketh@gmail.com"
              className="hover:text-[#F5F7FA] transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#62C6F2]" />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/pvsaketh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FA] transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#62C6F2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/PVSaketh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FA] transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5 text-[#62C6F2]" />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FA] transition-colors flex items-center space-x-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#62C6F2]" />
              <span>Resume</span>
            </a>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-[#273142]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#788396]">
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
