import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0D12]/90 backdrop-blur-md border-b border-[#273142]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Monogram & Full Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-md bg-[#151B26] border border-[#273142] flex items-center justify-center text-xs font-bold text-[#62C6F2] group-hover:border-[#62C6F2]/50 transition-colors">
              PV
            </div>
            <span className="text-base font-semibold text-[#F5F7FA] tracking-tight group-hover:text-[#62C6F2] transition-colors">
              PV Sairam Saketh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#A4ADBB] hover:text-[#F5F7FA] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean Resume Link */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md border border-[#273142] bg-[#151B26] hover:bg-[#1B2332] text-xs font-medium text-[#F5F7FA] hover:border-[#62C6F2]/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#62C6F2]" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded border border-[#273142] bg-[#151B26] text-xs font-medium text-[#F5F7FA]"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-[#A4ADBB] hover:text-[#F5F7FA] hover:bg-[#151B26] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#11151D] border-b border-[#273142] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-[#A4ADBB] hover:text-[#F5F7FA] hover:bg-[#151B26]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
