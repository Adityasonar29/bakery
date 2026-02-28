import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Watermark = () => {
  useEffect(() => {
    const showWatermark = () => {
      const watermarkDiv = document.getElementById('watermark');
      if (watermarkDiv) {
        watermarkDiv.style.opacity = '1';
      }
    };

    // Show watermark on page load and refresh
    window.addEventListener('load', showWatermark);
    
    // Clean up
    return () => {
      window.removeEventListener('load', showWatermark);
    };
  }, []);

  return (
    <motion.div
      id="watermark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.91 }}
      transition={{ duration: 2 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-4 py-2 text-sm text-gray-800 border border-orange-200">
        <span className="font-medium text-orange-600">© 2025</span>{' '}
        <span className="font-medium">Created by Aditya Sonar</span>
        <span className="block text-xs text-gray-600"></span>
      </div>
    </motion.div>
  );
};

export default Watermark;