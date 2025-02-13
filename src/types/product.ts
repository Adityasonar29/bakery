export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: number;
  tags: string[];
  rating: number;
  reviews: number;
}