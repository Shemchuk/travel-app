import '../css/main-page.scss';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CountryCard from './country-card';
import IState from '../store/state';
import { appActions } from '../store/actions';
import ICountry from '../models/country';

const MainPage: React.FC<any> = (props: any) => {
  const { countryList } = props;

  return (
    <div className="countries-wrapper">
      {countryList?.map((country: ICountry) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  countryList: state.countryList,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
