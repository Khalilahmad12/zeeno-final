import React from 'react';
import { MousePointer2, Briefcase, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyFeatures: React.FC = () => {
  const features = [
    { icon: <MousePointer2 size={40} />, title: 'Hands-on Training', desc: 'Practical lab sessions for every module.' },
    { icon: <Briefcase size={40} />, title: 'Real-world Projects', desc: 'Work on actual live projects during training.' },
    { icon: <ShieldCheck size={40} />, title: 'Global Certification', desc: 'Recognized certificate upon completion.' },
    { icon: <Cpu size={40} />, title: 'Job-ready Skills', desc: 'Focused on making you a professional candidate.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-blue/20 transition-all duration-500 text-center group hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="w-20 h-20 bg-white text-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg] border border-slate-100">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-blue transition-colors duration-500">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-500">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyFeatures;