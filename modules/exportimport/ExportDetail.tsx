
import React from 'react';
import { motion } from 'framer-motion';
import { Ship, ShieldCheck, Globe, Anchor } from 'lucide-react';

const ExportDetail: React.FC = () => {
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
            <div className="relative rounded-[1rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200" 
                alt="Global Export Logistics" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">Global Reach</p>
                <p className="text-sm font-bold text-brand-dark">Worldwide Export Network</p>
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
              <span className="text-brand-blue font-bold text-[10px] tracking-[0.4em] mb-3 block">Strategic Exportation</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                Bridging the Gap to <span className="text-accent">Global Markets</span>
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              We specialize in the high-efficiency movement of premium local goods to international destinations. Our export operations are built on a foundation of reliability, speed, and strict compliance with international trade standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Ship size={18} />, title: 'Vessel Booking', desc: 'Prioritized space allocation with major shipping lines.' },
                { icon: <ShieldCheck size={18} />, title: 'Quality Audits', desc: 'Rigorous pre-shipment inspections for every batch.' },
                { icon: <Anchor size={18} />, title: 'Port Coordination', desc: 'Seamless handling at major global transit hubs.' },
                { icon: <Globe size={18} />, title: 'Market Entry', desc: 'Assistance with international tariff and trade barriers.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 shadow-lg p-2 rounder-2 group">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
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

export default ExportDetail;
