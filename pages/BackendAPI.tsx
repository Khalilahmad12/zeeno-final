import React, { useEffect } from 'react';
import { Server, Shield, Share2, Database, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';

const BackendAPI: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="BACKEND & API"
        title={<>Powerful Engines for <span className="text-primary">Complex Systems</span></>}
        description="We build robust, secure, and highly scalable backend infrastructures that serve as the backbone for your digital growth."
      />

      {/* Structural Pillars */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">Architectural <span className="text-primary">Pillars</span></h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Security First', icon: <Shield />, desc: 'End-to-end encryption and advanced authorization protocols for total data safety.' },
              { title: 'Scalable Flow', icon: <Server />, desc: 'Architecture designed to handle millions of requests per second effortlessly.' },
              { title: 'Seamless Integration', icon: <Share2 />, desc: 'Custom APIs built for easy connectivity with all your third-party tools.' }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                  {React.cloneElement(p.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="py-20 bg-primary-light">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="group relative p-10 bg-primary-dark rounded-[2rem] text-white shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
               >
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <h4 className="text-2xl font-bold text-accent mb-8 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500">
                      <Code className="text-white" size={24} />
                     </div>
                     API Development Excellence
                  </h4>
                  <ul className="space-y-5">
                     {['RESTful & GraphQL API Design', 'Swagger / OpenAPI Documentation', 'Microservices Architecture', 'OAuth2 & JWT Integration', 'Real-time WebSocket Comms'].map((item, idx) => (
                        <motion.li 
                          key={item} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-center gap-4 text-white/70"
                        >
                           <div className="w-2 h-2 rounded-full bg-accent" />
                           <span className="font-medium text-primary">{item}</span>
                        </motion.li>
                     ))}
                  </ul>
               </motion.div>
               <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">Performance & <span className="text-primary">Reliability</span></h2>
                  <p className="text-text-light text-lg mb-10 leading-relaxed">
                     Our backend solutions are benchmarked for extreme speed. We use advanced caching strategies and database optimizations to ensure your users never have to wait.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="group p-8 bg-white rounded-2xl shadow-sm border border-border hover:-translate-y-1 hover:shadow-soft transition-all duration-300"
                     >
                        <div className="text-4xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">99.9%</div>
                        <div className="text-sm font-bold text-primary-dark">Uptime Target</div>
                     </motion.div>
                     <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="group p-8 bg-white rounded-2xl shadow-sm border border-border hover:-translate-y-1 hover:shadow-soft transition-all duration-300"
                     >
                        <div className="text-4xl font-bold text-accent mb-1 group-hover:text-primary transition-colors">&lt;100ms</div>
                        <div className="text-sm font-bold text-primary-dark">Latency Goal</div>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      <MiniCTA />
    </div>
  );
};

export default BackendAPI;