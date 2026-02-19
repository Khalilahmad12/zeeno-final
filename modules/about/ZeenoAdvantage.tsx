
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ZeenoAdvantage: React.FC = () => {
  const points = [
    { title: 'Experienced Team', desc: 'Our developers and marketers are industry veterans with years of proven success.' },
    { title: 'Affordable Packages', desc: 'Premium quality services tailored to fit business budgets of all sizes.' },
    { title: 'Fast Delivery', desc: 'We value your time and maintain strict timelines for all project milestones.' },
    { title: 'Client Satisfaction', desc: 'Our 98% client retention rate speaks for our commitment to excellence.' }
  ];

  return (
    <section className="py-20 bg-bg-soft overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content (Left Side) */}
          <motion.div 
            className="lg:w-1/2 space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs">Why Partner With Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                The Zeeno Globle <br />
                <span className="text-accent">Advantage</span>
              </h2>
            </div>
            
            <p className="text-text-body text-lg leading-relaxed">
              We combine strategic thinking with technical execution to deliver digital solutions that aren't just functional, but transformative for your bottom line.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-4 group transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                >
                  <div className="mt-1 w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-dark group-hover:text-accent transition-all duration-300 group-hover:scale-110 origin-left">
                      {point.title}
                    </h4>
                    <p className="text-sm text-text-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content (Right Side) */}
          <motion.div 
            className="lg:w-1/2 relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://media.istockphoto.com/id/1389308463/photo/business-people-work-and-discuss-seriously-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=z9gQfBlusXxyon0e0wBSgHn1d-FAWj45BgQRZztjuW0=" 
                alt="Zeeno Globle Team Advantage" 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 aspect-[4/3]"
              />
            </div>
            
            {/* Voted Badge */}
            <motion.div 
              className="absolute -top-6 -right-6 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-xl border-4 border-white transform rotate-12"
              initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
            >
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Voted #1</div>
              <div className="text-xs md:text-sm font-extrabold leading-tight">DIGITAL<br/>AGENCY</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ZeenoAdvantage;
