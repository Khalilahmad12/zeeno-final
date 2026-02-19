
import React from 'react';
import Hero from '../modules/home/Hero';
import Stats from '../modules/home/Stats';
import AboutHighlight from '../modules/home/About';
import Services from '../modules/home/Services';
import AcademyHighlight from '../modules/home/AcademyHighlight';
import Portfolio from '../modules/home/Portfolio';
import Technologies from '../modules/home/Technologies';
import Testimonials from '../modules/home/Testimonials';
import ContactForm from '../modules/home/Contact';
import FinalCTA from '../modules/home/FinalCTA';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />
      
      {/* 3. About Highlight (Mission, Vision, Values) */}
      <section className="py-xl bg-white">
        <AboutHighlight onNavigate={onNavigate} />
      </section>
      
      {/* 4. Services Overview (Focus Section) */}
      <section className="py-xl bg-brand-soft">
        <Services />
      </section>
      
      {/* 5. Skills Academy Highlight */}
      <section className="py-xl bg-white">
        <AcademyHighlight onNavigate={onNavigate} />
      </section>
      
      {/* 6. Portfolio Highlights (Advanced Integrated Version) */}
      <section className="py-xl bg-brand-soft">
        <Portfolio />
      </section>

       <section className="py-xl relative z-20">
        <Stats />
      </section>
      
      {/* 7. Technologies Stack */}
      <section className="py-xl bg-white">
        <Technologies />
      </section>
      
      {/* 8. Client Testimonials */}
      <section className="py-xl bg-brand-dark text-white">
        <Testimonials />
      </section>
      
      {/* 9. Call to Action / Project Inquiry */}
      <section id="contact" className="py-xl bg-white">
        <ContactForm />
      </section>
      
      {/* Final CTA is an extra powerful close before footer */}
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
};

export default Home;
