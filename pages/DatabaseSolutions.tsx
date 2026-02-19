import React, { useEffect } from 'react';
import { Database, Search, HardDrive, RefreshCw, Lock, FastForward, Server, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';

const DatabaseSolutions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const databaseServices = [
    { title: 'SQL & Relational', tech: 'PostgreSQL, MySQL, MS SQL', icon: <Database /> },
    { title: 'NoSQL & Real-time', tech: 'MongoDB, Redis, Firebase', icon: <Zap /> },
    { title: 'Data Warehousing', tech: 'BigQuery, Snowflake, Redshift', icon: <HardDrive /> },
    { title: 'Caching Systems', tech: 'Redis, Memcached', icon: <FastForward /> }
  ];

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="DATABASE SOLUTIONS"
        title={<>High-Performance Data <span className="text-primary">Management</span></>}
        description="Power your data-driven enterprise with optimized, secure, and highly available database architectures."
      />

      {/* Database Types */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">Database <span className="text-primary">Ecosystems</span></h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {databaseServices.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500 ease-in-out">
                  {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-text-light text-sm mb-6">{service.tech}</p>
                <div className="h-1.5 w-full bg-primary-light rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-primary" 
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Focus Section - Fixed Text Visibility */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-primary-dark text-white rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
            >
               {/* Background Decorative Element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
               
               <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  <div>
                     <motion.h2 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-5xl font-heading font-bold mb-8 text-gray-800"
                     >
                      Optimized for <span className="text-accent">Scale</span>
                     </motion.h2>
                     <div className="space-y-6">
                        {[
                          { title: 'Query Optimization', icon: <Search />, desc: 'Eliminating bottlenecks and ensuring sub-second response times.' },
                          { title: 'High Availability', icon: <Server />, desc: 'Multi-region clusters for constant data accessibility worldwide.' },
                          { title: 'Automated Backups', icon: <RefreshCw />, desc: 'Regular, secure backups with effortless point-in-time recovery.' },
                          { title: 'Security Hardening', icon: <Lock />, desc: 'Granular access controls and industry-standard data-at-rest encryption.' }
                        ].map((f, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="group flex gap-6 shadow-md p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                          >
                             <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                                {React.cloneElement(f.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                             </div>
                             <div>
                                <h4 className="text-xl font-bold mb-1 text-accent group-hover:text-accent transition-colors">{f.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                             </div>
                          </motion.div>
                        ))}
                     </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                  >
                     <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src="https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXQlMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D" 
                          alt="Data Server" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                     </div>
                     <motion.div 
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute -bottom-6 -left-6 p-8 bg-accent rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-500"
                     >
                        <ShieldCheck size={40} className="text-white" />
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>

      <MiniCTA />
    </div>
  );
};

export default DatabaseSolutions;