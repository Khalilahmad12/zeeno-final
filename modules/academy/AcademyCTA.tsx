import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare } from 'lucide-react';

const AcademyCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080F] relative overflow-hidden text-white">
      {/* Immersive background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Ready to Transform?</span>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight ">
          Start Your Tech <br />
          <span className="text-brand-orange">Journey Today</span>
        </h2>
        <p className=" text-gray-300 mb-5 max-w-2xl mx-auto font-medium leading-relaxed">
          Don't wait for the right moment. Create it. Join our next batch and transform your career with the skills of the future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-brand-orange text-white px-14 py-5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl shadow-brand-orange/30 flex items-center justify-center gap-3"
          >
            <Rocket size={18} /> Join Next Batch
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white/5 border-2 border-white/20 text-white px-14 py-5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3"
          >
            <MessageSquare size={18} /> Speak to Advisor
          </motion.button>
        </div>
        
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          Limited seats available for early bird discounts
        </p>
      </motion.div>
    </section>
  );
};

export default AcademyCTA;