
import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Share2, Camera, PlayCircle } from 'lucide-react';

const services = [
  {
    title: 'TV Commercials',
    desc: 'High-impact television advertisements designed to capture attention and build massive brand awareness.',
    icon: <Tv className="w-8 h-8" />
  },
  {
    title: 'Social Media Ads',
    desc: 'Short-form, high-engagement video content optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    icon: <Share2 className="w-8 h-8" />
  },
  {
    title: 'Product Photography',
    desc: 'Professional studio photography that highlights your products features and quality for catalogs and web.',
    icon: <Camera className="w-8 h-8" />
  },
  {
    title: 'Brand Videos',
    desc: 'Corporate storytelling and documentary-style videos that communicate your mission and values.',
    icon: <PlayCircle className="w-8 h-8" />
  }
];

const StudioServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-blue font-bold text-[10px] tracking-[0.4em] mb-4 block"
          >
            Visual Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter">
            Production <span className="text-brand-orange">Services</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioServices;
