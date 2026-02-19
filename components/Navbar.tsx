
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isOfferingsDropdownOpen, setIsOfferingsDropdownOpen] = useState(false);
  
  // Mobile specific sub-menu states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services', hasDropdown: true },
    { name: 'Offerings', id: 'offerings', hasDropdown: true },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Academy', id: 'academy' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const serviceItems = [
    { name: 'Web Development', id: 'web-dev' },
    { name: 'Mobile App Development', id: 'app-dev' },
    { name: 'UI/UX Design', id: 'uiux' },
    { name: 'Backend & API', id: 'backend' },
    { name: 'Cloud & DevOps', id: 'cloud' },
    { name: 'Database Solutions', id: 'database' }
  ];

  const offeringItems = [
    { name: 'Manpower Supplier', id: 'manpower' },
    { name: 'Super Stores & Pharmacy', id: 'superstore' },
    { name: 'Export & Import', id: 'export-import' },
    { name: 'Property Consultancy', id: 'property' },
    { name: 'Commercial & Advertising Studio', id: 'commercial-studio' },
    { name: 'Skills Academy', id: 'academy' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsOfferingsDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileOfferingsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleMobileParentClick = (id: string) => {
    if (id === 'services') {
      setMobileServicesOpen(!mobileServicesOpen);
    } else if (id === 'offerings') {
      setMobileOfferingsOpen(!mobileOfferingsOpen);
    } else {
      handleNavClick(id);
    }
  };

  const isLinkActive = (id: string) => {
    if (currentPage === id) return true;
    if (id === 'services' && serviceItems.some(s => s.id === currentPage)) return true;
    if (id === 'offerings' && offeringItems.some(o => o.id === currentPage)) return true;
    return false;
  };

  const isDropdownOpen = (id: string) => {
    if (id === 'services') return isServicesDropdownOpen;
    if (id === 'offerings') return isOfferingsDropdownOpen;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white py-3 shadow-md' : 'bg-white md:bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img src="/logo.jpeg" alt="logo" className="h-14 w-52"/>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group"
                onMouseEnter={() => {
                  if (link.id === 'services') setIsServicesDropdownOpen(true);
                  if (link.id === 'offerings') setIsOfferingsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.id === 'services') setIsServicesDropdownOpen(false);
                  if (link.id === 'offerings') setIsOfferingsDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 ${
                    isLinkActive(link.id) 
                    ? 'text-brand-blue' 
                    : 'text-slate-400 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={`w-4 h-4 transition-transform ${isDropdownOpen(link.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu for Services */}
                {link.id === 'services' && isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-3">
                      {serviceItems.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(service.id)}
                          className="w-full text-left px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-brand-light hover:text-brand-blue transition-colors"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown Menu for Offerings */}
                {link.id === 'offerings' && isOfferingsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-3">
                      {offeringItems.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-brand-light hover:text-brand-blue transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="btn-accent lg:hidden xl:block px-6 py-2.5 rounded text-sm font-bold uppercase tracking-widest shadow-md hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <div key={link.id}>
              <button
                onClick={() => handleMobileParentClick(link.id)}
                className={`block w-full text-left text-lg font-bold flex items-center justify-between ${
                  isLinkActive(link.id) ? 'text-brand-blue' : 'text-slate-800'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${(link.id === 'services' && mobileServicesOpen) || (link.id === 'offerings' && mobileOfferingsOpen) ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {link.id === 'services' && mobileServicesOpen && (
                <div className="pl-4 mt-3 space-y-3 border-l-2 border-brand-blue/20 animate-in slide-in-from-top-2 duration-300">
                  {serviceItems.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(service.id)}
                      className="block w-full text-left py-1 text-sm font-semibold text-slate-500 hover:text-brand-blue"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}

              {link.id === 'offerings' && mobileOfferingsOpen && (
                <div className="pl-4 mt-3 space-y-3 border-l-2 border-brand-blue/20 animate-in slide-in-from-top-2 duration-300">
                  {offeringItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left py-1 text-sm font-semibold text-slate-500 hover:text-brand-blue"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full btn-accent py-4 rounded font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
