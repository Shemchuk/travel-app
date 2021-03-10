import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import travelReducer from './reducers';

const store: Store = createStore(travelReducer, composeWithDevTools());

export default store;
