import IState from './state';
// import Lang from '../models/lang';
import { ActionTypes, LOAD_COUNTRY, SET_LANGUAGE } from './actions';

const initialState: IState = {
  contryList: [],
  selectedCountry: undefined,
  // language: Lang.RU,
  language: 'RU',
};

export default function travelReducer(
  state = initialState,
  action: ActionTypes,
): IState {
  let LOAD_COUNTRY_LIST;
  switch (action.type) {
    case SET_LANGUAGE:
      return state;
    case LOAD_COUNTRY:
      return state;
    case LOAD_COUNTRY_LIST:
      return state;
    default:
      return state;
  }
}
