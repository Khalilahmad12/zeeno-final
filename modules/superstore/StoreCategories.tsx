
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Home, Sparkles, Pill } from 'lucide-react';

const categories = [
  {
    title: 'Groceries',
    desc: 'Fresh produce, dairy products, and daily pantry staples sourced from the best suppliers.',
    icon: <ShoppingBasket className="w-8 h-8" />
  },
  {
    title: 'Household Items',
    desc: 'Everything you need for your home, from cleaning supplies to kitchenware and organization tools.',
    icon: <Home className="w-8 h-8" />
  },
  {
    title: 'Personal Care',
    desc: 'Premium skincare, haircare, and hygiene products to keep you feeling your best every day.',
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: 'Medicines',
    desc: 'A comprehensive selection of pharmaceutical products managed by certified professionals.',
    icon: <Pill className="w-8 h-8" />
  }
];

const StoreCategories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Diverse Selection
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Our Store <span className="text-brand-orange">Categories</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Discover a wide range of premium products across our specialized departments. From daily essentials to healthcare needs, we provide quality and variety for your entire household.
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                {cat.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreCategories;
