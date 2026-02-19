
import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';
import StudioServices from '../modules/commercial/StudioServices';
import ProductionProcess from '../modules/commercial/ProductionProcess';
import CreativeEdge from '../modules/commercial/CreativeEdge';

const CommercialStudio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="COMMERCIAL & STUDIO"
        title={<>Cinematic Advertising that <span className="text-brand-orange">Captivates Audience</span></>}
        description="Transforming brands into visual experiences. From concept development to final post-production, we deliver high-end commercial content that drives engagement."
      />

      <StudioServices />

      <ProductionProcess />

      <CreativeEdge />

      <MiniCTA />
    </div>
  );
};

export default CommercialStudio;
