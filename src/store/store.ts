import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';

import travelReducer from './reducers';

const store: Store = createStore(travelReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
