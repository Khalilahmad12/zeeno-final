import React from 'react';
import BlogHero from '../modules/blog/BlogHero';
import FeaturedBlog from '../modules/blog/FeaturedBlog';
import BlogGrid from '../modules/blog/BlogGrid';
import BlogNewsletter from '../modules/blog/BlogNewsletter';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <BlogHero />
      <FeaturedBlog />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
};

export default BlogPage;