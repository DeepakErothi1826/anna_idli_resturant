import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-anna-dark pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-anna-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-anna-primary flex items-center justify-center">
                <span className="text-anna-bg font-display font-bold text-xl sm:text-2xl">A</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-display font-bold text-anna-surface">
                  Anna <span className="text-anna-primary">Idli</span>
                </span>
                <p className="text-xs text-anna-muted uppercase tracking-widest">Since 2010</p>
              </div>
            </Link>
            
            <p className="text-anna-muted font-body leading-relaxed max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              Serving the authentic taste of South India in the heart of Raipur. 
              Our Thatte Idlis and Filter Coffee have become a beloved tradition for thousands.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="p-3 glass rounded-full hover:bg-anna-primary hover:text-anna-bg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-3 glass rounded-full hover:bg-anna-primary hover:text-anna-bg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="p-3 glass rounded-full hover:bg-anna-primary hover:text-anna-bg transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold text-anna-surface mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-anna-muted hover:text-anna-primary transition-colors font-body text-sm">Home</Link></li>
              <li><Link to="/about" className="text-anna-muted hover:text-anna-primary transition-colors font-body text-sm">About Us</Link></li>
              <li><Link to="/menu" className="text-anna-muted hover:text-anna-primary transition-colors font-body text-sm">Menu</Link></li>
              <li><Link to="/contact" className="text-anna-muted hover:text-anna-primary transition-colors font-body text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold text-anna-surface mb-4 sm:mb-6">Visit Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} sm:size={18} className="text-anna-primary mt-0.5 sm:mt-1 shrink-0" />
                <span className="text-anna-muted font-body text-xs sm:text-sm">3/5, Lodhipara Chowk, Pandri Rd, Raipur, Chhattisgarh 492004</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} sm:size={18} className="text-anna-primary shrink-0" />
                <span className="text-anna-muted font-body text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} sm:size={18} className="text-anna-primary shrink-0" />
                <span className="text-anna-muted font-body text-sm">7 AM - 11 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-anna-muted text-xs sm:text-sm font-body">
            © {new Date().getFullYear()} Anna Idli Raipur. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 sm:gap-6">
            <span className="text-[10px] sm:text-xs text-anna-muted/60 uppercase tracking-wider">Best Thatte Idli</span>
            <span className="text-[10px] sm:text-xs text-anna-muted/60">•</span>
            <span className="text-[10px] sm:text-xs text-anna-muted/60 uppercase tracking-wider">Ghee Podi Idli</span>
            <span className="text-[10px] sm:text-xs text-anna-muted/60 hidden sm:inline">•</span>
            <span className="text-[10px] sm:text-xs text-anna-muted/60 uppercase tracking-wider hidden sm:inline">Filter Coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
