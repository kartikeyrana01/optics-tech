import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-[400px]">
      {/* Yellow Slogan Bar */}
      <div className="bg-secondary py-3.5 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-primary font-black text-lg md:text-xl tracking-tight uppercase">
            Manufacturer & Exporters of <span className="text-black">Laboratory Testing Instruments</span>
          </p>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <img 
          src="/assets/images/lab_room.png" 
          className="w-full h-full object-cover" 
          alt="Modern Laboratory Facility" 
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Serving Our Customers <br /> 
              <span className="text-secondary italic">for the Past 46 Years</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
              Delivering precision-engineered solutions to elite labs and industrial facilities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/products" className="px-10 py-5 bg-primary text-white rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center gap-3 group">
                EXPLORE CATALOGUE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="/certificates" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white hover:text-dark transition-all">
                VIEW CERTIFICATIONS
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute top-10 right-10 hidden lg:flex flex-col gap-4">
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-xl border border-white">
            <ShieldCheck className="text-primary" size={24} />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified</span>
              <span className="text-sm font-bold text-primary">ISO 9001:2015</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-xl border border-white">
            <Globe className="text-primary" size={24} />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Export</span>
              <span className="text-sm font-bold text-primary">50+ Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce cursor-pointer">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowRight size={24} className="rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
