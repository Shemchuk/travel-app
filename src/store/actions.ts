import IState from './state';
import ICountry from '../models/country';
import TLang from '../models/lang';

export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';
export const SET_IS_MAIN_PAGE = 'SET_IS_MAIN_PAGE';

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

export function setCurrentLang(lang: TLang = 'ru'): ISetCurrentLang {
  return {
    type: SET_CURRENT_LANG,
    payload: lang,
  };
}

export function setFilterCountryAction(filter: string = 'ru'): ISetFilterCountry {
  return {
    type: SET_CURRENT_FILTER,
    payload: filter,
  };
}

export function setIsMainPageAction(isMainPage: boolean = true): ISetIsMainPage {
  return {
    type: SET_IS_MAIN_PAGE,
    payload: isMainPage,
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

interface ISetFilterCountry {
  type: typeof SET_CURRENT_FILTER;
  payload: string;
}
interface ISetIsMainPage {
  type: typeof SET_IS_MAIN_PAGE;
  payload: boolean;
}

export type ActionTypes = ISetCurrentCountry | ISetCurrentLang | ILoadCountries | ISetFilterCountry | ISetIsMainPage;

export const appActions = {
  // Action (thunk) - load country by ID and Lang
  loadCountry: (id: number, lang: TLang) => (dispatch: (action: any) => void, getState: () => IState) => {
    const { selectedCountry } = getState();
    if (id === selectedCountry?.id && lang !== getState().language) {
      return;
    }
    dispatch(setCurrentCountry());
    fetch(`/api/countries/${id}?lang=${lang}`)
      .then((response) => response.json())
      .then((newCountry) => {
        dispatch(setCurrentCountry(newCountry));
      });
  },
  // Action (thunk) - load all countries by current Lang in store
  loadCountries: () => (dispatch: (action: any) => void, getState: () => IState) => {
    const { language } = getState();

    fetch(`/api/countries?lang=${language}`)
      .then((response) => response.json())
      .then((countries) => {
        dispatch(loadCountriesAction(countries));
      });
  },
  // Action - set language
  setLang: setCurrentLang,
  setFilter: setFilterCountryAction,
  setIsMainPage: setIsMainPageAction,
};
