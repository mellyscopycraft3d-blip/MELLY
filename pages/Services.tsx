import React from 'react';
import { Reveal } from '../components/Reveal';
import { SERVICES } from '../constants';
import { CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <Reveal width="100%">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Copywriting Packages</h1>
          <p className="text-xl text-gray-600">
            Stop guessing what to say. Get strategic copy designed to convert visitors into buyers.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">
        {SERVICES.map((service, index) => (
          <Reveal key={service.id} delay={index * 100} className="h-full">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-brand-white p-4 rounded-xl">
                  <service.icon className="text-brand-teal w-8 h-8" />
                </div>
                <div className="bg-brand-dark text-white text-sm font-bold px-4 py-2 rounded-full">
                  {service.price}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-2">Deliverables</h4>
                {['In-depth Research Phase', 'Competitor Analysis', '2 Rounds of Revisions', 'Strategy Call'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-brand-teal flex-shrink-0" />
                    <span className="text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onNavigate('contact')}
                className="w-full py-4 border-2 border-brand-teal text-brand-teal font-bold rounded-lg hover:bg-brand-teal hover:text-white transition-all"
              >
                Book This Service
              </button>
            </div>
          </Reveal>
        ))}
      </div>
      
      <div className="mt-20 bg-brand-white p-10 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4">Need something custom?</h3>
        <p className="text-gray-600 mb-8">I also offer day rates and retainer packages for ongoing needs.</p>
        <button 
           onClick={() => onNavigate('contact')}
           className="text-brand-teal font-bold border-b-2 border-brand-teal pb-1 hover:text-brand-tealHover"
        >
          Let's talk about your project
        </button>
      </div>
    </div>
  );
};
