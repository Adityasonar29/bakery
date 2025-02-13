import { useState, useMemo } from 'react';
import { Product } from '../types/product';

interface FilterOptions {
  category: string;
  priceRange: { min: number; max: number };
  rating: number;
  searchQuery: string;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'name';
}

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    priceRange: { min: 0, max: 10000 },
    rating: 0,
    searchQuery: '',
    sortBy: 'name'
  });

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesCategory = filters.category === 'all' || product.category === filters.category;
        const matchesPrice = product.price >= filters.priceRange.min && 
                           product.price <= filters.priceRange.max;
        const matchesRating = product.rating >= filters.rating;
        const matchesSearch = product.name.toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
          product.description.toLowerCase()
          .includes(filters.searchQuery.toLowerCase());

        return matchesCategory && matchesPrice && matchesRating && matchesSearch;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-asc': return a.price - b.price;
          case 'price-desc': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          default: return a.name.localeCompare(b.name);
        }
      });
  }, [products, filters]);

  return { filters, setFilters, filteredProducts };
};