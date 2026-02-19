
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OurProcess: React.FC = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your unique business goals and vision.' },
    { num: '02', title: 'Strategy & Plan', desc: 'Crafting a data-driven roadmap for digital success.' },
    { num: '03', title: 'Development', desc: 'Building high-performance solutions with precision.' },
    { num: '04', title: 'Launch & Growth', desc: 'Scaling your brand and ensuring long-term impact.' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Step-by-Step Excellence</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mt-4">
            Our Proven <span className="text-primary">Process</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Desktop Dotted Lines Connection */}
          <motion.div 
            className="hidden lg:block absolute top-12 left-0 w-full px-24"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="w-full border-t-4 border-dotted border-primary/20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="relative mb-8">
                  {/* Circular Numbered Box */}
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-black shadow-xl border-8 border-white group-hover:bg-accent group-hover:scale-110 transition-all duration-500 relative z-10">
                    {step.num}
                  </div>
                  
                  {/* Arrow for mobile/tablet or visual connector hint */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-primary/30 rotate-90">
                      <ArrowRight size={32} />
                    </div>
                  )}
                </div>

                <div className="space-y-3 px-4">
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
