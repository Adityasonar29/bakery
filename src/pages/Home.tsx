import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Bekary</h1>
            <p className="text-xl mb-8">Crafting delicious moments with every bite since 1990</p>
            <Link
              to="/order"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                title: "Fresh Breads",
                description: "Artisanal breads baked fresh daily"
              },
              {
                image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                title: "Delicious Pastries",
                description: "Sweet treats for every occasion"
              },
              {
                image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                title: "Custom Cakes",
                description: "Celebrate special moments with our custom cakes"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Quality Ingredients", description: "We use only the finest ingredients" },
              { title: "Traditional Recipes", description: "Time-tested family recipes" },
              { title: "Fresh Daily", description: "Baked fresh every morning" },
              { title: "Fast Delivery", description: "Quick delivery to your doorstep" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;