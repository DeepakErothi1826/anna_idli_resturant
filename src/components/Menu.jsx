import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Coffee, Flame } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Classic Thatte Idli',
    category: 'Regular',
    price: '?60',
    desc: 'Served with signature coconut chutney and piping hot sambar. Soft, fluffy, and made fresh every morning.',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 2,
    name: 'Ghee Podi Thatte Idli',
    category: 'Special',
    price: '?90',
    desc: 'Drenched in pure homemade ghee and spicy podi. Our signature dish that keeps customers coming back.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    badge: "Chef's Pick"
  },
  {
    id: 3,
    name: 'Jain Thatte Idli',
    category: 'Jain',
    price: '?65',
    desc: 'No onion, no garlic, pure authentic taste. Prepared with our special Jain-friendly recipe.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 4,
    name: 'Filter Coffee',
    category: 'Drinks',
    price: '?40',
    desc: 'Authentic Kumbakonam degree coffee. Brewed with precision using traditional brass filters.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 5,
    name: 'Mini Ghee Idli (14 pcs)',
    category: 'Special',
    price: '?110',
    desc: '14 fluffy button idlis floating in sambar, drizzled with generous amounts of pure ghee.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Medu Vada',
    category: 'Regular',
    price: '?50',
    desc: 'Crispy golden lentil donuts served with chutneys. Crunchy outside, soft inside, made with urad dal.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 7,
    name: 'Rava Idli',
    category: 'Special',
    price: '?70',
    desc: 'Semolina-based idli with cashews and curry leaves. A quick yet delicious South Indian delight.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 8,
    name: 'Masala Chai',
    category: 'Drinks',
    price: '?30',
    desc: 'Aromatic spiced tea brewed with ginger, cardamom, and our secret blend of spices.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 9,
    name: 'Kesari Bath',
    category: 'Special',
    price: '?60',
    desc: 'Sweet semolina dish adorned with saffron, ghee, cashews, and raisins. A Karnataka specialty.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 10,
    name: 'Masala Dosa',
    category: 'Regular',
    price: '?80',
    desc: 'Crispy rice crepe filled with spiced potato curry. Served with coconut chutney and sambar.',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 11,
    name: 'Mysore Bajji',
    category: 'Regular',
    price: '?40',
    desc: 'Deep-fried potato fritters in spiced chickpea batter. Crispy snack served with mint chutney.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 12,
    name: 'Ven Pongal',
    category: 'Special',
    price: '?70',
    desc: 'Comforting rice and lentil dish tempered with ghee, cumin, pepper, and curry leaves.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 13,
    name: 'Upma',
    category: 'Regular',
    price: '?50',
    desc: 'Savory semolina porridge with vegetables, curry leaves, and mustard seeds. A breakfast favorite.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 14,
    name: 'Rava Dosa',
    category: 'Special',
    price: '?75',
    desc: 'Crispy semolina dosa with cumin and pepper. No fermentation required, instant and delicious.',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 15,
    name: 'Set Dosa',
    category: 'Special',
    price: '?65',
    desc: 'Soft, spongy mini dosas served in a set of three with chutneys and sambar.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 16,
    name: 'Jain Thali',
    category: 'Jain',
    price: '?150',
    desc: 'Complete meal with Jain-friendly idli, vada, rice, dal, and vegetables. No onion, no garlic.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    badge: 'Complete Meal'
  },
  {
    id: 17,
    name: 'Jain Poha',
    category: 'Jain',
    price: '?50',
    desc: 'Light and fluffy flattened rice with peanuts and curry leaves. Jain-friendly breakfast option.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 18,
    name: 'Jain Dhokla',
    category: 'Steamed',
    price: '?60',
    desc: 'Spongy steamed chickpea flour snack with tempering. Healthy and delicious Jain snack.',
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 19,
    name: 'Idli Sadam',
    category: 'Special',
    price: '?80',
    desc: 'Fried rice mixed with crumbled idli, vegetables, and spices. A popular South Indian leftover dish.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 20,
    name: 'Pongal Kuzhi Paniyaram',
    category: 'Special',
    price: '?70',
    desc: 'Crispy rice and lentil dumplings seasoned with pepper and cumin. Perfect tea-time snack.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 21,
    name: 'Badam Milk',
    category: 'Drinks',
    price: '?60',
    desc: 'Chilled milk blended with almonds, cardamom, and saffron. A refreshing summer drink.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 22,
    name: 'Rose Sharbat',
    category: 'Drinks',
    price: '?40',
    desc: 'Refreshing rose syrup drink with sabja seeds. Cool and aromatic summer cooler.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 23,
    name: 'Sweet Lassi',
    category: 'Drinks',
    price: '?50',
    desc: 'Creamy yogurt drink sweetened with sugar and cardamom. Rich and refreshing.',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 24,
    name: 'Mango Lassi',
    category: 'Drinks',
    price: '?70',
    desc: 'Smooth yogurt smoothie with fresh Alphonso mango. A tropical delight.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop',
    badge: 'Seasonal'
  },
  {
    id: 25,
    name: 'Kesari Sharbat',
    category: 'Drinks',
    price: '?45',
    desc: 'Saffron-infused sweet drink with basil seeds. Traditional summer cooler.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 26,
    name: 'Ghee Roast',
    category: 'Special',
    price: '?90',
    desc: 'Crispy dosa roasted with generous ghee and spice blend. A flavorful treat.',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 27,
    name: 'Paneer Dosa',
    category: 'Special',
    price: '?100',
    desc: 'Dosa filled with spiced cottage cheese. A North-South fusion delight.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 28,
    name: 'Mysore Masala Dosa',
    category: 'Special',
    price: '?95',
    desc: 'Spicy red chutney spread dosa with potato filling. Extra punch of flavor.',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 29,
    name: 'Bonda Soup',
    category: 'Regular',
    price: '?55',
    desc: 'Medu vada balls in hot sambar. Comfort food at its best.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    badge: null
  },
  {
    id: 30,
    name: 'Curry Leaf Rice',
    category: 'Special',
    price: '?75',
    desc: 'Flavored rice with curry leaves, peanuts, and mild spices. Simple yet delicious.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop',
    badge: null
  }
];

