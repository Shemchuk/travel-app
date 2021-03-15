import React from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { appActions } from '../store/actions';
import IState from '../store/state';
// import Lang from '../models/lang';

const LanguageSelect: React.FC<any> = (props: any) => {
  const { language } = props;
  const history = useHistory();
  const location = useLocation();
  console.log('pathname', location.pathname);

  const redirect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Try change language to: ', event.target.value);
    history.push(location.pathname.replace(/\/../, `/${event.target.value}`));
  };

  return (
    <>
      <select className="lang" value={language} name="lang" id="lang" onChange={redirect}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="by">BY</option>
      </select>
    </>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  language: state.language,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LanguageSelect));
