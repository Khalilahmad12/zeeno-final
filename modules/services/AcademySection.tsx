
import React from 'react';
import { GraduationCap, ArrowRight, Code, Laptop, PenTool, BarChart3 } from 'lucide-react';

const AcademySection: React.FC = () => {
  const courses = [
    { title: 'Web Development', icon: <Code size={20} /> },
    { title: 'Digital Marketing', icon: <BarChart3 size={20} /> },
    { title: 'Graphic Design', icon: <PenTool size={20} /> },
    { title: 'E-commerce Management', icon: <Laptop size={20} /> }
  ];

  return (
    <section className="py-24 bg-primary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-transparent rounded-[3rem] p-4 md:p-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-border">
              <GraduationCap className="text-accent" size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
              Empowering Youth Through Practical IT Training
            </h2>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Zeeno Skills Academy offers industry-led courses designed to prepare you for the global tech market. 
              Our hands-on training ensures you gain practical experience from day one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {courses.map((course) => (
                <div key={course.title} className="group flex items-center space-x-3 p-4 bg-white border border-border rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500 ease-in-out">
                    {course.icon}
                  </div>
                  <span className="font-bold text-primary-dark text-sm group-hover:text-primary transition-colors duration-300">{course.title}</span>
                </div>
              ))}
            </div>
            <button className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-custom flex items-center space-x-2 shadow-lg hover:scale-105 active:scale-95">
              <span>Explore Academy</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="lg:w-1/2 relative group">
             <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-border">
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
                 alt="Students in IT Academy" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
             </div>
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
