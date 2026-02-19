import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Fix: Use ReturnType<typeof setInterval> instead of NodeJS.Timeout to resolve namespace error in browser environment
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reviews: Testimonial[] = [
    { 
      id: 1, 
      name: 'Michael Chen', 
      role: 'Operations Director', 
      company: 'LogiTech Systems', 
      text: 'The architectural precision Zeeno Global brought to our e-commerce migration was extraordinary. We saw a 40% increase in throughput within the first quarter.', 
      rating: 5,
      avatar: 'M'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      role: 'CTO', 
      company: 'Nexus FinTech', 
      text: "Scaling a fintech platform requires absolute reliability. Zeeno didn't just write code; they engineered a foundation for our rapid growth and security.", 
      rating: 5,
      avatar: 'S'
    },
    { 
      id: 3, 
      name: 'David Wilson', 
      role: 'VP Growth', 
      company: 'Aero Logistics', 
      text: 'Their mastery over SEO and performance is unmatched. Our organic visibility tripled, directly impacting our bottom-line revenue and market position.', 
      rating: 5,
      avatar: 'D'
    },
    { 
      id: 4, 
      name: 'Amina Al-Sayed', 
      role: 'Product Lead', 
      company: 'HealthLink AI', 
      text: 'Working with Zeeno felt like an extension of our own team. They transformed complex data into a beautiful, intuitive user experience that our users love.', 
      rating: 5,
      avatar: 'A'
    },
    { 
      id: 5, 
      name: 'James Rodriguez', 
      role: 'CEO', 
      company: 'Urban Flow', 
      text: 'The mobile application they developed has become our primary revenue driver. Truly professional engineering from discovery to deployment.', 
      rating: 5,
      avatar: 'J'
    },
    { 
      id: 6, 
      name: 'Linda Wu', 
      role: 'Marketing Head', 
      company: 'Cloud Scale', 
      text: 'Remarkable attention to detail. The integration between our CRM and the new web portal is flawless and has significantly improved our workflow.', 
      rating: 5,
      avatar: 'L'
    }
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(handleNext, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isAutoPlaying]);

  const getVisibleIndices = () => {
    const indices = [];
    // Show 3 items for desktop
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % reviews.length);
    }
    return indices;
  };

  const cardVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className=" py-10 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-blue rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-orange rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
             
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight d-block mx-auto text-center">
              What Our <span className="text-brand-orange">Partners</span> Say
            </h2>
            <p className="mt-6 text-slate-300 font-medium text-lg max-w-xl">
              Success is a collaborative effort. We're proud to have contributed to the growth of these forward-thinking organizations.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => { handlePrev(); setIsAutoPlaying(false); }}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
            >
              <svg className="w-6 h-6 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => { handleNext(); setIsAutoPlaying(false); }}
              className="w-14 h-14 rounded-full border border-slate-200 bg-brand-dark text-white flex items-center justify-center shadow-xl shadow-brand-dark/10 hover:bg-brand-blue transition-all group"
            >
              <svg className="w-6 h-6 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" custom={direction}>
              {getVisibleIndices().map((idx, i) => {
                const review = reviews[idx];
                return (
                  <motion.div
                    key={`${review.id}-${idx}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    className={`bg-white p-10 rounded-[1rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full group ${
                      i === 1 ? 'hidden md:flex' : i === 2 ? 'hidden lg:flex' : 'flex'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-4 h-4 text-brand-orange fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="relative flex-grow">
                      <svg className="absolute -top-4 -left-4 w-12 h-12 text-slate-50 opacity-50 fill-current -z-10" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.899 14.919 16 16.021 16L19.022 16C19.574 16 20.021 15.553 20.021 15L20.021 12C20.021 11.447 19.574 11 19.022 11L15.019 11C13.917 11 13.017 10.103 13.017 9L13.017 6C13.017 4.897 13.917 4 15.019 4L18.019 4C19.122 4 20.021 4.897 20.021 6L20.021 7M2.019 21L2.019 18C2.019 16.899 2.919 16 4.021 16L7.022 16C7.574 16 8.021 15.553 8.021 15L8.021 12C8.021 11.447 7.574 11 7.022 11L3.019 11C1.917 11 1.017 10.103 1.017 9L1.017 6C1.017 4.897 1.917 4 3.019 4L6.019 4C7.122 4 8.021 4.897 8.021 6L8.021 7" />
                      </svg>
                      <p className="text-slate-600 font-medium leading-relaxed relative z-10">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-5 mt-12 pt-8 border-t border-slate-50">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-blue/20">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="text-brand-dark font-bold tracking-tight leading-none mb-2">{review.name}</h4>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{review.role}</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{review.company}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); setIsAutoPlaying(false); }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === activeIndex 
                  ? 'w-12 bg-brand-orange shadow-sm shadow-brand-orange/30' 
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-brand-dark\\/10 { box-shadow: 0 10px 30px -10px rgba(11, 42, 60, 0.4); }
      `}} />
    </section>
  );
};

export default Testimonials;