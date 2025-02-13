import React from 'react';

const Vision = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Vision</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Bakery Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To create moments of joy through our traditional recipes while embracing modern innovation,
              ensuring every customer experiences the warmth of fresh-baked happiness.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Quality ingredients and traditional methods</li>
              <li>• Customer satisfaction above all</li>
              <li>• Sustainable practices</li>
              <li>• Community engagement</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Future Goals</h2>
            <p className="text-gray-600">
              We aim to expand our reach while maintaining the quality and tradition that makes
              Jahagirdar Foods special, bringing our delicious products to more communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;