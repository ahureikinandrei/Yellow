import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from '../../routes'


import './app.css';

function App() {

  const routes = useRoutes(false);

  return (
    <Router>
      <div className="app">
        {routes}
      </div>
    </Router>
  );
};

export default App;