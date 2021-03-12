import '../css/country-card.scss';

import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

const CountryCard: React.FC<any> = () => (
  // <div className="country-card-wrapper">
  <Router>
    <Link to="/country/1">
      <div className="country-card">
        <span className="title_cart">Franse</span>
        <span className="sub-title_cart">Paris</span>
        <span className="more">start your journey...</span>
      </div>
    </Link>
  </Router>
  // </div>
);

export default CountryCard;
