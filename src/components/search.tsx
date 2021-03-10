import '../css/search.scss';
import React from 'react';
import search_png from '../img/search.png';

const Search: React.FC = () => (
  <div className="header_search">
    <img src={search_png} alt="search" />
    <input type="search" />
  </div>
);

export default Search;
