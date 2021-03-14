import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

type optionsType = {
  timeZone: string
  hour12: boolean
}

const Clock = () => {
  const [date, setDate] = useState(0);

  const today: any = new Date();
  const options: optionsType = {
    timeZone: 'Europe/Minsk',
    hour12: false 
  };

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    
    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(today.toLocaleString('en-US', options));
  }

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


export default Clock
