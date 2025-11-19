import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetler', href: '#services' },
    { name: 'AI Asistan', href: '#ai-wizard' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-videm-dark/90 backdrop-blur-md border-slate-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-white p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
             <Zap className="w-6 h-6 text-videm-dark fill-current" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Videm</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-white text-videm-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-white/10"
          >
            Teklif Al
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-videm-dark border-t border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg text-slate-300 block py-2 border-b border-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};