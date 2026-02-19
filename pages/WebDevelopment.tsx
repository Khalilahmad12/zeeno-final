import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import Expertise from '../modules/services/Expertise';
import ProcessSection from '../components/ProcessSection';
import AcademySection from '../modules/services/AcademySection';
import ServiceWhyChooseUs from '../modules/services/ServiceWhyChooseUs';
import MiniCTA from '../components/MiniCTA';
import { Layout, Database, Code2, ShoppingBag } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertiseItems = [
    {
      title: 'Frontend Development',
      desc: 'Expertise in React, Angular, and Vue.js to create pixel-perfect, responsive user interfaces.',
      icon: <Layout className="w-7 h-7" />
    },
    {
      title: 'Backend & API Integration',
      desc: 'Robust server-side logic and custom API development with Node.js, PHP, Python, and Laravel.',
      icon: <Database className="w-7 h-7" />
    },
    {
      title: 'Responsive UI/UX Design',
      desc: 'Designing modern, intuitive, and mobile-first design systems focused on user engagement.',
      icon: <Code2 className="w-7 h-7" />
    },
    {
      title: 'CMS & E-Commerce Solutions',
      desc: 'High-performance WordPress, Shopify, and WooCommerce solutions built for high conversion.',
      icon: <ShoppingBag className="w-7 h-7" />
    }
  ];

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="WEB DEVELOPMENT"
        title={<>Modern Solutions for the <span className="text-primary">Digital Age</span></>}
        description="Zeeno Globle Solution Pvt Limited delivers high-end, scalable, and visually stunning web architectures that drive performance and redefine user experiences globally."
      />
      
      <Expertise 
        title={<>Our Web <span className="text-primary">Development</span> Expertise</>}
        items={expertiseItems}
      />
      
      <ProcessSection />
      <AcademySection />
      <ServiceWhyChooseUs />
      <MiniCTA />
    </div>
  );
};

export default WebDevelopment;