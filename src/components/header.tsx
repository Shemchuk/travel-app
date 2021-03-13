import '../css/header.scss';

import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';
import LanguageSelect from './language-select';
import Search from './search';

const Header: React.FC<any> = () => (
  <header className="header">
    <Router>
      <div className="header_wrapper">
        <div className="header_logo">
          <Link to="/">travel the world</Link>
        </div>

        <div className="header_menu">
          <nav className="header_nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <LanguageSelect />
              </li>
            </ul>
          </nav>

          <Search />
        </div>
      </div>
    </Router>
  </header>
);

export default Header;
