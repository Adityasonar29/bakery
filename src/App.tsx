import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import CustomOrder from './pages/CustomOrder';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import OrderTracking from './pages/OrderTracking';
import AdminRoute from './components/AdminRoute';

function App() {
  console.log('App component rendering');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Layout>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} />
                
                {/* Protected routes */}
                <Route element={<ProtectedRoute children={undefined} />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Route>
                
                {/* Admin route */}
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Public routes */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<Order />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/custom-order" element={<CustomOrder />} />
                <Route path="/track-order" element={<OrderTracking />} />
              </Routes>
              <Toaster position="bottom-right" />
            </Layout>
          </Router>
        </CartProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;