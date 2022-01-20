import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
