
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 90,
  });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tighter text-brand-dark group-hover:text-brand-blue transition-colors duration-500 block leading-none">
      <motion.span>{displayValue}</motion.span>
      <span className="text-brand-orange">{suffix}</span>
    </span>
  );
};

const StatCard: React.FC<StatItemProps> = ({ value, label, suffix = "+", icon, color, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    x.set(mouseXRel / width - 0.5);
    y.set(mouseYRel / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-10 flex flex-col h-full shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 perspective-1000"
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            (input) => {
              const [mx, my] = input as number[];
              const px = (mx + 0.5) * 100;
              const py = (my + 0.5) * 100;
              return `radial-gradient(350px circle at ${px}% ${py}%, rgba(2, 154, 227, 0.04), transparent 80%)`;
            }
          ),
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        {/* Advanced Icon Container */}
        <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white mb-8 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          {icon}
        </div>
        
        <div className="mb-3">
          <AnimatedNumber value={value} suffix={suffix} />
        </div>
        
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] leading-tight">
          {label}
        </div>
      </div>

      {/* Background Graphic Detail */}
      <div className="absolute bottom-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform rotate-12 scale-150">
        {icon}
      </div>
      
      {/* Accent Corner Line */}
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-brand-orange/20 group-hover:border-brand-orange/100 transition-all duration-500 rounded-tr-lg" />
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { 
      value: 500, 
      label: "Global Deployments", 
      color: "bg-brand-blue",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      delay: 0.1
    },
    { 
      value: 150, 
      label: "Enterprise Partners", 
      color: "bg-brand-orange",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      delay: 0.2
    },
    { 
      value: 65, 
      label: "Elite Engineers", 
      color: "bg-brand-dark",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      delay: 0.3
    },
    { 
      value: 10, 
      label: "Years Engineering", 
      color: "bg-brand-blue",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      delay: 0.4
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Refined Section Header */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold tracking-[0.4em] text-[9px] mb-4 shadow-sm"
        >
          Performance Data
        </motion.div>
        
        {/* Decreased Heading Size for a more premium professional look */}
        <h3 className="text-xl md:text-2xl lg:text-5xl font-bold text-brand-dark tracking-tighter mb-4">
          Validation Through <span className="text-brand-orange">Impact</span>
        </h3>
        
        <p className="max-w-xl mx-auto text-slate-500 font-bold text-[10px] tracking-[0.3em] opacity-80 leading-relaxed antialiased">
          Our technical performance is measured by institutional reliability.
        </p>
      </div>

      {/* Advanced Bento Grid Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Subtle Background Mesh Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1200px; }
      `}} />
    </div>
  );
};

export default Stats;
