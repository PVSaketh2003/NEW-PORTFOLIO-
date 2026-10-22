import React, { useState } from 'react';
import { FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-theme-bg/90 backdrop-blur-md border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Monogram & Full Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-md bg-theme-card border border-theme-border flex items-center justify-center text-xs font-bold text-theme-accent group-hover:border-theme-accent/60 transition-all duration-200 shadow-sm">
              PV
            </div>
            <span className="text-base font-semibold text-theme-text tracking-tight group-hover:text-theme-accent transition-colors">
              PV Sairam Saketh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-theme-secondary hover:text-theme-text transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-theme-accent hover:after:w-full after:transition-all after:duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Switcher & Resume Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-borderHover transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-accent/40"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FDB813] transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-theme-accent transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Resume PDF Action */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md border border-theme-border bg-theme-card hover:bg-theme-elevated text-xs font-medium text-theme-text hover:border-theme-accent/50 transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-theme-accent" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-theme-border bg-theme-card text-theme-secondary"
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
              className="px-2.5 py-1 rounded border border-theme-border bg-theme-card text-xs font-medium text-theme-text"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-theme-secondary hover:text-theme-text hover:bg-theme-card focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-surface border-b border-theme-border px-4 pt-2 pb-4 space-y-1 animate-fade-in shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-theme-secondary hover:text-theme-text hover:bg-theme-card font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
