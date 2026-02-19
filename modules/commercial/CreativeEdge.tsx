
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users2, Timer, Star } from 'lucide-react';

const edges = [
  {
    title: 'Modern Equipment',
    desc: 'We utilize latest 4K/8K cinema cameras, stabilizers, and high-end lighting for cinema quality.',
    icon: <Zap size={24} />
  },
  {
    title: 'Professional Team',
    desc: 'Award-winning directors, cinematographers, and editors dedicated to your visual success.',
    icon: <Users2 size={24} />
  },
  {
    title: 'Fast Delivery',
    desc: 'Streamlined post-production workflow ensuring your content is ready for launch on schedule.',
    icon: <Timer size={24} />
  }
];

const CreativeEdge: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark ">
            Our Creative <span className="text-brand-orange">Edge</span>
          </h2>
          <div className="w-12 h-1 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {edges.map((edge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-8 border-slate-50 text-brand-blue rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {edge.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue">
                  {edge.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {edge.desc}
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

export default CreativeEdge;
