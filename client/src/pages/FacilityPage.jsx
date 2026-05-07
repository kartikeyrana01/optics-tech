import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Microscope, ShieldCheck, Box } from 'lucide-react';

const FacilityPage = () => {
  return (
    <div className="pt-[400px] min-h-screen bg-primary">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
          >
            Our Facility
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl font-medium"
          >
            World-class infrastructure for world-class precision.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white text-dark rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8 leading-tight">
                State-of-the-Art <span className="text-primary">Manufacturing</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                Our manufacturing unit is spread over a large area and is equipped with the latest machinery and technology. We have separate divisions for R&D, Quality Control, Production, and Packaging to ensure a smooth and efficient workflow.
              </p>
              <ul className="space-y-6">
                {[
                  'Precision CNC Machines',
                  'Advanced Optical Testing Darkrooms',
                  'Automated Quality Verification Systems'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Factory" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Microscope />, title: 'R&D Lab', desc: 'Continuous innovation to stay ahead in testing technology.' },
              { icon: <ShieldCheck />, title: 'Quality Unit', desc: 'Every instrument undergoes a rigorous 24-step testing protocol.' },
              { icon: <Box />, title: 'Global Logistics', desc: 'Export-grade packaging and global shipping partners.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-primary text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
             Building Trust Through <span className="text-secondary italic">Engineering Excellence.</span>
           </h2>
           <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default FacilityPage;
