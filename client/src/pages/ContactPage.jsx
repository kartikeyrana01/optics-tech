import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-[180px] md:pt-[300px] min-h-screen bg-white text-dark">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Get In <span className="text-secondary italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Whether you have a technical query or need a customized laboratory setup, our team of experts is just a message away.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black mb-12 text-dark">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Our Office</h4>
                    <p className="text-xl font-bold text-dark leading-snug">
                      2/3, DSIDC Community Centre, <br />
                      J-Block, Shakurpur, Delhi - 110034, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Direct Contact</h4>
                    <p className="text-xl font-bold text-dark">+91-9811238150</p>
                    <p className="text-xl font-bold text-dark">+91-9811238151</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Inquiries</h4>
                    <p className="text-xl font-bold text-dark">info@opticstechnology.in</p>
                    <p className="text-xl font-bold text-dark">sales@opticstechnology.in</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Working Hours</h4>
                    <p className="text-xl font-bold text-dark">Monday - Saturday</p>
                    <p className="text-lg font-medium text-slate-500">09:00 AM - 06:30 PM (IST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-dark">
                   <Globe className="text-primary" /> Global Exports
                </h3>
                <p className="text-slate-500 font-medium">
                  We export to over 40+ countries including USA, Germany, UK, and South East Asia. Contact our export department for international terms.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
               <h3 className="text-3xl font-black mb-10 text-dark">Send a Message</h3>
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                      <input type="text" placeholder="Your full name" className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold text-dark" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Mobile</label>
                      <input type="tel" placeholder="+91 ..." className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold text-dark" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
                    <input type="email" placeholder="example@gmail.com" className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold text-dark" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">How can we help?</label>
                    <textarea rows="5" placeholder="Tell us about your requirement..." className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold resize-none text-dark"></textarea>
                  </div>
                  <button className="w-full py-6 bg-primary text-white rounded-2xl font-black text-xl hover:bg-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group">
                    Submit Inquiry <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[600px] rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.28189601322!2d77.14713737529124!3d28.681216975638424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02462e71d37b%3A0xc3921387693952d9!2sOptics%20Technology!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Optics Technology Location"
            ></iframe>
            <div className="absolute top-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white max-w-sm hidden md:block">
              <h4 className="font-black text-primary mb-2">Visit Our Factory</h4>
              <p className="text-slate-500 font-bold leading-relaxed mb-4">
                Walk in for a live demonstration of our latest laboratory instruments.
              </p>
              <a 
                href="https://maps.app.goo.gl/..." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all"
              >
                Get Directions <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-500 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
             <h2 className="text-4xl md:text-6xl font-black mb-8">Need instant support?</h2>
             <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto mb-12 font-medium">
               Our technical sales engineers are available on WhatsApp to answer your questions in real-time.
             </p>
             <a 
               href="https://wa.me/919811238150" 
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-4 px-12 py-6 bg-white text-emerald-600 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl"
             >
               <MessageCircle size={32} /> Chat on WhatsApp
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default ContactPage;
