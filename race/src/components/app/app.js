import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '../../routes';
import Header from '../header';
import Loader from '../loader';


import './app.css';
import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../context/AuthContext';

function App() {
  const [filter, activateFilter] = useState(false);
  const { token, login, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, filter);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, isAuthenticated
    }}>
      <Router>
        <Header activateFilter = {activateFilter} filter = {filter}></Header>
        <div className="app">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;