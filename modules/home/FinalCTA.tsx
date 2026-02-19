import React from 'react';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100"><pattern id="grid-cta" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid-cta)" /></svg>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">Let's Grow Your Business <br className="hidden md:block"/> Online Today</h2>
        <p className="text-brand-light/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
          Whether you need a new website or an SEO overhaul, our team of experts is ready to help you dominate your market.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-accent px-12 py-5 rounded-lg font-black text-lg uppercase tracking-widest shadow-2xl shadow-black/20"
          >
            Start Your Project
          </button>
          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Direct Line</p>
            <p className="text-xl font-black">03009274179</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;