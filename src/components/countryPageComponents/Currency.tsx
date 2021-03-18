import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import IState from '../../store/state';

const Currency = (props: any) => {
  const { country } = props;
  const { currency } = country;

  const [rubRates, setRubRates] = useState(0);
  const [usdRates, setUsdRates] = useState(0);
  const [eurRates, setEurRates] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.exchangeratesapi.io/latest?base=${currency}`;
      try {
        const res = await axios.get(url);
        const { rates } = res.data;

        setRubRates(rates.RUB.toFixed(2));
        setUsdRates(rates.USD.toFixed(2));
        setEurRates(rates.EUR.toFixed(2));
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, [currency]);

  return (
    <>
      <div className="currency">₽ {rubRates}</div>
      <div className="currency">$ {usdRates}</div>
      <div className="currency">€ {eurRates}</div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});

export default connect(mapStateToProps)(Currency);
