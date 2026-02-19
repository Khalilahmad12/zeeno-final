
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Video, Scissors, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Concept',
    desc: 'Brainstorming unique ideas that align with your brand identity and campaign goals.',
    icon: <Lightbulb size={24} />
  },
  {
    title: 'Script',
    desc: 'Crafting compelling narratives and precise storyboards for a structured production.',
    icon: <FileText size={24} />
  },
  {
    title: 'Shooting',
    desc: 'On-location or studio filming using professional-grade lighting and cinema cameras.',
    icon: <Video size={24} />
  },
  {
    title: 'Editing',
    desc: 'Final post-production including color grading, sound design, and motion graphics.',
    icon: <Scissors size={24} />
  }
];

const ProductionProcess: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Production <span className="text-brand-blue">Process</span>
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dotted border-white/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white/5 border-8 border-white/5 text-brand-orange rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-blue">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium px-4">
                  {step.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-blue font-bold text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={14} /> Phase {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
