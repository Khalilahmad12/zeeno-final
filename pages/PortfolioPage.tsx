import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, Filter, Briefcase, Rocket } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoSmart Dashboard",
    category: "Web Development",
    description: "A comprehensive IoT dashboard for monitoring renewable energy consumption in real-time.",
    image: "https://www.ecosmart.co.nz/images/investment/GenX_Dashboard.jpg",
    highlight: "Energy efficiency increased by 22%"
  },
  {
    id: 2,
    title: "Luxe Branding Identity",
    category: "Branding",
    description: "Complete visual identity overhaul for a premium fashion house including logo and guidelines.",
    image: "https://cdn.dribbble.com/userupload/42527900/file/still-29df6c9dc428d5b30d79354c78734e3f.png?resize=400x300",
    highlight: "Brand recognition up by 45%"
  },
  {
    id: 3,
    title: "HealthSync Mobile App",
    category: "App Design",
    description: "A cross-platform healthcare application connecting patients with specialized doctors.",
    image: "https://s3-alpha.figma.com/hub/file/2189038749392498171/f3d4bd41-8ff7-44b4-9259-132bd7fee51a-cover.png",
    highlight: "100k+ active monthly users"
  },
  {
    id: 4,
    title: "OmniChannel E-com",
    category: "Web Development",
    description: "Scalable e-commerce architecture supporting millions of SKU with lightning-fast search.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzqPaZHAKxhd-Dk8t19bevJ7uLFQhxZUEUQ&s",
    highlight: "Conversion rate improved by 12%"
  },
  {
    id: 5,
    title: "FinTrack Analytics",
    category: "App Design",
    description: "Complex financial data visualization tool for investment banking professionals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lFfk8wZ7i7dISf4qGI0KFD0fAkI5MN36bw&s",
    highlight: "Processing $2B+ in daily transactions"
  },
  {
    id: 6,
    title: "UrbanGrowth SEO",
    category: "Marketing",
    description: "Intensive SEO and content strategy for an urban planning consultancy firm.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOB-YcVK6Yf8cdPUgnhBiqFOTXlpHAIp2OA&s",
    highlight: "Organic traffic grew by 300%"
  },
  {
    id: 7,
    title: "CloudStream Platform",
    category: "Web Development",
    description: "Media streaming service optimized for high-concurrency and low latency delivery.",
    image: "https://opengraph.githubassets.com/2d8c99ca9554740fd24e0d1ba2c38b7820b94e25b4530bcacd10ae47d1246b7c/recloudstream/cloudstream",
    highlight: "Uptime maintained at 99.99%"
  },
  {
    id: 8,
    title: "SecurePay Wallet",
    category: "App Design",
    description: "Biometric-secured digital wallet for secure peer-to-peer crypto transactions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygbQU7OS4EeK3mkL67E8vbXVi8MIkWJcn4w&s",
    highlight: "Zero security breaches reported"
  },
  {
    id: 9,
    title: "SocialBoost Campaign",
    category: "Marketing",
    description: "Multi-channel influencer marketing campaign for a global tech launch.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YFnUTq2CjQRrBiYkxU1NqVcIEhqdMt1I0Q&s",
    highlight: "Reached over 5M targeted users"
  },
  {
    id: 10,
    title: "ProLearning LMS",
    category: "Web Development",
    description: "A robust learning management system with AI-driven course recommendations.",
    image: "https://elements-resized.envatousercontent.com/elements-cover-images/4f183d01-59d2-405e-b3bf-92a691b69b7c?w=433&cf_fit=scale-down&q=85&format=auto&s=dc73d975e5bfbf6016670237817e1addef5b1ab37fcb82b0f2d977a83e52eadd",
    highlight: "Student engagement up by 60%"
  },
  {
    id: 11,
    title: "Visionary Real Estate",
    category: "Web Development",
    description: "Modern property listing portal with VR tour integrations.",
    image: "https://visionaryhomes.uk/assets/images/social-img.png",
    highlight: "Reduced bounce rate by 35%"
  },
  {
    id: 12,
    title: "Spark Brand Refresh",
    category: "Branding",
    description: "Full logo and identity refresh for a leading sustainable energy startup.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9n2Csmz28kgZyqnkbKpzoQHVR9BFmH_25sQ&s",
    highlight: "Launch featured on TechCrunch"
  },
  {
    id: 13,
    title: "NeoBank Interface",
    category: "App Design",
    description: "User-centric mobile banking experience designed for Gen-Z users.",
    image: "https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2023/06/28183317/Neobank-App-Development-Features-and-the-Process.jpg",
    highlight: "4.9/5 App Store Rating"
  },
  {
    id: 14,
    title: "GreenHarvest AgriTech",
    category: "Web Development",
    description: "Agricultural tracking software for large scale farm management and yield prediction.",
    image: "https://img.freepik.com/premium-vector/flat-design-agriculture-stories-template_692536-1076.jpg?semt=ais_hybrid&w=740&q=80",
    highlight: "Increased crop yield by 15%"
  },
  {
    id: 15,
    title: "Pulse Fitness Tracker",
    category: "App Design",
    description: "Wearable-integrated fitness application with community-based challenges.",
    image: "https://cdn.dribbble.com/userupload/10972370/file/original-b6f7fc60ea6fc1b2998bc8a869e686b9.png?resize=752x&vertical=center",
    highlight: "Reached 1M user milestone"
  }
];

