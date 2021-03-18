import '../css/about-page.scss';

import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import IState from '../store/state';

const l11n: { [key: string]: any } = {
  ru: {
    str: 'приложения',
    str0: 'Приложение',
    str1: 'Данное приложение разработано в рамках курса',
    str2: 'Разработчики приложения',
  },
  en: {
    str: 'of application',
    str0: 'Application',
    str1: 'This application was developed as part of the course',
    str2: 'App developers',
  },
  be: {
    str: 'прыкладання',
    str0: 'Прыкладанне',
    str1: 'Дадзенае прыкладанне распрацавана ў рамках курса',
    str2: 'Распрацоўшчыкі прыкладання',
  },
};

const AboutPage: React.FC<any> = (props: any) => {
  const { lang } = props;

  return (
    <div className="about-page-wrapper">
      <div className="about-page">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className="about-page-title"> {l11n[lang].str0} "travel the world"</h2>
        <span className="about-page-content">
          {l11n[lang].str1} &emsp;
          <a href="https://rs.school/react/">RSSchool React 2021 Q1</a>
          <br />
          <br />
          <a href="https://github.com/Shemchuk/travel-app">GitHub {l11n[lang].str}</a>
          <br />
          <br />
          <br />
          {l11n[lang].str2} / RSS React 2021 Q1. Second task on React course by RS School. Team 54 /
          <br />
          <br />
          <a href="https://github.com/Shemchuk">Mikhail Shamchuk</a>
          <br />
          <a href="https://github.com/durden666">Vladislav Plaksa</a>
          <br />
          <a href="https://github.com/Andrew-6676">Andrew Shavnev</a>
          <br />
          <a href="https://github.com/seha1">Sergey Gryzunov</a>
          <br />
          <br />
          <br />
          <br />
          <br />
          ©2021
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  lang: state.language,
});
export default withRouter(connect(mapStateToProps)(AboutPage));
