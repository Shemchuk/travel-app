import IState from './state';
import ICountry from '../models/country';
import TLang from '../models/lang';

import countriesList from '../tests/mocks/countriesList';

export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

export function setCurrentCountry(country?: ICountry | undefined): ISetCurrentCountry {
  return {
    type: SET_CURRENT_COUNTRY,
    payload: country,
  };
}

// Actions
export function loadCountriesAction(countries: ICountry[]): ILoadCountries {
  return {
    type: LOAD_COUNTRIES,
    payload: countries,
  };
}

export function setCurrentLang(lang: TLang = 'RU'): ISetCurrentLang {
  return {
    type: SET_CURRENT_LANG,
    payload: lang,
  };
}

interface ISetCurrentCountry {
  type: typeof SET_CURRENT_COUNTRY;
  payload: ICountry | undefined;
}

interface ILoadCountries {
  type: typeof LOAD_COUNTRIES;
  payload: ICountry[];
}

interface ISetCurrentLang {
  type: typeof SET_CURRENT_LANG;
  payload: TLang;
}

export type ActionTypes = ISetCurrentCountry | ISetCurrentLang | ILoadCountries;

export const appActions = {
  // Action (thunk) - load country by ID and Lang
  loadCountry: (id: number, lang: TLang) => (dispatch: (action: any) => void, getState: () => IState) => {
    const { selectedCountry } = getState();
    if (id === selectedCountry?.id && lang !== getState().language) {
      return;
    }
    dispatch(setCurrentCountry());
    setTimeout(() => {
      const newCountry = countriesList.find((country) => country.id === id && country.lang === lang.toUpperCase());

      dispatch(setCurrentCountry(newCountry));
    }, 100);
  },
  // Action (thunk) - load all countries by current Lang in store
  loadCountries: () => (dispatch: (action: any) => void, getState: () => IState) => {
    const { language } = getState();

    setTimeout(() => {
      const countries = countriesList.filter((country) => country.lang === language.toLocaleUpperCase());

      dispatch(loadCountriesAction(countries));
      // console.log('=======> load countries:', language, countries);
    }, 100);
  },
  // Action - set language
  setLang: setCurrentLang,
};
