import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Jahagirdar Foods</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600">
            Founded in 1990, Jahagirdar Foods began as a small family bakery with a passion for
            traditional Indian baking. Over three decades, we've grown into one of Mumbai's most
            beloved bakeries, while maintaining our commitment to quality and tradition.
          </p>
          <p className="text-gray-600">
            Our recipes have been passed down through generations, combining age-old techniques
            with modern innovation to create products that delight our customers every day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
          <div className="text-gray-600">Years of Experience</div>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
          <div className="text-gray-600">Daily Customers</div>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
          <div className="text-gray-600">Product Varieties</div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            "Select Premium Ingredients",
            "Follow Traditional Methods",
            "Bake with Care",
            "Deliver Fresh Daily"
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <div className="font-medium">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;