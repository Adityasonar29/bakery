import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-50">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Outermost ring */}
        <motion.div
          className="absolute inset-0 border-4 border-orange-500/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-4 border-4 border-white/50 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-8 border-4 border-orange-400/50 rounded-full"
          animate={{
            rotate: 180,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute w-4 h-4 bg-orange-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-light tracking-[0.3em] text-sm"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          LOADING
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;