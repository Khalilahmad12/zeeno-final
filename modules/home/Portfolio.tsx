
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  desc: string;
  longDesc: string;
  image: string;
  imageAlt: string;
  tags: string[];
  demoUrl?: string;
  color: string;
}

const PortfolioCard = ({ p, onSelect }: { p: Project; onSelect: (p: Project) => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={() => onSelect(p)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container - Natural colors, no heavy overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={p.image}
          alt={p.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle top-left badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark font-bold text-[9px] uppercase tracking-widest rounded-full border border-slate-100 shadow-sm">
            {p.category}
          </span>
        </div>
      </div>

      {/* Content Section - High Legibility, No Blur */}
      <div className="p-8 flex flex-col gap-3 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[2px] bg-brand-orange group-hover:w-8 transition-all duration-500" />
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Case Study</span>
        </div>

        <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-orange transition-colors duration-300 tracking-tight">
          {p.title}
        </h3>

        <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
          {p.desc}
        </p>

        <div className="mt-4 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex gap-2">
            {p.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Shoping Store',
      category: 'E-commerce',
      desc: 'A responsive online store designed for smooth browsing, fast checkout, and easy product management.',
      longDesc: 'A fully responsive e-commerce solution built to simplify online selling. The platform includes product catalogs, cart functionality, secure payment gateways, and order tracking. With an intuitive admin panel, businesses can manage products, monitor sales.',
      image: 'https://helpiewp.com/wp-content/uploads/2018/08/Create-a-free-ecommerce-website-1280x720.png',
      imageAlt: 'Enterprise Solution',
      tags: ['Next.js', 'Redis', 'AWS'],
      color: 'bg-brand-blue',
      demoUrl: '#'
    },
    {
      title: 'Zeeno Workforce',
      category: 'Manpower Supply',
      desc: 'A smart manpower supply platform for managing recruitment, deployment, and real-time staff tracking.',
      longDesc: 'This manpower management system streamlines recruitment, staff allocation, and workforce tracking for multiple industries. It features candidate profiles, job assignments, attendance tracking, and reporting tools, enabling businesses to manage their workforce efficiently with real-time insights.',
      image: 'https://cdn.prod.website-files.com/5dbc34a89684007e327a6c35/60c56dcd8e1cadfbcf2ba1d5_Workday_screenshot-enterprise-workforce-planning-skills-analysis-desktop-2.jpg',
      imageAlt: 'Manpower Management Dashboard',
      tags: ['Recruitment', 'Workforce Management', 'Dashboard'],
      color: 'bg-brand-blue',
      demoUrl: '#'
    },
    {
      title: 'Zeeno WordPress Hub',
      category: 'WordPress Development',
      desc: 'Custom WordPress website with responsive design, dynamic content management, and plugin integration.',
      longDesc: 'Built on WordPress, this platform features a fully responsive interface, optimized performance, and easy-to-manage content. It includes custom themes, plugin integrations, and SEO‑friendly structure, allowing businesses to update content seamlessly while maintaining a professional online presence.',
      image: 'https://sm.pcmag.com/pcmag_me/feature/h/how-to-get/how-to-get-started-with-wordpress_fpyk.jpg',
      imageAlt: 'WordPress development on laptop',
      tags: ['WordPress', 'PHP', 'Elementor'],
      color: 'bg-blue-500',
      demoUrl: '#'
    },
    {
      title: 'Zeeno Trade Hub',
      category: 'Export & Import',
      desc: 'A comprehensive platform for managing international export and import operations efficiently.',
      longDesc: 'This platform streamlines global trade by handling shipments, monitoring customs documentation, and tracking orders in real time. It offers supplier and buyer management, logistics tracking, and insightful dashboards to optimize supply chains and reduce delays in international trade.',
      image: 'https://amertranslogistics.com/wp-content/uploads/2022/06/Import-Export-Logistics.jpeg',
      imageAlt: 'Export and import logistics platform',
      tags: ['Trade', 'Supply Chain', 'Logistics'],
      color: 'bg-green-600',
      demoUrl: '#'
    },
    {
      title: 'Zeeno App Hub',
      category: 'App Development',
      desc: 'A cross-platform mobile app delivering seamless user experience with modern UI/UX design.',
      longDesc: 'This app project focuses on building high-performance mobile applications with smooth navigation, interactive features, and intuitive design. Leveraging cross-platform frameworks, it ensures consistent functionality across iOS and Android, while incorporating analytics and push notifications to enhance user engagement.',
      image: 'https://instamobile.io/assets/images/mobile-app-templates-react-native-9413df1b78507fe4fdaa0fffe3091d92.png',
      imageAlt: 'Mobile App Development',
      tags: ['Flutter', 'React Native', 'Firebase'],
      color: 'bg-indigo-500',
      demoUrl: '#'
    },
    {
      title: 'Zeeno UI/UX Studio',
      category: 'UI/UX Design',
      desc: 'User-centric interface design with intuitive interactions and visual storytelling.',
      longDesc: 'This project showcases UI/UX design for digital products, focusing on wireframing, prototyping, and user flows. Using tools like Figma and Adobe XD, it emphasizes clean layouts, seamless navigation, and engaging interfaces to enhance overall user experience across web and mobile platforms.',
      image: 'https://t3.ftcdn.net/jpg/02/99/30/86/360_F_299308660_CpTRZNsD4qRyLoNKqVAma1rJ0RLFo0Gq.jpg',
      imageAlt: 'UI/UX Design Dashboard',
      tags: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing'],
      color: 'bg-pink-500',
      demoUrl: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 rounded-lg bg-brand-light text-brand-blue font-bold tracking-[0.4em] text-[10px] mb-6"
        >
          Recent Projects
        </motion.div>

        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-brand-dark tracking-tighter leading-tight">
          Delivering <span className="text-brand-orange">Digital</span> Engineering
        </h3>

        <p className="max-w-2xl mx-auto text-slate-500 font-bold leading-relaxed text-sm md:text-base tracking-widest opacity-80">
          A showcase of high-performance architectural excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
        {projects.map((p, idx) => (
          <PortfolioCard key={idx} p={p} onSelect={setSelectedProject} />
        ))}
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo(0, 0)}
          className="group relative bg-brand-dark text-white px-14 py-5 rounded-xl font-bold tracking-[0.2em] text-[11px] overflow-hidden shadow-xl transition-all"
        >
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full max-w-6xl h-auto lg:h-[75vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row antialiased"
            >
              <div className="lg:w-1/2 h-[250px] lg:h-full relative overflow-hidden bg-slate-100">
                <img src={selectedProject.image} alt={selectedProject.imageAlt} className="w-full h-full object-cover" />
              </div>

              <div className="lg:w-1/2 h-full p-8 lg:p-16 overflow-y-auto bg-white custom-scrollbar">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-dark hover:bg-brand-orange hover:text-white transition-all z-20 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-10">
                  <div className="text-[11px] font-bold text-brand-blue uppercase tracking-[0.4em] mb-4">Project Narrative</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 leading-tight tracking-tighter uppercase">
                    {selectedProject.title}
                  </h3>
                  <div className="h-1.5 w-20 bg-brand-orange rounded-full mb-8" />
                  <p className="text-xl font-bold text-slate-800 leading-tight">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Architecture</h4>
                    <p className="text-slate-600 leading-relaxed text-base font-medium">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className={`w-full ${selectedProject.color} text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center shadow-xl hover:brightness-110 transition-all`}>
                      Live Project Analytics
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FE880E; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default Portfolio;
