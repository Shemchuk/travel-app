import '../css/main-page.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CountryCard from './country-card';
import IState from '../store/state';
import { appActions } from '../store/actions';
import ICountry from '../models/country';

const MainPage: React.FC<any> = (props: any) => {
  const { countryList, lang } = props;

  useEffect(() => {
    console.log('[MainPage] lang=', lang);
  }, [lang]);

  return (
    <div className="countries-wrapper">
      {countryList?.map((country: ICountry) => (
        <CountryCard key={country.id} country={country} lang={lang.toLowerCase()} />
      ))}
    </div>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  countryList: state.countryList,
  lang: state.language,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
