import React from 'react';
import Hero from '../components/Hero';
import Vibe from '../components/Vibe';
import Reviews from '../components/Reviews';
import { motion } from 'framer-motion';
import { pageTransition } from '../components/Hero';
import { Link } from 'react-router-dom';
import { Star, Clock, Award, Heart, Users, Utensils, Coffee, Leaf, ShieldCheck, Truck } from 'lucide-react';

const featuredDishes = [
  {
    name: 'Ghee Podi Idli',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=600&auto=format&fit=crop',
    description: 'Our signature dish with homemade ghee & podi'
  },
  {
    name: 'Mini Ghee Idli',
    price: '₹110',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=600&auto=format&fit=crop',
    description: '14 fluffy button idlis in ghee & sambar'
  },
  {
    name: 'Filter Coffee',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
    description: 'Authentic Kumbakonam degree coffee'
  },
];

const stats = [
  { number: '15+', label: 'Years Serving', icon: Clock },
  { number: '50K+', label: 'Happy Customers', icon: Users },
  { number: '4.8', label: 'Google Rating', icon: Star },
  { number: '25+', label: 'Menu Items', icon: Utensils },
];

const whyChooseUs = [
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'We use only the freshest ingredients sourced daily from local markets.' },
  { icon: ShieldCheck, title: 'Hygienic Kitchen', desc: 'Our kitchen follows the highest standards of cleanliness and hygiene.' },
  { icon: Coffee, title: 'Authentic Recipe', desc: 'Traditional South Indian recipes passed down through generations.' },
  { icon: Heart, title: 'Made with Love', desc: 'Every dish is prepared with care and passion for our customers.' },
];

const Home = () => {
  return (
    <div className="pt-10">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-anna-bg via-anna-dark/30 to-anna-bg" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-card p-6 rounded-2xl"
              >
                <stat.icon className="w-6 h-6 text-anna-primary mx-auto mb-3" />
                <span className="text-3xl md:text-4xl font-display font-bold text-anna-primary">{stat.number}</span>
                <p className="text-anna-muted text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">Customer Favorites</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-shadow-glow">
              Our <span className="text-gradient italic">Signature</span> Dishes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card-hover rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anna-card via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-anna-primary px-3 py-1 rounded-full">
                    <span className="text-sm font-display font-bold text-anna-bg">{dish.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-anna-surface mb-2 group-hover:text-anna-primary transition-colors">{dish.name}</h3>
                  <p className="text-anna-muted text-sm">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
              View Full Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-anna-dark/50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-anna-secondary/5 rounded-full blur-[150px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-anna-primary/5 rounded-full blur-[150px] translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-anna-secondary uppercase tracking-[0.3em] text-sm font-body font-semibold mb-4 block">Why Anna Idli</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-shadow-glow">
              What Makes Us <span className="text-gradient italic">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center card-hover group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-anna-primary/10 flex items-center justify-center group-hover:bg-anna-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-anna-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-anna-surface mb-3">{item.title}</h3>
                <p className="text-anna-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-anna-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-anna-secondary/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="inline-block px-4 py-1 bg-anna-secondary/20 text-anna-secondary text-sm font-body font-semibold rounded-full mb-4">
                  Limited Time Offer
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-anna-surface mb-2">
                  Morning Special Combo
                </h3>
                <p className="text-anna-muted max-w-md">
                  2 Thatte Idli + 1 Medu Vada + Filter Coffee at just <span className="text-anna-primary font-bold">₹99</span>
                </p>
              </div>
              <Link to="/menu" className="btn-primary whitespace-nowrap">
                Order Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Vibe />
      <Reviews />
    </div>
  );
};

export default Home;
