import '../css/app.scss';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import MainPage from './main-page';
import CountryPage from './country-page';
import AboutPage from './about';
import LoginPage from './login';
import IState from '../store/state';
import { appActions } from '../store/actions';

const AppComponent: React.FC<any> = (props: any) => {
  const { language, setLang } = props;
  const { lang }: any = useParams();

  useEffect(() => {
    // console.log('=======> [App] useEffect: state.language=', language);
    // console.log('====> [App] props.match.params:', props.match.params);
    // console.log('====> [App] lang from params:', lang);
    // console.log('====> [App] lang from state:', language);
    if (language !== lang) {
      setLang(lang);
    }
  }, [setLang, lang, language]);

  return (
    <>
      <Header />
      <Switch>
        <Route path={`/${language}/about`}>
          <AboutPage />
        </Route>
        <Route path={`/${language}/login`}>
          <LoginPage />
        </Route>
        <Route path={`/${language}/country/:id`}>
          <CountryPage />
        </Route>
        <Route path={`/${language}`}>
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  language: state.language,
});
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));

const LocalizedApp: React.FC<any> = () => (
  <Router>
    <Switch>
      <Route path="/:lang">
        <App />
      </Route>
      <Redirect to="/ru" />
    </Switch>
  </Router>
);

export default LocalizedApp;
