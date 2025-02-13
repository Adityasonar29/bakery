export interface FilterOptions {
  searchQuery: string;
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: 'name' | 'price-asc' | 'price-desc' | 'rating';
  rating?: number;
}