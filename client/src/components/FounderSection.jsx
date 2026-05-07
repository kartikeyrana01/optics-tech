import React from 'react';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section id="about" className="py-32 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative">
              <img 
                src="/assets/images/founder.png" 
                className="w-full rounded-[2rem] shadow-2xl relative z-10 border border-white/10" 
                alt="Shri. Y. L. Sharma" 
              />
              <div className="absolute inset-0 border-2 border-secondary rounded-[2rem] translate-x-5 translate-y-5 -z-10"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl z-20">
              <h3 className="text-2xl font-bold text-white leading-tight">Shri. Y. L. Sharma</h3>
              <p className="text-secondary font-semibold">Founder & Visionary</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              A Legacy of <br /> <span className="text-primary-light">40+ Years</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium">
              <p className="italic text-white">"Established with a vision to provide the most accurate and reliable testing solutions, Optics Technology has grown into a global name."</p>
              <p>
                Under the visionary leadership of Shri. Y. L. Sharma, we have pioneered precision engineering in laboratory instruments, exporting excellence to over 50 countries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-12">
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">50+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Countries Exported</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">1200+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Instruments Built</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
