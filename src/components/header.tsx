import '../css/header.scss';

import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import LanguageSelect from './language-select';
import Search from './search';
import IState from '../store/state';

const Header: React.FC<any> = (props: any) => {
  let { lang } = props;
  lang = lang.toLowerCase();

  console.log(lang);
  return (
    <header className="header">
      <Router>
        <div className="header_wrapper">
          <div className="header_logo">
            <Link to={`/${lang}`}>travel the world</Link>
          </div>

          <div className="header_menu">
            <nav className="header_nav">
              <ul>
                <li>
                  <Link to={`/${lang}`}>Home</Link>
                </li>
                <li>
                  <Link to={`/${lang}/about`}>about</Link>
                </li>
                <li>
                  <Link to={`/${lang}/login`}>login</Link>
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
};

const mapStateToProps = (state: IState) => ({
  lang: state.language,
});

export default connect(mapStateToProps)(Header);
