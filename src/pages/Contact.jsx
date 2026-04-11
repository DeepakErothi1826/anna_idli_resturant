import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { pageTransition } from '../components/Hero';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative">
      {/* Background Decorative */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-anna-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto pointer-events-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-anna-secondary uppercase tracking-[0.3em] font-body font-medium text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-shadow-glow">
            Visit <span className="text-gradient italic">Us</span>
          </h1>
          <p className="mt-4 text-anna-muted font-body text-lg max-w-xl mx-auto">
            We'd love to serve you the best idlis in Raipur. Drop by anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-3xl space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-anna-surface mb-2">Come Say Hello</h2>
              <p className="text-anna-muted font-body">We'd love to see you at our restaurant.</p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-4 glass rounded-xl text-anna-primary group-hover:bg-anna-primary group-hover:text-anna-bg transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-body font-semibold mb-2 text-anna-secondary">Location</h3>
                  <p className="text-anna-surface font-body text-lg leading-relaxed">
                    3/5, Lodhipara Chowk,<br />
                    Pandri Rd, Raipur,<br />
                    Chhattisgarh 492004
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Lodhipara+Chowk+Pandri+Road+Raipur+Chhattisgarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-anna-primary hover:text-anna-secondary transition-colors text-sm"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-4 glass rounded-xl text-anna-primary group-hover:bg-anna-primary group-hover:text-anna-bg transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-body font-semibold mb-2 text-anna-secondary">Hours</h3>
                  <p className="text-anna-surface font-body text-lg">
                    Monday to Sunday<br />
                    <span className="text-anna-primary font-semibold">7:00 AM - 11:00 PM</span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="p-4 glass rounded-xl text-anna-primary group-hover:bg-anna-primary group-hover:text-anna-bg transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-body font-semibold mb-2 text-anna-secondary">Phone</h3>
                  <p className="text-anna-surface font-body text-lg">
                    +91 98765 43210
                  </p>
                  <a 
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 mt-2 text-anna-primary hover:text-anna-secondary transition-colors text-sm"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="p-4 glass rounded-xl text-anna-primary group-hover:bg-anna-primary group-hover:text-anna-bg transition-all duration-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-body font-semibold mb-2 text-anna-secondary">WhatsApp</h3>
                  <p className="text-anna-surface font-body text-lg">
                    +91 98765 43210
                  </p>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-anna-primary hover:text-anna-secondary transition-colors text-sm"
                  >
                    Chat With Us
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 h-64 rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6789!2d81.6466!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sLodhipara%20Chowk%2C%20Pandri%20Rd%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anna Idli Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-anna-surface mb-2">Send a Message</h2>
              <p className="text-anna-muted font-body">Have a question or want to make a reservation?</p>
            </div>
            
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-anna-muted text-sm font-body uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-anna-dark/50 border border-white/10 rounded-xl px-5 py-4 text-anna-surface font-body focus:outline-none focus:border-anna-primary focus:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-anna-muted text-sm font-body uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-anna-dark/50 border border-white/10 rounded-xl px-5 py-4 text-anna-surface font-body focus:outline-none focus:border-anna-primary focus:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <label className="block text-anna-muted text-sm font-body uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-anna-dark/50 border border-white/10 rounded-xl px-5 py-4 text-anna-surface font-body focus:outline-none focus:border-anna-primary focus:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all"
                  placeholder="+91 98765 43210"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-anna-muted text-sm font-body uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-anna-dark/50 border border-white/10 rounded-xl px-5 py-4 text-anna-surface font-body focus:outline-none focus:border-anna-primary focus:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-all resize-none"
                  placeholder="Your message or reservation request..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
</div>
  );
};

export default Contact;
