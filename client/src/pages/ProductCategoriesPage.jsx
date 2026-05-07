import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Droplets, Pill, FlaskConical, Armchair, Atom, Microscope, Sparkles, Baby, Box, Dna, Factory, Waves, Flame, Sprout, Leaf, Hospital, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Food & Beverages', icon: <Apple />, sub: 'Exceptional Innovations', slug: 'food-beverage' },
  { name: 'Milk Plants', icon: <Droplets />, sub: 'Dairy Production Solutions', slug: 'milk-plants' },
  { name: 'Pharmaceutical', icon: <Pill />, sub: 'Innovative Medical Solutions', slug: 'pharmaceutical' },
  { name: 'Testing Labs', icon: <FlaskConical />, sub: 'Precision and Accuracy', slug: 'testing-labs' },
  { name: 'Lab Furniture', icon: <Armchair />, sub: 'Ergonomic Lab Comforts', slug: 'lab-furniture' },
  { name: 'Chemical', icon: <Atom />, sub: 'Innovative Solutions', slug: 'chemical' },
  { name: 'Microbiology Lab', icon: <Microscope />, sub: 'Techniques and Discoveries', slug: 'microbiology-lab' },
  { name: 'Cosmetic', icon: <Sparkles />, sub: 'Evolution and Innovation', slug: 'cosmetic' },
  { name: 'IVF Centres', icon: <Baby />, sub: 'Pioneering Fertility Hope', slug: 'ivf-centres' },
  { name: 'Packaging', icon: <Box />, sub: 'Testing Before Packaging', slug: 'packaging' },
  { name: 'Biotech', icon: <Dna />, sub: 'Genetic Innovations', slug: 'biotech' },
  { name: 'R & D Labs', icon: <Factory />, sub: 'Driving Innovation', slug: 'rd-labs' },
  { name: 'ETP Labs', icon: <Waves />, sub: 'Wastewater Treatment', slug: 'etp-labs' },
  { name: 'Petrochemical', icon: <Flame />, sub: 'Impact and Innovations', slug: 'petrochemical' },
  { name: 'Tissue Culture', icon: <Sprout />, sub: 'Revolutionizing Plants', slug: 'tissue-culture' },
  { name: 'Ayurvedic Labs', icon: <Leaf />, sub: 'Holistic Healing', slug: 'ayurvedic-labs' },
  { name: 'Diagnostic Lab', icon: <Hospital />, sub: 'Leading Hospital Services', slug: 'diagnostic-lab' },
  { name: 'Education', icon: <GraduationCap />, sub: 'Shaping the Future', slug: 'education' },
];

const ProductCategoriesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/20 to-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
          >
            Our Instruments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Precision-engineered solutions for every industry, from R&D to large-scale production.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50 text-dark rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link 
                  to={`/products/${industry.slug}`}
                  className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-[2rem] transition-all hover:scale-105 hover:shadow-xl group"
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-primary flex-shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    {React.cloneElement(industry.icon, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{industry.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{industry.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Looking for a specific instrument?</h3>
            <Link to="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-dark transition-all shadow-xl shadow-primary/20">
              Inquire Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategoriesPage;
