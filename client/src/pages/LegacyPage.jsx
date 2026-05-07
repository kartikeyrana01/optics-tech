import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const LegacyPage = () => {
  return (
    <div className="pt-[180px] md:pt-[400px] min-h-screen bg-primary">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
          >
            Our Legacy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl font-medium"
          >
            Building precision since 1980.
          </motion.p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white text-dark rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Four Decades of <span className="text-primary text-gradient-blue">Precision.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Established with a vision to provide the most accurate and reliable testing solutions, Optics Technology has grown into a global name. We specialize in designing and manufacturing high-precision instruments for various industries including education, research, and industrial quality control.
                </p>
                <p>
                  Our commitment to quality and customer satisfaction has made us a preferred partner for laboratories worldwide. With a strong focus on R&D and quality control, we ensure that every instrument that leaves our facility meets international standards.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-slate-100 p-10 rounded-[2.5rem] text-center shadow-sm">
                <div className="text-5xl font-black text-primary mb-2">1980</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Founded</div>
              </div>
              <div className="bg-primary text-white p-10 rounded-[2.5rem] text-center shadow-xl shadow-primary/20">
                <div className="text-5xl font-black mb-2">50+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Countries</div>
              </div>
              <div className="bg-secondary p-12 rounded-[2.5rem] text-center col-span-2 shadow-xl shadow-secondary/10">
                <div className="text-6xl font-black text-dark mb-2">5000+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-dark/70">Global Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-32 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <img 
                src="/assets/images/founder.png" 
                className="w-full rounded-[3rem] shadow-2xl border-4 border-white/10" 
                alt="Shri. Y. L. Sharma" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <div className="mb-8">
                <Quote size={64} className="text-primary-light opacity-20 mb-4" />
                <h2 className="text-4xl font-bold mb-4">Shri. Y. L. Sharma</h2>
                <p className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-8">Founder & Visionary</p>
              </div>
              <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed italic mb-8 font-light">
                "Precision is not just a standard we follow; it's the heritage we build. Every instrument we craft carries the promise of accuracy and the weight of our legacy."
              </p>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Under his guidance, Optics Technology has pioneered numerous advancements in optical and testing instrumentation. His dedication to Indian manufacturing and global standards has paved the way for our international success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
