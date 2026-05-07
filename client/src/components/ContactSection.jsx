import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-secondary italic">precise</span> together.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Have a specific requirement or need a custom quote? Our technical team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Our Address</h4>
                  <p className="text-lg">2/3, DSIDC Community Centre, J-Block, Shakurpur, <br /> Delhi - 110034, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-lg">+91-9811238150, +91-9811238151</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-lg">info@opticstechnology.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/919811238150" 
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle size={20} /> Connect on Whatsapp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-slate-400 mb-2 block uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-400 mb-2 block uppercase tracking-wider">Mobile No</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="+91 ..." />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-400 mb-2 block uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-400 mb-2 block uppercase tracking-wider">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-secondary text-primary-dark py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-secondary/10">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
