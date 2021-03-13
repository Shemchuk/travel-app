import IState from './state';
import ICountry from '../models/country';

export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';

export function setCurrentCountry(country?: ICountry | undefined): SetCurrentCountry {
  return {
    type: SET_CURRENT_COUNTRY,
    payload: country,
  };
}

interface SetCurrentCountry {
  type: typeof SET_CURRENT_COUNTRY;
  payload: ICountry | undefined;
}

export type ActionTypes = SetCurrentCountry;

export const appActions = {
  loadCountry: (id: number) => (dispatch: (action: any) => void, getState: () => IState) => {
    const { countryList, selectedCountry } = getState();
    if (id === selectedCountry?.id) {
      return;
    }
    dispatch(setCurrentCountry());
    setTimeout(() => {
      const newCountry = countryList.find((country) => country.id === id);

      // console.log('=======> load country:', id, language, newCountry);

      dispatch(setCurrentCountry(newCountry));
    }, 100);
  },
};
