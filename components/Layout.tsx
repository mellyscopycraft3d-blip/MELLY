import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { BRAND, NAVIGATION } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark bg-brand-white">
      {/* Sticky Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-white/95 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-bold cursor-pointer flex items-center gap-2"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-brand-teal">Melly’s</span> Copycraft
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {NAVIGATION.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-teal ${
                  currentPage === item.id ? 'text-brand-teal font-bold' : 'text-brand-dark'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-white shadow-xl border-t border-gray-100">
            <div className="flex flex-col py-4 px-6 gap-4">
              {NAVIGATION.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-medium py-2 ${
                    currentPage === item.id ? 'text-brand-teal' : 'text-brand-dark'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Melly’s Copycraft</h3>
              <p className="text-gray-400 text-sm max-w-xs">
                Premium conversion copywriting services that help brands speak human and sell more.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-teal transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">© {BRAND.year} {BRAND.name} by {BRAND.owner}</p>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <Mail size={16} />
              {BRAND.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
