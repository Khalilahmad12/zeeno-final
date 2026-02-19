import React, { useRef } from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  onNavigate: (page: string) => void;
}

const AboutHero: React.FC<AboutHeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleNavigation = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Background Parallax (Matching Home Hero)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#05080F] py-20 overflow-hidden text-white"
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

      {/* 2. Digital Overlay & Scanner Effect (Matching Home Hero) */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
        />
      </div>

      {/* 3. Subtle Blur Accents (Original About elements, adjusted for dark theme) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[2]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-[2]"
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-[0.35em] rounded-full mb-12 shadow-sm border border-brand-blue/20"
        >
          About Our Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl mb-10 tracking-tighter"
        >
          Innovating the <span className="text-brand-blue">Digital Landscape</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-14 leading-relaxed font-medium"
        >
          Zeeno Globle Solution is a premier technology house dedicated to bridging the gap between business challenges and elegant digital performance.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button 
            onClick={() => handleNavigation('contact')}
            className="group relative bg-brand-blue text-white flex items-center gap-3 px-10 py-5 text-lg rounded-xl font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20"
          >
            <PhoneCall size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Connect With Us</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <style dangerouslySetInnerHTML={{ __html: `.group:hover span, .group:hover svg { color: #05080F; transition: color 0.5s; }` }} />
          </button>
          
          <button 
            onClick={() => handleNavigation('portfolio')}
            className="flex items-center gap-3 group px-10 py-5 text-lg rounded-xl font-black uppercase tracking-widest bg-white/5 border border-white/30 text-white hover:bg-white/10 transition-all active:scale-95 shadow-lg"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-orange" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;