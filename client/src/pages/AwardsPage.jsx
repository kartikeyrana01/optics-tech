import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award as AwardIcon, Medal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsPage = () => {
  const awards = [
    {
      id: 1,
      title: "Shrestha Shree Award",
      year: "Meri Dilli Awards",
      organization: "Meri Dilli Publications",
      description: "Honored with the prestigious Shrestha Shree Award for outstanding contribution to the industry.",
      icon: <Trophy size={40} className="text-amber-400" />,
      color: "from-amber-400/20 to-amber-600/5",
      borderColor: "group-hover:border-amber-400/50",
      image: "/awards/shrestha_shree_award.png"
    },
    {
      id: 2,
      title: "Delhi Water Expo Excellence",
      year: "Delhi Water Expo",
      organization: "Exhibition Excellence",
      description: "Recognized for showcasing innovative laboratory instruments at the Delhi Water Expo.",
      icon: <Medal size={40} className="text-blue-400" />,
      color: "from-blue-400/20 to-blue-600/5",
      borderColor: "group-hover:border-blue-400/50",
      image: "/awards/delhi_water_expo.png"
    },
    {
      id: 3,
      title: "Meri Dilli Utsav Recognition",
      year: "Meri Dilli Utsav",
      organization: "Meri Dilli Utsav 16th Edition",
      description: "Felicitation and recognition at the 16th Meri Dilli Utsav for industrial excellence.",
      icon: <Star size={40} className="text-emerald-400" />,
      color: "from-emerald-400/20 to-emerald-600/5",
      borderColor: "group-hover:border-emerald-400/50",
      image: "/awards/meri_dilli_utsav.png"
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-[400px] pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block">Our Pride</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Awards & Recognition</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Over four decades of dedication to precision and quality has earned Optics Technology widespread recognition and numerous accolades in the scientific community.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-gradient-to-br ${award.color} bg-slate-800/40 border border-white/5 ${award.borderColor} rounded-[2.5rem] transition-all duration-500 relative overflow-hidden flex flex-col hover:-translate-y-2`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <img 
                   src={award.image} 
                   alt={award.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-10 -mt-12">
                <div className="flex justify-between items-end mb-6">
                  <div className="p-3 bg-slate-900 rounded-2xl border border-white/10 shadow-xl">
                    {award.icon}
                  </div>
                  <span className="text-xl font-black text-white/40 group-hover:text-white/80 transition-colors">
                    {award.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2">{award.title}</h3>
                  <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4">
                    {award.organization}
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {award.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary/20 to-blue-600/20 border border-primary/30 rounded-[3rem] p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <Trophy size={64} className="mx-auto text-secondary mb-6" />
            <h2 className="text-4xl font-black text-white mb-4">A Legacy of Excellence</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
              Our awards are a testament to our commitment to manufacturing the highest quality laboratory instruments. Explore our certifications to see our compliance with global standards.
            </p>
            <Link 
              to="/certificates" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              View Our Certifications <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AwardsPage;
