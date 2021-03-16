import IState from './state';
import { ActionTypes, SET_CURRENT_COUNTRY, SET_CURRENT_LANG, LOAD_COUNTRIES } from './actions';

// const Countries = [];

const initialState: IState = {
  countryList: [],
  selectedCountry: undefined,
  language: 'ru',
  weather: {
    temperature: 32,
  },
};

export default function travelReducer(state = initialState, action: ActionTypes): IState {
  switch (action.type) {
    case SET_CURRENT_COUNTRY:
      return { ...state, selectedCountry: action.payload };

    case LOAD_COUNTRIES:
      return { ...state, countryList: action.payload };

    case SET_CURRENT_LANG:
      return { ...state, language: action.payload };
    // case SELECT_COUNTRY:
    //   return state;
    // case LOAD_COUNTRY_LIST:
    //   return state;
    default:
      return state;
  }
}
