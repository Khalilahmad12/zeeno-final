
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Layers, CheckCircle2 } from 'lucide-react';

const importItems = [
  {
    title: 'Industrial Goods',
    desc: 'Heavy machinery, spare parts, and advanced technical equipment for manufacturing sectors.',
    icon: <Factory size={32} />
  },
  {
    title: 'Consumer Products',
    desc: 'High-demand electronics, lifestyle goods, and daily essentials from trusted global brands.',
    icon: <Package size={32} />
  },
  {
    title: 'Raw Materials',
    desc: 'Chemicals, minerals, and basic materials required for various processing industries.',
    icon: <Layers size={32} />
  }
];

const ImportServices: React.FC = () => {
  return (
    <section className="py-10 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Import <span className="text-brand-blue">Services</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We streamline the procurement process, bringing world-class industrial and consumer goods to the local market with efficiency and reliability.
            </p>
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4">
               {['Customs Clearance', 'Warehousing', 'Last-mile delivery'].map((tag) => (
                 <div key={tag} className="flex items-center gap-2 text-brand-orange font-bold text-[10px] tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                   <CheckCircle2 size={14} /> {tag}
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 w-full lg:w-1/3">
            {importItems.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10, backgroundColor: 'rgba(2, 154, 227, 0.1)' }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 transition-all cursor-default"
              >
                <div className="text-brand-orange shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 ">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportServices;
