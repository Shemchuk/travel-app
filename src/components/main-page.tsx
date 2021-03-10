import '../css/main-page.scss';

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CountryCard from './country-card';

const MainPage: React.FC = () => (
  <div className="countries-wrapper">
    <Router>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Router>
  </div>
);

export default MainPage;
