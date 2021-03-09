import Lang from './lang';
import IPlace from './place';
import IVideo from './video';

export default interface ICountry {
  id: number
  name: string;
  capital: string;
  photo: string;
  currency: string;
  description: string;
  places: IPlace[];
  videos: IVideo[];
  lang: Lang;
}
