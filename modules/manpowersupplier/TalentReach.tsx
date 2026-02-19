
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';

const TalentReach: React.FC = () => {
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
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
                alt="Talent Acquisition" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">Verification</p>
                <p className="text-sm font-bold text-brand-dark">ISO Certified Sourcing</p>
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
              <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Precision Sourcing</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                Global Talent <span className="text-brand-orange">Network</span> & Sourcing
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Our recruitment process is built on a foundation of rigorous assessment. We don't just find workers; we identify specialists who bring value and efficiency to your projects.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Multi-Country Sourcing', desc: 'Active recruitment channels across Asia, Europe, and the Middle East.' },
                { title: 'Skills Validation', desc: 'Every candidate undergoes a practical skill test before deployment.' },
                { title: 'Background Verification', desc: 'Comprehensive criminal and professional history checks for all staff.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm ">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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

export default TalentReach;
