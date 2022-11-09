import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { LoittaSpinner } from "../loader/LoittaSpinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  console.log(loading);

  if (loading) {
    return <LoittaSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
