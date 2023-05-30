import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAuth = () => {
  const {isLoggedIn} = useSelector((state) => state.loginUserSlice);

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedAuth;
