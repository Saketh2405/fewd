// src/App.js
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import Home from './Home';

const AppContent = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Home /> : <Login />;
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
