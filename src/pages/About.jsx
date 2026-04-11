import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../components/Hero';
import { Heart, Award, Clock, Users, ChefHat, Utensils, Leaf, Star } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  
  const values = [
    { icon: Heart, title: 'Made with Love', desc: 'Every dish is prepared with care and passion' },
    { icon: Award, title: 'Premium Quality', desc: 'We use only the finest ingredients' },
    { icon: Clock, title: 'Fresh Daily', desc: 'Idlis made fresh every morning' },
    { icon: Users, title: 'Family Tradition', desc: 'Three generations of culinary expertise' },
  ];

  const journey = [
    { year: '2010', title: 'The Beginning', desc: 'Anna Idli opens its doors in Raipur with a simple menu of authentic Thatte Idlis.' },
    { year: '2013', title: 'Growing Love', desc: 'Word spreads about our unique Ghee Podi recipe. Customers line up daily.' },
    { year: '2016', title: 'Jain Menu', desc: 'We introduce the Jain-friendly menu, becoming the first in Raipur to do so.' },
    { year: '2020', title: 'Digital Era', desc: 'Launch of online ordering and delivery services during challenging times.' },
    { year: '2024', title: 'Recognition', desc: 'Featured in local food guides as the best South Indian restaurant in Raipur.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
    'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=600',
    'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=600',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600',
  ];

  const chefSpecials = [
    { name: 'Ghee Podi Idli', price: '?90', desc: 'Our signature dish with 15-year-old family recipe' },
    { name: 'Mini Idli Sambar', price: '?110', desc: '14 delicate button idlis in rich sambar' },
    { name: 'Filter Coffee', price: '?40', desc: 'Traditional brass-filtered Kumbakonam style' },
  ];

  return (
    <div className="pt-32 pb-48 min-h-screen relative" ref={containerRef}>
      
      {/* Heritage Background Text */}
      <div className="absolute top-0 w-full text-center pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <h1 className="text-[15vw] font-display leading-none">SINCE 2010</h1>
        <h1 className="text-[15vw] font-display leading-none -mt-4">TRADITION</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pointer-events-auto mt-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-shadow-glow">
            A Taste of <span className="text-gradient italic">Tradition</span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" 
                alt="Anna Idli heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anna-bg via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl"
            >
              <span className="text-4xl font-display font-bold text-anna-primary">15+</span>
              <p className="text-anna-muted font-body text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-anna-surface leading-tight">
              The Authentic Taste of <span className="text-anna-primary">Raipur</span>
            </h2>
            
            <p className="text-lg text-anna-muted font-body leading-relaxed">
              At Anna Idli, we believe that simple ingredients, treated with respect and tradition, 
              create the most memorable meals. Our journey began with a singular focus: to perfect 
              the art of the Thatte Idli.
            </p>
            
            <p className="text-lg text-anna-muted font-body leading-relaxed">
              Hailing from the bustling streets of Karnataka, we brought this culinary masterpiece 
              to the heart of Raipur, enriching it with our signature homemade Ghee Podi that is 
              freshly ground daily using a secret family recipe.
            </p>

            <p className="text-lg text-anna-muted font-body leading-relaxed">
              What started as a small eatery has grown into a beloved destination for food lovers 
              seeking authentic South Indian flavors. Our commitment to quality remains unchanged: 
              fresh ingredients, traditional recipes, and a warm, welcoming atmosphere.
            </p>

            <div className="decorative-line" />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl text-center card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-anna-primary/10 flex items-center justify-center">
                <value.icon size={24} className="text-anna-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-anna-surface mb-2">{value.title}</h3>
              <p className="text-anna-muted font-body text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chef's Special Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">From Our Kitchen</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-shadow-glow">
              Chef's <span className="text-gradient italic">Specials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefSpecials.map((special, index) => (
              <motion.div
                key={special.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover p-8 rounded-2xl text-center"
              >
                <ChefHat className="w-10 h-10 text-anna-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-anna-surface mb-2">{special.name}</h3>
                <p className="text-anna-muted text-sm mb-4">{special.desc}</p>
                <span className="text-anna-primary font-display font-bold text-xl">{special.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">Over The Years</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-shadow-glow">
              Our <span className="text-gradient italic">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-anna-primary/30 hidden md:block" />

            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center gap-8 mb-12 "
              >
                  <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-anna-primary/20 text-anna-primary font-display font-bold rounded-full mb-2">{item.year}</span>
                  <h3 className="text-xl font-display font-bold text-anna-surface mb-2">{item.title}</h3>
                  <p className="text-anna-muted">{item.desc}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-anna-primary border-4 border-anna-bg z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-shadow-glow">
              Our <span className="text-gradient italic">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img 
                  src={img} 
                  alt="Gallery image"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: index === 0 ? '400px' : '200px' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 rounded-3xl"
        >
          <Leaf className="w-12 h-12 text-anna-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-anna-surface mb-4">
            Ready to Taste the Tradition?
          </h2>
          <p className="text-anna-muted max-w-xl mx-auto mb-8">
            Visit us today and experience the authentic flavors of South India. 
            Our doors are always open to serve you the best Thatte Idli in Raipur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/menu" className="btn-primary">View Menu</a>
            <a href="/contact" className="px-8 py-4 glass rounded-full font-body font-medium text-anna-surface hover:bg-white/10 transition-all">Find Us</a>
          </div>
        </motion.div>
      </div>
</div>
  );
};

export default About;
