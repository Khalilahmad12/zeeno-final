import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fix: Added explicit 'Variants' type to resolve easing array inference error
  // Animation Variants for Container (Stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Fix: Added explicit 'Variants' type to resolve easing array inference error
  // Professional Slide + Fade entrance
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Fix: Added explicit 'Variants' type to resolve easing array inference error
  // Simple Fade
  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* 1️⃣ HERO SECTION - Updated to Full Screen Dark Tech Background */}
      <section 
        ref={containerRef}
        className="relative h-screen flex items-center justify-center px-4 bg-[#05080F] overflow-hidden text-white"
      >
        {/* Cinematic Background (Matching Home Hero) */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Tech Circuitry" 
            className="w-full h-[120%] object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05080F] via-transparent to-[#05080F]" />
        </motion.div>

        {/* Digital Overlay & Scanner Effect (Matching Home Hero) */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
          />
        </div>

        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block bg-brand-blue/10 text-brand-blue px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.35em] mb-8 shadow-sm border border-brand-blue/20"
          >
            CONTACT US
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Let’s Build Your Digital <br /> 
            <span className="text-brand-orange">Future Together</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium mb-10"
          >
            Have a question or a project idea? Reach out to Zeeno Globle Solution Pvt Limited. 
            Our expert team is ready to help you navigate your digital transformation journey.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>
        
        {/* Subtle Blur Accents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[2]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-[2]"
        />
      </section>

      {/* 2️⃣ CONTACT DETAILS & FORM SECTION */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Heading with Reveal */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-brand-dark mb-16 text-center tracking-tight"
          >
            Get in Touch With Our Team
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT SIDE: CONTACT DETAILS - Staggered Reveal */}
            <motion.div 
              className="lg:w-2/5 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="space-y-4">
                {[
                  { icon: <Globe size={20} />, label: "Company", value: "Zeeno Globle Solution Pvt Limited", href: null },
                  { icon: <MapPin size={20} />, label: "Location", value: "Karachi, Pakistan", href: null },
                  { icon: <Phone size={20} />, label: "Call Us", value: "03009274179", href: "tel:03009274179" },
                  { icon: <Mail size={20} />, label: "Email Us", value: "info@zeenogloblesolution.com", href: "mailto:info@zeenogloblesolution.com" },
                  { icon: <Clock size={20} />, label: "Business Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM", href: null }
                ].map((info, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-slate-50 text-brand-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-inner">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-brand-blue tracking-[0.2em] mb-1">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-base font-bold text-brand-dark hover:text-brand-blue transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base font-bold text-brand-dark">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: CONTACT FORM - Individual Field Reveal */}
            <motion.div 
              className="lg:w-3/5"
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group/form">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover/form:opacity-[0.05] transition-opacity duration-700" 
                     style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl font-bold text-brand-dark mb-8 relative z-10 tracking-tight"
                >
                  Send Us a Message
                </motion.h2>
                <motion.form 
                  className="space-y-6 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all text-sm font-medium" 
                        placeholder="e.g. John Doe" 
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all text-sm font-medium" 
                        placeholder="john@example.com" 
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all text-sm font-medium" 
                        placeholder="03XX XXXXXXX" 
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-[0.2em] ml-1">Subject</label>
                      <select className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all text-sm font-medium appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Web Development</option>
                        <option>Digital Marketing</option>
                        <option>SEO Services</option>
                        <option>IT Training</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-[0.2em] ml-1">Message</label>
                    <textarea 
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all text-sm font-medium h-32 resize-none" 
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </motion.div>

                  <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-brand-orange text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl shadow-brand-orange/20 active:scale-95"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ GOOGLE MAP SECTION - Fade In */}
      <section className="px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 h-[450px] relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231505.47466336496!2d66.95368305!3d24.9317544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0660293eb7%3A0xad6a5241416e7880!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710245678901!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Zeeno Globle Location"
          ></iframe>
        </motion.div>
      </section>

      {/* 4️⃣ CALL TO ACTION STRIP - Fade and Slide */}
      <section className="py-24 bg-brand-blue/5 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark tracking-tight"
          >
            Ready to  <span className="text-accent">Grow Your </span>Business ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 mb-6 max-w-xl mx-auto font-medium"
          >
            Partner with Zeeno Globle Solution Pvt Limited today and experience the power of innovative IT solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:03009274179" 
              className="w-full sm:w-auto bg-brand-orange text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-xl shadow-brand-orange/20"
            >
              <Phone size={18} /> Call Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:info@zeenogloblesolution.com" 
              className="w-full sm:w-auto bg-white border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all"
            >
              <Mail size={18} /> Email Us
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#029ae3 1px, transparent 1px), linear-gradient(90deg, #029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
};

export default ContactPage;