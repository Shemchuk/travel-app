import IState from './state';
import ICountry from '../models/country';
import TLang from '../models/lang';

import countriesList from '../tests/mocks/countriesList';

export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';

export function setCurrentCountry(country?: ICountry | undefined): SetCurrentCountry {
  return {
    type: SET_CURRENT_COUNTRY,
    payload: country,
  };
}

export function setCurrentLang(lang: TLang = 'RU'): SetCurrentLang {
  console.log(`!!!!!!!!!!!! setCurrentLang to ${lang}`);
  return {
    type: SET_CURRENT_LANG,
    payload: lang,
  };
}

interface SetCurrentCountry {
  type: typeof SET_CURRENT_COUNTRY;
  payload: ICountry | undefined;
}

interface SetCurrentLang {
  type: typeof SET_CURRENT_LANG;
  payload: TLang;
}

export type ActionTypes = SetCurrentCountry | SetCurrentLang;

export const appActions = {
  loadCountry: (id: number, lang: TLang) => (dispatch: (action: any) => void, getState: () => IState) => {
    const { selectedCountry } = getState();
    if (id === selectedCountry?.id && lang !== getState().language) {
      return;
    }
    dispatch(setCurrentCountry());
    setTimeout(() => {
      const newCountry = countriesList.find((country) => country.id === id && country.lang === lang.toUpperCase());

      // console.log('=======> load country:', id, language, newCountry);

      dispatch(setCurrentCountry(newCountry));
    }, 100);
  },
  setLang: setCurrentLang,
};
