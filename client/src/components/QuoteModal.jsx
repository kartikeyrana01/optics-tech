import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productName })
      });
      if (res.ok) {
        alert('Your enquiry has been sent successfully! Our team will contact you soon.');
        onClose();
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to connect to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl relative z-10 p-10"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black text-dark">Get a Quote</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400 hover:text-dark">
              <X size={24} />
            </button>
          </div>
          
          <p className="text-slate-500 mb-8 font-medium">
            You are inquiring about: <br />
            <span className="text-primary font-bold text-xl">{productName}</span>
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-medium text-slate-900" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-medium text-slate-900" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Message / Requirements</label>
              <textarea 
                rows="3" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-medium text-slate-900" 
                placeholder="Tell us about your specific needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-dark transition-all transform active:scale-95 shadow-xl shadow-primary/20 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'} <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuoteModal;
