import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants for staggered entrance
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
      {/* 1. Cinematic Background (Matching established theme) */}
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
              Knowledge Hub
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            Insights into the <span className="text-brand-orange block">Digital Vanguard</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Stay ahead of the curve with our deep dives into software engineering, digital strategy, and the technologies shaping tomorrow's business landscape.
          </motion.p>

          {/* Action Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <button className="group relative bg-brand-orange text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/20 flex items-center gap-3">
              <BookOpen size={18} />
              <span className="relative z-10">Start Reading</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <style dangerouslySetInnerHTML={{ __html: `.group:hover span, .group:hover svg { color: #05080F; transition: color 0.5s; }` }} />
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

export default BlogHero;