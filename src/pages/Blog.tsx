import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "The Art of Sourdough: A Baker's Guide",
      date: "March 15, 2024",
      author: "Chef Rahul",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      excerpt: "Learn the secrets of creating the perfect sourdough bread with our comprehensive guide."
    },
    {
      title: "Wedding Cakes: Trends in 2024",
      date: "March 10, 2024",
      author: "Chef Priya",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      excerpt: "Discover the latest trends in wedding cake designs and flavors for this year."
    },
    {
      title: "Healthy Baking Alternatives",
      date: "March 5, 2024",
      author: "Nutritionist Sarah",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      excerpt: "Explore healthy substitutes for traditional baking ingredients without compromising taste."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {post.date} • By {post.author}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-orange-500 font-medium hover:text-orange-600">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
        <div className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;