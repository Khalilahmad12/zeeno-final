
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <h2 className="container font-heading font-bold text-primary-dark text-center mb-10">Start Your Project</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">Email</label>
                <input type="email" className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+92..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Web Development" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary-dark mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Tell us about your project..."></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-xl transition-custom hover:scale-105 active:scale-95 shadow-lg"
            >
              Submit Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
