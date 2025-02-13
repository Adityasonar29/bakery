import React from 'react';

interface ReviewProps {
  author: string;
  rating: number;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ author, rating, comment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold">{author}</span>
        <span className="ml-2 text-yellow-500">{'★'.repeat(rating)}</span>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default Review;