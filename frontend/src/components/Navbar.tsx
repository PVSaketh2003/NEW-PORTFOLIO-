import React, { useState } from 'react';
import { FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Navigation items in the exact required order
  const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Experience', href: '#experience' },
    { name: 'Internships', href: '#internships' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-theme-bg/85 backdrop-blur-xl border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Custom Emblem Logo & Full Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <Logo size={36} />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-theme-text tracking-tight group-hover:text-theme-accent transition-colors">
                PV Sairam Saketh
              </span>
              <span className="text-[11px] font-mono font-medium text-sky-600 dark:text-sky-400 hidden sm:inline-block tracking-wide">
                Computer Vision & Edge AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Exact Required Order */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-theme-secondary hover:text-theme-text hover:bg-theme-elevated transition-all duration-200 relative group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-theme-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Switcher & Resume PDF Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button with micro-rotation */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-borderHover transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent/30"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FDB813] transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 text-theme-accent transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Resume Action */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg border border-theme-border bg-theme-card hover:bg-theme-elevated text-xs font-semibold text-theme-text hover:border-theme-accent/60 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-theme-accent" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FDB813]" />
              ) : (
                <Moon className="w-4 h-4 text-theme-accent" />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg border border-theme-border bg-theme-card text-xs font-semibold text-theme-text"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-theme-secondary hover:text-theme-text hover:bg-theme-card border border-theme-border focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface/95 backdrop-blur-xl border-b border-theme-border px-4 pt-2 pb-4 space-y-1 animate-fade-in shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-theme-secondary hover:text-theme-text hover:bg-theme-card font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
