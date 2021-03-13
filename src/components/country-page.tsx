import React from 'react';
import CountryPageInformer from './countryPageComponents/countryPageInformer';
import CountryPageGallery from './countryPageComponents/countryPageGallery';
import CountryPageMap from './countryPageComponents/countryPageMap';
import CountryPageVideo from './countryPageComponents/countryPageVideo';

import '../css/country-page-style.scss';

const CountryPage: React.FC = () => (
  <>
    <section className="country_page_wrapper">
      <CountryPageInformer />
      <CountryPageGallery />
      <CountryPageMap />
      <CountryPageVideo />
    </section>

  </>
);

export default CountryPage;
