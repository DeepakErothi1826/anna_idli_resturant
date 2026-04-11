import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  { 
    id: 1, 
    name: 'Rahul Sharma', 
    location: 'Raipur',
    date: '2 weeks ago', 
    text: 'Best Thatte Idli in Raipur hands down. The Ghee Podi Idli melts in your mouth. The ambiance is so welcoming and the staff is extremely courteous.', 
    rating: 5 
  },
  { 
    id: 2, 
    name: 'Priya Mehta', 
    location: 'Durg',
    date: '1 month ago', 
    text: 'Loved the Jain menu options! Finally a place that understands Jain dietary requirements. The place is incredibly clean and has a great vibe.', 
    rating: 5 
  },
  { 
    id: 3, 
    name: 'Amit Kumar', 
    location: 'Bilaspur',
    date: '2 months ago', 
    text: 'Filter coffee is spot on. Reminds me of Bangalore. Excellent service as well. Will definitely come back for more!', 
    rating: 5 
  },
  { 
    id: 4, 
    name: 'Sneha Reddy', 
    location: 'Hyderabad',
    date: '3 weeks ago', 
    text: 'Authentic South Indian taste in the heart of Raipur. The mini idli in ghee is absolutely divine. A must-visit for idli lovers!', 
    rating: 5 
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-anna-bg via-anna-dark/50 to-anna-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-anna-primary/5 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-anna-secondary uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-body font-semibold mb-3 sm:mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-shadow-glow"
          >
            What Our <span className="text-gradient italic">Customers</span> Say
          </motion.h2>
        </div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} sm:size={20} fill="#C9A227" className="text-anna-primary" />
            ))}
          </div>
          <span className="text-xl sm:text-2xl font-display font-bold text-anna-primary">4.8</span>
          <span className="text-anna-muted font-body text-sm sm:text-base">on Google</span>
        </motion.div>

        {/* Review Card */}
        <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[320px]">
          <button 
            onClick={prevReview}
            className="absolute left-0 sm:-left-16 z-20 p-2 sm:p-3 glass rounded-full hover:bg-anna-primary hover:text-anna-bg transition-all duration-300"
          >
            <ChevronLeft size={20} sm:size={24} />
          </button>

          <div className="w-full max-w-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl relative"
              >
                {/* Google Badge */}
                <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 glass p-1.5 sm:p-2 rounded-full">
                  <svg className="w-4 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                
                {/* Quote Icon */}
                <div className="text-anna-primary/20 mb-3 sm:mb-4">
                  <svg className="w-8 sm:w-10 h-8 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} sm:size={18} 
                      fill={i < reviewsData[currentIndex].rating ? "#C9A227" : "transparent"} 
                      className={i < reviewsData[currentIndex].rating ? "text-anna-primary" : "text-white/20"} 
                    />
                  ))}
                </div>
                
                <p className="text-sm sm:text-lg md:text-xl font-body text-anna-surface leading-relaxed mb-6 sm:mb-8 italic">
                  "{reviewsData[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-anna-primary to-anna-secondary flex items-center justify-center font-display font-bold text-lg sm:text-xl text-anna-bg">
                    {reviewsData[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-anna-surface text-sm sm:text-base">{reviewsData[currentIndex].name}</h4>
                    <span className="text-xs sm:text-sm text-anna-muted">{reviewsData[currentIndex].location} • {reviewsData[currentIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextReview}
            className="absolute right-0 sm:-right-16 z-20 p-2 sm:p-3 glass rounded-full hover:bg-anna-primary hover:text-anna-bg transition-all duration-300"
          >
            <ChevronRight size={20} sm:size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 sm:w-8 bg-anna-primary' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
