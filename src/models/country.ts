import Lang from './lang';
import IPlace from './place';
import IVideo from './video';

export default interface ICountry {
  id: number;
  name: string;
  capital: string;
  capitalCoordinates: { lat: number; lon: number };
  photo: string;
  currency: string;
  description: string;
  places: IPlace[];
  videos: IVideo[];
  lang: Lang;
  ISOCode: string;
}
