import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Download, Send } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const ProductListingPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p => p.category === category);
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  const categoryTitle = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-secondary font-bold mb-6 hover:gap-4 transition-all">
            <ArrowLeft size={20} /> Back to Categories
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            {categoryTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-medium"
          >
            Precision instruments for {categoryTitle.toLowerCase()} industry.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div>
                    <div className="aspect-video bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                      <img 
                        src={p.image ? (p.image.startsWith('http') ? p.image : p.image) : 'https://images.unsplash.com/photo-1579154235602-3c35bd799430?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={p.name} 
                      />
                      <div className="absolute top-4 left-4 px-4 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {p.model || 'GENERIC'}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-slate-500 mb-6 line-clamp-2 font-medium">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold flex items-center gap-2">View Details <ArrowRight size={18} /></span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-500 text-xs font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all uppercase tracking-wider">Quote</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-2xl font-bold">No instruments found in this category.</p>
              <p className="mt-2 font-medium">Please check back later or contact us for custom orders.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] relative z-10"
            >
              <div className="md:w-1/2 bg-slate-100 p-8 md:p-12 flex flex-col items-center justify-center border-r border-slate-200">
                <div className="w-full aspect-square bg-white rounded-3xl shadow-lg p-10 mb-8 border border-slate-100 flex items-center justify-center">
                  <img 
                    src={selectedProduct.image ? (selectedProduct.image.startsWith('http') ? selectedProduct.image : selectedProduct.image) : 'https://images.unsplash.com/photo-1579154235602-3c35bd799430?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                    className="w-full h-full object-contain" 
                    alt={selectedProduct.name} 
                  />
                </div>
                <div className="px-6 py-2 bg-primary text-white rounded-full font-black tracking-widest text-sm uppercase">
                  {selectedProduct.model || 'OT-GEN-2026'}
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-black leading-tight text-dark">{selectedProduct.name}</h2>
                  <button onClick={() => setSelectedProduct(null)} className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400 hover:text-dark">
                    <X size={24} />
                  </button>
                </div>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">{selectedProduct.description}</p>
                
                {selectedProduct.optional && (
                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-4">Optional Features :</h4>
                    <ul className="space-y-3 text-slate-600 font-medium list-decimal pl-4">
                      {selectedProduct.optional.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProduct.related && (
                  <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Also looks for :</h4>
                    <p className="text-primary font-bold text-lg">{selectedProduct.related}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)} 
                    className="flex-1 py-4 bg-primary text-white text-center rounded-2xl font-bold hover:bg-dark transition-all flex items-center justify-center gap-2"
                  >
                    Request Quote <Send size={18} />
                  </button>
                  <button className="flex-1 py-4 border border-slate-200 text-slate-500 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Download size={18} /> Catalogue
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productName={selectedProduct?.name} 
      />
    </div>
  );
};

export default ProductListingPage;
