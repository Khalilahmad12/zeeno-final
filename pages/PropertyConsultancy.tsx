import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';
import PropertyServices from '../modules/property/PropertyServices';
import PropertyTypes from '../modules/property/PropertyTypes';
import WhyChooseProperty from '../modules/property/WhyChooseProperty';
import PropertyDetail from '../modules/property/PropertyDetail';

const PropertyConsultancy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="REAL ESTATE SOLUTIONS"
        title={<>Expert Property Consultancy for <span className="text-brand-orange">Your Future</span></>}
        description="Navigating the real estate market with precision. From finding the perfect investment to selling your assets at the best value, we are your trusted property partners."
      />

      <PropertyServices />

      <PropertyDetail />

      <PropertyTypes />

      <WhyChooseProperty />

      <MiniCTA />
    </div>
  );
};

export default PropertyConsultancy;