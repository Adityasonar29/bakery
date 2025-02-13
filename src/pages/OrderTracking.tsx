import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OrderStatus {
  status: string;
  timestamp: Date;
  details: string;
}

interface OrderDetails {
  id: string;
  status: string;
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  createdAt: Date;
  statusHistory: OrderStatus[];
}

const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = async () => {
    try {
      setLoading(true);
      setError('');
      // Mock order tracking
      const mockOrder = {
        id: orderId,
        status: 'processing',
        items: [
          { id: 1, name: 'Test Product', quantity: 2, price: 100 }
        ],
        total: 200,
        createdAt: new Date(),
        statusHistory: [
          {
            status: 'Order Placed',
            timestamp: new Date(),
            details: 'Order has been placed successfully'
          }
        ]
      };
      setOrderDetails(mockOrder);
    } catch (error) {
      setError('Error fetching order details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-green-100 text-green-800';
      case 'delivered': return 'bg-green-500 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
      
      {/* Search Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your order ID"
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTrackOrder}
          disabled={loading || !orderId}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Track'}
        </motion.button>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-100 text-red-700 p-4 rounded-lg mb-6"
        >
          {error}
        </motion.div>
      )}

      {/* Order Details */}
      {orderDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Order #{orderDetails.id}</h2>
          
          {/* Status Badge */}
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${getStatusColor(orderDetails.status)}`}>
            {orderDetails.status}
          </div>

          {/* Order Items */}
          <div className="border-t border-b py-4 mb-4">
            <h3 className="font-medium mb-2">Order Items</h3>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="font-bold mt-2 pt-2 border-t">
              Total: ₹{orderDetails.total}
            </div>
          </div>

          {/* Status Timeline */}
          <div className="space-y-4">
            <h3 className="font-medium">Order Timeline</h3>
            {orderDetails.statusHistory?.map((status, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 mr-4"></div>
                <div>
                  <p className="font-medium">{status.status}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(status.timestamp).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{status.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OrderTracking;