const categoryIcons = {
  'All': Sparkles,
  'Regular': Leaf,
  'Special': Flame,
  'Jain': Leaf,
  'Drinks': Coffee,
  'Steamed': Flame,
};

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Regular', 'Special', 'Jain', 'Drinks', 'Steamed'];

  const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop';
  };

  return (
    <section className="px-6 max-w-7xl mx-auto z-10 relative pointer-events-auto">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat, index) => {
          const Icon = categoryIcons[cat];
          return (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 uppercase tracking-wider text-sm border ${
                filter === cat 
                  ? 'bg-anna-primary text-anna-bg border-anna-primary' 
                  : 'border-white/20 text-anna-surface hover:border-anna-primary hover:text-anna-primary'
              }`}
            >
              <Icon size={16} className={filter === cat ? 'text-anna-bg' : 'opacity-60 group-hover:opacity-100'} />
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Menu Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            key={item.id}
            className="glass-card-hover rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={item.image}
                alt={item.name}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anna-card via-transparent to-transparent" />
                
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-anna-secondary px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{item.badge}</span>
                  </div>
                )}

                {/* Category Icon */}
                <div className="absolute bottom-4 left-4 p-2 glass rounded-full">
                  <span className="text-xs font-medium text-anna-primary uppercase">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-bold text-anna-surface group-hover:text-anna-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-anna-primary font-display font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-anna-muted font-body text-sm leading-relaxed">{item.desc}</p>
                
                {/* Hover Indicator */}
                <div className="mt-4 flex items-center gap-2 text-anna-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium uppercase tracking-wider">Order Now</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Menu;
