import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Transparent Navbar */}
      <Navbar />
      
      {/* Route Transiting Content Wrapper */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
