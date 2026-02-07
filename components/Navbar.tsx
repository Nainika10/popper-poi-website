
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md py-2 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Redesigned Minimalist Logo */}
        <a href="#" className="group transition-transform active:scale-95">
           <Logo light={true} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-amber-400 font-bold text-xs uppercase tracking-[0.3em] transition-all"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenCart}
            className="group relative p-3 bg-red-600 hover:bg-red-700 rounded-2xl transition-all shadow-lg shadow-red-600/20 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden space-x-5">
          <button onClick={onOpenCart} className="relative p-2 bg-red-600 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
               <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-gray-900">
               {cartCount}
             </span>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <div className="space-y-1.5 w-8">
               <div className={`h-1 bg-white rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
               <div className={`h-1 bg-white rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
               <div className={`h-1 bg-white rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 z-40 transition-transform duration-500 flex flex-col items-center justify-center space-y-10 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-5xl font-bebas text-white tracking-widest hover:text-amber-400 transition-colors transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
