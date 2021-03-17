import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { connect } from 'react-redux';
import IState from '../../store/state';
import ICountry from '../../models/country';

type OptionsType = {
  timeZone: string
  hour12: boolean
}

interface ICountryPageInformerProps {
  country: ICountry | undefined
}

const Clock: React.FC<ICountryPageInformerProps> = (props: ICountryPageInformerProps) => {
  const { country } = props;
  
  const [date, setDate] = useState(0);

  const today: any = new Date();

  const options: OptionsType = {
    timeZone: country!.timezone,
    hour12: false,
  };

  const tick = () => {
    setDate(today.toLocaleString('en-US', options));
  }

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <>
    <div className="page_clock">
      {format(new Date(date), 'kk:mm:ss')}
    </div>
    <div className="page_calendar">
      {format(new Date(date), 'EEEE, MMMM d')}
    </div>
  </>
  )
}

const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});

export default connect(mapStateToProps)(Clock);
