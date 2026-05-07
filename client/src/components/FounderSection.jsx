import React from 'react';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section id="about" className="py-24 relative bg-white overflow-hidden font-sans">
      {/* Light background aesthetic blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-slate-500 font-medium mb-4 text-sm md:text-base">The Journey Begins</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold mb-6 text-slate-900 leading-[1.2]">
              We Manufacture Quality based Lab Testing Instruments as per Industrial norms
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed font-medium text-[15px] md:text-base">
              <p>
                The man behind the success of the company is <strong className="text-slate-900">Shri. Y. L. Sharma</strong>. A self-made man possessed with a remarkable sense of ability and enthusiasm under whose able guidance <strong className="text-slate-900">Optics Technology</strong> has attained present status in India and in the international circle. Quality and customer services are also the two reasons behind the success of this small-scale industry. We offer best quality equipment at most economical rates, which has made our customer support us for the past 46 years.
              </p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-slate-800 font-semibold text-[15px] md:text-base">
                <svg className="w-6 h-6 text-[#2b4cbf] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Reasonable Pricing/ Competitive Pricing.
              </li>
              <li className="flex items-center text-slate-800 font-semibold text-[15px] md:text-base">
                <svg className="w-6 h-6 text-[#2b4cbf] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Quality Products
              </li>
              <li className="flex items-center text-slate-800 font-semibold text-[15px] md:text-base">
                <svg className="w-6 h-6 text-[#2b4cbf] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timely Service.
              </li>
            </ul>

            <button className="mt-10 px-8 py-3.5 bg-[#2546b5] hover:bg-blue-800 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-1">
              Read More
            </button>
          </motion.div>
          
          {/* Right Column: Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 lg:mt-0"
          >
            {/* Founder small photo */}
            <div className="flex flex-col items-center flex-shrink-0 z-20">
              <div className="w-32 h-36 md:w-36 md:h-40 rounded-t-full rounded-b-xl overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-[#0088cc]">
                <img src="/assets/images/founder.png" alt="Shri. Y. L. Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 text-center bg-white/90 backdrop-blur px-4 py-1.5 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">Shri. Y. L. Sharma</h4>
                <p className="text-slate-600 text-xs md:text-sm font-semibold">(Founder)</p>
              </div>
            </div>

            {/* Main Graphic */}
            <div className="w-full z-10">
              <img 
                src="/assets/images/founder-side.jpg" 
                alt="Optics Technology Journey" 
                className="w-full h-auto object-contain drop-shadow-xl rounded-2xl" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
