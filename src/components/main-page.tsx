import '../css/main-page.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CountryCard from './country-card';
import IState from '../store/state';
import { appActions } from '../store/actions';
import ICountry from '../models/country';

const MainPage: React.FC<any> = (props: any) => {
  const { countryList, lang, filterCountry, loadCountries, setIsMainPage } = props;
  
  const filteredCountryList = countryList.filter((item: ICountry) => {
    const country = item.name.toLowerCase();
    const capital = item.capital.toLowerCase();
    const filter = filterCountry.toLowerCase();
    const isShowCountry = country.indexOf(filter) > -1 || capital.indexOf(filter) > -1;
    return isShowCountry;
  });

  useEffect(() => {
    loadCountries();
  }, [loadCountries, lang]);

  
  useEffect(() => {
    setIsMainPage(true);

    return () => setIsMainPage(false);
  }, [setIsMainPage]);

  return (
    <div className="countries-wrapper">
      {filteredCountryList?.map((country: ICountry) => (
        <CountryCard key={country.id} country={country} lang={lang.toLowerCase()} />
      ))}
    </div>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  countryList: state.countryList,
  lang: state.language,
  filterCountry: state.filterCountry,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
