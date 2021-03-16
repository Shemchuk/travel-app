import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import IState from '../store/state';

const AboutPage: React.FC<any> = (props: any) => {
  const { language } = props;

  return (
    <>
    <div>About page [{language}]</div>
      <div className="about-page-wrapper">
        <div className="about-page">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className="about-page-title"> travel app application "travel the world"</h2>
          <span className="about-page-content">
          Данное приложение разработано в рамках курса &emsp;
            <a href="https://rs.school/react/">rs.school rs.school React 2021 Q1</a>
          <br/>
          <br/>
          <a href="https://github.com/Shemchuk/travel-app">GitHub приложения</a>
          <br/>
          <br/>
          <br/>
          Разработчики приложения / RSS. React 2021 Q1. Second task on React course by RS School. Team 54 /
          <br/>
          <br/>
          <a href="https://github.com/Shemchuk">Mikhail Shamchuk</a>
          <br/>
          <a href="https://github.com/durden666">Vladislav Plaksa</a>
          <br/>
          <a href="https://github.com/Andrew-6676">Andrew Shavnev</a>
          <br/>
          <a href="https://github.com/seha1">Sergey Gryzunov</a>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          ©2021
        </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  language: state.language,
});
export default withRouter(connect(mapStateToProps)(AboutPage));
