import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />

      {/* Transparent Navbar */}
      <Navbar />
      
      {/* Route Transiting Content Wrapper */}
      <main className="relative z-10 flex-grow min-h-screen">
        {children}
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
