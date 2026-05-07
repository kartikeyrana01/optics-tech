import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const machines = [
  {
    name: 'Digital Microscope Pro',
    model: 'OT-MS-400',
    image: '/assets/images/machines/microscope.png',
    description: 'High-precision imaging with digital connectivity for research labs.'
  },
  {
    name: 'Industrial Centrifuge',
    model: 'OT-CF-800',
    image: '/assets/images/machines/centrifuge.png',
    description: 'Rapid separation technology for chemical and biological processing.'
  },
  {
    name: 'UV Spectrometer',
    model: 'OT-SP-250',
    image: '/assets/images/machines/spectrometer.png',
    description: 'Accurate molecular analysis with wide spectrum detection.'
  },
  {
    name: 'Biological Incubator',
    model: 'OT-IB-120',
    image: '/assets/images/machines/incubator.png',
    description: 'Controlled environment for cell culture and microbial growth.'
  }
];

const MachineCarousel = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Advanced <span className="text-secondary">Lab Machines</span></h2>
            <p className="text-white/70 text-lg max-w-xl">Precision-engineered instruments for state-of-the-art laboratory testing.</p>
          </div>
          <div className="flex gap-4">
            <button className="machine-prev-btn w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all border border-white/10">
              <ChevronLeft />
            </button>
            <button className="machine-next-btn w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all border border-white/10">
              <ChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.machine-next-btn',
            prevEl: '.machine-prev-btn',
          }}
          pagination={{ clickable: true, el: '.machine-pagination' }}
          className="pb-20"
        >
          {machines.map((machine, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10 h-full flex flex-col">
                <div className="relative h-[300px] overflow-hidden bg-slate-100 p-8 flex items-center justify-center">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 right-6 px-4 py-1 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                    {machine.model}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-primary mb-4 leading-none">{machine.name}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8 flex-grow">
                    {machine.description}
                  </p>
                  <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-secondary hover:text-primary transition-all shadow-xl shadow-primary/10 group/btn">
                    View Specs <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="machine-pagination flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default MachineCarousel;
