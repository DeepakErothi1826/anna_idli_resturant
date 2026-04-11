import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-anna-primary flex items-center justify-center">
            <span className="text-anna-bg font-display font-bold text-lg sm:text-xl">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-display font-bold text-anna-surface tracking-tight leading-none">
              Anna <span className="text-anna-primary">Idli</span>
            </span>
            <span className="text-[8px] sm:text-[10px] text-anna-muted uppercase tracking-widest">Since 2010</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`relative font-body font-medium text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.path 
                  ? 'text-anna-primary' 
                  : 'text-anna-surface hover:text-anna-primary'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-anna-primary"
                />
              )}
            </Link>
          ))}
          
          <Link 
            to="/menu" 
            className="btn-primary text-sm py-3 px-6"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-anna-surface hover:text-anna-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-6 pb-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 font-body font-medium transition-colors rounded-lg ${
                      location.pathname === link.path 
                        ? 'text-anna-primary bg-anna-primary/10' 
                        : 'text-anna-surface hover:text-anna-primary hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
