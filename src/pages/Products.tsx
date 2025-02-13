import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '../data/products';
import QuickViewModal from '../components/QuickViewModal';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortBy, setSortBy] = useState('name');
  const [showQuickView, setShowQuickView] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const handleAddToCart = (product: Product) => {
    // Implement cart functionality
    console.log('Added to cart:', product);
    // You can use context or Redux to manage cart state
  };
  
  const handleAddToWishlist = (product: Product) => {
    // Implement wishlist functionality
    console.log('Added to wishlist:', product);
  };

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search, Sort and Filters */}
      <div className="mb-8 space-y-6">
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Price Range: ₹{priceRange.min} - ₹{priceRange.max}</label>
          <div className="flex gap-4">
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>


      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <motion.button
                onClick={() => {
                  setSelectedProduct(product);
                  setShowQuickView(true);
                }}
                className="absolute bottom-4 left-4 right-4 bg-orange-500 text-white py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quick View
              </motion.button>
            </div>
            {/* Product details */}
          </motion.div>
        ))}
      </div>
      

      {/* Quick View Modal */}
      <AnimatePresence>
      {showQuickView && selectedProduct && (
      <QuickViewModal
      product={selectedProduct}
      onClose={() => setShowQuickView(false)}
      onAddToCart={handleAddToCart}
      onAddToWishlist={handleAddToWishlist}
    />
  )}
      </AnimatePresence>
    </div>
  );
};

export default Products;