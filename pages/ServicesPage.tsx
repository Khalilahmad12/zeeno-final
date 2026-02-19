import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import ServicesOverview from '../modules/home/Services';
import ProcessSection from '../components/ProcessSection';
import AcademySection from '../modules/services/AcademySection';
import ServiceWhyChooseUs from '../modules/services/ServiceWhyChooseUs';
import MiniCTA from '../components/MiniCTA';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Immersive Full-Screen Hero */}
      <ServiceHero 
        badge="OUR SERVICES"
        title={<>Comprehensive Digital Solutions for <span className="text-primary">Global Growth</span></>}
        description="We combine technical excellence with strategic innovation to build high-performance digital products that drive measurable results for organizations worldwide."
      />
      
      {/* 2. Core Service Capabilities Grid */}
      <section className="py-20 bg-white">
        <ServicesOverview />
      </section>
      
      {/* 3. The 5-Step Strategic Process */}
      <ProcessSection />
      
      {/* 4. Skills Academy Integration */}
      <AcademySection />
      
      {/* 5. The Zeeno Advantage Pillars */}
      <ServiceWhyChooseUs />
      
      {/* 6. Centralized Call to Action */}
      <MiniCTA />
    </div>
  );
};

export default ServicesPage;