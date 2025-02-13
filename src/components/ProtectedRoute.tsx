import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check for admin route
  if (window.location.pathname.startsWith('/admin') && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;