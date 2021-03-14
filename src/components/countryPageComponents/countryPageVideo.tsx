import React from 'react';
import '../../css/country-page-vedeo.scss';
// @ts-ignore
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.scss';

const Video = () => (
  <Player
    playsInline
    poster="https://video-react.js.org/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
    <ControlBar autoHide className="my-class" />
  </Player>
)


export default Video;
