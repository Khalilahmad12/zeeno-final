
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages - using standard relative paths
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AcademyPage from './pages/AcademyPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

// New Service-Specific Pages
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import BackendAPI from './pages/BackendAPI';
import CloudDevOps from './pages/CloudDevOps';
import DatabaseSolutions from './pages/DatabaseSolutions';
import ManpowerSupplier from './pages/ManpowerSupplier';
import SuperStorePharmacy from './pages/SuperStorePharmacy';
import ExportImport from './pages/ExportImport';
import PropertyConsultancy from './pages/PropertyConsultancy';
import CommercialStudio from './pages/CommercialStudio';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About onNavigate={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'academy': return <AcademyPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      
      // New Routes
      case 'web-dev': return <WebDevelopment />;
      case 'app-dev': return <AppDevelopment />;
      case 'uiux': return <UIUXDesign />;
      case 'backend': return <BackendAPI />;
      case 'cloud': return <CloudDevOps />;
      case 'database': return <DatabaseSolutions />;
      case 'manpower': return <ManpowerSupplier />;
      case 'superstore': return <SuperStorePharmacy />;
      case 'export-import': return <ExportImport />;
      case 'property': return <PropertyConsultancy />;
      case 'commercial-studio': return <CommercialStudio />;
      
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30 selection:text-brand-blue overflow-x-hidden bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="min-h-[80vh]">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <ScrollToTop />
    </div>
  );
};

export default App;
