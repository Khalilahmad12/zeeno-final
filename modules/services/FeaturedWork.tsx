
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-blue font-black uppercase tracking-[0.3em] text-xs mb-6">Success Stories</h2>
            <h3 className="text-4xl font-black mb-8 leading-tight">Empowering Global Brands <br/><span className="text-brand-orange">One Line of Code</span> at a Time</h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We helped a Silicon Valley startup scale their user base from 10k to 1M+ using our custom Laravel architecture and cloud optimization strategies.
            </p>
            <button className="bg-white text-brand-dark px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all">Explore Case Study</button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white/5 rounded-[3rem] p-4 border border-white/10">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1200" className="rounded-[2.5rem]" alt="Case Study" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
