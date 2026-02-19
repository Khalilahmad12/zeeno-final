
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Building2, LandPlot, Gem } from 'lucide-react';

const propertyTypes = [
  { name: 'Residential', icon: <Building size={32} /> },
  { name: 'Commercial', icon: <Building2 size={32} /> },
  { name: 'Plots', icon: <LandPlot size={32} /> },
  { name: 'Apartments', icon: <Gem size={32} /> }
];

const PropertyTypes: React.FC = () => {
  return (
    <section className="py-12 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Property <span className="text-brand-blue">Types</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              We deal in a vast array of real estate opportunities, ensuring every client finds the perfect match for their needs and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {propertyTypes.map((type, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-blue/10 transition-colors group cursor-default"
              >
                <div className="text-brand-orange group-hover:rotate-12 transition-transform duration-500">{type.icon}</div>
                <span className="text-xs font-bold tracking-widest">{type.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
