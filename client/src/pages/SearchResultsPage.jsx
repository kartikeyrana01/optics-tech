import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Download, Send, Search } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (query) {
          const filtered = data.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            (p.model && p.model.toLowerCase().includes(query.toLowerCase())) ||
            (p.category && p.category.toLowerCase().includes(query.toLowerCase()))
          );
          setProducts(filtered);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="pt-[180px] md:pt-[400px] min-h-screen bg-white text-dark">
      {/* Header */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:gap-4 transition-all uppercase text-xs tracking-widest">
            <ArrowLeft size={16} /> Back to Categories
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 text-dark">
                Search Results
              </h1>
              <p className="text-lg text-slate-500 font-medium">
                Showing results for <span className="text-primary font-bold">"{query}"</span>
              </p>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 flex items-center gap-3">
              <Search size={20} className="text-primary" />
              <span className="font-bold text-dark">{products.length} Instruments Found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 font-bold animate-pulse">Searching our catalog...</p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div>
                    <div className="aspect-square bg-slate-50 rounded-2xl mb-6 overflow-hidden relative border border-slate-100 p-4 flex items-center justify-center">
                      <img 
                        src={p.image ? (p.image.startsWith('http') ? p.image : p.image) : 'https://images.unsplash.com/photo-1579154235602-3c35bd799430?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                        alt={p.name} 
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-[9px] font-black rounded-full uppercase tracking-widest">
                        {p.model || 'OT-2026'}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{p.name}</h3>
                    <p className="text-slate-500 mb-6 line-clamp-2 text-sm font-medium">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-primary font-bold text-sm flex items-center gap-2">Details <ArrowRight size={14} /></span>
                    <span className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-all uppercase tracking-wider">Quote</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-400" />
              </div>
              <h2 className="text-3xl font-black text-dark mb-2">No matching instruments found</h2>
              <p className="text-slate-500 max-w-md mx-auto font-medium">We couldn't find any results for "{query}". Try checking the spelling or use more general keywords.</p>
              <Link to="/products" className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-dark transition-all">
                Browse All Categories <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Modal - Reused from ProductListingPage */}
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
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)} 
                    className="flex-1 py-4 bg-primary text-white text-center rounded-2xl font-bold hover:bg-dark transition-all flex items-center justify-center gap-2"
                  >
                    Request Quote <Send size={18} />
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

export default SearchResultsPage;
