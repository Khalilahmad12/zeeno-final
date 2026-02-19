
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Briefcase, Users, Globe } from 'lucide-react';

const recruitmentServices = [
  {
    title: 'Skilled Labor',
    desc: 'Highly trained masons, electricians, welders, and heavy machinery operators for industrial projects.',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: 'Office Staff',
    desc: 'Professional administrative assistants, HR coordinators, accountants, and data entry specialists.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'Technical Workers',
    desc: 'Expert engineers, IT technicians, site supervisors, and specialized maintenance crews.',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Overseas Recruitment',
    desc: 'Global talent acquisition services connecting international employers with top-tier professional talent.',
    icon: <Globe className="w-8 h-8" />
  }
];

const RecruitmentServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Recruitment <span className="text-brand-orange">Services</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Connecting elite talent with industry leaders. We specialize in providing comprehensive staffing solutions tailored to your unique organizational goals and operational demands.
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recruitmentServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4  group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentServices;
