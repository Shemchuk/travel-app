import React from 'react';
import CountryPageInformer from './countryPageComponents/countryPageInformer';
import CountryPageGallery from './countryPageComponents/countryPageGallery';
import CountryPageMap from './countryPageComponents/countryPageMap';
import CountryPageVideo from './countryPageComponents/countryPageVideo';

import '../css/country-page-style.scss';
import CountryPageDescription from './countryPageComponents/CountryPageDescription';

const CountryPage: React.FC = () => (
  <>
    <section className="country_page_wrapper">
      <CountryPageInformer />
      <CountryPageGallery />
      <CountryPageDescription />
      <CountryPageMap />
      <CountryPageVideo />
    </section>
  </>
);

export default CountryPage;
