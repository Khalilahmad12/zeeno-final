
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const BlogNewsletter = () => {
  return (
    <section className="py-12 bg-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-primary-light rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden border border-primary/10"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Stay Updated With Our <span className="text-primary">Latest</span>  Insights</h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed font-medium">
              Join our community and get the best of our blog delivered straight to your inbox every week.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-2xl bg-white border border-border shadow-sm outline-none focus:ring-2 focus:ring-primary transition-all text-primary-dark"
                required
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-accent text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-[#ff9c33] transition-all flex items-center justify-center gap-2 group"
              >
                Subscribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
            <p className="mt-4 text-xs text-text-light/70">We promise not to spam you. You can unsubscribe at any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
