import React, { useEffect } from 'react';
import { Smartphone, Zap, Layers, Cpu, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';

const AppDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Native Performance', desc: 'Optimized for speed and responsiveness on iOS and Android.', icon: <Cpu /> },
    { title: 'Offline Capability', desc: 'Seamless user experience even without an internet connection.', icon: <Zap /> },
    { title: 'Cloud Sync', desc: 'Real-time data synchronization across all user devices.', icon: <Layers /> },
    { title: 'Secure Vault', desc: 'Enterprise-grade encryption for all user sensitive data.', icon: <ShieldCheck /> },
  ];

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="APP DEVELOPMENT"
        title={<>Innovative Mobile Apps for <span className="text-primary">Global Reach</span></>}
        description="We craft seamless, high-performance mobile applications that empower businesses and delight users across all platforms."
      />

      {/* Feature Grid */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">App Features & <span className="text-primary">Capabilities</span></h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                  {React.cloneElement(f.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary-dark group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison List */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] overflow-hidden shadow-soft flex flex-col md:flex-row border border-border"
          >
            <div className="md:w-1/2 p-12 lg:p-20 bg-primary text-white">
              <h3 className="text-3xl font-bold mb-8">iOS Development</h3>
              <ul className="space-y-6">
                {['Swift & Objective-C Expertise', 'Apple Store Guidelines Compliance', 'iPadOS & watchOS Integration', 'Premium UI/UX Experience'].map((item, idx) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <CheckCircle className="text-accent" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 p-12 lg:p-20 bg-white">
              <h3 className="text-3xl font-bold mb-8 text-primary-dark">Android Development</h3>
              <ul className="space-y-6">
                {['Kotlin & Java Performance', 'Google Play Store Optimization', 'Diverse Device Compatibility', 'Material Design Implementation'].map((item, idx) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-4 text-lg text-text-light font-medium"
                  >
                    <CheckCircle className="text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <MiniCTA />
    </div>
  );
};

export default AppDevelopment;