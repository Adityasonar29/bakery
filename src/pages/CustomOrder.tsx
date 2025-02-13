import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'cake',
    occasion: '',
    deliveryDate: '',
    specialInstructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Custom Order</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Submit Order Request
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CustomOrder;

// Removed the conflicting local useState function
