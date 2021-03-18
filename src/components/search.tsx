/* eslint-disable jsx-a11y/no-autofocus */
import '../css/search.scss';
import React from 'react';
import { connect } from 'react-redux';
import { appActions } from '../store/actions';
import IState from '../store/state';
import search_png from '../img/search.png';

const Search: React.FC = (props: any) => {
  const { setFilter, filterCountry } = props;

  const handleChange = (e: any) => setFilter(e.target.value);
  const handleResetFilter = () => setFilter('');

  return (
    <div className="header_search" id="search">
      <img src={search_png} alt="search" />
      <input type="search" autoFocus value={filterCountry} onChange={handleChange} placeholder="Поиск по стране" />
      <button type="button" className="search_reset_button" onClick={handleResetFilter}>
        <span className="material-icons">clear</span>
      </button>
    </div>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  filterCountry: state.filterCountry,
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
