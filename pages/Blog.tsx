import React from 'react';
import { Reveal } from '../components/Reveal';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <Reveal width="100%">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Copywriting Insights</h1>
          <p className="text-xl text-gray-600">
            Tips, tricks, and strategies to improve your conversion rates.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post, index) => (
          <Reveal key={post.id} delay={index * 100} className="h-full">
            <article className="group h-full flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-teal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-sm mb-6 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="flex items-center gap-2 text-brand-teal font-bold text-sm">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
