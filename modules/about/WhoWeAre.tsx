
import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                Pioneering Digital <br />
                <span className="text-accent">Innovation</span> Globally
              </h2>
            </div>
            
            <p className="text-text-body text-lg leading-relaxed font-medium">
              Zeeno Globle Solution Pvt Limited is a fast-growing IT, Digital Marketing, and Skill Development company based in Pakistan. We provide innovative digital solutions that help businesses grow, scale, and establish a powerful online presence.
            </p>
            
            <p className="text-text-light leading-relaxed">
              Founded with a vision to empower businesses globally, we have grown into a multi-disciplinary agency focusing on web engineering, enterprise SEO, and career-shaping vocational training. Our journey is defined by the success of the brands we partner with and the students we empower.
            </p>
            
            <div className="pt-4 flex items-center gap-4">
               <div className="w-16 h-1 bg-primary rounded-full"></div>
               <span className="text-sm font-bold text-dark uppercase tracking-widest">Est. 2014</span>
            </div>
          </motion.div>

          {/* Image Content with Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://bittechnologies.co/wp-content/uploads/2023/04/2023-02-12.jpg" 
                alt="Our Office Space" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 rounded-2xl shadow-xl border border-border-color transform hover:-translate-y-2 transition-all duration-500 max-w-[240px]"
            >
              <div className="text-4xl font-extrabold text-primary mb-1">10+</div>
              <div className="text-xs font-bold text-text-light uppercase tracking-widest leading-snug">
                Years of Excellence in Digital Solutions
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