// Premium Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const PortfolioPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Development', 'App Design', 'Branding', 'Marketing'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1️⃣ HERO SECTION (Updated to match Home Tech background) */}
      <section ref={containerRef} className="relative pt-32 pb-24 flex items-center h-screen lg:pb-40 px-4 bg-[#05080F] overflow-hidden text-white">
        
        {/* Cinematic Background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Tech Circuitry" 
            className="w-full h-[120%] object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05080F] via-transparent to-[#05080F]" />
        </motion.div>

        {/* Digital Overlay & Scanner Effect */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(2, 154, 227, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 154, 227, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent blur-[2px]"
          />
        </div>

        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="inline-block bg-brand-blue/10 text-brand-blue px-8 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] mb-6 shadow-sm border border-brand-blue/20"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(2, 154, 227, 0.1)" }}
          >
            Our Work Portfolio
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Showcasing Our Digital <span className="text-brand-orange block">Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore our curated gallery of success stories. We transform complex business 
            challenges into intuitive digital products that drive real-world results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-12 py-4 bg-brand-orange text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-3"
            >
              <Rocket size={18} fill="white" className="text-white" /> Start a Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-12 py-4 bg-white/5 text-white border-2 border-white/20 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 group"
            >
              <Briefcase size={18} /> View Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand-blue" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2️⃣ PORTFOLIO SECTION - Centered Header & Instant Cards */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header - Centered Layout */}
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-brand-dark mb-3 tracking-tight"
            >
              Featured Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            >
              A selection of high-impact digital solutions delivered to our global clients.
            </motion.p>

            {/* Filter Buttons - Centered and in 1 line */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest transition-all duration-300 border ${
                    activeFilter === cat 
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' 
                      : 'bg-slate-50 text-slate-400 border-transparent hover:bg-brand-blue/5 hover:text-brand-blue'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Staggered Portfolio Grid - Uses AnimatePresence for instant feedback on filter change */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <button className="bg-white text-brand-dark px-8 py-3 rounded-xl font-bold text-xs tracking-widest flex items-center gap-2 shadow-xl hover:scale-110 transition-transform">
                        Project Details <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-lg tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2 font-medium">
                      {project.description}
                    </p>
                    
                    <div className="pt-3 border-t border-slate-50 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Impact: <span className="text-green-600">{project.highlight}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="mb-6 inline-block p-6 bg-slate-50 rounded-full">
                <Filter size={48} className="text-slate-200" />
              </div>
              <p className="text-xl text-slate-400 font-bold">No projects found in this category.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-4 text-brand-blue font-bold hover:underline">
                View all projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* 3️⃣ CALL TO ACTION SECTION */}
      <section className="relative py-24 md:py-14 overflow-hidden bg-brand-blue/5">
        <motion.div 
          className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/10 blur-[150px] rounded-full -mr-[20rem] -mt-[20rem]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-orange/5 blur-[120px] rounded-full -ml-[15rem] -mb-[15rem]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mb-8"
            >
              <span className="inline-block py-2 px-6 bg-white border border-slate-100 rounded-full text-brand-blue text-[10px] font-bold tracking-[0.2em] mb-8 shadow-sm">
                Ready to elevate?
              </span>
              
              <h2 className="text-5xl md:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tighter mb-4">
                Ready to build your next <br />
                <span className="text-brand-blue tracking-tight">GLOBAL PRODUCT?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Our team of elite strategists and engineers is standing by to transform 
                your digital roadmap into a market-leading reality.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(254,136,14,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-brand-orange text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(254,136,14,0.3)] flex items-center justify-center gap-3"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-brand-dark rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm"
              >
                Get a Custom Quote
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#029ae3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
};

export default PortfolioPage;