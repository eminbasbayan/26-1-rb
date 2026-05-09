import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, role = 'admin' } = useSelector((state) => state.auth);

  if (!isAuthenticated || !roles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
