
import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MiniCTA: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-5xl mx-auto"
        >
          {/* Header Section - Centered at Top */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Let's Grow Your <span className="text-primary">Business Online</span>
            </h2>
            <p className="text-text-light text-xl max-w-2xl mx-auto">
              Ready to start your digital journey? Contact us today for a free strategy session.
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-accent mx-auto mt-6 rounded-full"
            />
          </div>

          {/* Action Section - Centered Below */}
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="tel:03009274179" 
                className="group flex items-center gap-4 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500 shadow-sm">
                  <Phone size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-light uppercase tracking-wider">Call Us</p>
                  <p className="text-xl font-bold text-primary-dark">03009274179</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:info@zeenogloblesolution.com" 
                className="group flex items-center gap-4 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500 shadow-sm">
                  <Mail size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-light uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-bold text-primary-dark">info@zeenogloblesolution.com</p>
                </div>
              </motion.a>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-bold text-xl transition-custom flex items-center gap-3 shadow-lg group"
            >
              <span>Get Started Now</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniCTA;
