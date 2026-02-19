
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Clock, Zap } from 'lucide-react';

const SuperstoreDetail: React.FC = () => {
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
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Superstore" 
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply" />
            </div>
            
            {/* Floating Quality Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Choice</p>
                <p className="text-sm font-bold text-brand-dark">A+ Grade Quality Only</p>
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
              <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Premium Retail</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
                A New Standard in <span className="text-brand-orange">Shopping Experience</span>
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We redefine your daily errands by offering a meticulously managed inventory of local and international goods. Our superstore is designed for efficiency, ensuring you find exactly what you need in record time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: <Clock size={18} />, title: 'Express Checkout', desc: 'Minimized wait times with digital billing.' },
                { icon: <ShoppingCart size={18} />, title: 'Freshness Guarantee', desc: 'Daily restock of produce and dairy.' },
                { icon: <Zap size={18} />, title: 'Smart Organization', desc: 'Intuitive layouts for a faster shop.' },
                { icon: <Star size={18} />, title: 'Exclusive Brands', desc: 'Hard-to-find global imports available.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
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

export default SuperstoreDetail;
