
import React from 'react';
import { motion } from 'framer-motion';

const ECommerce: React.FC = () => {
  const solutions = ['Shopify Stores', 'WooCommerce', 'Payment Gateways', 'Store Optimization'];
  
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-orange/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </div>
            <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tight">E-Commerce <span className="text-brand-orange">Solutions</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We build conversion-focused online stores that provide seamless shopping experiences. From complex product catalogs to secure payment integrations, we handle it all.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {solutions.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="font-bold text-slate-700 text-sm uppercase tracking-wider">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-[2.5rem] p-4 shadow-xl">
              <img src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200" className="rounded-[2rem]" alt="E-Commerce Solutions" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
