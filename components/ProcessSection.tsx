import React from 'react';
import { motion, Variants } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Understanding your unique business goals and vision.'
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Crafting a data-driven roadmap for digital success.'
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Building high-performance solutions with precision.'
    },
    {
      num: '04',
      title: 'Optimization',
      desc: 'Fine-tuning every element for peak performance.'
    },
    {
      num: '05',
      title: 'Growth',
      desc: 'Scaling your brand and ensuring long-term impact.'
    }
  ];

  // Fix: Explicitly type containerVariants as Variants to resolve assignment compatibility issues
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Fix: Explicitly type stepVariants as Variants and cast ease to resolve string inference error
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
            Step-by-Step Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Our 5 Step <span className="text-primary">Process</span>
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Dotted Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-[2px] border-t-2 border-dotted border-primary/30 -z-0"></div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.num} 
                variants={stepVariants}
                className="group p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-lg transition-transform duration-500 group-hover:scale-110">
                    {step.num}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                </div>
                
                <h4 className="text-lg font-bold text-primary-dark mb-2 transition-colors group-hover:text-primary">
                  {step.title}
                </h4>
                <p className="text-text-light text-xs leading-relaxed max-w-[160px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;