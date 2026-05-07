import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LegacyPage from './pages/LegacyPage'
import FacilityPage from './pages/FacilityPage'
import ProductCategoriesPage from './pages/ProductCategoriesPage'
import ProductListingPage from './pages/ProductListingPage'
import GalleryPage from './pages/GalleryPage'
import CertificatesPage from './pages/CertificatesPage'
import AwardsPage from './pages/AwardsPage'
import ContactSection from './components/ContactSection'
import { motion, useScroll, useSpring } from 'framer-motion'
import QuoteModal from './components/QuoteModal'
import ChatBot from './components/ChatBot'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function AdminRedirect() {
  React.useEffect(() => {
    window.location.href = '/admin';
  }, []);
  return <div className="min-h-screen bg-primary flex items-center justify-center text-white font-bold">Redirecting to Staff Portal...</div>;
}

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legacy" element={<LegacyPage />} />
            <Route path="/facility" element={<FacilityPage />} />
            <Route path="/products" element={<ProductCategoriesPage />} />
            <Route path="/products/:category" element={<ProductListingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/admin" element={<AdminRedirect />} />
          </Routes>
          
          <ContactSection />
          <ChatBot />
          <WhatsAppButton />
        </main>

        <footer className="bg-dark pt-16 pb-32 md:pb-16 border-t border-white/5 relative z-10 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">T</div>
                  <h2 className="font-bold text-2xl tracking-tighter">OPTICS <span className="opacity-70 text-sm">Technology</span></h2>
                </div>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                  Leading manufacturers and exporters of precision laboratory testing instruments for over 46 years. ISO 9001:2015 certified.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold mb-6 text-secondary uppercase tracking-widest text-sm">Quick Links</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/products" className="hover:text-white transition-colors">Instruments</a></li>
                  <li><a href="/certificates" className="hover:text-white transition-colors">Certificates</a></li>
                  <li><a href="/awards" className="hover:text-white transition-colors">Awards</a></li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <h3 className="font-bold mb-6 text-secondary uppercase tracking-widest text-sm">Contact Portal</h3>
                <p className="text-sm text-white/70 mb-4">info@opticstechnology.in</p>
                <div className="flex justify-center md:justify-end gap-4">
                  <a href="/admin" className="px-6 py-2 bg-secondary text-primary-dark rounded-full font-bold text-xs hover:bg-white transition-all shadow-lg shadow-secondary/10">
                    STAFF PORTAL
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 text-xs">
                &copy; {new Date().getFullYear()} Optics Technology. All Rights Reserved. <br className="hidden md:block" />
                Specializing in Laboratory Instruments for Industrial Norms.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productName="General Inquiry" 
      />
    </Router>
  )
}

export default App
