import '../css/country-card.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ICountry from '../models/country';
import Lang from '../models/lang';

interface ICountryProps {
  country: ICountry;
  lang: Lang;
}

const CountryCard: React.FC<ICountryProps> = (props: ICountryProps) => {
  const { country, lang } = props;

  return (
    <Link to={`/${lang}/country/${country.id}`}>
      <div className="country-card">
        <span className="title_cart">{country.name}</span>
        <span className="sub-title_cart">{country.capital}</span>
        <span className="more">start your journey...</span>
        {/* <img src={country.photo} alt={country.name} /> */}
      </div>
    </Link>
  );
};

export default CountryCard;
