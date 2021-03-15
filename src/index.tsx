import './css/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HashRouter as Router , Route} from 'react-router-dom';


import { Provider } from 'react-redux';
import LocalizedApp from './components/app';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <LocalizedApp />
  </Provider>,
  document.getElementById('app'),
);
