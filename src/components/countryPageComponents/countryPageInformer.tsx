import React from 'react';
import '../../css/country-page-nformer.scss';

const CountryPageInformer: React.FC = () => (
  <>
    <div className="country_page_informer">
      <div className="country_page_title">
        <span className="country_page_name_title">France</span>
        <span className="country_page_name_subtitle">Paris</span>
      </div>
      <div className="country_page_weather">
        {/* <span className="weather">
          10 <sup className="weather_sup">O</sup>C
        </span> */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="weather_img" src="#" />
      </div>

      <div className="country_page_clock">
        <div className="clock">
          <div className="page_clock">18 : 53 : 55</div>
          <div className="page_calendar">Wednesday, March 10</div>
        </div>
        <div className="page_currency">
          <div className="currency">₣ 100.00</div>
          <div className="currency">€ 100.00</div>
          <div className="currency">$ 100.00</div>
        </div>
      </div>
    </div>
  </>
);

export default CountryPageInformer;
