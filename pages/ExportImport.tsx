
import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';
import ExportServices from '../modules/exportimport/ExportServices';
import ImportServices from '../modules/exportimport/ImportServices';
import TradeAdvantages from '../modules/exportimport/TradeAdvantages';
import ExportDetail from '../modules/exportimport/ExportDetail';
import ImportDetail from '../modules/exportimport/ImportDetail';

const ExportImport: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="GLOBAL TRADE"
        title={<>Bridging Markets with <span className="text-brand-orange">Export & Import</span></>}
        description="Empowering global commerce through reliable supply chains, premium product sourcing, and seamless international logistics. We take your business beyond borders."
      />

      <ExportServices />

      <ExportDetail />

      <ImportServices />

      <ImportDetail />

      <TradeAdvantages />

      <MiniCTA />
    </div>
  );
};

export default ExportImport;
