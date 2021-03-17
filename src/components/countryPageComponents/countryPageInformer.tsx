import '../../css/country-page-nformer.scss';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import IState from '../../store/state';
import ICountry from '../../models/country';
import Clock from './Clock';
import Currency from './Currency';

interface ICountryPageInformerProps {
  country: ICountry | undefined;
}

const CountryPageInformer: React.FC<ICountryPageInformerProps> = (props: ICountryPageInformerProps) => {
  const { country } = props;
  // @ts-ignore
  const { capital } = country;

  const [weather, setWheater] = useState(null);
  const [descWeater, setDescWeater] = useState(null);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=a4c1e23269d7d59e28b2b893ae243de9&units=metric`;
      try {
        const res = await axios.get(url);
        const { data } = res;

        setWheater(data.weather[0].id);
        setDescWeater(data.weather[0].description);
        setTemp(data.main.temp.toFixed());
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, [capital]);

  if (country) {
    return (
      <>
        <div className="country_page_informer">
          <div className="country_page_title">
            <span className="country_page_name_title">{country.name}</span>
            <span className="country_page_name_subtitle">{country.capital}</span>
          </div>
          <div className="country_page_weather">
            <span className="weather">{temp}°C</span>
            <div className="weater-info">
              <div className={`weather-icon owf owf-${weather}`} />
              <div className="weather-description">{descWeater}</div>
            </div>
          </div>
          <div className="country_page_clock">
            <div className="clock">
              <Clock />
            </div>
            <div className="page_currency">
              <Currency />
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
});
export default connect(mapStateToProps)(CountryPageInformer);
