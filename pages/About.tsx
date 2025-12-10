import React from 'react';
import { Reveal } from '../components/Reveal';
import { BRAND } from '../constants';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
        {/* Headshot */}
        <Reveal className="w-full md:w-1/2">
          <div className="relative">
             <div className="absolute inset-0 bg-brand-teal translate-x-4 translate-y-4 rounded-xl -z-10"></div>
             <img 
               src="https://picsum.photos/seed/portrait_melly/600/700" 
               alt={`${BRAND.owner} - Conversion Copywriter`}
               className="w-full rounded-xl shadow-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <p className="text-xs font-bold text-gray-500">FOUNDER</p>
                <p className="font-bold text-brand-dark">{BRAND.owner}</p>
             </div>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Not your average word-slinger.</h1>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Hey, I’m <strong>{BRAND.owner}</strong> — also known as {BRAND.nickname}.
            </p>
            <p>
              I’m an ex-<strong>[Insert Previous Career Role]</strong> turned conversion copywriter. I didn't start in marketing. I started in <strong>[Industry]</strong>, where I learned that clarity isn't just nice to have—it's survival.
            </p>
            <p>
              Most businesses struggle not because their product is bad, but because their story is messy. They talk about features when they should be talking about transformation.
            </p>
            <p>
              At Melly's Copycraft, I combine deep customer research with persuasion psychology to write words that don't just sound good—they sell.
            </p>
            <p className="font-semibold text-brand-teal">
              My philosophy? Sell the destination, not the plane ticket.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal width="100%">
        <div className="bg-white border border-gray-100 rounded-2xl p-12 shadow-xl">
           <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
             <div className="p-4">
                <div className="flex justify-center mb-4 text-brand-teal"><DollarSign size={32} /></div>
                <h3 className="text-4xl font-extrabold mb-2">$3M+</h3>
                <p className="text-gray-500 uppercase tracking-wide text-sm">Client Revenue Generated</p>
             </div>
             <div className="p-4">
                <div className="flex justify-center mb-4 text-brand-teal"><Users size={32} /></div>
                <h3 className="text-4xl font-extrabold mb-2">50+</h3>
                <p className="text-gray-500 uppercase tracking-wide text-sm">Happy Clients</p>
             </div>
             <div className="p-4">
                <div className="flex justify-center mb-4 text-brand-teal"><TrendingUp size={32} /></div>
                <h3 className="text-4xl font-extrabold mb-2">3.5x</h3>
                <p className="text-gray-500 uppercase tracking-wide text-sm">Avg. ROI Uplift</p>
             </div>
           </div>
        </div>
      </Reveal>
    </div>
  );
};
