
import React from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, Truck, HeartHandshake, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    title: 'Screening',
    desc: 'Rigorous vetting and background checks to ensure only the most qualified candidates reach your doorstep.',
    icon: <Search size={24} />
  },
  {
    title: 'Training',
    desc: 'Mandatory skills enhancement and safety orientation programs tailored to your specific industry requirements.',
    icon: <GraduationCap size={24} />
  },
  {
    title: 'Deployment',
    desc: 'Efficient on-site placement with all necessary documentation and compliance requirements handled by us.',
    icon: <Truck size={24} />
  },
  {
    title: 'Follow-up Support',
    desc: 'Continuous performance monitoring and dedicated HR support to maintain high productivity levels.',
    icon: <HeartHandshake size={24} />
  }
];

const ManpowerProcess: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Our <span className="text-brand-orange">Process</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Our comprehensive 4-step methodology is designed to bridge the gap between human potential and industrial demand with absolute precision, ensuring a seamless integration of talent into your workforce.
          </p>
          <div className="w-12 h-1 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dotted border-slate-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-8 border-slate-50 text-brand-blue rounded-full flex items-center justify-center text-xl font-bold shadow-xl mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {step.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand-orange font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={14} /> Step {idx + 1} Complete
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManpowerProcess;
