import React from 'react';
import { BookOpen, Target, Users, Award } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const AcademyAbout: React.FC = () => {
  const highlights = [
    { icon: <BookOpen size={24} />, title: 'Industry-Focused Training', desc: 'Curriculum designed by experts to meet current market demands.' },
    { icon: <Target size={24} />, title: 'Practical Projects', desc: 'Work on real-world client briefs and build a professional portfolio.' },
    { icon: <Users size={24} />, title: 'Expert Mentors', desc: 'Learn directly from senior developers and marketing leads.' },
    { icon: <Award size={24} />, title: 'Career Support', desc: 'Dedicated guidance for interviews, resume building, and placement.' },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">About the Academy</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-brand-dark mb-3 tracking-tight leading-tight">
              Our Mission to Shape <br />
              <span className="text-brand-orange">Global Tech Talent</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-lg mb-6 leading-relaxed font-medium">
              Zeeno Skills Academy isn't just a training center; it's an incubator for the next wave of digital innovators. We believe that practical experience is the best teacher, which is why our approach is 90% hands-on.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  className="flex flex-col p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-white text-brand-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-brand-dark mb-2 text-lg ">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-[1rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                alt="Academy Students" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-100"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-brand-orange text-5xl font-bold mb-1">95%</div>
              <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Placement Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademyAbout;