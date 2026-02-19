
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedBlog = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-primary inline-block border-b-4 border-accent pb-1">
            Featured Article
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full lg:w-1/2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[3rem] aspect-[4/3] lg:aspect-square shadow-xl shadow-primary/5 border border-primary/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Featured Blog" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-primary text-white px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest">
                Digital Marketing
              </span>
              <div className="flex items-center gap-2 text-text-light text-sm font-bold uppercase tracking-wider">
                <Calendar size={14} className="text-accent" />
                <span>Oct 28, 2024</span>
              </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-[1.2]  transition-colors cursor-pointer ">
              Mastering the Art of <span className="text-accent">Data-Driven</span>  Strategy for Modern Enterprises
            </h3>
            
            <p className="text-text-light text-lg mb-8 leading-relaxed font-medium">
              In an era where data is the new oil, businesses that fail to refine it risk becoming obsolete. Discover how top global brands are leveraging predictive analytics and machine learning.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full border-t border-border pt-8 gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  RS
                </div>
                <div>
                  <p className="font-bold text-primary-dark text-lg leading-tight">R. Sharma</p>
                  <p className="text-text-light text-xs font-medium uppercase tracking-wider">Chief Strategist</p>
                </div>
              </div>

              <Link 
                to="/blog" 
                className="group flex items-center gap-3 text-primary font-extrabold text-lg hover:text-accent transition-all"
              >
                Read Full Story
                <motion.div 
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all shadow-md"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
