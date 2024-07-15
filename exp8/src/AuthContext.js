// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    // predefined credentials
    if (username === 'user' && password === 'password123') {
      setLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
