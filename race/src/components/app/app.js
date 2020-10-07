import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '../../routes';
import Header from '../header';


import './app.css';
import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../context/AuthContext';

function App() {
  const { token, login } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, login, isAuthenticated
    }}>
      <Router>
        <Header></Header>
        <div className="app">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;