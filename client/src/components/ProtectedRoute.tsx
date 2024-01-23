import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isSessionValid } from '../redux/sessionUtils'; // Imports the session validation function

const ProtectedRoute: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const location = useLocation();

  useEffect(() => {
    if (!isSessionValid()) {
      // Session is not valid, redirect to login
      window.location.href = '/login'; // Use window.location.href for a hard redirect
    }
  }, []);

  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />; // Render children routes if authenticated
};

export default ProtectedRoute;
