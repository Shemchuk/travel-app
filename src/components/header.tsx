import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

const Header: React.FC<any> = () => (
  <header>
    <Router>
      <Link to="/">Home</Link>
    </Router>
  </header>
);

export default Header;
