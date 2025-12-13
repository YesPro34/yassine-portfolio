import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Skills', href: '#skills' },
  { name: 'Studies', href: '#studies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#030014]/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
          YassineEchamkh<span className="text-primary">.me</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
             href="mailto:echamkh.yassine@gmail.com"
             className="ml-4 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-[#030014] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-gray-400 hover:text-white"><Github size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Mail size={24} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;