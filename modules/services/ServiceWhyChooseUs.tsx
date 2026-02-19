
import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Award } from 'lucide-react';

const ServiceWhyChooseUs: React.FC = () => {
  const points = [
    { title: 'Innovation First', icon: <Zap /> },
    { title: 'Unmatched Security', icon: <ShieldCheck /> },
    { title: 'Agile Delivery', icon: <Award /> },
    { title: 'Client Partnership', icon: <HeartHandshake /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Why Zeeno <span className="text-primary">Globle Solution</span>?
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <div key={i} className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {/* Fixed cloneElement type to support size prop */}
                  {React.cloneElement(p.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <p className="text-text-light text-sm leading-relaxed">
                Committed to delivering excellence through cutting-edge technology and tailored digital strategies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;
