import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './header';
import MainPage from './main-page';
import CountryPage from './country-page';

const App: React.FC<any> = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/country/:id">
          <CountryPage />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
