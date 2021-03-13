import '../../css/country-page-nformer.scss';

import React from 'react';
import { connect } from 'react-redux';

import IState from '../../store/state';
import ICountry from '../../models/country';
import { IWeather } from '../../models/weather';

interface ICountryPageInformerProps {
  country: ICountry | undefined;
  weather: IWeather;
}

const CountryPageInformer: React.FC<ICountryPageInformerProps> = (props: ICountryPageInformerProps) => {
  const { country, weather } = props;

  if (country) {
    return (
      <>
        <div className="country_page_informer">
          <div className="country_page_title">
            <span className="country_page_name_title">{country.name}</span>
            <span className="country_page_name_subtitle">{country.capital}</span>
          </div>
          <div className="country_page_weather">
            <span className="weather">
              {weather.temperature}
              <sup className="weather_sup">O</sup>C
            </span>
            <img className="weather_img" src="#" alt="" />
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
  }
  return <div>Загрузка...</div>;
};

const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
  weather: state.weather,
});
export default connect(mapStateToProps)(CountryPageInformer);
