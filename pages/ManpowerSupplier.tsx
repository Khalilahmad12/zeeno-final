
import React, { useEffect } from 'react';
import ServiceHero from '../modules/services/ServiceHero';
import MiniCTA from '../components/MiniCTA';
import RecruitmentServices from '../modules/manpowersupplier/RecruitmentServices';
import IndustriesServe from '../modules/manpowersupplier/IndustriesServe';
import ManpowerProcess from '../modules/manpowersupplier/ManpowerProcess';
import TalentReach from '../modules/manpowersupplier/TalentReach';
import WorkforceSupport from '../modules/manpowersupplier/WorkforceSupport';

const ManpowerSupplier: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServiceHero 
        badge="MANPOWER SOLUTIONS"
        title={<>Reliable Manpower for <span className="text-brand-orange">Seamless Operations</span></>}
        description="We bridge the gap between businesses and talent. As a leading manpower supplier, we provide skilled, semi-skilled, and professional labor to drive your success."
      />

      <RecruitmentServices />

      <IndustriesServe />

      <TalentReach />

      <ManpowerProcess />

      <WorkforceSupport />

      <MiniCTA />
    </div>
  );
};

export default ManpowerSupplier;
