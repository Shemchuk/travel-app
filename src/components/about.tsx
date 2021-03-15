import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import IState from '../store/state';

const AboutPage: React.FC<any> = (props: any) => {
  const { language } = props;

  return <div>About page [{language}]</div>;
};

const mapStateToProps = (state: IState) => ({
  language: state.language,
});
export default withRouter(connect(mapStateToProps)(AboutPage));
