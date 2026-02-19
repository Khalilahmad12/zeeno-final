import React from 'react';
import { motion } from 'framer-motion';
import { Building, Search, FileCheck, TrendingUp } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Real Estate Consultation" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Investment Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">Growth Forecast</p>
                <p className="text-sm font-bold text-brand-dark">High Yield Opportunities</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-5"
          >
            <div>
              <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block">Strategic Real Estate</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                Maximizing Value in <span className="text-primary">Property Investment</span>
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our consultancy goes beyond standard listings. We provide deep market analysis and legal oversight to ensure your real estate decisions are backed by data and protected by law.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Search size={18} />, title: 'Market Analysis', desc: 'Detailed comparative market reports for every property.' },
                { icon: <FileCheck size={18} />, title: 'Legal Due Diligence', desc: 'Comprehensive verification of titles and documentation.' },
                { icon: <Building size={18} />, title: 'Project Sourcing', desc: 'Direct access to off-plan and exclusive developments.' },
                { icon: <TrendingUp size={18} />, title: 'ROI Optimization', desc: 'Strategies to maximize rental yields and capital gains.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-[10px] tracking-widest mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;