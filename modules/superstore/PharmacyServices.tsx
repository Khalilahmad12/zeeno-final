
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Replaced non-existent 'FirstAid' with 'BriefcaseMedical' from lucide-react
import { ClipboardList, Thermometer, BriefcaseMedical, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Prescription Medicines',
    desc: 'Verified and authentic medicines dispensed by licensed pharmacists with precision and care.',
    icon: <ClipboardList size={32} />
  },
  {
    title: 'OTC Products',
    desc: 'A wide range of over-the-counter solutions for common health issues and wellness needs.',
    icon: <Thermometer size={32} />
  },
  {
    title: 'Health Essentials',
    desc: 'Vitamins, supplements, and first-aid kits to support a healthy and active lifestyle.',
    // Fixed: Using BriefcaseMedical as a replacement for FirstAid
    icon: <BriefcaseMedical size={32} />
  }
];

const PharmacyServices: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Pharmacy <span className="text-brand-blue">Services</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              We provide professional healthcare support through a wide range of authentic medicines and wellness products.
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              {['Licensed Pharmacists', 'Authentic Brands', 'Digital Records'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest">
                  <CheckCircle2 size={16} /> {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:w-1/3">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 hover:bg-brand-blue/10 transition-all cursor-default"
              >
                <div className="text-brand-orange shrink-0">{service.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{service.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyServices;
