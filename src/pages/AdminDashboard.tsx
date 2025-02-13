import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'users'>('products');
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    stock: 0
  });

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      ...newProduct,
      id: Date.now().toString()
    };
    
    setProducts([...products, product]);
    setIsAddingProduct(false);
    setNewProduct({
      name: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      stock: 0
    });
    toast.success('Product added successfully!');
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    toast.success('Product deleted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <span className="text-gray-600">Welcome, {user?.name}</span>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        {['products', 'orders', 'users'].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-6 py-2 rounded-lg capitalize ${
              activeTab === tab 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Products Panel */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Products ({products.length})</h2>
            <button
              onClick={() => setIsAddingProduct(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Add New Product
            </button>
          </div>

          {/* Add Product Form */}
          {isAddingProduct && (
            <form onSubmit={handleAddProduct} className="mb-8 space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={newProduct.category}
                  onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={e => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={e => setNewProduct({...newProduct, image: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                  className="px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsAddingProduct(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Add Product
                </button>
              </div>
            </form>
          )}

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">₹{product.price}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;