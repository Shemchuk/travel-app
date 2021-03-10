import '../css/app.scss';

import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './header';
import MainPage from './main-page';
import CountryPage from './country-page';
import AboutPage from './about';
import LoginPage from './login';

const App: React.FC<any> = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/country/:id">
          <CountryPage />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
