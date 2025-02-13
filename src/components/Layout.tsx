import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Watermark from './Watermark';
import LoadingAnimation from './LoadingAnimation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <LoadingAnimation />}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Watermark />
    </div>
  );
};

export default Layout;