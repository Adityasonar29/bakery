import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CustomOrderFormProps {
  onSubmit: (data: CustomOrderData) => void;
}

interface CustomOrderData {
  type: string;
  size: string;
  flavor: string;
  message: string;
  deliveryDate: string;
  specialInstructions: string;
}

const CustomOrderForm: React.FC<CustomOrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CustomOrderData>({
    type: '',
    size: '',
    flavor: '',
    message: '',
    deliveryDate: '',
    specialInstructions: ''
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Custom Order</h2>
      {/* Form implementation */}
    </motion.div>
  );
};

export default CustomOrderForm;