import React, { useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServiceHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ badge, title, description }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Background Parallax logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#05080F] text-white"
    >
      {/* 1. Cinematic Background (Matching Home Hero) */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech Circuitry" 
          className="w-full h-[120%] object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080F] via-transparent to-[#05080F]" />
      </motion.div>

      {/* 2. Digital Overlay & Scanner Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
        />
      </div>

      {/* 3. Subtle Blur Accents */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[2]"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-black text-[10px] tracking-[0.35em] uppercase shadow-sm border border-brand-blue/20">
            {badge}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-8 max-w-5xl mx-auto tracking-tighter"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative w-full sm:w-auto bg-brand-orange text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3">
            <Phone size={18} />
            <span>Connect With Us</span>
          </button>
          
          <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border-2 border-white/20 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 group active:scale-95">
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-brand-orange\\/20 { box-shadow: 0 20px 40px -10px rgba(254, 136, 14, 0.4); }
      `}} />
    </section>
  );
};

export default ServiceHero;