import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

const CertificatesPage = () => {
  const certificates = [
      {
        id: 1,
        title: "ISO 13485:2016",
        issuer: "Medical Devices Quality Management",
        description: "Certified for Manufacturing of Laboratory Testing Instruments. Certificate No: 22ZCZE9249M. Valid until Feb 2025.",
        icon: <ShieldCheck size={40} />,
        image: "/certificates/iso_13485.png"
      },
      {
        id: 2,
        title: "ISO 9001:2015",
        issuer: "Quality Management System",
        description: "Trading and Supply of Laboratory Testing Instruments. Certificate No: 21EQFD35. Valid until Dec 2024.",
        icon: <ShieldCheck size={40} />,
        image: "/certificates/iso_9001.png"
      },
      {
        id: 3,
        title: "ISO 10002:2018",
        issuer: "Customer Satisfaction Management",
        description: "Complaint Handling and Quality Management for Customer Satisfaction. Certificate No: 22ZCZE9250CS.",
        icon: <ShieldCheck size={40} />,
        image: "/certificates/iso_10002.png"
      },
      {
        id: 4,
        title: "USFDA Compliance",
        issuer: "QCAS Certifications Inc.",
        description: "Manufacturing of Laboratory Testing Instruments. Certificate Number: QCAS-OPT-23-05158613. Valid until July 2026.",
        icon: <Award size={40} />,
        image: "/certificates/usfda.png"
      },
      {
        id: 5,
        title: "FDA (BQC) Certified",
        issuer: "Bureau of Quality Certification",
        description: "Conforming to FDA Guidelines for Laboratory Testing Instruments. Certificate No: BQC/IN/BC22F53.",
        icon: <Award size={40} />,
        image: "/certificates/fda_bqc.png"
      },
      {
        id: 6,
        title: "WHO-GMP Certified",
        issuer: "Good Manufacturing Practice",
        description: "Certified for Quality Management and Manufacturing excellence. Certificate No: 21ACEZ9037WG.",
        icon: <CheckCircle2 size={40} />,
        image: "/certificates/who_gmp.png"
      },
      {
        id: 7,
        title: "CE Certification",
        issuer: "Medical Device Regulation",
        description: "Conforms with MDR 2017/745 for Medical Devices. Certificate No: 21ACCQ9025C.",
        icon: <ShieldCheck size={40} />,
        image: "/certificates/ce_certification.png"
      },
      {
        id: 8,
        title: "IEC 60601-2:2018",
        issuer: "UK Global Certification",
        description: "Medical Electrical Equipment - Basic Safety and Essential Performance. Certificate No: IE1207AS1.",
        icon: <FileText size={40} />,
        image: "/certificates/iec_60601.png"
      },
      {
        id: 9,
        title: "IEC 61010-1:2010",
        issuer: "Electrical Safety Requirements",
        description: "Safety requirements for electrical equipment for measurement and control. Certificate No: 23ZAEA0038EE.",
        icon: <FileText size={40} />,
        image: "/certificates/iec_61010.png"
      },
      {
        id: 10,
        title: "BS EN 12469:2000",
        issuer: "Bureau of Quality Certification",
        description: "Microbiological Safety Cabinets performance criteria. Certificate No: 23ZAEA0036MS.",
        icon: <ShieldCheck size={40} />,
        image: "/certificates/bs_en_12469.png"
      },
      {
        id: 11,
        title: "UDYAM Registration",
        issuer: "Ministry of MSME, Govt of India",
        description: "Registration No: UDYAM-DL-04-0001668. Verified Manufacturer status.",
        icon: <CheckCircle2 size={40} />,
        image: "/certificates/udyam.png"
      },
      {
        id: 12,
        title: "Udyog Aadhaar",
        issuer: "Ministry of MSME",
        description: "Registration Certificate No: DL04A0011257. Established since 1978.",
        icon: <CheckCircle2 size={40} />,
        image: "/certificates/udyam_2.png"
      }
    ];
  
    return (
      <div className="min-h-screen bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block">Quality Assurance</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Our Certifications</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We are committed to excellence. Our certifications represent our dedication to international quality standards and precision engineering.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-800/30 border border-white/5 p-6 rounded-[2.5rem] hover:bg-slate-800 transition-all duration-500 relative overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/4] bg-white rounded-2xl mb-8 overflow-hidden relative group-hover:ring-4 ring-primary/50 transition-all shadow-2xl">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
  
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-secondary group-hover:text-white group-hover:bg-primary transition-all">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{cert.title}</h3>
                    <p className="text-secondary font-bold uppercase tracking-widest text-[8px] group-hover:text-white/80">{cert.issuer}</p>
                  </div>
                </div>
  
                <p className="text-slate-400 group-hover:text-white/90 leading-relaxed text-sm mb-6 flex-1">
                  {cert.description}
                </p>
              
              <div className="pt-6 border-t border-white/5 group-hover:border-white/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-white text-sm font-bold">Verified Status: Active</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Standards Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 bg-gradient-to-br from-blue-600 to-primary rounded-[4rem] text-center text-white shadow-2xl shadow-primary/20"
        >
          <h2 className="text-4xl font-black mb-6">Global Standard Compliance</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
            Our manufacturing facility follows the most stringent quality control protocols. Every instrument undergoes a multi-stage testing process before it leaves our premises.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">100%</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Quality Check</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">40+</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Years of Trust</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">Global</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Export Standards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesPage;
