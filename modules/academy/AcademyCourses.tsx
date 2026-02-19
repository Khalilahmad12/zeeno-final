import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const AcademyCourses: React.FC = () => {
  const courses = [
    { title: 'Web Development', desc: 'Full-stack mastery using React, Node, and modern databases.', duration: '6 Months', level: 'Beginner to Pro' },
    { title: 'App Development', desc: 'Build cross-platform mobile apps using Flutter and React Native.', duration: '4 Months', level: 'Intermediate' },
    { title: 'Graphic Designing', desc: 'Master visual storytelling with Adobe Creative Suite and Canva.', duration: '3 Months', level: 'Beginner' },
    { title: 'Digital Marketing', desc: 'Growth hacking, performance marketing, and branding strategies.', duration: '4 Months', level: 'All Levels' },
    { title: 'SEO Mastery', desc: 'Technical SEO, backlinking, and content optimization workflows.', duration: '3 Months', level: 'Intermediate' },
    { title: 'UI/UX Design', desc: 'User-centric design thinking, wireframing, and Figma prototyping.', duration: '3 Months', level: 'Beginner' },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 tracking-tight">Our Professional <span className="text-brand-orange">Programs</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Choose from our curated selection of high-impact courses designed to get you hired.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {courses.map((course, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all group border border-slate-100 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{course.title}</h3>
              <p className="text-slate-500 mb-5 leading-relaxed font-medium flex-grow">
                {course.desc}
              </p>
              
              <div className="flex items-center gap-6 mb-3 text-[10px] font-bold  tracking-widest text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-orange" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart size={16} className="text-brand-blue" />
                  {course.level}
                </div>
              </div>

              <button className="w-full bg-slate-50 text-brand-dark py-4 rounded-xl font-bold text-xs tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-sm border border-slate-100 active:scale-95">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyCourses;