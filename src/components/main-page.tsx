import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

const MainPage: React.FC = () => (
  <div>
    <Router>
      <Link to="/country/1">Country 1</Link>
      <Link to="/country/2">Country 2</Link>
    </Router>
  </div>
);

export default MainPage;
