import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Fresh Breads"
    },
    {
      url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Croissants"
    },
    {
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Celebration Cakes"
    },
    {
      url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Our Bakery"
    },
    {
      url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Cupcakes"
    },
    {
      url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      caption: "Cookies"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;