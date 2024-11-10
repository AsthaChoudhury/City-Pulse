import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuh.js';

const RequireAuth = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    navigate('/login');
    return <div>Please log in to access this page</div>;
  }

  return children; 
};

export default RequireAuth;
