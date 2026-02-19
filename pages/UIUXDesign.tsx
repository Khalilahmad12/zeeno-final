import React, { useEffect } from 'react';
import { Palette, Eye, MousePointer2, Layers, PenTool, Layout, Monitor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';

const UIUXDesign: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    { title: 'User-Centricity', icon: <Eye />, desc: 'Designs focused on solving real user problems and enhancing usability.' },
    { title: 'Visual Harmony', icon: <Palette />, desc: 'Aesthetic consistency that aligns perfectly with your brand identity.' },
    { title: 'Interaction Design', icon: <MousePointer2 />, desc: 'Intuitive touch-points that make every click feel natural and rewarding.' },
    { title: 'Scalable Systems', icon: <Layers />, desc: 'Modular design components that grow effortlessly with your product.' },
  ];

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="UI/UX DESIGN"
        title={<>Intuitive Designs That <span className="text-primary">Drive Results</span></>}
        description="We create human-centered designs that turn complex ideas into simple, engaging, and beautiful digital experiences."
      />

      {/* Principles Grid */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">Our Design <span className="text-primary">Philosophy</span></h2>
              <p className="text-text-light text-base mb-6">We believe that great design is invisible—it just works. Our team combines psychological research with visual trends to deliver exceptional results.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Iterative Process', 'A/B Testing', 'Prototyping', 'Accessibility'].map((check, idx) => (
                   <motion.div 
                    key={check} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 font-bold text-primary-dark text-sm"
                   >
                      <div className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px]">✓</div>
                      {check}
                   </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500">
                    <div className="text-primary group-hover:text-white transition-colors">
                      {React.cloneElement(p.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="text-text-light text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Workflow Steps */}
      <section className="py-16 bg-white overflow-hidden border-b border-border">
        <div className="container mx-auto px-4">
           <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-center mb-10"
           >
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">From Concept to <span className="text-accent">Reality</span></h2>
           </motion.div>
           <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
              {[
                { title: 'Discovery & Research', icon: <Eye />, color: 'bg-blue-500' },
                { title: 'User Flow & Wireframing', icon: <Layout />, color: 'bg-orange-500' },
                { title: 'Visual Mockups', icon: <PenTool />, color: 'bg-purple-500' },
                { title: 'Final Prototyping', icon: <Monitor />, color: 'bg-green-500' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-[360deg] transition-all duration-500`}>
                      {React.cloneElement(step.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                   </div>
                   <div className="h-px bg-border flex-grow hidden md:block" />
                   <div className="group p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300 max-sm:w-full max-w-sm w-full border-l-4 border-l-primary">
                      <h4 className="text-lg font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-text-light text-xs">Translating complex requirements into beautiful visual experiences through structured design sprints.</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <MiniCTA />
    </div>
  );
};

export default UIUXDesign;