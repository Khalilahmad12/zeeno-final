
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CEOMessage: React.FC = () => {
  return (
    <section className="py-24 bg-bg-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* CEO Image Column - Set to col-6 (lg:w-1/2) and centered (mx-auto) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full max-w-lg mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/CEO.jpeg" 
                  alt="CEO S Ali Anjum" 
                  className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Social Links Overlay - Adjusted to show icons lower (items-end) */}
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-16">
                   <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-xl hover:scale-110">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:ceo@zeenogloblesolution.com" className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl hover:scale-110">
                        <Mail size={20} />
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CEO Text Column - Set to col-6 (lg:w-1/2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">A Message From Our CEO</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark ">
                Leading the Way in <br />
                <span className="text-primary">Digital Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 text-text-light leading-relaxed">
              <p>
                As the digital landscape evolves, our commitment remains the same: to empower businesses with innovative tools that drive real growth. We believe in transparency, technical precision, and a relentless pursuit of results for every client we serve in Pakistan and across the globe.
              </p>
              <p>
                Our vision extends beyond services—we are dedicated to nurturing the next generation of digital talent through our Skills Academy, ensuring a brighter future for the tech industry.
              </p>
            </div>

            <div className="pt-6 border-t border-border-color">
              <h4 className="text-2xl font-bold text-dark">S Ali Anjum</h4>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Founder & CEO, Zeeno Globle Solution</p>
              <div className="mt-4 w-24 h-1 bg-accent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
