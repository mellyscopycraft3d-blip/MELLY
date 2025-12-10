import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { PORTFOLIO_ITEMS } from '../constants';
import { X, ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const categories = ['All', 'Sales Page', 'Email', 'Ads', 'Website'];
  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 relative">
      <Reveal width="100%">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h1>
          <p className="text-xl text-gray-600 mb-10">Real results for real businesses.</p>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-dark text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <Reveal key={item.id} width="100%">
            <div 
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer bg-white"
              onClick={() => setSelectedProject(item)}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-1 group-hover:text-brand-teal transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
              </div>
              {/* Hover Overlay Stats */}
              <div className="absolute top-4 right-4 bg-brand-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                {item.result}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 md:h-80 object-cover"
            />
            
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <span className="text-brand-teal font-bold text-sm uppercase">{selectedProject.category}</span>
                  <h2 className="text-3xl font-bold mt-1">{selectedProject.title}</h2>
                </div>
                <div className="mt-4 md:mt-0 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold border border-green-100">
                  Result: {selectedProject.result}
                </div>
              </div>
              
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                <h3 className="text-xl font-bold text-brand-dark mb-3">The Challenge</h3>
                <p className="mb-6">
                  The client needed to communicate value quickly without overwhelming the user. The market was saturated, and we needed a unique angle to stand out.
                </p>
                <h3 className="text-xl font-bold text-brand-dark mb-3">The Solution</h3>
                <p className="mb-6">
                  We focused on a "Jobs to be Done" framework, highlighting the transformation rather than the features. The copy was punchy, direct, and empathetic.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                <button className="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-teal transition-colors">
                  View Live Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
