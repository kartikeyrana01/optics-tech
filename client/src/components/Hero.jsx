import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://imgs.search.brave.com/_3s3fJS0AS7UD2jkjL-plBMqI2kQnvhtHvOkSBFgmeY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9tZWRpY2Fs/LXJlc2VhcmNoLWxh/Ym9yYXRvcnktbWFs/ZS1zY2llbnRpc3Qt/MjYwbnctMTkyNDUx/MjUyNy5qcGc" 
          className="w-full h-full object-cover opacity-30" 
          alt="Chemical Lab" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-secondary mb-8 uppercase"
        >
          <ShieldCheck size={16} /> ISO 9001:2015 Certified
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-none text-gradient"
        >
          Precision Beyond <br /> <span className="text-secondary italic">Boundaries.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Global leaders in manufacturing and exporting state-of-the-art laboratory testing instruments since 1980.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/products" className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-white hover:text-dark transition-all flex items-center gap-3">
            View Catalog <ArrowRight />
          </Link>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-dark" alt="User" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 5000+ Labs</span>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-white">
        <ArrowRight size={32} className="rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
