import '../../css/country-page-gallery.scss';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import IPlace from '../../models/place';

interface ICountryPageGalleryProps {
  places: IPlace[];
}

const CountryPageGallery: React.FC<ICountryPageGalleryProps> = (props: ICountryPageGalleryProps) => {
  const { places } = props;

  const [images, setImages] = useState(null);
  const shouldCancel = false;

  useEffect((): any => {
    const call = async () => {
      const res = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      );
      if (!shouldCancel && res.data && res.data.length > 0) {
        setImages(
          // @ts-ignore
          res.data.map(url => ({        
            thumbnailLabel: 'Grand Canyon',
            description: 'Grand Canyon',
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
  }, [shouldCancel]);
  
  // @ts-ignore
  return images ? <ReactImageGallery items={images} /> : null;
};

export default CountryPageGallery;
