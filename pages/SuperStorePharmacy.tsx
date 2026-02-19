
import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';
import StoreCategories from '../modules/superstore/StoreCategories';
import PharmacyServices from '../modules/superstore/PharmacyServices';
import WhyShopZeeno from '../modules/superstore/WhyShopZeeno';
import SuperstoreDetail from '../modules/superstore/SuperstoreDetail';
import PharmacyDetail from '../modules/superstore/PharmacyDetail';

const SuperStorePharmacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="RETAIL & HEALTHCARE"
        title={<>Your One-Stop <span className="text-brand-orange">Superstore & Pharmacy</span></>}
        description="Providing quality household essentials, fresh groceries, and reliable pharmaceutical services all under one roof. We prioritize your health and convenience."
      />

      <StoreCategories />

      <SuperstoreDetail />

      <PharmacyServices />

      <PharmacyDetail />

      <WhyShopZeeno />

      <MiniCTA />
    </div>
  );
};

export default SuperStorePharmacy;
