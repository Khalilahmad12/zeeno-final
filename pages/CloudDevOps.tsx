import React, { useEffect } from 'react';
import { Cloud, Terminal, ShieldAlert, Zap, Cpu, RefreshCw, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';

const CloudDevOps: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="CLOUD & DEVOPS"
        title={<>Scalable Infrastructure & <span className="text-primary">Automated Workflows</span></>}
        description="Accelerate your development cycle and ensure peak uptime with modern DevOps practices and cloud optimization."
      />

      {/* CI/CD Pipeline Visual */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-6 relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary/5 via-primary to-accent/5 -translate-y-1/2 z-0" 
            />
            
            {[
              { title: 'Code', icon: <Terminal />, desc: 'Continuous integration of feature sets.' },
              { title: 'Build', icon: <Cpu />, desc: 'Automated container builds and testing.' },
              { title: 'Deploy', icon: <Zap />, desc: 'Seamless deployment to production.' },
              { title: 'Monitor', icon: <Activity />, desc: '24/7 observability and alerting.' }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group relative z-10 bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                  {React.cloneElement(step.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-text-light text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Benefits Grid */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                 {[
                   { title: '99.99% Uptime', icon: <Cloud /> },
                   { title: 'Auto-Scaling', icon: <RefreshCw /> },
                   { title: 'Infrastructure as Code', icon: <Terminal /> },
                   { title: 'Enhanced Security', icon: <ShieldAlert /> }
                 ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300"
                   >
                      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-500 text-primary group-hover:text-white">
                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                      </div>
                      <h4 className="font-bold text-primary-dark group-hover:text-primary transition-colors">{item.title}</h4>
                   </motion.div>
                 ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                 <h2 className="text-4xl font-heading font-bold text-primary-dark mb-8">Modernizing Your <span className="text-primary">Hosting Infrastructure</span></h2>
                 <p className="text-text-light text-lg mb-10 leading-relaxed">
                   We transition legacy systems to the cloud, optimizing costs and improving performance through containerization and serverless architectures.
                 </p>
                 <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-primary font-bold group px-8 py-4 rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                 >
                    Schedule an Infrastructure Audit 
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                 </motion.button>
              </motion.div>
           </div>
        </div>
      </section>

      <MiniCTA />
    </div>
  );
};

export default CloudDevOps;