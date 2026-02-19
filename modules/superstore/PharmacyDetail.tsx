
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Heart, Award } from 'lucide-react';

const PharmacyDetail: React.FC = () => {
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmSTJwEw8tuEVPhdOE0g0kzgAN_YNFgxojg&s" 
                alt="Expert Pharmacy" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-blue/5 mix-blend-multiply" />
            </div>
            {/* Geometric Design Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-r-4 border-t-4 border-brand-blue/20 rounded-tr-[3rem] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l-4 border-b-4 border-brand-orange/20 rounded-bl-[3rem] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-5"
          >
            <div>
              <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Medical Excellence</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                Your Health, Our <span className="text-brand-blue">Highest Priority</span>
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We provide more than just medicines. Our pharmacy is a hub for expert advice, authentic healthcare products, and compassionate support for your entire family's wellness journey.
            </p>
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-brand-blue" />, title: 'Certified Authenticity', desc: 'Direct sourcing from authorized distributors ensures 100% genuine products.' },
                { icon: <Activity className="text-brand-orange" />, title: 'Cold Chain Management', desc: 'Advanced storage systems to maintain the potency of sensitive medications.' },
                { icon: <Heart className="text-brand-blue" />, title: 'Patient Counseling', desc: 'Expert pharmacists available to discuss dosage, side effects, and health plans.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-xs tracking-widest mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
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

export default PharmacyDetail;
