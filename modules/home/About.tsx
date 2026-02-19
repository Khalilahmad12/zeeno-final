
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll-linked parallax setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Refined parallax values for subtler movement
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);
  
  const smoothY1 = useSpring(y1, { stiffness: 80, damping: 25 });
  const smoothY2 = useSpring(y2, { stiffness: 80, damping: 25 });

  const features = [
    'Innovative Solutions',
    'Expert Team',
    '24/7 Support',
    'Global Clients',
    'Modern Technology',
    'Result Oriented',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  const headingText = "About Zeeno Global Software House";

  return (
    <section ref={containerRef} className="relative overflow-hidden py-12 bg-white">
      {/* --- Advanced Decorative Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-50 to-transparent" />
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left Column: Parallax Image Composition --- */}
          <div className="lg:w-5/12 relative">
            <motion.div 
              style={{ y: smoothY1 }}
              className="relative rounded-[1rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] bg-slate-200"
            >
              <img 
                src="/about-home.jpg" 
                alt="Architecture" 
                className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/30 to-transparent" />
            </motion.div>

            {/* Foreground Floating Glass Card */}
            <motion.div 
              style={{ y: smoothY2, rotate }}
              className="absolute -bottom-6 -right-4 md:-right-10 bg-white/90 backdrop-blur-3xl p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/60 z-20 min-w-[160px]"
            >
              <div className="text-4xl font-bold text-brand-orange leading-none tracking-tighter italic">10<span className="text-brand-blue">+</span></div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.25em] mt-3 leading-tight">
                Years of Engineering <br /> Excellence
              </div>
              <div className="mt-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-2.5 h-2.5 text-brand-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- Right Column: Kinetic Content --- */}
          <div className="lg:w-7/12">
          <p className="text-brand-orange font-bold  my-3 leading-tight" >About Us</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Refined Kinetic Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                {headingText.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block ${word === "Software" ? "text-brand-orange" : ""}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h2>
              
              <motion.div variants={itemVariants} className="space-y-3 text-slate-500 mb-5">
                <p className="text-lg md:text-xl leading-snug font-bold text-slate-700 tracking-tight">
                  Zeeno Global is a premier software house dedicated to delivering exceptional digital solutions. 
                </p>
                <p className="text-sm md:text-base leading-relaxed opacity-85 font-medium max-w-2xl">
                  We focus on bridging the gap between complex business challenges and elegant, high-performance technology. Our team of expert developers and designers work collaboratively to ensure every project exceeds expectations.
                </p>
              </motion.div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_8px_16px_-4px_rgba(2,154,227,0.3)] transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-800 group-hover:text-brand-blue transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced 'Our Full Story' Button */}
              <motion.div variants={itemVariants} className="mt-6 pb-10">
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="group relative bg-brand-dark text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] overflow-hidden shadow-2xl shadow-brand-dark/10 transition-all hover:shadow-brand-blue/20 hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Our Full Story
                    <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
