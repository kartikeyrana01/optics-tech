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
  return <div className="min-h-screen bg-dark flex items-center justify-center text-white">Redirecting to Staff Portal...</div>;
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

        <footer className="bg-slate-950 pt-12 pb-32 md:pb-12 border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border border-white/20">T</div>
              <h2 className="text-white font-bold text-xl tracking-tighter">OPTICS <span className="text-xs opacity-60">Technology</span></h2>
            </div>
            <p className="text-slate-500 text-sm mb-8">
              &copy; {new Date().getFullYear()} Optics Technology. All Rights Reserved. <br className="hidden md:block" />
              Manufacturer & Exporter of High-Precision Laboratory Instruments.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-slate-400">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="/admin" className="text-secondary font-bold hover:text-white transition-colors">Staff Admin</a>
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
