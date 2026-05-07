import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Maximize2 } from 'lucide-react';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/gallery');
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  if (loading) return null;
  if (images.length === 0) return null;

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-widest"
            >
              Visual Journey
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Experience Our <span className="text-primary">Excellence</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium">
            Take a look at our state-of-the-art infrastructure, international events, and the precision that goes into every instrument.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url.startsWith('http') ? img.url : `http://localhost:3000${img.url}`}
                alt={img.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
                <div className="flex items-center gap-2 text-primary-light text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Maximize2 size={16} /> Enlarge View
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url.startsWith('http') ? selectedImage.url : `http://localhost:3000${selectedImage.url}`}
                alt={selectedImage.caption}
                className="max-h-[80vh] w-auto rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.caption}</h3>
                <div className="w-12 h-1 bg-primary mx-auto"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
