import Lang from '../models/lang';

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const LOAD_COUNTRIES_LIST = 'LOAD_COUNTRIES_LIST';

export function setLanguage(lang: Lang): SetLanguage {
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
}

export function loadCountriesList(lang: Lang): LoadCountriesList {
  return {
    type: LOAD_COUNTRIES_LIST,
    payload: lang,
  };
}

export function loadCountry(id: number, lang: Lang): LoadCountry {
  return {
    type: LOAD_COUNTRY,
    payload: { id, lang },
  };
}

interface SetLanguage {
  type: typeof SET_LANGUAGE;
  payload: Lang;
}

interface LoadCountriesList {
  type: typeof LOAD_COUNTRIES_LIST,
  payload: Lang
}

interface LoadCountry {
  type: typeof LOAD_COUNTRY;
  payload: { id: number, lang: Lang };
}

export type ActionTypes = LoadCountry | LoadCountriesList | SetLanguage;
