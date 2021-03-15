import '../css/app.scss';

import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch, withRouter, useParams, useLocation, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import MainPage from './main-page';
import CountryPage from './country-page';
import AboutPage from './about';
import LoginPage from './login';
import { appActions } from '../store/actions';
import IState from '../store/state';

const App: React.FC<any> = (props: any) => {
  const { language }: any = useParams();
  const location = useLocation();
  const { 
      lang, 
      // match: { params },
    } = props;

  
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`lang = ${lang}, params = ` , language,'; location = ', location);
  });

  return (
    <>
        <Header />
        <Switch>
          <Redirect from="/" to="/RU"/>
          <Route path="/:language/country/:id">
            <CountryPage />
          </Route>
          <Route path="/:language/about">
            <AboutPage />
          </Route>
          <Route path="login">
            <LoginPage />
          </Route>
          <Route path="">
            <MainPage />
          </Route>
        </Switch>
    </>
  );
};

const LocalizedApp : React.FC<any> =  () => (
    <Router>
      <Route path="/:language">
         <App />
      </Route>
    </Router>
  );


// const mapDispatchToProps = appActions;
// const mapStateToProps = (state: IState) => ({
//   lang: state.language,
// });

// withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default LocalizedApp;
