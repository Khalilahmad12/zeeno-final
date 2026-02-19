
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cpu, Stethoscope, ShoppingBag } from 'lucide-react';

const industries = [
  { name: 'Construction', icon: <Building2 size={32} /> },
  { name: 'IT & Software', icon: <Cpu size={32} /> },
  { name: 'Healthcare', icon: <Stethoscope size={32} /> },
  { name: 'Retail & Sales', icon: <ShoppingBag size={32} /> }
];

const IndustriesServe: React.FC = () => {
  return (
    <section className="py-14 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Industries We <span className="text-brand-blue">Serve</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Our versatile manpower solutions are tailored to meet the rigorous demands of diverse global sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-blue/10 transition-colors"
              >
                <div className="text-brand-orange">{industry.icon}</div>
                <span className="text-xs font-bold uppercase tracking-widest">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServe;
