
import React, { useEffect, useState } from 'react'
import ReactImageGallery from "react-image-gallery";
import { connect } from 'react-redux';

import '../../css/country-page-gallery.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import IPlace from '../../models/place';
import IState from '../../store/state';

interface ICountryPageGalleryProps {
  places?: IPlace[];
}

const defaultProps: ICountryPageGalleryProps = {
  places: [],
};

const CountryPageGallery: React.FC<ICountryPageGalleryProps> = (props: ICountryPageGalleryProps) => {
  const { places } = props;
  const [images, setImages] = useState(null);
  const shouldCancel = false;

  useEffect(() => {
    const call = () => {
      if (!shouldCancel && places && places.length > 0) {
        setImages(
          // @ts-ignore
          places.map((url) => ({        
            thumbnailLabel: url.name,
            description: url.name,
            // original: `${url.photo}`,
            // thumbnail: `${url.photo}=w100`,
          }))
        );
      }
    };
    call();
  }, [places, shouldCancel]);
  
  // @ts-ignore
  return images ? <ReactImageGallery items={images} /> : null;
};

CountryPageGallery.defaultProps = defaultProps;
const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});

export default connect(mapStateToProps)(CountryPageGallery);
