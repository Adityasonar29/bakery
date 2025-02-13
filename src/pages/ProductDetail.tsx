import React, { useState } from 'react';
import Review from '../components/Review';

interface Product {
  name: string;
  // Add other product properties here
}

const ProductDetail = ({ product }: { product: Product }) => {
  const [reviews] = useState([
    { author: 'John Doe', rating: 5, comment: 'Great product!' },
    { author: 'Jane Smith', rating: 4, comment: 'Very good, but could be improved.' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
      {/* Product details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;