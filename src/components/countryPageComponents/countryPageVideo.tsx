import React from 'react';
import '../../css/country-page-vedeo.scss';

const CountryPageVideo: React.FC = () => (
  <>
    <div className="country_page_video">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src="https://www.youtube.com/watch?v=8yb9zpDia40" width="100%">
        Ваш браузер не поддерживает это видео.
      </video>
    </div>
  </>
);

export default CountryPageVideo;
