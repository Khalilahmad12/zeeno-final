
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, MapPin, Star } from 'lucide-react';

const reasons = [
  {
    title: 'Affordable Prices',
    desc: 'We offer competitive market rates ensuring you get the best value for your money on every purchase.',
    icon: <BadgeDollarSign size={24} />
  },
  {
    title: 'Quality Products',
    desc: 'Strict quality control measures are in place to ensure every item on our shelves meets global standards.',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Convenient Locations',
    desc: 'Our stores are strategically located to be easily accessible, providing a hassle-free shopping experience.',
    icon: <MapPin size={24} />
  }
];

const WhyShopZeeno: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Why Shop with <span className="text-brand-orange">Zeeno</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We are committed to providing a superior shopping experience by combining variety, quality, and exceptional customer service. Your satisfaction and well-being are at the core of everything we do.
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
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-8 border-slate-50 text-brand-blue rounded-full flex items-center justify-center shadow-xl mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3  group-hover:text-brand-blue">
                  {reason.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {reason.desc}
                </p>
                <div className="mt-6 flex items-center gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopZeeno;
