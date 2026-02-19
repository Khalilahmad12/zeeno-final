import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const contactInfo = [
    {
      title: 'Email Address',
      value: 'info@zeenogloblesolution.com',
      sub: 'Response within 24 hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Phone Number',
      value: '03009274179',
      sub: 'Mon - Fri, 9am - 6pm',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Head Office',
      value: 'Karachi, Pakistan',
      sub: 'Sindh, PK',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
        >
          Contact Us
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tighter"
        >
          Let's Start a <span className="text-brand-orange">Conversation</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-slate-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed font-medium"
        >
          Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate your digital transformation journey.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
        {/* Left Column: Contact Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 sm:space-y-6"
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 p-5 sm:p-8 rounded-xl flex items-center gap-4 sm:gap-6 group hover:border-brand-blue/30 transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/[0.02] rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 text-brand-blue shadow-sm">
                {info.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-1">{info.title}</h4>
                <p className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5 break-words">{info.value}</p>
                <p className="text-[10px] sm:text-xs text-slate-400 dark:text-gray-500 font-medium">{info.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* Social Links Panel */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 sm:pt-10 border-t border-black/5 dark:border-white/5"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Connect With Us</p>
            <div className="flex flex-wrap gap-4">
              {['FB', 'TW', 'LI', 'IG'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600 dark:text-gray-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Advanced Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 p-6 sm:p-10 lg:p-14 rounded-2xl lg:rounded-[8px] shadow-2xl shadow-slate-200/50 dark:shadow-none space-y-6 sm:space-y-8 relative overflow-hidden group/form"
          >
            {/* Subtle Texture/Background Overlay */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none group-hover/form:opacity-[0.05] transition-opacity duration-700">
               <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] block ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-lg px-5 py-3 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-gray-700 text-sm" 
                />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] block ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-lg px-5 py-3 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-gray-700 text-sm" 
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 relative z-10">
              <label className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] block ml-1">Project Category</label>
              <select className="w-full bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-lg px-5 py-3 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium appearance-none cursor-pointer text-sm">
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Application</option>
                <option value="design">UI/UX Design</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2 sm:space-y-3 relative z-10">
              <label className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] block ml-1">Project Details</label>
              <textarea 
                required
                rows={5} 
                placeholder="Tell us about your project goals and requirements..." 
                className="w-full bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-lg px-5 py-3 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-gray-700 resize-none text-sm"
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className="w-full relative z-10 group overflow-hidden"
            >
              <div className={`w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 sm:py-5 rounded-lg transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px] sm:text-xs ${isSubmitting ? 'opacity-90' : ''}`}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </div>
            </motion.button>
            
            <p className="text-[9px] text-center text-slate-400 dark:text-gray-500 uppercase tracking-widest font-bold">
              By submitting, you agree to our <a href="#" className="text-brand-blue underline underline-offset-4">Privacy Policy</a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;