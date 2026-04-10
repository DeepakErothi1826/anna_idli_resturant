import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, filter: 'blur(10px)' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const Hero = () => {
  return (
    <motion.section 
      {...pageTransition}
      className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-anna-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-anna-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-8 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="text-anna-primary fill-anna-primary" />
                <span className="text-anna-secondary font-body font-medium tracking-widest uppercase text-sm">
                  Serving since 2010
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05]">
                The Best <br />
                <span className="text-gradient italic">Thatte Idli</span><br />
                in Raipur
              </h1>
              
              <p className="text-lg md:text-xl text-anna-muted font-body font-light max-w-md leading-relaxed">
                Experience the softest, most flavorful Ghee Podi Idlis and 
                perfectly brewed Filter Coffee. A taste of South India in the heart of Raipur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/menu" className="btn-primary flex items-center gap-2 group">
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 border border-white/20 rounded-full font-body font-medium text-anna-surface hover:border-anna-primary hover:text-anna-primary transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-12 pt-4"
            >
              <div>
                <span className="text-3xl font-display font-bold text-anna-primary">15+</span>
                <p className="text-anna-muted text-sm font-body">Years of Legacy</p>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-anna-primary">50K+</span>
                <p className="text-anna-muted text-sm font-body">Happy Customers</p>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-anna-primary">4.8</span>
                <p className="text-anna-muted text-sm font-body">Rating</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-anna-primary/30" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-anna-secondary/30" />
              
              <div className="relative rounded-3xl overflow-hidden glow-primary">
                <img
                  src="https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop"
                  alt="Delicious Thatte Idli"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anna-bg/40 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-2xl"
              >
                <span className="text-anna-primary font-display font-bold text-lg">?60</span>
                <span className="text-anna-muted text-sm ml-2">starting</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-anna-primary fill-anna-primary" />
                  <span className="text-anna-primary font-display font-bold text-sm">4.8</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
