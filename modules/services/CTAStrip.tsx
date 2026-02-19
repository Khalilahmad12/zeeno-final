
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CTAStrip: React.FC = () => {
  return (
    <section className="py-20 bg-primary-dark text-white overflow-hidden relative">
      {/* Subtle decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Let’s Build Your Digital Future Together
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Based in Karachi, Pakistan, we are ready to scale your business with professional 
          IT solutions and dedicated growth strategies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
              <MapPin size={24} />
            </div>
            <p className="font-medium">Karachi, Pakistan</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
              <Phone size={24} />
            </div>
            <p className="font-medium">03009274179</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
              <Mail size={24} />
            </div>
            <p className="font-medium">info@zeenogloblesolution.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="tel:03009274179" 
            className="flex items-center space-x-2 bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-custom shadow-lg hover:scale-105 active:scale-95"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <a 
            href="mailto:info@zeenogloblesolution.com" 
            className="flex items-center space-x-2 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-custom"
          >
            <Mail size={20} />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
