import '../css/country-page-style.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import IState from '../store/state';
import ICountry from '../models/country';
import { appActions } from '../store/actions';

import CountryPageInformer from './countryPageComponents/countryPageInformer';
import CountryPageGallery from './countryPageComponents/countryPageGallery';
import CountryPageMap from './countryPageComponents/countryPageMap';
import CountryPageVideo from './countryPageComponents/countryPageVideo';
import CountryPageDescription from './countryPageComponents/CountryPageDescription';

interface ICountryPageProps extends RouteComponentProps<any> {
  country: ICountry | undefined;
  loadCountry: (id: number) => void;
}

const CountryPage: React.FC<ICountryPageProps> = (props: ICountryPageProps) => {
  const {
    country,
    loadCountry,
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    loadCountry(Number(id));
  }, [loadCountry, id]);

  if (country) {
    return (
      <>
        <section className="country_page_wrapper">
          <CountryPageInformer />
          <CountryPageGallery places={country.places} />
          <CountryPageDescription text={country.description} />
          <CountryPageMap />
          <CountryPageVideo />
        </section>
      </>
    );
  }

  return <div>Загрузка...</div>;
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CountryPage));
