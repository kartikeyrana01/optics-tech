import React from 'react';
import GallerySection from '../components/GallerySection';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/20 to-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
          >
            Life at Optics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl font-medium"
          >
            Celebrating our team, culture, and the people behind the precision.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white text-dark min-h-[60vh] rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <GallerySection />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
