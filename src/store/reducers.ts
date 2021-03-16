import IState from './state';
import countriesList from '../tests/mocks/countriesList';
import { ActionTypes, SET_CURRENT_COUNTRY, SET_CURRENT_LANG, LOAD_COUNTRIES } from './actions';

const enCountries = countriesList.filter((country) => country.lang === 'RU');

const initialState: IState = {
  countryList: enCountries,
  selectedCountry: undefined,
  language: 'RU',
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
