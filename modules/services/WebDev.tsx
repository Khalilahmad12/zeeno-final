
import React from 'react';
import { motion } from 'framer-motion';

const WebDev: React.FC = () => {
  const features = ['WordPress Development', 'Custom PHP Solutions', 'Laravel Framework', 'Corporate Sites'];
  
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-blue/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            </div>
            <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tight">Website <span className="text-brand-blue">Development</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We create robust, SEO-friendly, and mobile-responsive websites using modern frameworks. Our code is clean, our designs are pixel-perfect, and our performance is top-tier.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="font-bold text-slate-700 text-sm uppercase tracking-wider">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-100 rounded-[2.5rem] p-4 shadow-inner">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" className="rounded-[2rem] shadow-2xl" alt="Web Development" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
