import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import FounderSection from '../components/FounderSection';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Beaker, Settings, Pill, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const categories = [
    { name: 'Microscopic Solutions', icon: <Microscope />, desc: 'Digital imaging for biological and material science research.', cat: 'testing-labs' },
    { name: 'Chemical Analysis', icon: <Beaker />, desc: 'Precision spectrometers and chemical testing rigs.', cat: 'chemical' },
    { name: 'Industrial QC Labs', icon: <Settings />, desc: 'Custom testing solutions for industrial quality control.', cat: 'testing-labs' },
    { name: 'Pharma Solutions', icon: <Pill />, desc: 'High-grade testing for pharmaceutical production.', cat: 'pharmaceutical' },
    { name: 'Dairy & Milk Plants', icon: <Droplets />, desc: 'Specialized tools for dairy production quality.', cat: 'milk-plants' }
  ];

  return (
    <div className="bg-dark">
      <Hero />
      <FounderSection />
      
      {/* Dynamic Carousel Section */}
      <section id="products" className="py-32 bg-white text-dark rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Our Instruments</h2>
              <p className="text-slate-500 text-xl max-w-2xl font-medium">Explore our range of precision-engineered solutions for diverse laboratory needs.</p>
            </div>
            <div className="flex gap-4">
              <button className="swiper-prev-btn w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <ChevronLeft />
              </button>
              <button className="swiper-next-btn w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-next-btn',
              prevEl: '.swiper-prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {categories.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link to={`/products/${item.cat}`} className="block group relative bg-slate-50 p-10 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">{item.name}</h3>
                    <p className="text-slate-500 mb-8 font-medium leading-relaxed">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
                      Explore Category <ArrowRight size={20} />
                    </span>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Marquee Clients Section */}
      <section className="py-24 bg-dark text-white overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-black mb-4">Trusted by <span className="text-secondary">Industry Leaders</span></h2>
              <p className="text-slate-400 font-medium">Collaborating with elite institutions and global corporations for over 4 decades.</p>
            </div>
            <div className="flex-1 w-full overflow-hidden relative">
              <div className="flex gap-12 animate-marquee items-center py-4">
                {['IIT DELHI', 'CSIR INDIA', 'RANBAXY', 'CIPLA', 'DR. REDDYS', 'IIT BOMBAY', 'NESTLE', 'AMUL', 'APOLLO'].map((client, i) => (
                  <div key={i} className="text-3xl font-black opacity-30 whitespace-nowrap tracking-tighter hover:opacity-100 transition-opacity cursor-default">
                    {client}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {['IIT DELHI', 'CSIR INDIA', 'RANBAXY', 'CIPLA', 'DR. REDDYS', 'IIT BOMBAY', 'NESTLE', 'AMUL', 'APOLLO'].map((client, i) => (
                  <div key={i+10} className="text-3xl font-black opacity-30 whitespace-nowrap tracking-tighter hover:opacity-100 transition-opacity cursor-default">
                    {client}
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-dark mb-8 tracking-tighter">Ready to equip your lab?</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">Get in touch for custom instrument configurations and global export terms.</p>
          <Link to="/#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-white rounded-full font-black text-xl hover:bg-dark transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-2">
            Get a Quote <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
