import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locale from 'date-fns/locale';

import IState from '../../store/state';

interface IClockProps {
  lang: string;
  timezone: string | undefined;
}

const Clock: React.FC<IClockProps> = (props: IClockProps) => {
  const [date, setDate] = useState(new Date());
  const { lang, timezone } = props;
  const locale: { [key: string]: Locale } = {
    ru: Locale.ru,
    be: Locale.be,
    en: Locale.enUS,
  };

  const tick = () => {
    const zonedDate = utcToZonedTime(new Date(), timezone || 'Europe/Minsk');
    setDate(zonedDate);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <>
      <div className="page_clock">{format(date, 'kk:mm:ss')}</div>
      <div className="page_calendar">{format(date, 'EEEE, MMMM d', { locale: locale[lang] })}</div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  lang: state.language,
  timezone: state.selectedCountry?.timezone,
});
export default connect(mapStateToProps)(Clock);
