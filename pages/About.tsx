
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import AboutHero from '../modules/about/Hero';
import WhoWeAre from '../modules/about/WhoWeAre';
import CEOMessage from '../modules/about/CEOMessage';
import OurProcess from '../modules/about/OurProcess';
import ZeenoAdvantage from '../modules/about/ZeenoAdvantage';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-color/60 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors duration-300 pr-4 ${isOpen ? 'text-primary' : 'text-dark group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary border-primary text-white' : 'bg-transparent border-primary/20 text-primary group-hover:border-primary group-hover:bg-primary/5'}`}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
          >
            <ChevronDown size={22} strokeWidth={2.5} />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <p className="text-text-light leading-relaxed pb-8 text-base font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const faqData = [
    {
      question: "What services does Zeeno Globle Solution provide?",
      answer: "We offer a full range of digital services including Custom Web Development (PHP, Laravel, WordPress), E-Commerce solutions (Shopify, WooCommerce), Enterprise SEO, Social Media Marketing, and IT Consultancy."
    },
    {
      question: "How long does it take to build a corporate website?",
      answer: "A standard corporate website typically takes 2 to 4 weeks, while complex e-commerce platforms or custom portals can take 6 to 12 weeks depending on the required features."
    },
    {
      question: "Do you offer post-launch maintenance?",
      answer: "Yes, we provide ongoing support and maintenance packages to ensure your website remains secure, updated, and optimized for performance at all times."
    },
    {
      question: "What is Zeeno Skills Academy?",
      answer: "It is our educational branch dedicated to empowering youth with professional IT skills. We offer practical courses in Web Development, SEO, and Digital Marketing to help students achieve financial independence."
    },
    {
      question: "Can you help with local SEO in Pakistan?",
      answer: "Absolutely. We specialize in local and enterprise SEO strategies designed specifically to improve visibility in the Pakistani market as well as international search rankings."
    },
    {
      question: "Is social media marketing effective for small businesses?",
      answer: "Yes, we use targeted strategies on platforms like Facebook, Instagram, and TikTok to ensure small businesses reach their ideal audience efficiently and within their budget."
    },
    {
      question: "How do I enroll in your IT training courses?",
      answer: "You can enroll by visiting our Skills Academy page, contacting us via WhatsApp at 03009274179, or visiting our campus for a free career counseling session."
    },
    {
      question: "Do you develop custom mobile applications?",
      answer: "Yes, we build custom, high-performance web and mobile applications tailored to meet specific business automation and user engagement requirements."
    }
  ];

  const handleNavigation = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden  bg-white">
      {/* SECTION 1: HERO */}
      <AboutHero onNavigate={onNavigate} />

      <div className="container mx-auto"> 
      <WhoWeAre />

      {/* SECTION 3: CEO MESSAGE */}
      <CEOMessage />

      {/* SECTION 4: OUR PROCESS */}
      <OurProcess />

      {/* SECTION 5: THE ZEENO ADVANTAGE */}
      <ZeenoAdvantage />

      {/* TEAM CTA SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Professional Expertise</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-text-body max-w-2xl mx-auto mb-10 font-medium">
              Our team consists of certified developers and creative thinkers who are dedicated to your business success.
            </p>
            <button 
              onClick={() => handleNavigation('portfolio')}
              className="btn-accent group flex items-center gap-2 mx-auto w-fit px-12 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-110 transform transition-all duration-300"
            >
              <Users size={20} className="group-hover:rotate-[360deg] transition-transform duration-500" />
              Meet Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FAQ SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Centered Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold uppercase tracking-[0.15em] text-xs">Got Questions?</span>
            <h2 className="text-4xl font-extrabold text-dark mt-4 mb-6">Frequently Asked <span className="text-accent">Questions</span></h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          </motion.div>

          {/* 2-Column FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 border-t border-border-color">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {faqData.slice(0, 4).map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {faqData.slice(4, 8).map((item, index) => (
                <FAQItem key={index + 4} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </div>

          {/* Centered Footer CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-text-light mb-8 max-w-2xl mx-auto font-medium">Can't find what you're looking for? Reach out to our support team for personalized assistance.</p>
            <button 
              onClick={() => handleNavigation('contact')}
              className="btn-primary group flex items-center gap-2 mx-auto w-fit px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-110 transform transition-all duration-300"
            >
              Ask a Question
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
