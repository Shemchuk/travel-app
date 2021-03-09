import Lang from '../models/lang';
import ICountry from '../models/country';

export default interface IState {
  language: Lang;
  contryList: ICountry[];
  selectedCountry?: ICountry;
}
