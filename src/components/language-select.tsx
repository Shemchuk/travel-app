import React from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { appActions } from '../store/actions';
import IState from '../store/state';

const LanguageSelect: React.FC<any> = (props: any) => {
  const { language } = props;
  const history = useHistory();
  const location = useLocation();

  // redirect to new translated page when select language from list
  const redirect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;

    // replace two charachters in the start of string (en | ru | by)
    const newPath = location.pathname.replace(/\/../, `/${newLang}`);
    history.replace(newPath);
  };

  return (
    <>
      <select className="lang" value={language} name="lang" id="lang" onChange={redirect}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="be">BE</option>
      </select>
    </>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  language: state.language,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LanguageSelect));
