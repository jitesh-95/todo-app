import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setAuth(true);
    navigate("/todoapp");
  };

  const logout = () => {
    setAuth(false);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ login, isAuth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
