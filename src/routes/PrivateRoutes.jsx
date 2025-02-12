import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated || user.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
