import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPinned, Handshake, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Market Expertise',
    desc: 'Years of local market knowledge combined with data-driven insights for smarter property decisions.',
    icon: <MapPinned size={24} />
  },
  {
    title: 'Verified Listings',
    desc: 'Every property in our portfolio undergoes rigorous legal and physical verification for your peace of mind.',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Transparent Deals',
    desc: 'No hidden costs or complicated legal jargon. We believe in clear, honest communication throughout the process.',
    icon: <Handshake size={24} />
  }
];

const WhyChooseProperty: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Why Choose <span className="text-brand-orange">Zeeno</span>
          </h2>
          <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We provide a transparent and professional approach to property consultancy, leveraging deep market insights to help you make informed decisions in the ever-evolving real estate landscape.
          </p>
          <div className="w-12 h-1 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-8 border-slate-50 text-brand-blue rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue">
                  {reason.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {reason.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-orange font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={14} /> Trust Verified
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseProperty;