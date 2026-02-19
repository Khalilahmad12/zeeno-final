
import React, { useRef, useEffect } from 'react';
import { motion, Variants, useTransform, useSpring, useMotionValue, useInView, useScroll } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: string) => void;
}

// Reusable Animated Number component
const AnimatedCounter: React.FC<{ value: number; duration?: number; decimals?: number; suffix?: string }> = ({ 
  value, 
  decimals = 0, 
  suffix = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(rounded, (latest) => 
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const cardTranslateX = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const cardTranslateY = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    },
  };

  const headingText = "Building Intelligent Digital Ecosystems";

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-24 lg:pt-52 lg:pb-44 overflow-hidden bg-[#05080F] text-white"
    >
      {/* 1. Cinematic Background (Matching Academy Section) */}
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

      {/* 2. Digital Overlay & Scanner Effect (Matching Academy Section) */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div
              variants={wordVariants}
              className="inline-flex items-center gap-3 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-brand-blue font-black uppercase tracking-[0.35em] text-[9px]">
                Global Software House
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              {headingText.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.2em]">
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${word === "Intelligent" ? "text-brand-orange" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={wordVariants}
              className="text-gray-300 md:text-lg text-slate-400 mb-5 leading-relaxed font-medium max-w-xl"
            >
              Zeeno Globle delivers high-performance software engineering and data-driven marketing strategies for organizations aiming to dominate the global digital landscape.
            </motion.p>
            
            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-brand-blue/20"
              >
                <span className="relative z-10">Launch Project</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                <style dangerouslySetInnerHTML={{ __html: `.group:hover span { color: #05080F; transition: color 0.5s; }` }} />
              </button>
              
              <button 
                onClick={() => onNavigate('portfolio')}
                className="flex items-center justify-center gap-3 px-10 py-4 bg-white/5 border border-white/30 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all group active:scale-95"
              >
                Our Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            <motion.div 
              variants={wordVariants}
              className="mt-3 pt-10 border-t border-white/5 flex items-center gap-14"
            >
              <div>
                <div className="text-3xl font-black text-white tracking-tighter">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">Global Deployments</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white tracking-tighter">
                  <AnimatedCounter value={98.4} decimals={1} suffix="%" />
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">Client Retention</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative z-20 transition-transform duration-200 ease-out"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-[12px] border-white/5 shadow-2xl bg-white/5">
                <motion.img 
                  style={{ x: imageTranslateX }}
                  src="/CEO.jpeg" 
                  alt="Elite Engineering" 
                  className="w-full h-[600px] object-cover opacity-90  hover:opacity-100 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent opacity-60" />
              </div>

              <motion.div
                style={{ x: cardTranslateX, y: cardTranslateY }}
                className="absolute -top-12 -right-8 bg-brand-dark/80 backdrop-blur-2xl border border-white/10 p-7 rounded-2xl shadow-xl z-30 min-w-[200px]"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white tracking-tight">CEO</div>
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">S Ali Anjum</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ x: useTransform(smoothX, [-0.5, 0.5], [-20, 20]), y: useTransform(smoothY, [-0.5, 0.5], [-40, 40]) }}
                className="absolute -bottom-10 -left-12 bg-brand-blue px-8 py-4 rounded-2xl shadow-[0_30px_60px_-15px_rgba(2,154,227,0.4)] z-30 text-white flex flex-col items-center justify-center text-center"
              >
                <div className="text-5xl font-black mb-1">
                  <AnimatedCounter value={10} suffix="+" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] opacity-90 leading-tight">
                  Years of Digital <br /> Mastery
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ x: useTransform(smoothX, [-0.5, 0.5], [50, -50]), y: useTransform(smoothY, [-0.5, 0.5], [50, -50]) }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-10 opacity-[0.05]"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full text-brand-blue fill-current">
                <path d="M44.5,-76.3C57.4,-70.6,67.5,-58.5,74.1,-45.1C80.7,-31.7,83.9,-16.9,81.3,-3.1C78.6,10.7,70.1,23.5,60.8,34.8C51.5,46.1,41.4,56,29.8,63.1C18.2,70.1,5,74.3,-8.6,73.4C-22.1,72.6,-36,66.6,-48,58.1C-60,49.6,-70.1,38.5,-75.7,25.6C-81.2,12.7,-82.2,-2.1,-77.9,-15.5C-73.6,-28.9,-64.1,-40.8,-52.8,-47.5C-41.5,-54.2,-28.4,-55.7,-16.7,-61.1C-5,-66.6,5.3,-75.9,18.8,-79.8C32.3,-83.7,48.9,-82.1,44.5,-76.3Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
      `}} />
    </div>
  );
};

export default Hero;
