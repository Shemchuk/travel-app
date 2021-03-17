import React from 'react';
import { connect } from 'react-redux';

import '../../css/country-page-vedeo.scss';
import 'video-react/styles/scss/video-react.scss';

import IState from '../../store/state';
import ICountry from '../../models/country';

interface ICountryPageInformerProps {
  country: ICountry | undefined;
}

const Video: React.FC<ICountryPageInformerProps> = (props: ICountryPageInformerProps) => {
  const { country } = props;

  return (
    <>
      <h3>{country?.videos[0].title}</h3>
      <iframe
        title={country?.videos[0].title}
        height="400"
        src={country?.videos[0].url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>{country?.videos[0].description}</div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});
export default connect(mapStateToProps)(Video);
