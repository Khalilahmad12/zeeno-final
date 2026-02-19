import React, { useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const AcademyHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any } 
    }
  };

  // Background Parallax
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
      {/* 1. Cinematic Background */}
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

      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Top Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center px-6 py-2 bg-brand-blue/10 rounded-full shadow-sm border border-brand-blue/20 mb-10 transform transition-transform hover:scale-110"
          >
            <span className="text-brand-blue font-black text-[10px] sm:text-xs uppercase tracking-[0.35em]">
              Zeeno Skills Academy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            Master the <span className="text-brand-orange">Future</span> <br className="hidden md:block" />
            of Digital Engineering
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Bridge the gap between academic theory and industry reality. Join an elite ecosystem where senior developers mentor you through live enterprise software cycles.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button className="group relative w-full sm:w-auto bg-brand-orange text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3">
              <Phone size={18} />
              Enroll Today
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border-2 border-white/20 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 group active:scale-95">
              Browse Courses
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle Blur Accents */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[2]"
      />
    </section>
  );
};

export default AcademyHero;