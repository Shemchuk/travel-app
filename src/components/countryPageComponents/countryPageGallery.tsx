import React from 'react';
import '../../css/country-page-gallery.scss';

const CountryPageGallery: React.FC = () => (
  <>
    <div className="gallery">
      <div className="left_button">
        <div className="left_button_tap">
          <div className="left_top_hr" />
          <div className="left_bottom_hr" />
        </div>
      </div>
      <div className="body_gallery" />
      <div className="right_button">
        <div className="right_button_tap">
          <div className="right_top_hr" />
          <div className="right_bottom_hr" />
        </div>
      </div>
    </div>
  </>
);

export default CountryPageGallery;
