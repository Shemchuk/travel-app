import '../../css/country-page-gallery.scss';
import React from 'react';
import IPlace from '../../models/place';

interface ICountryPageGalleryProps {
  places: IPlace[];
}

const CountryPageGallery: React.FC<ICountryPageGalleryProps> = (props: ICountryPageGalleryProps) => {
  const { places } = props;

  return (
    <>
      <div className="gallery">
        <div className="left_button">
          <div className="left_button_tap">
            <div className="left_top_hr" />
            <div className="left_bottom_hr" />
          </div>
        </div>
        <div className="body_gallery">
          {places.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
        <div className="right_button">
          <div className="right_button_tap">
            <div className="right_top_hr" />
            <div className="right_bottom_hr" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPageGallery;
