import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../data/products';
import { X, ShoppingCart, Heart } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative h-96">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-3xl font-bold text-orange-500">₹{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              {product.nutritionInfo && (
                <div className="text-sm text-gray-500">
                  <p>Nutrition Information (per 100g):</p>
                  <ul className="list-disc pl-5">
                    <li>Calories: {product.nutritionInfo.calories}kcal</li>
                    <li>Protein: {product.nutritionInfo.protein}g</li>
                    <li>Carbs: {product.nutritionInfo.carbs}g</li>
                    <li>Fat: {product.nutritionInfo.fat}g</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAddToWishlist(product)}
                className="p-3 border rounded-lg hover:bg-gray-50"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuickViewModal;