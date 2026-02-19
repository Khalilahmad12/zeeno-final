
import React from 'react';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light/40 border-b border-brand-blue/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-6"
        >
          Solutions & Expertise
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-brand-dark mb-8 leading-[1.1]"
        >
          Tailored <span className="text-brand-orange">Digital</span> <br/>Engineering Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-medium"
        >
          From high-performance web applications to data-driven marketing campaigns, we build tools that scale your business.
        </motion.p>
      </div>
    </section>
  );
};

export default Introduction;
