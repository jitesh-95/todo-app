import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();
  

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RequireAuth;
