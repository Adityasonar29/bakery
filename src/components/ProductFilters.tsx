pnpm approve-buildsimport React from 'react';
import { motion } from 'framer-motion';
import { FilterOptions } from '../types/filters';

interface ProductFiltersProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  categories: string[];
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, setFilters, categories }) => {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.searchQuery}
          onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex gap-4">
          <input
            type="number"
            value={filters.priceRange.min}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: { ...filters.priceRange, min: Number(e.target.value) }
            })}
            className="w-1/2 px-4 py-2 border rounded-lg"
            placeholder="Min"
          />
          <input
            type="number"
            value={filters.priceRange.max}
            onChange={(e) => setFilters({
              ...filters,
              priceRange: { ...filters.priceRange, max: Number(e.target.value) }
            })}
            className="w-1/2 px-4 py-2 border rounded-lg"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ 
            ...filters, 
            sortBy: e.target.value 
          })}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;