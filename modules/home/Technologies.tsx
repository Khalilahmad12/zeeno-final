
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TechStack {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  accent: string;
}

const TechCard = ({ stack, idx }: { stack: TechStack; idx: number }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />

      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-12 h-12 rounded-xl ${stack.color} flex items-center justify-center text-white shadow-sm transition-transform duration-500 group-hover:scale-110`}>
          {stack.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-brand-dark tracking-tight">
            {stack.title}
          </h3>
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest opacity-60">System layer</p>
        </div>
      </div>

      <div className="space-y-2 relative z-10">
        {stack.items.map((item) => (
          <motion.div
            key={item}
            variants={itemVariants}
            className="flex items-center gap-3 py-1.5 px-2 rounded-lg transition-colors group/item"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${stack.accent} group-hover/item:scale-125 transition-transform`} />
            <span className="text-sm font-medium text-slate-500 group-hover/item:text-brand-dark transition-colors">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
          Module active
        </span>
        <div className="flex gap-1">
          {[1, 2].map(i => (
            <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-brand-orange' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const stacks: TechStack[] = [
    { 
      title: 'Interface Engine', 
      color: 'bg-brand-blue',
      accent: 'bg-brand-blue',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      items: ['React / Next.js', 'Tailwind CSS', 'Framer Motion'] 
    },
    { 
      title: 'Mobile Axis', 
      color: 'bg-brand-orange',
      accent: 'bg-brand-orange',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      items: ['Flutter SDK', 'React Native', 'Swift / Kotlin'] 
    },
    { 
      title: 'Logic Layers', 
      color: 'bg-brand-dark',
      accent: 'bg-brand-blue',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>,
      items: ['Node.js Architecture', 'Go-lang', 'Laravel Core'] 
    },
    { 
      title: 'Data Vaults', 
      color: 'bg-brand-blue',
      accent: 'bg-brand-blue',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
      items: ['PostgreSQL', 'MongoDB Atlas', 'Redis Caching'] 
    },
    { 
      title: 'Cloud Infrastructure', 
      color: 'bg-brand-orange',
      accent: 'bg-brand-orange',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
      items: ['AWS / Azure', 'Docker / K8s', 'CI/CD Pipelines'] 
    },
    { 
      title: 'Creative Design', 
      color: 'bg-brand-dark',
      accent: 'bg-brand-orange',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1" /></svg>,
      items: ['Figma Pro', 'UX Flow Analysis', 'Prototypes'] 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pb-10 relative">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#029ae3 1px, transparent 1px), linear-gradient(90deg, #029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-4"
          >
            <span className="text-[10px] font-bold text-brand-blue mx-auto tracking-[0.4em]">Technology Index</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl text-center font-bold text-brand-dark tracking-tighter leading-tight mb-4">
            Curating Impactful <span className="text-brand-orange">Tech</span> Ecosystems
          </h2>
          <p className="text-slate-500 font-medium text-sm md:text-base mx-auto leading-relaxed text-center max-w-2xl">
            We leverage a curated selection of industry-leading frameworks and tools to build scalable, secure, and high-performance digital solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {stacks.map((stack, idx) => (
          <TechCard key={idx} stack={stack} idx={idx} />
        ))}
      </div>

      {/* Industrial detail footer */}
      <div className="mt-12 pt-6 border-t border-slate-50 flex items-center justify-between opacity-50 relative z-10">
        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">Zeeno Globle / Engineering Standard 2.4.0</span>
        <div className="flex gap-2">
           <div className="w-1.5 h-1.5 bg-slate-100 rounded-full" />
           <div className="w-1.5 h-1.5 bg-brand-blue/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
