
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Calendar, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      title: "The Future of AI in Web Development",
      category: "Technology",
      date: "Oct 24, 2024",
      excerpt: "Explore how AI coding assistants are changing the workflow for frontend engineers.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6JBX7VTpWVqB_DVHNygsUKd09u4nsJi4Jw&s"
    },
    {
      title: "5 SEO Strategies for Small Businesses",
      category: "Marketing",
      date: "Oct 20, 2024",
      excerpt: "Local SEO tactics that can help you compete with giant competitors without a huge budget.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhIy8dDAjvy0WvtaomQIrYx6m-TWC8pm8JA&s"
    },
    {
      title: "UI/UX Trends That Will Define 2025",
      category: "Design",
      date: "Oct 15, 2024",
      excerpt: "From bento grids to spatial computing, see what's coming next in the world of interface design.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6Mo6CMSfnZsbJ2saRJI3EkswFFu3tNv_CA&s"
    },
    {
      title: "Why Cyber Security is a Business Priority",
      category: "Security",
      date: "Oct 10, 2024",
      excerpt: "Data breaches can be fatal for SMBs. Learn how to protect your assets on a budget.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8ctmYavZFP4Apif_AbWQex8oRgbCxaZzsw&s4"
    },
    {
      title: "Scaling E-commerce with Shopify Plus",
      category: "E-commerce",
      date: "Oct 05, 2024",
      excerpt: "A deep dive into the features that make Shopify Plus the choice for high-volume stores.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAMMWeHSCYGUHHw3h1Qj-GkdjCKMOU65GKw&s"
    },
    {
      title: "Building Mobile First Experiences",
      category: "Design",
      date: "Oct 01, 2024",
      excerpt: "Practical tips for ensuring your website feels like a native app on mobile devices.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq-9KZbqQCFuqRab3GIE1WCkcvxXGQEtAyQ&s"
    }
  ];

  const categories = ["All", "Technology", "Marketing", "Design", "E-commerce", "Security"];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  // Fix: Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Fix: Explicitly type itemVariants as Variants and cast easing to any to resolve easing array inference error
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-12 bg-bg-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Section */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-extrabold text-primary mb-6"
          >
            Latest Articles
          </motion.h2>

          {/* Centered Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border ${
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-primary/20' 
                    : 'bg-white text-text-light border-border hover:border-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content: Blog Grid */}
          <div className="lg:w-2/3">
            <motion.div 
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode='popLayout'>
                {filteredPosts.map((post) => (
                  <motion.article 
                    layout
                    key={post.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-border group hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-text-light text-xs mb-3 font-semibold uppercase tracking-wider">
                        <Calendar size={12} className="text-accent" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-text-light text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link 
                        to="/blog" 
                        className="mt-auto inline-flex items-center text-primary font-extrabold text-xs hover:text-accent transition-all gap-2 group/btn"
                      >
                        Read Full Article 
                        <motion.div 
                          whileHover={{ x: 3 }}
                          className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center text-primary group-hover/btn:bg-accent group-hover/btn:text-white transition-all"
                        >
                          <ArrowRight size={14} />
                        </motion.div>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination - EXACTLY MATCHING SCREENSHOT BUT REDUCED TOP MARGIN */}
            <motion.div 
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              {[1, 2, 3].map(n => (
                <motion.button 
                  key={n} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center border ${
                    n === 1 
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                      : 'bg-white text-primary border-border hover:border-primary'
                  }`}
                >
                  {n}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Search */}
            <motion.div 
              className="bg-white p-6 rounded-[2rem] shadow-sm border border-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <h4 className="text-lg font-bold text-primary mb-4">Search Library</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..." 
                  className="w-full pl-10 pr-4 py-3 bg-bg-soft rounded-xl border border-transparent focus:bg-white focus:border-primary outline-none transition-all text-sm"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div 
              className="bg-white p-6 rounded-[2rem] shadow-sm border border-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-primary mb-5">Quick Reads</h4>
              <div className="space-y-5">
                {posts.slice(0, 3).map((post, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h5 className="font-bold text-primary-dark text-xs leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                      <span className="text-[9px] text-text-light uppercase tracking-widest font-bold mt-1">{post.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Card */}
            <motion.div 
              className="bg-primary-dark p-6 rounded-[2rem] text-white relative overflow-hidden group shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <h4 className="text-xl font-bold mb-3 relative z-10">Get Fresh Updates</h4>
              <p className="text-gray-400 text-xs mb-5 relative z-10 leading-relaxed">Join 5,000+ subscribers for weekly digital insights.</p>
              <div className="space-y-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:bg-white/20 focus:border-primary transition-all text-xs"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-white py-3 rounded-xl font-bold hover:bg-[#ff9c33] transition-all text-xs shadow-md"
                >
                  Subscribe Now
                </motion.button>
              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
