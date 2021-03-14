import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Currency = () => {
  const [rubRates, setRubRates] = useState(0)
  const [usdRates, setUsdRates] = useState(0)
  const [eurRates, setEurRates] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.exchangeratesapi.io/latest?base=USD`;
      try {
        const res = await axios.get(url);
        const { rates } = res.data;

        setRubRates(rates.RUB.toFixed(2));
        setUsdRates(rates.USD.toFixed(2));
        setEurRates(rates.EUR.toFixed(2));
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="currency">₣ {rubRates}</div>
      <div className="currency">$ {usdRates}</div>
      <div className="currency">€ {eurRates}</div>
    </>
  )
}

export default Currency
