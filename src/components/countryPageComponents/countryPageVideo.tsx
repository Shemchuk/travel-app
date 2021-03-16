import React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { Player, ControlBar } from 'video-react';

import '../../css/country-page-vedeo.scss';
import 'video-react/dist/video-react.scss';

import IState from '../../store/state';

const Video = (props: any) => {
  
  const { country } = props
  const { videos } = country
  const { url } = videos[0]
  console.log(url);
  
  return (
    <Player
      playsInline
      poster="https://video-react.js.org/assets/poster.png"
      src='https://youtu.be/fXl4mIbZYNo'>
      <ControlBar autoHide className="my-class" />
    </Player>
  )
}
const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});

export default connect(mapStateToProps)(Video);

