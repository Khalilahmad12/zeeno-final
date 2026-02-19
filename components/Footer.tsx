
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, Globe, Shield } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techServices = [
    { name: 'Web Development', id: 'web-dev' },
    { name: 'App Development', id: 'app-dev' },
    { name: 'UI/UX Design', id: 'uiux' },
    { name: 'Backend & API', id: 'backend' },
    { name: 'Cloud & DevOps', id: 'cloud' },
    { name: 'Database Solutions', id: 'database' }
  ];

  const zeenoOfferings = [
    { name: 'Manpower Supplier', id: 'manpower' },
    { name: 'Superstore & Pharmacy', id: 'superstore' },
    { name: 'Export & Import', id: 'export-import' },
    { name: 'Property Consultancy', id: 'property' },
    { name: 'Advertising Studio', id: 'commercial-studio' },
    { name: 'Skills Academy', id: 'academy' }
  ];

  const socials = [
    { icon: <Facebook size={18} />, label: 'Facebook', href: '#' },
    { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram size={18} />, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-[#05080F] text-white pt-24 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] -mr-64 -mb-64" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid - Using 4 equal columns for symmetrical spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Section 1: Brand & Bio */}
          <div className="space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => handleLink('home')}
            >
              <img src="/logo.jpeg" alt="Zeeno Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Architecting high-performance digital ecosystems and global business solutions that empower industry leaders to scale with confidence.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Tech Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-4 bg-brand-blue rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">IT Solutions</h4>
            </div>
            <ul className="space-y-4">
              {techServices.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleLink(service.id)}
                    className="text-slate-400 hover:text-brand-blue text-[13px] font-bold transition-all flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-brand-blue transition-all" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Diversified Offerings */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-4 bg-brand-orange rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Zeeno Offerings</h4>
            </div>
            <ul className="space-y-4">
              {zeenoOfferings.map((offering) => (
                <li key={offering.id}>
                  <button 
                    onClick={() => handleLink(offering.id)}
                    className="text-slate-400 hover:text-brand-orange text-[13px] font-bold transition-all flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-brand-orange transition-all" />
                    {offering.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact & Location */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-4 bg-white/20 rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Global Reach</h4>
            </div>
            <div className="space-y-6">
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Connect</p>
                  <p className="text-sm font-bold text-white group-hover:text-brand-blue transition-colors">03009274179</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Inquiry Desk</p>
                  <p className="text-sm font-bold text-white truncate group-hover:text-brand-orange transition-colors">info@zeenogloblesolution.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-brand-dark transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Head Office</p>
                  <p className="text-sm font-bold text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 order-2 md:order-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] text-center md:text-left">
              © {currentYear} <span className="text-slate-400">Zeeno Globle Solution Pvt Limited</span>
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Compliance'].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold text-slate-600 hover:text-white uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-slate-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-slate-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SECP Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
