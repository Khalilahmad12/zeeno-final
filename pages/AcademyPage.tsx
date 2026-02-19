import React from 'react';
import AcademyHero from '../modules/academy/AcademyHero';
import AcademyAbout from '../modules/academy/AcademyAbout';
import AcademyCourses from '../modules/academy/AcademyCourses';
import AcademyFeatures from '../modules/academy/AcademyFeatures';
import AcademyCTA from '../modules/academy/AcademyCTA';

const AcademyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <AcademyHero />
      <AcademyAbout />
      <AcademyCourses />
      <AcademyFeatures />
      <AcademyCTA />
    </div>
  );
};

export default AcademyPage;