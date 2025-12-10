import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { BRAND, SERVICES, TESTIMONIALS, PORTFOLIO_ITEMS } from '../constants';
import { Reveal } from '../components/Reveal';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 mt-10 md:mt-20">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Words That Sell <span className="text-brand-teal italic">Without</span> Sounding Salesy.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Hi, I'm {BRAND.nickname}. I turn cold traffic into loyal customers with psychological copywriting that hits the heart and opens the wallet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-brand-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-tealHover transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-teal/20"
              >
                Get Free Audit
              </button>
              <button 
                onClick={() => onNavigate('portfolio')}
                className="bg-white border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-dark hover:text-white transition-all"
              >
                View Work
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services Teaser */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">How I Can Help</h2>
                <p className="text-gray-600 max-w-lg">Strategic copy for every stage of your funnel.</p>
              </div>
              <button onClick={() => onNavigate('services')} className="hidden md:flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all">
                See all services <ArrowRight size={20} />
              </button>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <Reveal key={service.id} delay={index * 100} className="h-full">
                <div 
                  className="p-8 bg-brand-white border border-gray-100 rounded-xl hover:shadow-xl transition-shadow h-full cursor-pointer group"
                  onClick={() => onNavigate('services')}
                >
                  <service.icon className="text-brand-teal mb-6 w-12 h-12 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-sm font-semibold text-brand-teal flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={16} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Wins</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PORTFOLIO_ITEMS.slice(0, 4).map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div 
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
                onClick={() => onNavigate('portfolio')}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-teal font-bold text-2xl mb-2">{item.result}</p>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <button 
             onClick={() => onNavigate('portfolio')}
             className="inline-flex items-center gap-2 border-b-2 border-brand-dark pb-1 font-bold hover:text-brand-teal hover:border-brand-teal transition-colors"
          >
            View Full Portfolio <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6">
           <Reveal>
            <h2 className="text-3xl font-bold mb-16 text-center">Client Love</h2>
           </Reveal>
           <div className="grid md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <Reveal key={t.id} delay={i * 100} className="h-full">
                 <div className="bg-gray-800 p-8 rounded-xl relative h-full">
                   <div className="absolute -top-4 left-8 bg-brand-teal p-2 rounded-full">
                     <Star fill="white" size={20} />
                   </div>
                   <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                   <div>
                     <p className="font-bold">{t.author}</p>
                     <p className="text-sm text-gray-500">{t.role}</p>
                   </div>
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mb-10">
        <Reveal width="100%">
          <div className="bg-brand-teal rounded-3xl p-10 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Stop leaving money on the table with weak copy. Let's optimize your messaging today.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-teal px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get My Free Audit
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
