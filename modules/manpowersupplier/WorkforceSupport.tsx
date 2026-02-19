
import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ScrollText, Handshake } from 'lucide-react';

const WorkforceSupport: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Workforce Management" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply" />
            </div>
            {/* Design Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-brand-orange/20 rounded-tl-[3rem] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-brand-blue/20 rounded-br-[3rem] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-4"
          >
            <div>
              <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">End-to-End Management</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                Workforce <span className="text-brand-blue">Operational</span> <br className="hidden lg:block"/> Support
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We don't just supply manpower; we manage the entire ecosystem of your workforce. Our support extends to legal compliance, payroll, and 24/7 on-ground assistance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <ScrollText className="text-brand-orange" />, title: 'Compliance', desc: 'Strict adherence to local and international labor laws.' },
                { icon: <Headphones className="text-brand-blue" />, title: '24/7 Support', desc: 'Direct helpline for immediate on-site issue resolution.' },
                { icon: <Handshake className="text-brand-orange" />, title: 'Partnership', desc: 'Long-term contracts with flexible scaling options.' },
                { icon: <ScrollText className="text-brand-blue" />, title: 'Reporting', desc: 'Regular performance and attendance analytics.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-brand-dark text-xs tracking-widest mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSupport;
