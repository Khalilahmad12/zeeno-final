import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, FileCheck, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    title: 'Global Network',
    desc: 'Strong partnerships with international traders and shipping lines across major global ports.',
    icon: <Globe size={24} />
  },
  {
    title: 'Fast Logistics',
    desc: 'Optimized supply chain management ensuring timely deliveries and minimal transit delays.',
    icon: <Truck size={24} />
  },
  {
    title: 'Compliance Support',
    desc: 'Expert handling of international trade laws, customs documentation, and regulatory requirements.',
    icon: <FileCheck size={24} />
  }
];

const TradeAdvantages: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Our Trade <span className="text-brand-orange">Advantages</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Partnering with Zeeno Globle Solution gives your business a competitive edge in the international market. We combine logistical expertise with deep regulatory knowledge to ensure your trade operations are smooth and profitable.
          </p>
          <div className="w-12 h-1 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-8 border-slate-50 text-brand-blue rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue">
                  {adv.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {adv.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-brand-orange font-bold text-[10px] uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck size={14} /> Verified Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAdvantages;