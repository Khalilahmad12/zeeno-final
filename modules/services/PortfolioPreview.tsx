
import React from 'react';

const PortfolioPreview: React.FC = () => {
  const projects = [
    { title: 'Global Logistics Portal', image: 'https://picsum.photos/800/600?random=70' },
    { title: 'Modern Real Estate App', image: 'https://picsum.photos/800/600?random=71' },
    { title: 'High-Scale Fintech Dashboard', image: 'https://picsum.photos/800/600?random=72' },
  ];

  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">Portfolio / Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="group relative overflow-hidden bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300">
              <div className="overflow-hidden aspect-video">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <h4 className="text-white text-xl font-bold">{proj.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
