import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'LEGACY', href: '/legacy' },
    { name: 'INSTRUMENTS', href: '/products' },
    { name: 'CERTIFICATES', href: '/certificates' },
    { name: 'AWARDS', href: '/awards' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'FACILITY', href: '/facility' },
  ];

  return (
    <nav id="navbar" className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-dark/90 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-primary/20">T</div>
                <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tighter leading-none text-white">OPTICS</span>
                    <span className="text-[9px] font-bold opacity-50 tracking-[0.4em] uppercase leading-none mt-1 text-white">Technology</span>
                </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-12">
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.href}
                        className="text-sm font-bold tracking-wider text-white hover:text-secondary transition-colors relative group"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </Link>
                    ))}
                </div>
                
                <div className="h-6 w-px bg-white/20 mx-2"></div>
                
                <button 
                  onClick={onQuoteClick}
                  className="group flex items-center gap-3 px-8 py-3 bg-white text-dark rounded-full text-sm font-black hover:bg-secondary transition-all transform active:scale-95 shadow-xl shadow-white/5"
                >
                    GET QUOTE <i className="w-4 h-4 group-hover:translate-x-1 transition-transform"><ArrowRight size={16} /></i>
                </button>
            </div>

            <button className="lg:hidden text-white hover:text-secondary transition-colors p-2 glass rounded-xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden glass mx-6 mt-4 rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="text-lg font-bold text-white hover:text-secondary" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

export default Navbar;
