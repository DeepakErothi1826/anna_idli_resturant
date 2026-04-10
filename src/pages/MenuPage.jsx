import React from 'react';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';
import { pageTransition } from '../components/Hero';
import { UtensilsCrossed } from 'lucide-react';

const MenuPage = () => {
  return (
    <motion.div {...pageTransition} className="pt-32 pb-24 min-h-screen">
      {/* Header Section */}
      <div className="text-center px-6 max-w-4xl mx-auto mb-20 relative z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="decorative-line" />
          <UtensilsCrossed size={24} className="text-anna-primary" />
          <div className="decorative-line" />
        </motion.div>
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-anna-secondary uppercase tracking-[0.3em] font-body font-medium text-sm mb-4 block"
        >
          Our Offerings
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-glow"
        >
          Culinary <span className="text-gradient italic">Delights</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl font-body font-light text-anna-muted max-w-2xl mx-auto leading-relaxed"
        >
          Every dish at Anna Idli is prepared with generations of South Indian tradition. 
          Explore our delicate idlis, crispy vadas, and signature filter coffee.
        </motion.p>
      </div>
      
      <Menu />
    </motion.div>
  );
};

export default MenuPage;
