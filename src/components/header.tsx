import '../css/header.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LanguageSelect from './language-select';
import Search from './search';
import IState from '../store/state';

const l11n: { [key: string]: any } = {
  ru: {
    title: 'Путешествуйте по миру',
    home: 'Главная',
    about: 'О приложении',
    login: 'Войти',
  },
  en: {
    title: 'Travel the world',
    home: 'Home',
    about: 'About',
    login: 'Login',
  },
  be: {
    title: 'Вандруйе па свеце',
    home: 'Галоуная',
    about: 'Аб прыкладанні',
    login: 'Увайcці',
  },
};

const Header: React.FC<any> = (props: any) => {
  const { lang } = props;
  const { isMainPage } = props;

  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
          <Link to={`/${lang}`}>{l11n[lang].title}</Link>
        </div>

        <div className="header_menu">
          <nav className="header_nav">
            <ul>
              <li>
                <Link to={`/${lang}`}>{l11n[lang].home}</Link>
              </li>
              <li>
                <Link to={`/${lang}/about`}>{l11n[lang].about}</Link>
              </li>
              {/* <li>
               <Link to={`/${lang}/login`}>{l11n[lang].login}</Link>
              </li> */}
              <li>
                <LanguageSelect />
              </li>
            </ul>
          </nav>

          {isMainPage ? <Search /> : null}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: IState) => ({
  lang: state.language,
  isMainPage: state.isMainPage,
});

export default connect(mapStateToProps)(Header);
