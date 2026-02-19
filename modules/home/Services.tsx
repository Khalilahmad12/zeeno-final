
import React from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ s, idx, itemVariants }: { s: any; idx: number; itemVariants: Variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for a more high-end tactile feel
  const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) / (width / 2));
    y.set((clientY - centerY) / (height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-1, 1], [7, -7]);
  const rotateY = useTransform(mouseX, [-1, 1], [-7, 7]);
  const shineOpacity = useTransform([mouseX, mouseY], ([mx, my]) => {
    return Math.abs(mx as number) + Math.abs(my as number) > 0.1 ? 0.08 : 0;
  });

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white p-10 rounded-2xl border border-slate-200/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full overflow-visible perspective-1000"
    >
      {/* 1. Dynamic Spotlight Effect - Follows mouse with subtle glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            (input) => {
              const [mx, my] = input as number[];
              const px = (mx + 1) * 50;
              const py = (my + 1) * 50;
              return `radial-gradient(450px circle at ${px}% ${py}%, rgba(2, 154, 227, 0.08), transparent 80%)`;
            }
          ),
        }}
      />

      {/* 2. Glass Shine Reflection - Top right accent */}
      <motion.div 
        style={{ opacity: shineOpacity }}
        className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl pointer-events-none z-20" 
      />

      {/* 3. Floating Icon with Elevation */}
      <div className="mb-8 relative" style={{ transform: "translateZ(50px)" }}>
        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-blue group-hover:text-white group-hover:bg-brand-blue group-hover:shadow-[0_20px_40px_-12px_rgba(2,154,227,0.4)] transition-all duration-500 relative z-30 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -2, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {s.icon}
          </motion.div>
        </div>
        {/* Under-glow for icon */}
        <div className="absolute -inset-2 bg-brand-blue/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* 4. Text Content with same size but improved hierarchy */}
      <h4 
        className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors uppercase tracking-tight relative z-30"
        style={{ transform: "translateZ(40px)" }}
      >
        {s.title}
      </h4>

      <p 
        className="text-slate-500 mb-8 leading-relaxed font-medium flex-grow relative z-30"
        style={{ transform: "translateZ(30px)" }}
      >
        {s.desc}
      </p>

      {/* 5. Refined Tech Stack Footer */}
      <div 
        className="pt-6 border-t border-slate-100 flex flex-col gap-3 mt-auto relative z-30"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Integrated Tech</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {s.tech.split(', ').map((t: string) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-transparent group-hover:border-brand-blue/20 group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Active state line on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-blue group-hover:w-1/3 transition-all duration-700 ease-expo rounded-t-full" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mobile App Development',
      desc: 'High-performance native and cross-platform apps for iOS & Android ecosystems.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      tech: 'Flutter, React Native, Swift'
    },
    {
      title: 'Web Development',
      desc: 'Robust enterprise-level web applications built with modern architectural frameworks.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      tech: 'React, Next.js, Laravel'
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric designs that drive engagement and maximize digital conversion rates.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      tech: 'Figma, Adobe XD'
    },
    {
      title: 'Backend & API',
      desc: 'Scalable cloud architecture and secure APIs forming your core digital backbone.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>,
      tech: 'Node.js, Python, PHP'
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Automated infrastructure and cloud scaling for maximum operational uptime.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
      tech: 'AWS, Docker, Azure'
    },
    {
      title: 'Database Solutions',
      desc: 'Optimized data structures and management for speed and high integrity.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
      tech: 'PostgreSQL, MongoDB'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <div className="relative overflow-visible">
      {/* Background Decorative Mesh Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#029ae3 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold uppercase tracking-[0.4em] text-[10px] mb-4 shadow-sm shadow-brand-blue/5"
          >
            Capabilities
          </motion.div>
          <h3 className="text-4xl lg:text-6xl font-bold mb-4 text-brand-dark tracking-tighter">
            Strategic <span className="text-brand-orange">Service</span> Solutions
          </h3>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium leading-relaxed text-base">
            Architecting high-fidelity technology solutions that transform complex operational requirements into competitive global market advantages.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {services.map((s, idx) => (
            <ServiceCard key={idx} s={s} idx={idx} itemVariants={itemVariants} />
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1200px; }
        .ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
      `}} />
    </div>
  );
};

export default Services;
