import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ExpertiseItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ExpertiseProps {
  title: React.ReactNode;
  items: ExpertiseItem[];
}

const Expertise: React.FC<ExpertiseProps> = ({ title, items }) => {
  // Fix: Explicitly type containerVariants as Variants to resolve assignment compatibility issues
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Fix: Explicitly type itemVariants as Variants and cast ease to resolve string inference error
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">
            {title}
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500 ease-in-out">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-text-light leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;