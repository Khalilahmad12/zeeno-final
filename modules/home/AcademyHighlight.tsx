
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';

interface AcademyHighlightProps {
  onNavigate: (page: string) => void;
}

const AcademyHighlight: React.FC<AcademyHighlightProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax Tracking for content movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  const smoothImageRotate = useSpring(imageRotate, { stiffness: 50, damping: 20 });

  const courses = [
    { name: 'Full-Stack Web', icon: '01', tech: 'React / Node' },
    { name: 'UI/UX Design', icon: '02', tech: 'Figma / UX' },
    { name: 'App Development', icon: '03', tech: 'Flutter / Dart' },
    { name: 'Growth Marketing', icon: '04', tech: 'Ads / SEO' },
    { name: 'Freelance Pro', icon: '05', tech: 'Upwork / Fiverr' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-24 lg:py-10"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="light-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#029ae3" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            style={{ y: smoothContentY }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full mb-8 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span className="text-brand-blue font-bold tracking-[0.4em] text-[10px]">
                  Skills Academy
                </span>
              </motion.div>
              
              <motion.h3 
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight tracking-tighter text-brand-dark"
              >
                Master Industry <br />
                <span className="text-brand-orange">Standard Modules</span>
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-slate-500 mb-6 leading-relaxed text-lg font-medium max-w-xl"
              >
                Bridge the gap between academic theory and industry reality. Join an elite ecosystem where senior developers mentor you through live enterprise software cycles.
              </motion.p>

              {/* Refined Course Cards */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              >
                {courses.map((course) => (
                  <motion.div 
                    key={course.name}
                    whileHover={{ x: 5, backgroundColor: 'rgba(2,154,227,0.02)' }}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-[12px] font-bold text-brand-blue/40 group-hover:text-brand-blue transition-colors w-6">
                        {course.icon}
                      </div>
                      <div>
                        <div className="text-[12px] font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-blue transition-colors">
                          {course.name}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                          {course.tech}
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('academy')}
                  className="group relative bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] overflow-hidden shadow-xl shadow-brand-blue/10 transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Enroll Now</span>
                  <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-10 py-5 bg-white border border-slate-200 text-brand-dark rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                >
                  View Syllabus
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Compose Column */}
          <div className="lg:col-span-5 relative lg:mt-0 mt-16">
            <motion.div 
              style={{ rotate: smoothImageRotate }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Main Image with professional frame */}
              <div className="absolute inset-0 rounded-[1rem] overflow-hidden border-[1px] border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-white p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/sec-2.jpg" 
                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-[1.5s]" 
                    alt="Academy Environment" 
                  />
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-brand-orange p-8 rounded-[2rem] shadow-2xl shadow-brand-orange/20 z-20 text-center min-w-[160px]"
              >
                <div className="text-4xl font-bold text-white leading-none">94%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mt-2">Placement Rate</div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-brand-blue/10 rounded-tl-[4rem] pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b-2 border-r-2 border-brand-orange/10 rounded-br-[4rem] pointer-events-none -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHighlight;
