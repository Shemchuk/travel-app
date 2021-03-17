import '../css/search.scss';
import React from 'react';
import { withRouter } from 'react-router';
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
      <input type="search" value={filterCountry} onChange={handleChange} />
      <button type="button" className="search_reset_button" onClick={handleResetFilter}>
        <span className="material-icons">
          clear
        </span>
      </button>
    </div>
  );
};

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  setFilterCountry: state.filterCountry,
  filterCountry: state.filterCountry,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
