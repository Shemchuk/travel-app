import React from 'react';
import '../../css/country-page-description.scss';

const CountryPageDescription: React.FC<any> = (props: any) => {
  const { text } = props;
  return (
    <>
      <div className="country-page-description">
        <span>{text}</span>
      </div>
    </>
  );
};

export default CountryPageDescription;
