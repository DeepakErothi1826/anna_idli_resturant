import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Vibe = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="vibe" ref={containerRef} className="relative h-[120vh] overflow-hidden flex items-center justify-center">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-anna-bg/80 via-anna-bg/60 to-anna-bg" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-anna-secondary uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-body font-semibold mb-4 sm:mb-6 block"
          >
            Our Atmosphere
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-anna-surface leading-tight mb-6 sm:mb-8"
          >
            A Traditional Ambiance<br/>
            <span className="text-gradient italic">Crafted for Modern Souls</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl text-anna-muted font-body leading-relaxed mb-6 sm:mb-10 max-w-2xl mx-auto"
          >
            From the fresh banana leaves to the polished stainless steel, every detail at Anna Idli 
            is designed to transport you to the heart of South India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <Link to="/menu" className="btn-primary text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8">
              Explore Menu
            </Link>
            <Link 
              to="/contact" 
              className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-body font-medium text-anna-surface hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              Find Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {[
            { number: '50+', label: 'Seating Capacity' },
            { number: 'AC', label: 'Air Conditioned' },
            { number: 'WFH', label: 'WiFi Available' },
            { number: 'PKG', label: 'Parking Space' },
          ].map((feature) => (
            <div key={feature.label} className="glass p-3 sm:p-4 rounded-xl">
              <span className="text-xl sm:text-2xl font-display font-bold text-anna-primary">{feature.number}</span>
              <p className="text-[10px] sm:text-xs text-anna-muted uppercase tracking-wider mt-1">{feature.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vibe;
