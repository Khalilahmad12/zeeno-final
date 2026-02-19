
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">What Our Clients Say</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-xl group-hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${j*50}ms`}}>★</span>
                ))}
              </div>
              <p className="italic text-text-light text-sm mb-8 leading-relaxed group-hover:text-primary transition-colors">"{t.text}"</p>
              <div className="pt-6 border-t border-border">
                <h5 className="font-bold text-primary-dark text-lg">{t.name}</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
