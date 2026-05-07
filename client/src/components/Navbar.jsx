import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/legacy' },
    { name: 'Our Products', href: '/products' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Awards', href: '/awards' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Facility', href: '/facility' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* 1. Thin Top Contact Bar (Hides on scroll) */}
      {!scrolled && (
        <div className="bg-slate-50 py-2 border-b border-slate-200 hidden lg:block">
          <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center text-[11px] font-black text-primary uppercase tracking-widest">
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2"><Phone size={12} className="text-secondary" /> +91-9811238150</span>
              <span className="flex items-center gap-2"><Mail size={12} className="text-secondary" /> info@opticstechnology.in</span>
            </div>
            <div className="flex items-center gap-6">
               <img src="/assets/images/trust logo.png" alt="46 Years Trust" className="h-8" />
               <div className="relative">
                <input type="text" placeholder="Search..." className="pl-4 pr-8 py-1 bg-white border border-slate-200 rounded-full w-40 focus:w-60 transition-all outline-none" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
               </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Branding Row (Sticky) */}
      <div className={`bg-white transition-all duration-500 ${scrolled ? 'py-2 shadow-lg border-b border-slate-100' : 'py-4 md:py-12'}`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex justify-between lg:justify-center items-center">
          
          {/* Logo & Text (Centered in container) */}
          <Link to="/" className={`flex items-center gap-2 md:gap-8 group transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <div className={`flex-shrink-0 bg-white border-black rounded-full flex items-center justify-center text-black font-black transition-all duration-500 shadow-2xl ${scrolled ? 'w-10 h-10 text-lg border-[2px]' : 'w-16 h-16 md:w-36 md:h-36 text-2xl md:text-8xl border-[4px] md:border-[8px]'}`}>
              T
            </div>
            <div className="flex items-baseline gap-1 md:gap-5">
              <h1 className={`text-primary font-black tracking-tighter transition-all duration-500 uppercase ${scrolled ? 'text-lg md:text-3xl' : 'text-2xl md:text-9xl'}`}>
                OPTICS
              </h1>
              <h2 className={`text-primary font-black tracking-tighter transition-all duration-500 uppercase ${scrolled ? 'text-lg md:text-3xl' : 'text-2xl md:text-9xl'}`}>
                Technology
              </h2>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-primary p-2 hover:bg-slate-50 rounded-lg transition-all" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 3. Navigation Row (Sticky, Hides on scroll if you want, or stays) */}
      <nav className={`bg-primary transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-14 opacity-100 shadow-xl'} hidden lg:block`}>
        <div className="max-w-7xl mx-auto h-full px-4 flex justify-center items-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="px-6 py-2 text-sm font-bold text-white hover:text-secondary transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">T</div>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={24} /></button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-4xl font-black text-primary border-b border-slate-100 pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <button 
                  onClick={() => { setIsOpen(false); onQuoteClick(); }}
                  className="w-full py-5 bg-accent-red text-white font-black rounded-2xl shadow-xl uppercase"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
